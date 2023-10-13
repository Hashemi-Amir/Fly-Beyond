import { useEffect } from 'react';
import toast from 'react-hot-toast';
import { useForm } from 'react-hook-form';
import { useLogin } from '../../hooks/queryHooks/useLogin';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

import FLoatingLabelInput from '../../ui/FLoatingLabelInput';
import Btn from '../../ui/Btn';

function LoginForm() {
  const { loginUser, isLoading, isPaused } = useLogin();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onSubmit(data) {
    loginUser(data);
  }

  useEffect(() => {
    isPaused && toast.error('Check your internet connection');
  }, [isPaused]);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex w-full flex-col gap-8"
    >
      <FLoatingLabelInput
        register={register}
        label="username"
        type="text"
        id="username"
        errors={errors?.username}
      />
      <FLoatingLabelInput
        register={register}
        label="password"
        id="password"
        type="password"
        errors={errors?.password}
      />
      <Btn disabled={isLoading} className="mt-3 sm:mt-5" type="submit">
        {isLoading && <AiOutlineLoading3Quarters className="animate-spin" />}
        <span>Login</span>
      </Btn>
    </form>
  );
}

export default LoginForm;
