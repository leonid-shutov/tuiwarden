async (text) => {
  node.timers.clearInterval($.state.spinner);
  $.state.spinner = null;
  $.component.setLabel(text);
  ui.screen.render();
  await node.timers.promises.setTimeout(5000);
  $.component.removeLabel();
  ui.screen.render();
};
