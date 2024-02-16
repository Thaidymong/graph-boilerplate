import ContextType from "src/graphql/ContextType";
import { UsersInput } from "src/types/Users";

export const UpdateUserMutation = async (
  _,
  { id, input }: { id: number; input: UsersInput },
  ctx: ContextType
) => {
  const { firstname, lastname, gender, tel, email, address, country } = input;
  const knex = await ctx.knex.default;

  try {
    const updatedUser = await knex("users")
      .update({
        firstname,
        lastname,
        gender,
        tel,
        email,
        address,
        country,
      })
      .where({ id });

    if (updatedUser > 0) {
      return id;
    } else {
      throw new Error(`User with ID ${id} not found`);
    }
  } catch (error) {
    console.error("Error updating user:", error);
    return null;
  }
};
