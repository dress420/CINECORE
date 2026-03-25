.sidebar {
  width: 220px;
  background: var(--bg2);
  border-right: 1px solid var(--border);
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  height: 100vh;
  overflow: hidden;
}

.logo {
  padding: 20px 16px 14px;
  border-bottom: 1px solid var(--border);
  flex-shrink: 0;
}
.logo-text {
  font-size: 20px;
  font-weight: 800;
  letter-spacing: 2px;
  color: #fff;
}
.logo-text span { color: var(--accent); }
.logo-sub {
  font-size: 9px;
  letter-spacing: 3px;
  color: var(--text4);
  font-family: var(--mono);
  margin-top: 2px;
}

.nav {
  padding: 10px 0;
  flex: 1;
  overflow-y: auto;
}
.nav-section {
  padding: 10px 16px 4px;
  font-size: 9px;
  letter-spacing: 2px;
  color: var(--text4);
  font-family: var(--mono);
}
.nav-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 9px 16px;
  cursor: pointer;
  color: var(--text3);
  font-size: 13px;
  font-weight: 400;
  transition: all .15s;
  border-left: 2px solid transparent;
  text-decoration: none;
}
.nav-item:hover { color: var(--text2); background: var(--bg3); }
.nav-item.active { color: var(--accent); background: var(--bg3); border-left-color: var(--accent); }
.nav-item .icon { font-size: 14px; width: 16px; text-align: center; }

.nav-badge {
  margin-left: auto;
  background: var(--border);
  color: var(--text3);
  font-size: 10px;
  padding: 2px 7px;
  border-radius: 10px;
  font-family: var(--mono);
}
.nav-badge.blue { background: var(--accent-dim); color: var(--accent); }

.sidebar-footer {
  padding: 12px 16px;
  border-top: 1px solid var(--border);
  flex-shrink: 0;
}
.user-pill { display: flex; align-items: center; gap: 8px; }
.user-dot {
  width: 28px; height: 28px;
  background: var(--accent);
  border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  font-size: 11px; font-weight: 700; color: #fff;
}
.user-name { font-size: 12px; color: var(--text3); }
