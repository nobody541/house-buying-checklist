import { useState } from 'react';
import ChecklistItem from './ChecklistItem';

export default function ChecklistCategory({ category, items, onToggle, onNoteChange }) {
  const [expanded, setExpanded] = useState(true);
  const checked = items.filter((i) => i.checked).length;

  return (
    <div className="checklist-category">
      <div className="category-header" onClick={() => setExpanded(!expanded)}>
        <span className="category-toggle">{expanded ? '\u25BC' : '\u25B6'}</span>
        <h3>{category}</h3>
        <span className="category-progress">{checked}/{items.length}</span>
      </div>
      {expanded && (
        <div className="category-items">
          {items.map((item) => (
            <ChecklistItem
              key={item._id || item._localId}
              item={item}
              onToggle={onToggle}
              onNoteChange={onNoteChange}
            />
          ))}
        </div>
      )}
    </div>
  );
}
