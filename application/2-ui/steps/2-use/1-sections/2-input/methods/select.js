() => {
  $.component.focus();
  $.component.style.border.fg = 'green';
  ui.screen.program.showCursor();
  $.moveCursor();
};
