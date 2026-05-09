(event, listener) => {
  if (event === 'data') $.component.on(tui.InputRenderableEvents.INPUT, listener);
};
