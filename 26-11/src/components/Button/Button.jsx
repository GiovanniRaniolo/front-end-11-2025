import "./Button.css";

function Button({ text = "Click me", onClick, className }) {
  return (
    <button className={`btn ${className}`} onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;
