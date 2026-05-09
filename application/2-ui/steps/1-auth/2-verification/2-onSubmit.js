const component = ui.steps.auth.component;

component.input.on(tui.InputRenderableEvents.ENTER, async (master) => {
  try {
    await pm.unlock(master);
    ui.screen.remove(component.container.id);
    $.resolver.resolve();
  } catch {
    component.input.displayError();
  }
});
