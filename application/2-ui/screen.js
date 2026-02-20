const screen = blessed.screen({
  smartCSR: true,
  title: 'Custom Input',
});

screen.program.showCursor();
screen.render();
screen.key(['q', 'C-c'], () => {
  process.exit(0);
});

screen;
