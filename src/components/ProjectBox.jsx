const ProjectBox = (props) => {
    return (
        <li data-color={props.code}>
            <p className="img">
                <img src="images/projects.png" alt=""/>
            </p>
            <h4>
                <span className="a">{props.title}</span>
                <span className="b">{props.year}</span>
            </h4>
        </li>
    )
}

export default ProjectBox;