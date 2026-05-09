async (text) => {
  node.timers.clearInterval($.state.spinner);
  $.state.spinner = null;
  $.component.title = text;
  await node.timers.promises.setTimeout(5000);
  $.component.title = undefined;
};
