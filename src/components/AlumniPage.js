

// import React from 'react';
// import alumniData from './alumni';
// import '../CSS/alumnipage.css';
// import { Mail, Linkedin, Instagram } from 'lucide-react';

// const AlumniCard = ({ name, title, email, linkedin, instagram }) => (
//     <div className="alumni-card">
//         <div className="profile-pic" />
//         <h3>{name}</h3>
//         <p>{title}</p>
//         <div className="contact-icons">
//             <a href={`mailto:${email}`} aria-label={`Email ${name}`}>
//                 <Mail className="icon" />
//             </a>
//             <a href={linkedin} target="_blank" rel="noopener noreferrer" aria-label={`${name}'s LinkedIn profile`}>
//                 <Linkedin className="icon" />
//             </a>
//             <a href={instagram} target="_blank" rel="noopener noreferrer" aria-label={`${name}'s Instagram profile`}>
//                 <Instagram className="icon" />
//             </a>
//         </div>
//     </div>
// );

// const AlumniRow = ({ alumni }) => (
//     <div className="alumni-row">
//         {alumni.map((person, index) => (
//             <AlumniCard
//                 key={index}
//                 name={person.name}
//                 title={person.title}
//                 email={person.email}
//                 linkedin={person.linkedin}
//                 instagram={person.instagram}
//             />
//         ))}
//     </div>
// );

// const AlumniSection = ({ year, alumni }) => {
//     const rows = [];
//     for (let i = 0; i < alumni.length; i += 3) {
//         rows.push(alumni.slice(i, i + 3));
//     }

//     return (
//         <div className="alumni-section">
//             <h2>{year} Graduates</h2>
//             {rows.map((row, index) => (
//                 <AlumniRow key={index} alumni={row} />
//             ))}
//         </div>
//     );
// };

// const AlumniPage = () => (
//     <div className="alumni-page">
//         <h1>IE Mech Alumni Showcase</h1>
//         {Object.entries(alumniData)
//             .sort(([yearA], [yearB]) => yearB - yearA)
//             .map(([year, alumni]) => (
//                 <AlumniSection key={year} year={year} alumni={alumni} />
//             ))}
//     </div>
// );


// export default AlumniPage;

import React from 'react';
import alumniData from './alumni';
import '../CSS/alumnipage.css';
import { Mail, Linkedin, Instagram } from 'lucide-react';

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

const AlumniRow = ({ alumni }) => (
    <div className="alumni-row">
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
);

const AlumniSection = ({ year, alumni }) => {
    const rows = [];
    for (let i = 0; i < alumni.length; i += 3) {
        rows.push(alumni.slice(i, i + 3));
    }

    return (
        <div className="alumni-section">
            <h2>{year} Graduates</h2>
            {rows.map((row, index) => (
                <AlumniRow key={index} alumni={row} />
            ))}
        </div>
    );
};

const AlumniPage = () => (
    <div className="alumni-page">
        <h1>IE Mech Alumni Showcase</h1>
        {Object.entries(alumniData)
            .sort(([yearA], [yearB]) => yearB - yearA)
            .map(([year, alumni]) => (
                <AlumniSection key={year} year={year} alumni={alumni} />
            ))}
    </div>
);

export default AlumniPage;

