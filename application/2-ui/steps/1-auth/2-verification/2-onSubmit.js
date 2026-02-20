const masterInput = ui.steps.auth.component;

masterInput.on('submit', async (master) => {
  try {
    await pm.unlock(master);
    ui.screen.children.forEach((child) => child.destroy());
    $.resolver.resolve();
  } catch {
    masterInput.displayError();
  }
});
