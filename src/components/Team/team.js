import "./team.css";
import Employee from "../Employee";

export const Team = (props) => {
  return (
    (props.employees.length > 0) ? <section
      className="team-box"
      style={{ backgroundColor: props.secondaryColor }}
    >
      <h3 style={{ borderColor: props.primaryColor }}>{props.name}</h3>
      <div className="employees">
        {props.employees.map((employee) => (
          <Employee
            key={employee.name}
            name={employee.name}
            role={employee.cargo}
            image={employee.image}
            headerColor={props.primaryColor}
          />
        ))}
      </div>
    </section>
    : ''
  );
};
