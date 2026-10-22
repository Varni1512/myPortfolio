import React from 'react'

export const SkillBadge = ({ skill }) => {
  return (
    <div className="skill-pill">
      {skill.iconUrl ? (
        <img
          src={skill.iconUrl}
          alt={skill.name}
          className="skill-pill-icon"
          loading="lazy"
          width="18"
          height="18"
        />
      ) : (
        <span className="skill-pill-svg">{skill.icon}</span>
      )}
      <span className="skill-pill-name">{skill.name}</span>
    </div>
  )
}
