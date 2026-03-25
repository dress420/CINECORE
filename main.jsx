.add-modal { max-width: 600px; }

.modal-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.close-btn {
  background: none;
  color: var(--text3);
  font-size: 16px;
  padding: 4px 8px;
}
.close-btn:hover { color: var(--text2); }

.search-results {
  margin-top: 6px;
  background: var(--bg);
  border: 1px solid var(--border);
  border-radius: 8px;
  overflow: hidden;
}
.search-result-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 12px;
  cursor: pointer;
  border-bottom: 1px solid var(--border);
  transition: background .1s;
}
.search-result-item:last-child { border-bottom: none; }
.search-result-item:hover { background: var(--bg3); }
.search-result-item img {
  width: 36px; height: 48px;
  border-radius: 4px; object-fit: cover;
  flex-shrink: 0;
}
.result-no-img {
  width: 36px; height: 48px;
  border-radius: 4px;
  background: var(--bg3);
  display: flex; align-items: center; justify-content: center;
  font-size: 16px; font-weight: 800;
  color: var(--text4);
  flex-shrink: 0;
}
.result-title { font-size: 13px; font-weight: 700; color: var(--text2); }
.result-meta { font-size: 11px; color: var(--text4); margin-top: 2px; }
.search-hint { font-size: 11px; color: var(--text4); margin-top: 6px; }

.selected-film { margin-top: 20px; }
.selected-header {
  display: flex; gap: 14px;
  padding: 14px;
  background: var(--bg);
  border: 1px solid var(--border);
  border-radius: 10px;
  margin-bottom: 16px;
}
.selected-poster {
  width: 60px; height: 84px;
  object-fit: cover;
  border-radius: 6px;
  flex-shrink: 0;
}
.selected-title { font-size: 16px; font-weight: 800; color: var(--text); }
.selected-meta { font-size: 11px; color: var(--text4); margin-top: 2px; }
.selected-rating { font-size: 11px; color: var(--accent); margin-top: 4px; }
.selected-genres { display: flex; gap: 6px; flex-wrap: wrap; margin-top: 8px; }

.form-grid { display: flex; flex-direction: column; gap: 14px; }
.form-group { display: flex; flex-direction: column; gap: 6px; }
.form-group label { font-size: 9px; letter-spacing: 2px; color: var(--text4); }
.form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }

.status-options { display: flex; gap: 6px; flex-wrap: wrap; }
.status-btn {
  background: var(--bg);
  border: 1px solid var(--border2);
  color: var(--text3);
  padding: 6px 12px;
  font-size: 11px;
  border-radius: 6px;
}
.status-btn:hover { border-color: var(--accent); color: var(--text2); }
.status-btn.active { border-color: var(--accent); color: var(--accent); background: var(--accent-dim); }

textarea {
  resize: vertical;
  font-family: var(--sans);
  font-size: 13px;
}
