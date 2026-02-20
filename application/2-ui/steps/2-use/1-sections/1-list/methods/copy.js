async () => {
  const selectedIndex = $.component.selected;
  const name = $.component.getItem(selectedIndex).content;
  const item = $.state.index[name];
  $.startLoading('Copying');
  const password = await pm.getPasswordById(item.id);
  await Clipboard.write(password);
  $.stopLoading('Copied!');
  await node.timers.promises.setTimeout(15000);
  const currentClipboard = await Clipboard.read();
  const isSameValue = password === currentClipboard;
  if (isSameValue) await Clipboard.clear();
};
