import "./team.css"

export const Team = (props) => {


    return (

        <section className="team-box" style={{ backgroundColor: props.secondaryColor }}>
            <h3 style={{ borderColor: props.primaryColor }}>{props.name}</h3>
        </section>
    )
}