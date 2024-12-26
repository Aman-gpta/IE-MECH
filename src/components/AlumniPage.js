import React from 'react';
import alumniData from './alumni'; // Adjusted to use alumni.js
 // Adjust the path as needed
import '../CSS/AlumniPage.css'; // Ensure this file exists

const AlumniCard = ({ name, title }) => (
    <div className="alumni-card">
        <div className="profile-pic" />
        <h3>{name}</h3>
        <p>{title}</p>
        <div className="contact-icons">
            <span className="email-icon">📧</span>
            <span className="linkedin-icon">🔗</span>
        </div>
    </div>
);

const AlumniSection = ({ year, alumni }) => (
    <div className="alumni-section">
        <h2>{year} Graduates</h2>
        <div className="alumni-grid">
            {alumni.map((person, index) => (
                <AlumniCard key={index} name={person.name} title={person.title} />
            ))}
        </div>
    </div>
);

const AlumniPage = () => (
    <div className="alumni-page">
        <h1>Mechanical Engineering Alumni Showcase</h1>
        {Object.entries(alumniData).map(([year, alumni]) => (
            <AlumniSection key={year} year={year} alumni={alumni} />
        ))}
    </div>
);

export default AlumniPage;
