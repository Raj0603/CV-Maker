import "../Certification/Certification.css"
import "../All Css/Button.css"
import "../All Css/Input.css"
import React, { useEffect, useState } from "react";
import { X } from "react-feather";
import { Link } from "react-router-dom"

function Certi(props){

    const section = props.section;
    const information = props.information;

    const [activeInformation, setActiveInformation] = useState(
        information[section[Object.keys(section)[0]]]
      );

    const [activeDetailIndex, setActiveDetailIndex] = useState(0)

    const [certiValues, setCertiValues] = useState({
        name: activeInformation?.details?.name || "",
        nameBody: activeInformation?.details?.nameBody || "",
        date: activeInformation?.details?.date || "",
        skills: activeInformation?.details?.skills || "",
        link: activeInformation?.details?.link || "",
    });

    const handleSubmission = () => {
        section.certi: 
    }

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



    return(
        <>
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
    <input className="input__field" type="text" placeholder=" " defaultValue={certiValues.name} />
    <span className="input__label">Enter Certificate Name</span>
</label>
<span className="Certification-titles">Name of Certifying Agency or Body</span>
<label className="input">
    <input className="input__field" type="text" placeholder=" " defaultValue={certiValues.nameBody} />
    <span className="input__label">eg: Google, Meta</span>
</label>
<span className="Certification-titles">Dates of Obtainment</span>
<label className="input">
    <input className="input__field" type="text" placeholder=" " defaultValue={certiValues.date} />
    <span className="input__label">Date</span>
</label>
<span className="Certification-titles">Experience</span>
<label className="input">
    <input className="input__field" type="text" placeholder=" " defaultValue={certiValues.skills} />
    <span className="input__label">Skills learned/ Experience gained</span>
</label>
<span className="Certification-titles">Certificate Links</span>
<label className="input">
    <input className="input__field" type="text" placeholder=" " defaultValue={certiValues.link} />
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
        </>
    )
}
export default Certi