import ProjectBox from "../ProjectBox.jsx";

const Content3 = () => {
    return (
        <section id="portfolio" className="con3">
            <div className="inner">
                <div className="textBox">
                    <h4>Featured Projects</h4>
                </div>
                <ul className="listBox">
                    <ProjectBox code="ecom" title="E-Commerce Platform" year="2024" />
                    <ProjectBox code="saas" title="SaaS Dashboard" year="2024" />
                    <ProjectBox code="marketing" title="Marketing Site" year="2023" />
                    <ProjectBox code="cms" title="CMS Application" year="2024" />
                    <ProjectBox code="landing" title="Landing Page" year="2023" />
                    <ProjectBox code="analytics" title="Analytics Tool" year="2024" />
                    <ProjectBox code="api" title="Custom API" year="2023" />
                    <ProjectBox code="mobile" title="Mobile Web App" year="2024" />
                    <ProjectBox code="crm" title="CRM Integration" year="2023" />
                </ul>
            </div>
        </section>
    );
};

export default Content3;
