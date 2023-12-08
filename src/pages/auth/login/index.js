// import MessageService from "../../../services/messages/message_service";
import Link from "next/link";
import { useFormik } from "formik";
import {
  loginInitialValues,
  loginValidationSchema,
} from "../../../validations/loginValidation";
import ErrorMessage from "../../../components/ErrorMessage";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

//const id= localStorage.getItem("product_data_id")
const Login = () => {
  const router = useRouter();
  // useEffect(() => {
  //   MessageService.errorMessage("Can");
  // });
  const formik = useFormik({
    initialValues: loginInitialValues,
    validationSchema: loginValidationSchema,
    onSubmit: async (values) => {
      try {
        const response = await axios.post(
          "https://assign-api.piton.com.tr/api/rest/login",
          { email: values.email, password: values.password }
        );
        localStorage.setItem("access_token", response.data.action_login.token);
        if (values.rememberMe) {
          localStorage.setItem("remember_me",values.rememberMe);
        }else{
          localStorage.setItem("remember_me",false);
        }
        toast.success("Giriş Başarılı.");
        router.push("/");
      } catch (error) {
        toast.error("Giriş yapılamadı!");
      }
    },
  });

  return (
    <div className="columns-2 ">
      <img src="/img/Picture.png" alt="Picture" className="w-full h-[100vh]" />

      <div className="flex flex-col items-center sm:p-5 lg:p-10">
        <Link href="/">
          <img src="/img/Logo.png" alt="logo" />
        </Link>
      </div>
      <div className="flex flex-col sm:px-[4rem] lg:px-[8rem]">
        <h1 className="text-[#6b6b87] text-3xl">Welcome back!</h1>
        <h2 className="text-4xl mb-[4rem]">Login to your account</h2>
        <form className="space-y-4 md:space-y-6" onSubmit={formik.handleSubmit}>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              E-mail
            </label>
            <input
              name="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="john@mail.com"
              value={formik.values.email}
              onChange={formik.handleChange}
            />
            {formik.touched.email && formik.errors.email ? (
              <ErrorMessage errorMessage={formik.errors.email} />
            ) : null}
          </div>

          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="••••••••"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={formik.values.password}
              onChange={formik.handleChange}
            />
            {formik.touched.password && formik.errors.password ? (
              <ErrorMessage errorMessage={formik.errors.password} />
            ) : null}
          </div>
          <div className="flex items-center me-4">
            <input
              id="rememberMe"
              type="checkbox"
              value={formik.values.rememberMe}
              onChange={formik.handleChange}
              className="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="rememberMe"
              className="ms-2 text-sm font-medium text-[#6251dd] cursor-pointer dark:text-gray-300"
            >
              Remember Me
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-[#ef6b4a] border-2 text-white focus:ring-2 focus:outline-none  font-medium  text-sm px-5 py-2.5 text-center mb-10 "
          >
            Login
          </button>
        </form>
        <Link
          href="/auth/register"
          type="submit"
          className="w-full bg-white text-[#6251dd] border-2 border-[#6251dd] focus:ring-2 focus:outline-none  font-medium  text-sm px-5 py-2.5 text-center mt-5"
        >
          Register
        </Link>
      </div>
    </div>
  );
};

export default Login;
