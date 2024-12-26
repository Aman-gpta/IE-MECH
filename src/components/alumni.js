import React from 'react';
import '../CSS/alumni.css'; // Add your styles here

const alumniData = {
    2023: [
        { name: 'Alice Johnson', title: 'Mechanical Design Engineer' },
        { name: 'Bob Smith', title: 'Robotics Engineer' },
        { name: 'Charlie Brown', title: 'Aerospace Engineer' },
        { name: 'Dana White', title: 'Energy Systems Engineer' },
        { name: 'Ethan Hunt', title: 'Automotive Engineer' },
        { name: 'Fiona Hill', title: 'Thermal Systems Engineer' },
    ],
    2022: [
        { name: 'Grace Hopper', title: 'Manufacturing Engineer' },
        { name: 'Henry Ford', title: 'Robotics Specialist' },
        { name: 'Isaac Newton', title: 'Structural Engineer' },
        { name: 'Jane Austen', title: 'Material Scientist' },
        { name: 'Kevin Hart', title: 'Aerospace Analyst' },
        { name: 'Laura Palmer', title: 'Automation Engineer' },
    ],
    2021: [
        { name: 'Mark Twain', title: 'Fluid Mechanics Engineer' },
        { name: 'Nancy Drew', title: 'Systems Analyst' },
        { name: 'Oscar Wilde', title: 'Design Engineer' },
        { name: 'Paul Atreides', title: 'Mechatronics Engineer' },
        { name: 'Quincy Adams', title: 'Environmental Engineer' },
        { name: 'Rachel Green', title: 'Product Designer' },
    ],
};

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

export default alumniData;
