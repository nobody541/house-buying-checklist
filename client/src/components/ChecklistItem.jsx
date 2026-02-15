import { useState } from 'react';

export default function ChecklistItem({ item, onToggle, onNoteChange }) {
  const [showNotes, setShowNotes] = useState(false);
  const itemId = item._id || item._localId;

  return (
    <div className={`checklist-item ${item.checked ? 'checked' : ''}`}>
      <div className="item-row">
        <input
          type="checkbox"
          checked={item.checked}
          onChange={() => onToggle(itemId)}
        />
        <span className={`item-title ${item.checked ? 'item-done' : ''}`}>
          {item.title}
        </span>
        <button
          className="btn-notes-toggle"
          onClick={() => setShowNotes(!showNotes)}
          title="Toggle notes"
        >
          {item.notes ? '\uD83D\uDCDD' : '+'}
        </button>
      </div>
      {showNotes && (
        <textarea
          className="item-notes"
          placeholder="Add a note..."
          value={item.notes}
          onChange={(e) => onNoteChange(itemId, e.target.value)}
        />
      )}
    </div>
  );
}
