(text) => {
  const matchingItems = $.state.names.filter((name) => name.toLowerCase().includes(text.toLowerCase()));
  $.component.setItems(matchingItems);
};
