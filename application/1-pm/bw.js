({
  unlock: async (master) => {
    const session = await Shell.exec('bw', ['unlock', '--raw'], { input: master });

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
