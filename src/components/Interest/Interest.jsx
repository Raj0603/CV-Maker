import "./Interest.css"
import "../All Css/Button.css"
import "../All Css/Input.css"

function Interest() {
    return (
        <>

            <div className="in-main">
                <div className="in-heading">
                    Enter Your Interests
                </div>
                <div className="interest-container">
                    <div className="float-child-l">
                        <div className="in-suggestion">
                            <span className="interest-titles">Suggestions</span>
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

                        <div className="in-temp">

                        </div>
                    </div>
                    <div className="float-child-r">
                        <div className="interest-data">

                            <span className="interest-titles" id="interest-name">Achievement</span>
                            <label class="input">
                                <input class="input__field" type="text" placeholder=" " />
                                <span class="input__label">Achievement in your field</span>
                            </label>
                            <span className="interest-titles">Achievement</span>
                            <label class="input">
                                <input class="input__field" type="text" placeholder=" " />
                                <span class="input__label">Achievement in any other field</span>
                            </label>
                            <span className="interest-titles">Achievement</span>
                            <label class="input">
                                <input class="input__field" type="text" placeholder=" " />
                                <span class="input__label">Achievement in any other field</span>
                            </label>
                            <span className="interest-titles">Interest/Hobbies</span>
                            <label class="input">
                                <input class="input__field" type="text" placeholder=" " />
                                <span class="input__label">Eg: Music, Dance</span>
                            </label>
                            <span className="interest-titles">Interest/Hobbies</span>
                            <label class="input">
                                <input class="input__field" type="text" placeholder=" " />
                                <span class="input__label">Eg: Music, Dance</span>
                            </label>
                            <span className="interest-titles">Interest/Hobbies</span>
                            <label class="input">
                                <input class="input__field" type="text" placeholder=" " />
                                <span class="input__label">Eg: Music, Dance</span>
                            </label>
                            {/* <button className="save-changes">Save</button> */}
                            <br />
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
            </div>
        </>
    )
}
export default Interest