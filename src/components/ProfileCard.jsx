import React from "react";
import "./ProfileCard.css";

const ProfileCard = ({ name, title, avatar, skills }) => {
  return (
    <div className="profile-card">
      <img src={avatar} alt={name} className="profile-image" />
      <h2 className="profile-name">{name}</h2>
      <p className="profile-title">{title}</p>
      <div className="profile-skills">
        {skills.map((skill, index) => (
          <span key={index} className="skill">{skill}</span>
        ))}
      </div>
    </div>
  );
};

export default ProfileCard;
