const Button = (props) => {
  const { text, icon, type = 'button', disabled = false, onClick } = props;
  const handleClick = (e) => {
    if (type !== 'submit') e.preventDefault();

    if (onClick) onClick(e);
  };

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={handleClick}
      className={`flex h-10 w-44 items-center  gap-x-2 text-lg text-olive ${icon ? 'border-none hover:text-yellow' : (disabled ? 'border-olive-light bg-olive-light' : 'border-yellow bg-yellow hover:border-olive hover:bg-olive  hover:text-white') + ' justify-center rounded-2xl border-2'}`}
      aria-label={text}
      {...props}
    >
      <span>{text}</span> {icon}
    </button>
  );
};

export default Button;
