import PropTypes from 'prop-types';

const imageMap = {
    ecom: 'https://images.unsplash.com/photo-1657812159075-7f0abd98f7b8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZWNvbXxlbnwwfDB8MHx8fDI%3D',
    saas: 'https://images.unsplash.com/photo-1556155092-490a1ba16284?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2Fhc3xlbnwwfDB8MHx8fDI%3D',
    marketing: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFya2V0aW5nfGVufDB8MHwwfHx8Mg%3D%3D',
    cms: 'https://images.unsplash.com/photo-1583484963886-cfe2bff2945f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y21zfGVufDB8MHwwfHx8Mg%3D%3D',
    landing: 'https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bGFuZGluZyUyMHBhZ2V8ZW58MHwwfDB8fHwy',
    analytics: 'https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YW5hbHl0aWNzfGVufDB8MHwwfHx8Mg%3D%3D',
    api: 'https://images.unsplash.com/photo-1717691449368-ecb097f1f407?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXBpfGVufDB8MHwwfHx8Mg%3D%3D',
    mobile: 'https://images.unsplash.com/photo-1667984390527-850f63192709?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG1vYmlsZSUyMHFyJTIwY29kZXxlbnwwfDB8MHx8fDI%3D',
    crm: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y3JtfGVufDB8MHwwfHx8Mg%3D%3D'
};

const ProjectBox = ({ code, title, year }) => {
    const src = imageMap[code] || imageMap['landing'];

    return (
        <li data-color={code}>
            <p className="img">
                <img src={src} alt={title} />
            </p>
            <h4>
                <span className="a">{title}</span>
                <span className="b">{year}</span>
            </h4>
        </li>
    );
};

ProjectBox.propTypes = {
    code: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
};

export default ProjectBox;
