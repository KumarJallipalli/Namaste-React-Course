import { Link, Outlet } from "react-router-dom"

const About = () => {
    return (
        <div>
            <h1>This is the about page of Foodelivery App</h1>
            <h3>More details will be published soon to the users</h3>

            <Outlet/>
            {/* Please use -> "profile" only here NOT "/profile"
            <Link to={"profile"}>Profile</Link> */}
        </div>
    )
}

export default About