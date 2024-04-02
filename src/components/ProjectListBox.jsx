const ProjectListBox = (props) => {
    return (
        <li>
            <h3>{props.name}</h3>
            <p>{props.category}</p>
            <p>{props.year}</p>
        </li>
    )
}

export default ProjectListBox;