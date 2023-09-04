import "./button.css";

export const Button = (props) => {
  return (
    <div className="button-container">
      <button>{props.children}</button>
    </div>
  );
};
