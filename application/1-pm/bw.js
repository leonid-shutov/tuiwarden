({
  unlock: async (master) => {
    const params = ['unlock', '--raw', '--nointeraction', '--passwordenv', 'BW_PASSWORD'];
    const options = { env: { BW_PASSWORD: master, ...process.env } };
    const session = await Shell.exec('bw', params, options);

    const getItems = async () => {
      const output = await Shell.exec('bw', ['list', 'items', '--session', session]);
      const items = JSON.parse(output);
      return items.map((item) => Obj.pick(item, ['id', 'name']));
    };

    const getPasswordById = (id) => Shell.exec('bw', ['get', 'password', id, '--session', session]);

    const copyPasswordById = (id) => Shell.exec('bw', ['get', 'password', id, '--session', session, '--clipboard']);

    return { getItems, getPasswordById, copyPasswordById };
  },
});
