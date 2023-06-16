import { IUser } from "../interfaces/user.inteface";
import { ObjectSchema } from "yup";
import * as yup from "yup";

const userSchema: ObjectSchema<IUser> = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().required().email("Invalid email"),
  password: yup
    .string()
    .required()
    .min(8, "Minimum 8 caracters")
    .matches(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
      "Password must contain uppercase and lowercase letters, numbers and special characters"
    ),
});

export { userSchema };
