new tui.SelectRenderable(ui.renderer, {
  id: 'list',
  width: 40,
  height: 14,
  options: [...$.items],
  backgroundColor: '#111111',
  focusedBackgroundColor: '#1a1a1a',
  selectedBackgroundColor: '#1e3a5f',
  selectedTextColor: '#ffffff',
  textColor: '#aaaaaa',
  descriptionColor: '#555555',
  selectedDescriptionColor: '#aaaaaa',
  showScrollIndicator: true,
});
