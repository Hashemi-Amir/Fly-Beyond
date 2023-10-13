import LoginForm from '../components/login/LoginForm';

function Login() {
  return (
    <>
      <p className="mb-12 flex items-center justify-center border-b-4 border-primary-500 pb-3 text-2xl font-semibold text-secondary dark:text-stone-200 sm:mb-20 xl:text-4xl">
        Welcome Back
      </p>

      <LoginForm />
    </>
  );
}

export default Login;
