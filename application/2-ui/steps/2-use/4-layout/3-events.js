const { wrapper, list, input } = ui.steps.use;

input.on('data', (text) => list.search(text));

list.on('select', async ({ name }) => {
  const item = list.state.index[name];
  wrapper.startLoading('Copying');
  const password = await pm.getPasswordById(item.id);
  await Clipboard.write(password);
  wrapper.stopLoading('Copied!');
  await node.timers.promises.setTimeout(15000);
  const currentClipboard = await Clipboard.read();
  const isSameValue = password === currentClipboard;
  if (isSameValue) await Clipboard.clear();
});
