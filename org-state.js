(() => {
  try {
    const destroyed = localStorage.getItem('org_destroyed') === '1';
    if (!destroyed) return;
    const style = document.createElement('style');
    style.textContent = 'html,body{background:#000!important} body > *{display:none!important}';
    document.head.appendChild(style);
    const overlay = document.createElement('div');
    overlay.style.position='fixed'; overlay.style.inset='0'; overlay.style.background='#000'; overlay.style.zIndex='2147483647';
    document.body.appendChild(overlay);
  } catch (e) {}
})();

