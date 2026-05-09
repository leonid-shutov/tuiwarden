const frames = ['|', '/', '-', '\\'];
async (text) => {
  if ($.state.spinner !== null) return;

  text = text === undefined ? '' : `${text} `;

  let i = 0;

  $.state.spinner = node.timers.setInterval(() => {
    const frame = frames[i++ % frames.length];
    $.component.title = text + frame;
  }, 50);
};
