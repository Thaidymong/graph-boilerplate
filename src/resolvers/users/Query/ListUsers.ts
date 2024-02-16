import ContextType from "src/graphql/ContextType";

export const GetListUsers = async (_, { id }: { id: number }, ctx: ContextType) => {
  const knex = await ctx.knex.default;

  try {
    const usersList = await knex("users");
    return usersList.map((item) => {
      return {
        ...item,
      };
    });
  } catch (error) {
    console.error("Error fetching user list:", error);
    return null;
  }
};
