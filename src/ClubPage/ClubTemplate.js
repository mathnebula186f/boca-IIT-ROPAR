import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ClubNavbar from "./ClubNavbar";

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

  const { name, logo, description, team, achievements } = clubData;

  return (
    <div className="club-template">
      <ClubNavbar clubName={name} clubLogo={logo} />
      <div className="club-content">
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
        </ul>
        {/* Add other sections or components here */}
      </div>
    </div>
  );
}

export default ClubTemplate;
