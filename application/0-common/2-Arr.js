({
  indexBy: (key, arr) => Object.fromEntries(arr.map((obj) => [obj[key], obj])),
});
