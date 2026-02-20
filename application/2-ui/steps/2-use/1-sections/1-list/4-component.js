blessed.list({
  parent: ui.screen,
  width: 50,
  bottom: 3,
  left: 'center',
  border: 'line',
  keys: false,
  mouse: true,
  items: [...$.state.names],
  style: {
    selected: {
      bg: 'blue',
    },
  },
  scrollable: true,
  alwaysScroll: false,
});
