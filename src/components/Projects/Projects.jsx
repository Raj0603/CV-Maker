import "./Projects.css"
import "../All Css/Button.css"
import "../All Css/Input.css"
import { Link } from "react-router-dom"

function Projects() {
    return (
        <>
        
            <div className="heading">
                Enter Your Project Details
            </div>
            <div className="project-container">
                <div className="float-child-l">

                    <div className="temp">

                    </div>
                </div>
                <div className="float-child-r">
                    <div className="project-data">

                        <span className="project-titles" id="project-name">Title</span>
                        {/* <input className="project-inputs" type="text" placeholder="Enter full Name" /> */}
                        <label class="input">
                            <input class="input__field" type="text" placeholder=" " />
                            <span class="input__label">Enter Project Title</span>
                        </label>
                        <span className="project-titles">Overview</span>
                        <label class="input">
                            <input class="input__field" type="text" placeholder=" " />
                            <span class="input__label">Basic details like why, for whom, etc</span>
                        </label>
                        <span className="project-titles">Imp Point</span>
                        <label class="input">
                            <input class="input__field" type="text" placeholder=" " />
                            <span class="input__label">Functionlity and Creativity of Project</span>
                        </label>
                        <span className="project-titles">Experience</span>
                        <label class="input">
                            <input class="input__field" type="text" placeholder=" " />
                            <span class="input__label">Skills learned/ Experience gained</span>
                        </label>
                        <span className="project-titles">Deployment Links</span>
                        <label class="input">
                            <input class="input__field" type="text" placeholder=" " />
                            <span class="input__label">Project You have Deployed</span>
                        </label>
                        <span className="project-titles">Github</span>
                        <label class="input">
                            <input class="input__field" type="text" placeholder=" " />
                            <span class="input__label">Github Link for Project</span>
                        </label>
                        {/* <button className="save-changes">Save</button> */}
                        <br />
                        <button type="" class="animated-button1" id="save">
                            <span className="span"></span>
                            <span className="span"></span>
                             Save
                            <span className="span"></span>
                            <span className="span"></span>
                        </button>
                    </div>

                    <div className="suggestion">
                        <span className="project-titles">Suggestions</span>
                        <div className="suggestion-box">

                        </div>
                    <Link to="./Education" class="animated-button1" id="Next" type="">
                        <span className="span"></span>
                        <span className="span"></span>
                        <span className="span"></span>
                        <span className="span"></span>
                        Next
                    </Link>
                    </div>

                </div>
            </div>
        </>
    )
}
export default Projects