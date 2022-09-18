import "./Skills.css"
import "../All Css/Button.css"
import "../All Css/Input.css"
import { Link } from "react-router-dom"

function Skills() {
    return (
        <>
        
            <div className="heading">
                Enter Your Skills and Experirnce
            </div>
            <div className="skills-container">
                <div className="float-child-l">

                    <div className="temp">

                    </div>
                </div>
                <div className="float-child-r">
                    <div className="skills-data">

                        <span className="skills-titles" id="skills-name">Title</span>
                        {/* <input className="skills-inputs" type="text" placeholder="Enter full Name" /> */}
                        <label class="input">
                            <input class="input__field" type="text" placeholder=" " />
                            <span class="input__label">Enter skills Title</span>
                        </label>
                        <span className="skills-titles">Overview</span>
                        <label class="input">
                            <input class="input__field" type="text" placeholder=" " />
                            <span class="input__label">Basic details like why, for whom, etc</span>
                        </label>
                        <span className="skills-titles">Imp Point</span>
                        <label class="input">
                            <input class="input__field" type="text" placeholder=" " />
                            <span class="input__label">Functionlity and Creativity of skills</span>
                        </label>
                        <span className="skills-titles">Experience</span>
                        <label class="input">
                            <input class="input__field" type="text" placeholder=" " />
                            <span class="input__label">Skills learned/ Experience gained</span>
                        </label>
                        <span className="skills-titles">Deployment Links</span>
                        <label class="input">
                            <input class="input__field" type="text" placeholder=" " />
                            <span class="input__label">skills You have Deployed</span>
                        </label>
                        <span className="skills-titles">Github</span>
                        <label class="input">
                            <input class="input__field" type="text" placeholder=" " />
                            <span class="input__label">Github Link for skills</span>
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
                        <span className="skills-titles">Suggestions</span>
                        <div className="suggestion-box">

                        </div>
                    <Link to="./Certification" class="animated-button1" id="Next" type="">
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
export default Skills