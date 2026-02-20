const input = blessed.textbox({
  parent: $.container,
  top: 1,
  height: 1,
  width: 50,
  inputOnFocus: true,
  censor: true,
  keys: true,
});

input.focus();

ui.screen.render();

input;
