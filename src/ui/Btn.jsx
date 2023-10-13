function Btn({
  children,
  className,
  variation = 'primary',
  onClick = () => {},
  isActive = false,
  ...rest
}) {
  const style = {
    primary: `rounded-lg bg-primary-500 px-3 py-2 font-semibold text-primary-100 shadow-btn-normal outline-none transition-all ${
      rest?.disabled
        ? 'cursor-not-allowed flex items-center justify-center gap-2 bg-primary-400'
        : 'active:scale-[99%] active:bg-primary-700 active:shadow-btn-active hover:bg-primary-600 focus:bg-primary-600'
    }`,

    iconContainer: `w-8 h-8 rounded-full flex items-center justify-center transition-all ${
      isActive ? 'bg-[#e6e6e6]' : ''
    }`,
  };

  return (
    <button
      onClick={onClick}
      className={`${style[variation]} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}

export default Btn;
