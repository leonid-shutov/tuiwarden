ui.renderer.prependInputHandler((sequence) => {
  if (sequence === '\u001B') {
    $.select('list');
  } else if (sequence === '\r' && $.selected === 'input') {
    $.select('list');
  } else if (['/', 'a', 'i'].includes(sequence) && $.selected !== 'input') {
    $.select('input');
    return true;
  }

  return false;
});
