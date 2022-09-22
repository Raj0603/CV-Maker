import "./Skills.css"
import "../All Css/Button.css"
import "../All Css/Input.css"
import { Link } from "react-router-dom"

function Skills() {
    return (
        <>
            <div className="sk-main">

                <div className="sk-heading">
                    Enter Your Skills and Experience
                </div>
                <div className="skills-container">
                    <div className="float-child-l">
                        <div className="sk-suggestion">
                            <span className="skills-titles">Suggestions</span>
                            <div className="suggestion-box">

                            </div>
                            <button type="" class="animated-button1" id="save">
                                <span className="span"></span>
                                <span className="span"></span>
                                Save
                                <span className="span"></span>
                                <span className="span"></span>
                            </button>

                        </div>


                        <div className="sk-temp">

                        </div>
                    </div>
                    <div className="float-child-r">
                        <div className="skills-data">

                            <span className="skills-titles" id="skills-name">Title</span>
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
            </div>
        </>
    )
}
export default Skills