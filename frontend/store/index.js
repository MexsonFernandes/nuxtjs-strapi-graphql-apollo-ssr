
export const state = () => ({
  users: []
});

export const mutations = {
  SET_USERS(state, res) {
      console.log(res)
    state.users = res.users || [];
  }
};

export const actions = {
  async nuxtServerInit(store, context) {
    store.commit(
      "SET_USERS",
      await context.$strapi.graphql({
        query: `
          query {
            users {
              id,
              username
            }
          }
        `
      })
    );
  }
};
