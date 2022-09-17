import "./About.css"
import aboutImg from "../../assets/About/aboutImg.svg"

function About() {
    return (
        <>
            <div className="heading">
                <h1 className="about-header">
                    About us
                </h1>
            </div>
            <div className="info">
                <img src={aboutImg} alt="was not able to load" width="500px" className="about-img"/>
                    <p className="about-desc">
                        Majority  of the working-class population of the nation ranging from technical level jobs to white collar jobs struggle with proper styling and representation of their skills through the resume, so we build this application to make that job easier and to provide all styling formats thereby giving the best results.
                        People find it difficult to convey their skills and knowledge through proper wording while creating such important documents so a proper platform is necessary to resolve all such problems.
                    </p>
            </div>
        </>
    )
}

export default About