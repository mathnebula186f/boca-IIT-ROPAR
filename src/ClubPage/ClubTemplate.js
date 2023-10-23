import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ClubTemplate.css"
import ClubNavbar from "./ClubNavbar";
import ClubSection from "./ClubSection";
import OurTeam from "./OurTeam";
import ClubFooter from "./ClubFooter";

function ClubTemplate() {
  const { clubName } = useParams();
  const [clubData, setClubData] = useState(null);

  useEffect(() => {
    // Read the JSON file for the club based on the club name
    import(`./ClubData/${clubName}.json`)
      .then((data) => {
        setClubData(data);
      })
      .catch((error) => console.error(error));
  }, [clubName]);

  if (!clubData) {
    // Handle the case when club data is not found
    return <div>Club data not found.</div>;
  }

  const {Name,FieldName,bgColor,LogoSrc, description, Team, InfoHeading,InfoPoints,Images,ClubQoute} = clubData;


  return (
    <div className="club-template">
      <ClubNavbar clubName={Name} clubLogoSrc={LogoSrc} />
      <ClubSection
        clubName={Name}
        clubLogoSrc={LogoSrc}
        InfoHeading={InfoHeading}
        InfoPoints={InfoPoints}
        Images={Images}
        bgColor={bgColor}
        ClubQoute={ClubQoute}
      />
      <OurTeam clubName={Name} Team={Team} />
      <ClubFooter />
      {/* <div className="club-content">
        <h2>{name}</h2>
        <p>{description}</p>
        <h3>Our Team</h3>
        <ul>
          {team.map((member, index) => (
            <li key={index}>
              {member.name} - {member.position}
            </li>
          ))}
        </ul>
        <h3>Achievements</h3>
        <ul>
          {achievements.map((achievement, index) => (
            <li key={index}>{achievement}</li>
          ))}
        </ul> */}
      {/* Add other sections or components here */}
      {/* </div> */}
    </div>
  );
}

export default ClubTemplate;
