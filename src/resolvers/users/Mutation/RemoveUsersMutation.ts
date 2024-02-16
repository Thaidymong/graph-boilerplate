import ContextType from "src/graphql/ContextType";

export const RemoveEmployeeMutation = async (
  _,
  { id }: { id: number },
  ctx: ContextType
) => {
  const knex = await ctx.knex.default;

  try {
    const removedRows = await knex("users").del().where({ id });

    if (removedRows > 0) {
      return id;
    } else {
      throw new Error(`User with ID ${id} not found`);
    }
  } catch (error) {
    console.error("Error removing user:", error);
    return null;
  }
};
