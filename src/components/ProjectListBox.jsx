import PropTypes from 'prop-types';

const ProjectListBox = (props) => {
    return (
        <li>
            <h3>{props.name}</h3>
            <p>{props.category}</p>
            <p>{props.year}</p>
        </li>
    )
}

ProjectListBox.propTypes = {
    name: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
};

export default ProjectListBox;
