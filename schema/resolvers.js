import { UserList } from "./fakeData.js";
export const resolvers = {
  Query: {
    users() {
      return UserList;
    },
  },
};
