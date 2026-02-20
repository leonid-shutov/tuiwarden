({
  session: null,
  unlock: async (master) => (self.session = await pm.bw.unlock(master)),
  getItems: () => self.session.getItems(),
  getPasswordById: (id) => self.session.getPasswordById(id),
  copyPasswordById: (id) => self.session.copyPasswordById(id),
});
