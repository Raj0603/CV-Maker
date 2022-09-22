import "./Education.css"
import "../All Css/Button.css"
import "../All Css/Input.css"
import { Link } from "react-router-dom"

function Education() {
    return (
        <>

            <div className="ed-main">


                <div className="ed-heading">
                    Enter Your Education Details
                </div>
                <div className="education-container">
                    <div className="float-child-l">
                        <div className="ed-suggestion">
                            <span className="education-titles">Suggestions</span>
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

                        <div className="ed-temp">

                        </div>
                    </div>
                    <div className="float-child-r">
                        <div className="education-data">

                            <span className="education-titles" id="education-name">Recent Degree</span>
                            <label class="input">
                                <input class="input__field" type="text" placeholder=" " />
                                <span class="input__label">Eg: B. E. in Information Technology</span>
                            </label>
                            <span className="education-titles">Institute Name</span>
                            <label class="input">
                                <input class="input__field" type="text" placeholder=" " />
                                <span class="input__label">Enter Institute name</span>
                            </label>
                            <span className="education-titles">Duration</span>
                            <label class="input">
                                <input class="input__field" type="text" placeholder=" " />
                                <span class="input__label">Duration of course</span>
                            </label>
                            <span className="education-titles">Education Title</span>
                            <label class="input">
                                <input class="input__field" type="text" placeholder=" " />
                                <span class="input__label">Eg: Diploma/HSC</span>
                            </label>
                            <span className="education-titles">Institute Name</span>
                            <label class="input">
                                <input class="input__field" type="text" placeholder=" " />
                                <span class="input__label">Enter Institute name</span>
                            </label>
                            <span className="education-titles">Duration</span>
                            <label class="input">
                                <input class="input__field" type="text" placeholder=" " />
                                <span class="input__label">Duration of course</span>
                            </label>
                            {/* <button className="save-changes">Save</button> */}
                            <br />
                            <Link to="./Interest" class="animated-button1" id="Next" type="">
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
export default Education