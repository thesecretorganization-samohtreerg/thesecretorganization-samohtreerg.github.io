(() => {
  try {
    const destroyed = localStorage.getItem('org_destroyed') === '1';
    if (!destroyed) return;
    document.open();
    document.write('the organization has been destroyed');
    document.close();
    document.body.style.backgroundColor = '#000';
    document.body.style.color = 'white';
    document.body.style.fontFamily = 'ui-monospace, SFMono-Regular, Menlo, Consolas, "Liberation Mono", monospace';
    document.body.style.height = '100%';
    document.body.style.display = 'flex';
    document.body.style.justifyContent = 'center';
    document.body.style.alignItems = 'center';
    document.body.style.margin = '0';
  } catch (e) {}
})();

