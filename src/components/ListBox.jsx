import PropTypes from 'prop-types';

const contentMap = {
    frontend: [
        'Build interactive UIs with React, Vue, and modern JS frameworks to captivate users.',
        'Employ responsive design, accessibility standards, and performance optimizations.'
    ],
    backend: [
        'Architect scalable server-side applications with Node.js, Django, or Laravel.',
        'Integrate secure RESTful and GraphQL APIs, authentication, and real-time features.'
    ],
    database: [
        'Design robust relational (MySQL, PostgreSQL) and NoSQL (MongoDB, Redis) schemas.',
        'Implement indexing, caching strategies, and backups for high availability and performance.'
    ]
};

const ListBox = ({ code, title, number }) => {
    const paragraphs = contentMap[code] || ['Our expert team delivers tailored services to meet your needs.'];

    return (
        <li className={`box ${code}`}>
            <h2>{title}</h2>
            <h3>{number}</h3>
            <div className="text">
                <h4>{title} done right.</h4>
                {paragraphs.map((text, idx) => <p key={idx}>{text}</p>)}
            </div>
        </li>
    );
};

ListBox.propTypes = {
    code: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
};

export default ListBox;
