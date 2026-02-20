const frames = ['|', '/', '-', '\\'];
async (text) => {
  if ($.state.spinner !== null) return;

  text = text === undefined ? '' : `${text} `;

  let i = 0;

  $.state.spinner = node.timers.setInterval(() => {
    const frame = frames[i++ % frames.length];
    $.component.setLabel(text + frame);
    ui.screen.render();
  }, 50);

  ui.screen.render();
};
