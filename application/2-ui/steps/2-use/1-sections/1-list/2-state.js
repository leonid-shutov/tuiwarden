({
  spinner: null,
  names: $.items.map(({ name }) => name),
  index: Arr.indexBy('name', $.items),
});
