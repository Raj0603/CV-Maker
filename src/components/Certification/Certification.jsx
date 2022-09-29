import "./Certification.css"
import "../All Css/Button.css"
import InputControl from "../InputControl"
import "../All Css/Input.css"
import React, { useEffect, useState } from "react";
import { X } from "react-feather";
import { Link } from "react-router-dom"

function Certification() {

    const section = {
        certi: "certification"
    };

    const [certiInformation, setCertiInformation] = useState({
        [section.certi]: {
            id: section.certi,
            details: [],
        }
    });
    const [activeDetailIndex, setActiveDetailIndex] = useState(0)

    const [certiValues, setCertiValues] = useState({
        name: certiInformation?.details?.name || "",
        nameBody: certiInformation?.details?.nameBody || "",
        date: certiInformation?.details?.date || "",
        skills: certiInformation?.details?.skills || "",
        link: certiInformation?.details?.link || "",
    });

    

    const handleAddNew = () => {
        const details = certiInformation?.details;
        if (!details) return;
        const lastDetail = details.slice(-1)[0];
        if (!Object.keys(lastDetail).length) return;
        details.push({});

        setCertiInformation((prev) => ({
            ...prev,
            [section[certi]]: {
                ...certiInformation[section[certi]],
                details: details
            },
        }))
        setActiveDetailIndex(details?.length - 1);
    };

    const handleDeleteDetail = (index) => {
        const details = certiInformation?.details
            ? [...certiInformation?.details] : "";
        if (!details) return;
        details.splice(index, 1);
        setCertiInformation((prev) => ({
            ...prev,
            [section[certi]]: {
                ...certiInformation[section[certi]],
                details: details,

            },
        }));

        setActiveDetailIndex((prev) => (prev === index ? 0 : prev - 1))
    };

    const handleSubmission = () => {
        section.certi; {
            const tempDetail = {
                name: certiValues.name,
                nameBody: certiValues.nameBody,
                date: certiValues.date,
                skills: certiValues.skills,
                link: certiValues.link
            };
            // const tempDetails = [...certiInformation[section.certi]?.details];
            // tempDetails[activeDetailIndex] = tempDetail;

            setCertiInformation((prev) => ({
                ...prev,
                [section.certi]: {
                    ...prev,
                    [section.certi]: {
                        ...prev[section.certi],
                        details: tempDetail,
                    }
                }
            }
            ));

        }
    }

    useEffect(() => {
        {
            const activeCertif = certiInformation[section[certi]];
            setCertiInformation(activeCertif)
            setActiveDetailIndex(0);
            setCertiValues({
                name: activeCertif?.details
                    ? activeCertif.details[0]?.name || "" : "",
                nameBody: activeCertif?.details
                    ? activeCertif.details[0]?.nameBody || "" : "",
                date: activeCertif?.details
                    ? activeCertif.details[0]?.date || "" : "",
                skills: activeCertif?.details
                    ? activeCertif.details[0]?.skills || "" : "",
                link: activeCertif?.details
                    ? activeCertif.details[0]?.link || "" : "",
            })
        }
    }, [section.certi]);

    useEffect(() => {
        setCertiInformation(certiInformation[section[certi]]);
    }, [certiInformation]);

    useEffect(() => {
        const details = certiInformation?.details;
        if (!details) return;

        const activeCertif = certiInformation[section[certi]]
        setCertiValues({
            name: activeCertif?.details[activeDetailIndex]?.name || "",
            nameBody: activeCertif?.details[activeDetailIndex]?.nameBody || "",
            date: activeCertif?.details[activeDetailIndex]?.date || "",
            skills: activeCertif?.details[activeDetailIndex]?.skills || "",
            link: activeCertif?.details[activeDetailIndex]?.link || "",
        })
    }, [activeDetailIndex]);


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
            <button type="" className="animated-button1" id="save" >
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

            <div className="chips">
                {certiInformation?.details
                    ? certiInformation?.details?.map((index) => (
                        <div
                            className={`"chip" ${activeDetailIndex === index ? styles.active : ""
                                }`}
                            key={Cetificate + index}
                            onClick={() => setActiveDetailIndex(index)}
                        >
                            <p>
                                certificate {index + 1}
                            </p>
                            <X
                                onClick={(event) => {
                                    event.stopPropagation();
                                    handleDeleteDetail(index);
                                }}
                            />
                        </div>
                    ))
                    : ""}

                {certiInformation?.details &&
                    certiInformation?.details?.length > 0 ? (
                    <div className="new" onClick={handleAddNew}>
                        +New
                    </div>
                ) : (
                    ""
                )}
            </div>

            <span className="Certification-titles" id="Certification-name">Name of certificate</span>
            <label className="input">
                <InputControl className="input__field" type="text" placeholder=" " value={certiValues.name} />
                <span className="input__label">Enter Certificate Name</span>
            </label>
            <span className="Certification-titles">Name of Certifying Agency or Body</span>
            <label className="input">
                <InputControl className="input__field" type="text" placeholder=" " value={certiValues.nameBody} onChange={(event) => setCertiValues((prev) => ({...prev}))} />
                <span className="input__label">eg: Google, Meta</span>
            </label>
            <span className="Certification-titles">Dates of Obtainment</span>
            <label className="input">
                <InputControl className="input__field" type="text" placeholder=" " value={certiValues.date} />
                <span className="input__label">Date</span>
            </label>
            <span className="Certification-titles">Experience</span>
            <label className="input">
                <InputControl className="input__field" type="text" placeholder=" " value={certiValues.skills} />
                <span className="input__label">Skills learned/ Experience gained</span>
            </label>
            <span className="Certification-titles">Certificate Links</span>
            <label className="input">
                <InputControl className="input__field" type="text" placeholder=" " value={certiValues.link} />
                <span className="input__label">Link of Certificate</span>
            </label>
            <br />
            <button onClick={handleSubmission}>Save</button>

            <Link to="./Projects" className="animated-button1" id="Next" type="">
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