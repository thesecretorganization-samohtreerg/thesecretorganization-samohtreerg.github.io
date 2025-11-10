(() => {
  try {
    const destroyed = localStorage.getItem('org_destroyed') === '1';
    if (!destroyed) return;
    document.open();
    document.write('');
    document.close();
    document.body.style.backgroundColor = '#000';
  } catch (e) {}
})();

