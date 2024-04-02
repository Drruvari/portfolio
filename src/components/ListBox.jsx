const ListBox = (props) => {
    return (
        <li className={props.code}>
            <h2>{props.title}</h2>
            <h3>{props.number}</h3>
            <div className="text">
                <h4>You have an idea ?<br/>We have the method.</h4>
                <p>There are a thousand and one ways to make a podcast. We help you find yours. Thanks to
                    the editorial and technical expertise of our team, we help you choose the best sound
                    format for your project: the one that will meet your objectives, your desires, and that
                    will make your message shine.</p>
                <p>Editorial construction, duration, style of narration, choice of voices, dressing,
                    technical needs: together, we give shape to your project.</p>
            </div>
        </li>
    )
}

export default ListBox;