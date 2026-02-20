(ch) => {
  const currentText = $.component.getText();
  let updatedText;
  if (ch === '\x7F') updatedText = currentText.slice(0, -1);
  else updatedText = currentText + ch;
  $.component.setText(updatedText);
  $.moveCursor();
  $.ee.emit('data', updatedText);
};
