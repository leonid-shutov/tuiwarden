ui.screen.on('keypress', (ch) => {
  if (ch === '\x1B') {
    $.select('list');
  } else if (ch === '\r' && $.selected === 'input') {
    $.select('list');
  } else if (['/', 'a', 'i'].includes(ch) && $.selected !== 'input') {
    $.select('input');
  } else {
    ui.steps.use.sections[$.selected].key?.(ch);
  }
  ui.screen.render();
});
