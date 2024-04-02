import ProjectBox from "../ProjectBox.jsx";

const Content3 = () => {
    return (
        <section className={"con3"}>
            <div className="inner">
                <div className="textBox">
                    <h4>My Projects</h4>
                </div>
                <ul className="listBox">
                    <ProjectBox code={"a"} title={"Title"} year={"2024"} />
                    <ProjectBox code={"b"} title={"Title"} year={"2024"} />
                    <ProjectBox code={"c"} title={"Title"} year={"2024"} />
                    <ProjectBox code={"d"} title={"Title"} year={"2024"} />
                    <ProjectBox code={"e"} title={"Title"} year={"2024"} />
                    <ProjectBox code={"a"} title={"Title"} year={"2024"} />
                    <ProjectBox code={"b"} title={"Title"} year={"2024"} />
                    <ProjectBox code={"c"} title={"Title"} year={"2024"} />
                    <ProjectBox code={"d"} title={"Title"} year={"2024"} />
                </ul>
            </div>
        </section>
    )
}

export default Content3;