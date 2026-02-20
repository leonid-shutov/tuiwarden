() => {
  $.error.setContent('Incorrect password. Try again.');
  $.error.show();

  $.input.clearValue();
  $.input.focus();
  ui.screen.render();
};
