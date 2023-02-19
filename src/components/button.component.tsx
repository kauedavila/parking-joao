const Button = ({
  children,
  ...props
}: React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>) => {
  return (
    <button {...props} className="button-component">
      {children}
    </button>
  );
};
export default Button;
