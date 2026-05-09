(event, listener) => {
  if (event === 'select') $.component.on(tui.SelectRenderableEvents.ITEM_SELECTED, (_, item) => listener(item));
};
