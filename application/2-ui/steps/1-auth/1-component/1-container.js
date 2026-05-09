const container = new tui.BoxRenderable(ui.renderer, {
  flexDirection: 'column',
  paddingX: 1,
  paddingY: 1,
  gap: 1,
  borderStyle: 'rounded',
});

ui.screen.add(container);

container;
