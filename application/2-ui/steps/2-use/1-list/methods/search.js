(text) => {
  const matchingItems = $.items.filter(({ name }) => name.toLowerCase().includes(text.toLowerCase()));
  $.component.options = matchingItems;
};
