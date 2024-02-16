import ContextType from "src/graphql/ContextType";

export const UserDeatil = async (
  _,
  { id }: { id: number },
  ctx: ContextType
) => {
  const knex = await ctx.knex.default;
  try {
    const user = await knex("users").where({ id }).first();
    return user;
  } catch (error) {
    console.error("Error fetching user list:", error);
    return null;
  }
};
