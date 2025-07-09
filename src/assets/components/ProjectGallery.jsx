import React from 'react'

import { gsap } from "gsap";

gsap.from("h2,h3,h4,h5,h6,p,input,span,img,Link", {
    y: 100,
    opacity: 0,
    duration: 1,
    delay: 0.5,
    ease: "power2.out"
});

const ProjectGallery = ({ projects, mainType, subType, setMainType, setSubType }) => {
  return (
    <div>
      <h2>Filter Projects</h2>

      {/* ตัวกรองประเภทหลัก */}
      <select
        value={mainType}
        onChange={(e) => {
          setMainType(e.target.value);
          setSubType("All"); // reset subType
        }}
      >
        <option value="All">All Types</option>
        <option value="Condo">Condo</option>
        <option value="House">House</option>
        <option value="Hotel">Hotel</option>
      </select>

      {/* ตัวกรองย่อยเฉพาะ House หรือ Condo */}
      {(mainType === "Condo" || mainType === "House") && (
        <select value={subType} onChange={(e) => setSubType(e.target.value)}>
          <option value="All">All Subtypes</option>
          {mainType === "Condo" && (
            <>
              <option value="High Rise">High Rise</option>
              <option value="Low Rise">Low Rise</option>
            </>
          )}
          {mainType === "House" && (
            <>
              <option value="Single House">Single House</option>
              <option value="Housing Project">Housing Project</option>
              <option value="Pool Villa">Pool Villa</option>
            </>
          )}
        </select>
      )}

      {/* แสดงผล */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "16px", marginTop: "24px" }}>
        {projects.map((project) => (
          <div key={project.id} style={{ border: "1px solid #ccc", padding: "8px" }}>
            <img src={project.image} alt={project.name} width="100%" />
            <h3>{project.name}</h3>
            <p>{project.type} {project.subType && `/ ${project.subType}`}</p>
            <p>{project.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectGallery;