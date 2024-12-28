import React from 'react';
import '../CSS/alumni.css'; // Add your styles here

const alumniData = {
    2023: [
        {
            name: 'Alice Johnson',
            title: 'Mechanical Design Engineer',
            email: 'alice.johnson@example.com',
            linkedin: 'https://www.linkedin.com/in/alicejohnson',
            instagram: 'https://www.instagram.com/alicejohnson'
        },
        {
            name: 'Bob Smith',
            title: 'Robotics Engineer',
            email: 'bob.smith@example.com',
            linkedin: 'https://www.linkedin.com/in/bobsmith',
            instagram: 'https://www.instagram.com/bobsmith'
        },
        {
            name: 'Charlie Brown',
            title: 'Aerospace Engineer',
            email: 'charlie.brown@example.com',
            linkedin: 'https://www.linkedin.com/in/charliebrown',
            instagram: 'https://www.instagram.com/charliebrown'
        },
        {
            name: 'Dana White',
            title: 'Energy Systems Engineer',
            email: 'dana.white@example.com',
            linkedin: 'https://www.linkedin.com/in/danawhite',
            instagram: 'https://www.instagram.com/danawhite'
        },
        {
            name: 'Ethan Hunt',
            title: 'Automotive Engineer',
            email: 'ethan.hunt@example.com',
            linkedin: 'https://www.linkedin.com/in/ethanhunt',
            instagram: 'https://www.instagram.com/ethanhunt'
        },
        {
            name: 'Fiona Hill',
            title: 'Thermal Systems Engineer',
            email: 'fiona.hill@example.com',
            linkedin: 'https://www.linkedin.com/in/fionahill',
            instagram: 'https://www.instagram.com/fionahill'
        },
    ],
    2022: [
        {
            name: 'Grace Hopper',
            title: 'Manufacturing Engineer',
            email: 'grace.hopper@example.com',
            linkedin: 'https://www.linkedin.com/in/gracehopper',
            instagram: 'https://www.instagram.com/gracehopper'
        },
        {
            name: 'Henry Ford',
            title: 'Robotics Specialist',
            email: 'henry.ford@example.com',
            linkedin: 'https://www.linkedin.com/in/henryford',
            instagram: 'https://www.instagram.com/henryford'
        },
        {
            name: 'Isaac Newton',
            title: 'Structural Engineer',
            email: 'isaac.newton@example.com',
            linkedin: 'https://www.linkedin.com/in/isaacnewton',
            instagram: 'https://www.instagram.com/isaacnewton'
        },
        {
            name: 'Jane Austen',
            title: 'Material Scientist',
            email: 'jane.austen@example.com',
            linkedin: 'https://www.linkedin.com/in/janeausten',
            instagram: 'https://www.instagram.com/janeausten'
        },
        {
            name: 'Kevin Hart',
            title: 'Aerospace Analyst',
            email: 'kevin.hart@example.com',
            linkedin: 'https://www.linkedin.com/in/kevinhart',
            instagram: 'https://www.instagram.com/kevinhart'
        },
        {
            name: 'Laura Palmer',
            title: 'Automation Engineer',
            email: 'laura.palmer@example.com',
            linkedin: 'https://www.linkedin.com/in/laurapalmer',
            instagram: 'https://www.instagram.com/laurapalmer'
        },
    ],
    2021: [
        {
            name: 'Mark Twain',
            title: 'Fluid Mechanics Engineer',
            email: 'mark.twain@example.com',
            linkedin: 'https://www.linkedin.com/in/marktwain',
            instagram: 'https://www.instagram.com/marktwain'
        },
        {
            name: 'Nancy Drew',
            title: 'Systems Analyst',
            email: 'nancy.drew@example.com',
            linkedin: 'https://www.linkedin.com/in/nancydrew',
            instagram: 'https://www.instagram.com/nancydrew'
        },
        {
            name: 'Oscar Wilde',
            title: 'Design Engineer',
            email: 'oscar.wilde@example.com',
            linkedin: 'https://www.linkedin.com/in/oscarwilde',
            instagram: 'https://www.instagram.com/oscarwilde'
        },
        {
            name: 'Paul Atreides',
            title: 'Mechatronics Engineer',
            email: 'paul.atreides@example.com',
            linkedin: 'https://www.linkedin.com/in/paulatreides',
            instagram: 'https://www.instagram.com/paulatreides'
        },
        {
            name: 'Quincy Adams',
            title: 'Environmental Engineer',
            email: 'quincy.adams@example.com',
            linkedin: 'https://www.linkedin.com/in/quincyadams',
            instagram: 'https://www.instagram.com/quincyadams'
        },
        {
            name: 'Rachel Green',
            title: 'Product Designer',
            email: 'rachel.green@example.com',
            linkedin: 'https://www.linkedin.com/in/rachelgreen',
            instagram: 'https://www.instagram.com/rachelgreen'
        },
    ],
};





const AlumniCard = ({ name, title, email, linkedin, instagram }) => (
    <div className="alumni-card">
        <div className="profile-pic" />
        <h3>{name}</h3>
        <p>{title}</p>
        <div className="contact-icons">
            <a href={`mailto:${email}`} aria-label={`Email ${name}`}>
                <Mail className="icon" />
            </a>
            <a href={linkedin} target="_blank" rel="noopener noreferrer" aria-label={`${name}'s LinkedIn profile`}>
                <Linkedin className="icon" />
            </a>
            <a href={instagram} target="_blank" rel="noopener noreferrer" aria-label={`${name}'s Instagram profile`}>
                <Instagram className="icon" />
            </a>
        </div>
    </div>
);

const AlumniSection = ({ year, alumni }) => (
    <div className="alumni-section">
        <h2>{year} Graduates</h2>
        <div className="alumni-grid">
            {alumni.map((person, index) => (
                <AlumniCard
                    key={index}
                    name={person.name}
                    title={person.title}
                    email={person.email}
                    linkedin={person.linkedin}
                    instagram={person.instagram}
                />
            ))}
        </div>
    </div>
);

const AlumniPage = () => (
    <div className="alumni-page">
        <h1>Mechanical Engineering Alumni Showcase</h1>
        {Object.entries(alumniData)
            .sort(([yearA], [yearB]) => yearB - yearA)
            .map(([year, alumni]) => (
                <AlumniSection key={year} year={year} alumni={alumni} />
            ))}
    </div>
);

export default alumniData;
