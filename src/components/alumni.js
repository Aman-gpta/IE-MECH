
import React from 'react';
import '../CSS/alumni.css'; // Add your styles here


const alumniData = {
    2023: [
        {
            name: 'Alice Johnson',
            title: 'Mechanical Design Engineer',
            email: 'alice.johnson@example.com',
            linkedin: 'https://www.linkedin.com/in/alicejohnson',
            instagram: 'https://www.instagram.com/alicejohnson',
            profilePic: 'Event_2',
        },
        {
            name: 'Bob Smith',
            title: 'Robotics Engineer',
            email: 'bob.smith@example.com',
            linkedin: 'https://www.linkedin.com/in/bobsmith',
            instagram: 'https://www.instagram.com/bobsmith',
            profilePic: 'Event_3',
        },
        {
            name: 'Charlie Brown',
            title: 'Aerospace Engineer',
            email: 'charlie.brown@example.com',
            linkedin: 'https://www.linkedin.com/in/charliebrown',
            instagram: 'https://www.instagram.com/charliebrown',
            profilePic: 'https://example.com/images/charlie.jpg',
        },
        {
            name: 'Dana White',
            title: 'Energy Systems Engineer',
            email: 'dana.white@example.com',
            linkedin: 'https://www.linkedin.com/in/danawhite',
            instagram: 'https://www.instagram.com/danawhite',
            profilePic: 'https://example.com/images/dana.jpg',
        },
        {
            name: 'Ethan Hunt',
            title: 'Automotive Engineer',
            email: 'ethan.hunt@example.com',
            linkedin: 'https://www.linkedin.com/in/ethanhunt',
            instagram: 'https://www.instagram.com/ethanhunt',
            profilePic: 'https://example.com/images/ethan.jpg',
        },
        {
            name: 'Fiona Hill',
            title: 'Thermal Systems Engineer',
            email: 'fiona.hill@example.com',
            linkedin: 'https://www.linkedin.com/in/fionahill',
            instagram: 'https://www.instagram.com/fionahill',
            profilePic: 'https://example.com/images/fiona.jpg',
        },
    ],
    2022: [
        {
            name: 'Grace Hopper',
            title: 'Manufacturing Engineer',
            email: 'grace.hopper@example.com',
            linkedin: 'https://www.linkedin.com/in/gracehopper',
            instagram: 'https://www.instagram.com/gracehopper',
            profilePic: 'https://example.com/images/grace.jpg',
        },
        {
            name: 'Henry Ford',
            title: 'Robotics Specialist',
            email: 'henry.ford@example.com',
            linkedin: 'https://www.linkedin.com/in/henryford',
            instagram: 'https://www.instagram.com/henryford',
            profilePic: 'https://example.com/images/henry.jpg',
        },
        {
            name: 'Isaac Newton',
            title: 'Structural Engineer',
            email: 'isaac.newton@example.com',
            linkedin: 'https://www.linkedin.com/in/isaacnewton',
            instagram: 'https://www.instagram.com/isaacnewton',
            profilePic: 'https://example.com/images/isaac.jpg',
        },
        {
            name: 'Jane Austen',
            title: 'Material Scientist',
            email: 'jane.austen@example.com',
            linkedin: 'https://www.linkedin.com/in/janeausten',
            instagram: 'https://www.instagram.com/janeausten',
            profilePic: 'https://example.com/images/jane.jpg',
        },
        {
            name: 'Kevin Hart',
            title: 'Aerospace Analyst',
            email: 'kevin.hart@example.com',
            linkedin: 'https://www.linkedin.com/in/kevinhart',
            instagram: 'https://www.instagram.com/kevinhart',
            profilePic: 'https://example.com/images/kevin.jpg',
        },
        {
            name: 'Laura Palmer',
            title: 'Automation Engineer',
            email: 'laura.palmer@example.com',
            linkedin: 'https://www.linkedin.com/in/laurapalmer',
            instagram: 'https://www.instagram.com/laurapalmer',
            profilePic: 'https://example.com/images/laura.jpg',
        },
    ],
    2021: [
        {
            name: 'Mark Twain',
            title: 'Fluid Mechanics Engineer',
            email: 'mark.twain@example.com',
            linkedin: 'https://www.linkedin.com/in/marktwain',
            instagram: 'https://www.instagram.com/marktwain',
            profilePic: 'https://example.com/images/mark.jpg',
        },
        {
            name: 'Nancy Drew',
            title: 'Systems Analyst',
            email: 'nancy.drew@example.com',
            linkedin: 'https://www.linkedin.com/in/nancydrew',
            instagram: 'https://www.instagram.com/nancydrew',
            profilePic: 'https://example.com/images/nancy.jpg',
        },
        {
            name: 'Oscar Wilde',
            title: 'Design Engineer',
            email: 'oscar.wilde@example.com',
            linkedin: 'https://www.linkedin.com/in/oscarwilde',
            instagram: 'https://www.instagram.com/oscarwilde',
            profilePic: 'https://example.com/images/oscar.jpg',
        },
        {
            name: 'Paul Atreides',
            title: 'Mechatronics Engineer',
            email: 'paul.atreides@example.com',
            linkedin: 'https://www.linkedin.com/in/paulatreides',
            instagram: 'https://www.instagram.com/paulatreides',
            profilePic: 'https://example.com/images/paul.jpg',
        },
        {
            name: 'Quincy Adams',
            title: 'Environmental Engineer',
            email: 'quincy.adams@example.com',
            linkedin: 'https://www.linkedin.com/in/quincyadams',
            instagram: 'https://www.instagram.com/quincyadams',
            profilePic: 'https://example.com/images/quincy.jpg',
        },
        {
            name: 'Rachel Green',
            title: 'Product Designer',
            email: 'rachel.green@example.com',
            linkedin: 'https://www.linkedin.com/in/rachelgreen',
            instagram: 'https://www.instagram.com/rachelgreen',
            profilePic: 'https://example.com/images/rachel.jpg',
        },
    ],
};








const AlumniCard = ({ name, title, email, linkedin, instagram, profilePic }) => (
    <div className="alumni-card">
        <img
            src={profilePic}
            alt={`${name}'s profile`}
            className="profile-pic"
            style={{
                width: '200px',
                height: '200px',
                objectFit: 'cover',
                display: 'block'
            }}
        />
        
        <img src={profilePic} alt={`${name}'s profile`} className="profile-pic" />
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
                    profilePic={person.profilePic}
                />
            ))}
        </div>
    </div>
);

export default alumniData;

