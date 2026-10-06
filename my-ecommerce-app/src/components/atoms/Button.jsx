const Button = ({ children, onClick, variant = "primary" }) => (
  <button className={`btn btn-${variant}`} onClick={onClick}>
    {children}
  </button>
);

export default Button;
