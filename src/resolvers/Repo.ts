const Repo = {
  developer: (parent, args, { db }, info): {} => {
    const developerExists: number = db.users.findIndex(
      (x) => x.id === parent.developer
    );
    if (developerExists === -1) {
      throw new Error("Developer doesnot exist");
    }
    return db.users[developerExists];
  },
};

export { Repo as default };
