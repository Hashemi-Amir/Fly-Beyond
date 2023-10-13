import { useState } from 'react';
import { HiEye, HiEyeSlash } from 'react-icons/hi2';

function FLoatingLabelInput({ label, id, type, register, errors = false }) {
  const [inputType, setInputType] = useState(type);

  //NOTE: this function only will be called for password instance of this component
  function handlePassVisibility() {
    setInputType(inputType === 'password' ? 'text' : 'password');
  }

  return (
    <div className="relative">
      <input
        {...register(id, {
          required: {
            value: true,
            message: 'This field is required',
          },
          minLength: {
            value: 4,
            message: 'Must be at least 4 characters long',
          },
        })}
        id={id}
        name={id}
        autoComplete="off"
        type={inputType}
        placeholder={label}
        className={`peer h-10 w-full border-b-2 border-gray-400/60 bg-transparent text-gray-900 placeholder-transparent focus:border-primary-500 focus:outline-none dark:text-gray-300 lg:text-lg ${
          errors ? 'border-brand-300' : ''
        }`}
      />
      <label
        htmlFor={label}
        className="absolute -top-4 left-0 text-sm text-gray-800 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-600 peer-autofill:-top-4 peer-autofill:text-sm peer-autofill:text-gray-800 peer-focus:-top-4 peer-focus:text-sm peer-focus:text-primary-500 dark:text-gray-100 peer-placeholder-shown:dark:text-gray-200 peer-autofill:dark:text-gray-300 peer-focus:dark:text-primary-500"
      >
        {label}
      </label>
      {errors && (
        <p className="mt-1 text-xs text-brand-300">{errors.message}</p>
      )}

      {type === 'password' &&
        (inputType === 'password' ? (
          <HiEyeSlash
            className="absolute right-1 top-3 cursor-pointer dark:text-gray-300"
            onClick={handlePassVisibility}
          />
        ) : (
          <HiEye
            className="absolute right-1 top-3 cursor-pointer dark:text-gray-300"
            onClick={handlePassVisibility}
          />
        ))}
    </div>
  );
}

export default FLoatingLabelInput;
