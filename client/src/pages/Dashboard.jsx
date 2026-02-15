import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import api from '../api';
import { useAuth } from '../context/AuthContext';
import ChecklistCategory from '../components/ChecklistCategory';

const LOCAL_STORAGE_KEY = 'house-buyer-checklist';

export default function Dashboard() {
  const { user } = useAuth();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const saveTimeout = useRef(null);

  // Assign stable local IDs to items that lack _id (guest/defaults mode)
  const addLocalIds = (itemList) =>
    itemList.map((item, idx) => item._id ? item : { ...item, _localId: item._localId || `local-${idx}` });

  useEffect(() => {
    if (user) {
      // Logged in: fetch from API
      api.get('/checklist')
        .then((res) => setItems(res.data.items))
        .catch((err) => console.error('Failed to load checklist', err))
        .finally(() => setLoading(false));
    } else {
      // Guest: load from localStorage or fetch defaults from API
      const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (saved) {
        try {
          setItems(addLocalIds(JSON.parse(saved)));
          setLoading(false);
        } catch {
          loadDefaults();
        }
      } else {
        loadDefaults();
      }
    }
  }, [user]);

  const loadDefaults = () => {
    api.get('/checklist/defaults')
      .then((res) => {
        const withIds = addLocalIds(res.data.items);
        setItems(withIds);
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(withIds));
      })
      .catch((err) => console.error('Failed to load defaults', err))
      .finally(() => setLoading(false));
  };

  const saveChecklist = (updatedItems) => {
    if (saveTimeout.current) clearTimeout(saveTimeout.current);
    saveTimeout.current = setTimeout(() => {
      if (user) {
        api.put('/checklist', { items: updatedItems }).catch(console.error);
      } else {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedItems));
      }
    }, 500);
  };

  const handleToggle = (itemId) => {
    const updated = items.map((item) => {
      const id = item._id || item._localId;
      return id === itemId ? { ...item, checked: !item.checked } : item;
    });
    setItems(updated);
    saveChecklist(updated);
  };

  const handleNoteChange = (itemId, notes) => {
    const updated = items.map((item) => {
      const id = item._id || item._localId;
      return id === itemId ? { ...item, notes } : item;
    });
    setItems(updated);
    saveChecklist(updated);
  };

  const handleReset = async () => {
    if (!window.confirm('Reset your checklist to defaults? All progress will be lost.')) return;
    try {
      if (user) {
        const res = await api.post('/checklist/reset');
        setItems(res.data.items);
      } else {
        const res = await api.get('/checklist/defaults');
        const withIds = addLocalIds(res.data.items);
        setItems(withIds);
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(withIds));
      }
    } catch (err) {
      console.error('Failed to reset', err);
    }
  };

  if (loading) return <div className="loading">Loading checklist...</div>;

  // Group items by category
  const categories = [];
  const categoryMap = {};
  for (const item of items) {
    if (!categoryMap[item.category]) {
      categoryMap[item.category] = [];
      categories.push(item.category);
    }
    categoryMap[item.category].push(item);
  }

  const totalItems = items.length;
  const checkedItems = items.filter((i) => i.checked).length;
  const progressPercent = totalItems > 0 ? Math.round((checkedItems / totalItems) * 100) : 0;

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h2>Your Checklist</h2>
        <button onClick={handleReset} className="btn btn-outline btn-sm">Reset to Defaults</button>
      </div>

      {!user && (
        <div className="guest-banner">
          Your progress is saved in this browser only.{' '}
          <Link to="/register">Create an account</Link> to save it permanently.
        </div>
      )}

      <div className="progress-bar-container">
        <div className="progress-bar" style={{ width: `${progressPercent}%` }} />
      </div>
      <p className="progress-text">{checkedItems} of {totalItems} completed ({progressPercent}%)</p>

      {categories.map((cat) => (
        <ChecklistCategory
          key={cat}
          category={cat}
          items={categoryMap[cat]}
          onToggle={handleToggle}
          onNoteChange={handleNoteChange}
        />
      ))}
    </div>
  );
}
