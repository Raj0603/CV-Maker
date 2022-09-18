import "./PersonalInfo.css"
import "../All Css/Button.css"
import "../All Css/Input.css"

function PersonalInfo() {
    return (
        <>
            <div className="ps-container">
                <div className="float-child-l">

                    <div className="temp">

                    </div>
                </div>
                <div className="float-child-r">
                    <div className="info-data">

                        <span className="info-titles" id="info-name">Name</span>
                        {/* <input className="info-inputs" type="text" placeholder="Enter full Name" /> */}
                        <label class="input">
                            <input class="input__field" type="text" placeholder=" " />
                            <span class="input__label">Enter your Name</span>
                        </label>
                        <span className="info-titles">Contact No.</span>
                        <label class="input">
                            <input class="input__field" type="text" placeholder=" " />
                            <span class="input__label">Enter mobile No</span>
                        </label>
                        <span className="info-titles">Mail Id</span>
                        <label class="input">
                            <input class="input__field" type="text" placeholder=" " />
                            <span class="input__label">Enter Professional Mail</span>
                        </label>
                        <span className="info-titles">LinkedIn</span>
                        <label class="input">
                            <input class="input__field" type="text" placeholder=" " />
                            <span class="input__label">Enter LinkedIn Account</span>
                        </label>
                        <span className="info-titles">Github</span>
                        <label class="input">
                            <input class="input__field" type="text" placeholder=" " />
                            <span class="input__label">Enter Github Account</span>
                        </label>
                        <span className="info-titles">Other Links</span>
                        <label class="input">
                            <input class="input__field" type="text" placeholder=" " />
                            <span class="input__label">Any other work</span>
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
                        <span className="info-titles">Suggestions</span>
                        <div className="suggestion-box">

                        </div>
                    <button class="animated-button1" id="Next" type="">
                        <span className="span"></span>
                        <span className="span"></span>
                        <span className="span"></span>
                        <span className="span"></span>
                        Next
                    </button>
                    </div>

                </div>
            </div>
        </>
    )
}
export default PersonalInfo