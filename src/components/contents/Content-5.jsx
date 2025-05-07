import ProjectListBox from "../ProjectListBox.jsx";

const Content5 = () => {
    return (
        <section className="con5">
            <div className="inner">
                <div className="mainTextBox">
                    <h2>Other Projects</h2>
                    <ul className="listBox">
                        <ProjectListBox name="Amazon Data Analysis" category="Data" year="2025" />
                        <ProjectListBox name="Arcon" category="Management" year="2025" />
                        <ProjectListBox name="Beautybooks" category="Beauty" year="2025" />
                        <ProjectListBox name="Datastake" category="Analytics" year="2025" />
                        <ProjectListBox name="Paged" category="Publishing" year="2025" />
                        <ProjectListBox name="Simplitime" category="Scheduling" year="2025" />
                        <ProjectListBox name="Whiteboxed" category="CRE Broker Platform" year="2025" />
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Content5;
