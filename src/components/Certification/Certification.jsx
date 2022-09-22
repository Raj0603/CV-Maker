import "./Certification.css"
import "../All Css/Button.css"
import "../All Css/Input.css"
import { Link } from "react-router-dom"

function Certification() {
    return (
        <>

            <div className="ce main">

                <div className="ce-heading">
                    Enter Your Certification Details
                </div>
                <div className="certification-container">
                    <div className="float-child-l">

                        <div className="ce-suggestion">
                            <span className="Certification-titles">Suggestions</span>
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
                        <div className="ce-temp">

                        </div>
                    </div>
                    <div className="float-child-r">
                        <div className="Certification-data">

                            <span className="Certification-titles" id="Certification-name">Title</span>
                            {/* <input className="Certification-inputs" type="text" placeholder="Enter full Name" /> */}
                            <label class="input">
                                <input class="input__field" type="text" placeholder=" " />
                                <span class="input__label">Enter Certificate Title</span>
                            </label>
                            <span className="Certification-titles">Duration</span>
                            <label class="input">
                                <input class="input__field" type="text" placeholder=" " />
                                <span class="input__label">Duration of completion</span>
                            </label>
                            {/* <span className="Certification-titles">Imp Point</span>
                        <label class="input">
                            <input class="input__field" type="text" placeholder=" " />
                            <span class="input__label">Functionlity and Creativity of Certification</span>
                        </label> */}
                            <span className="Certification-titles">Experience</span>
                            <label class="input">
                                <input class="input__field" type="text" placeholder=" " />
                                <span class="input__label">Skills learned/ Experience gained</span>
                            </label>
                            <span className="Certification-titles">Certificate Links</span>
                            <label class="input">
                                <input class="input__field" type="text" placeholder=" " />
                                <span class="input__label">Link of Certificate</span>
                            </label>
                            {/* <span className="Certification-titles">Github</span>
                        <label class="input">
                            <input class="input__field" type="text" placeholder=" " />
                            <span class="input__label">Github Link for Certification</span>
                        </label> */}
                            {/* <button className="save-changes">Save</button> */}
                            <br />
                            <Link to="./Projects" class="animated-button1" id="Next" type="">
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
export default Certification