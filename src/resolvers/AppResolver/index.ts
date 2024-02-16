import { GraphQLUpload } from "graphql-upload-minimal";
import { CreateTestMutation } from "../test/Mutation/CreateTestMutation";
import { UpdateTestMutation } from "../test/Mutation/UpdateTestMutation";
import { TestDetailQuery } from "../test/Query/TestDetailQuery";
import { TestListQuery } from "../test/Query/TestListQuery";
import { CreateUsersMutation } from "../users/Mutation/CreateUsersMuataion";
import { RemoveEmployeeMutation } from "../users/Mutation/RemoveUsersMutation";
import { UpdateUserMutation } from "../users/Mutation/UpdateUserMutatin";
import { GetListUsers } from "../users/Query/ListUsers";
import { UserDeatil } from "../users/Query/UserDetail";

const AppResolver = [
  {
    Query: {
      testDetail: TestDetailQuery,
      testList: TestListQuery,
      listAllUsers: GetListUsers,
      user: UserDeatil,
    },
    Upload: GraphQLUpload,
    Mutation: {
      createTest: CreateTestMutation,
      updateTest: UpdateTestMutation,
      createUserMutation: CreateUsersMutation,
      updateUserMutation: UpdateUserMutation,
      removeUserMutation: RemoveEmployeeMutation,
    },
  },
];

export default AppResolver;
