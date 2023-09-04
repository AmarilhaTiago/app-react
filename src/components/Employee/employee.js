import "./employee.css";

export const Employee = ({name, image, role, headerColor}) => {
  return (
    <section className="employee">
      <div className="header" style={{ backgroundColor: headerColor }}>
        <img src={image} alt={name} />
      </div>
      <div className="footer">
        <h4>{name}</h4>
        <h5>{role}</h5>
      </div>
    </section>
  );
};