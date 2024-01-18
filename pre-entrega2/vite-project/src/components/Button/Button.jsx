
const Button = ({ children, className = "", onClick }) => {

  return (
    <button
        onClick={onClick}
        className={` bg-amber-300 rounded flex items-center py-2 px-4 text-center font-semibold my-4 ${className}`}
    >{children}
    </button>
  );
};

export default Button;
