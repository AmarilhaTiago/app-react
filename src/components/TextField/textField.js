import "./textField.css";

export const TextField = (props) => {
  
  const onType = (event) => {
    props.onChangex(event.target.value);
  }

  return (
    <div className="text-field">
      <label>
        {props.label}
      </label>
      <input value={props.val} onChange={onType} required={props.obrigatory} placeholder={`${props.placeholder}...`}/>
    </div>
  );
};
