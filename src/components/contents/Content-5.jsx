import ProjectListBox from "../ProjectListBox.jsx";

const Content5 = () => {
    return (
        <section className="con5">
            <div className="inner">
                <div className="mainTextBox">
                    <h2>Other Projects</h2>
                    <ul className="listBox">
                        <ProjectListBox name={"Daebang"} category={"Industry"} year={"2024"}/>
                        <ProjectListBox name={"THE Dopda"} category={"Platform"} year={"2024"}/>
                        <ProjectListBox name={"Musign"} category={"Agency"} year={"2024"}/>
                        <ProjectListBox name={"Y .studio"} category={"Agency"} year={"2024"}/>
                        <ProjectListBox name={"Crew a la Mode"} category={"Agency"} year={"2024"}/>
                        <ProjectListBox name={"Hanhwa"} category={"Chemical"} year={"2024"}/>
                        <ProjectListBox name={"Phomain"} category={"vietnamese restaurant"} year={"2024"}/>
                    </ul>
                    <div className="imgBox box">
                        <img src="../../assets/images/img0.jpg" alt=""/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Content5;