import ContextType from "src/graphql/ContextType";
import { UsersInput } from "src/types/Users";

export const CreateUsersMutation = async (
  _,
  { input }: { input: UsersInput },
  ctx: ContextType
) => {
  const { firstname, lastname, gender, tel, email, address, country } = input;
  const knex = await ctx.knex.default;

  try {
    const [userId] = await knex("users").insert({
      firstname,
      lastname,
      gender,
      tel,
      email,
      address,
      country,
    });

    return userId;
  } catch (error) {
    console.error("Error creating user:", error);
    return null;
  }
};
