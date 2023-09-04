import "./dropdown.css";

export const Dropdown = (props) => {
  return (
    <section className="dropdown">
      <div className="dropdown-box">
        <label>{props.label}</label>
        <select onChange={event => props.onChangex(event.target.value)} required={props.obrigatory} value={props.value}>
          {props.items.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>
      </div>
    </section>
  );
};
