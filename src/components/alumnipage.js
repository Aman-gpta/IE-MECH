 import React from 'react';
import '../CSS/alumni.css';



const alumniData = [
    // Year 2023
    { name: "Alice Johnson", photo: "/placeholder.svg?height=200&width=200", email: "alice@example.com", linkedin: "linkedin.com/in/alice", year: 2023, title: "Mechanical Design Engineer" },
    { name: "Bob Smith", photo: "/placeholder.svg?height=200&width=200", email: "bob@example.com", linkedin: "linkedin.com/in/bob", year: 2023, title: "Robotics Engineer" },
    { name: "Charlie Brown", photo: "/placeholder.svg?height=200&width=200", email: "charlie@example.com", linkedin: "linkedin.com/in/charlie", year: 2023, title: "Aerospace Engineer" },
    { name: "Diana Ross", photo: "/placeholder.svg?height=200&width=200", email: "diana@example.com", linkedin: "linkedin.com/in/diana", year: 2023, title: "Automotive Engineer" },
    { name: "Ethan Hunt", photo: "/placeholder.svg?height=200&width=200", email: "ethan@example.com", linkedin: "linkedin.com/in/ethan", year: 2023, title: "Manufacturing Engineer" },
    { name: "Fiona Apple", photo: "/placeholder.svg?height=200&width=200", email: "fiona@example.com", linkedin: "linkedin.com/in/fiona", year: 2023, title: "Mechatronics Engineer" },
    // Year 2022
    { name: "George Clooney", photo: "/placeholder.svg?height=200&width=200", email: "george@example.com", linkedin: "linkedin.com/in/george", year: 2022, title: "HVAC Engineer" },
    { name: "Hannah Montana", photo: "/placeholder.svg?height=200&width=200", email: "hannah@example.com", linkedin: "linkedin.com/in/hannah", year: 2022, title: "Biomechanical Engineer" },
    { name: "Ian McKellen", photo: "/placeholder.svg?height=200&width=200", email: "ian@example.com", linkedin: "linkedin.com/in/ian", year: 2022, title: "Materials Engineer" },
    { name: "Julia Roberts", photo: "/placeholder.svg?height=200&width=200", email: "julia@example.com", linkedin: "linkedin.com/in/julia", year: 2022, title: "CAD/CAM Specialist" },
    { name: "Kevin Bacon", photo: "/placeholder.svg?height=200&width=200", email: "kevin@example.com", linkedin: "linkedin.com/in/kevin", year: 2022, title: "Thermal Engineer" },
    { name: "Laura Dern", photo: "/placeholder.svg?height=200&width=200", email: "laura@example.com", linkedin: "linkedin.com/in/laura", year: 2022, title: "Acoustical Engineer" },
    // Year 2021
    { name: "Michael Jordan", photo: "/placeholder.svg?height=200&width=200", email: "michael@example.com", linkedin: "linkedin.com/in/michael", year: 2021, title: "Fluid Dynamics Engineer" },
    { name: "Nancy Drew", photo: "/placeholder.svg?height=200&width=200", email: "nancy@example.com", linkedin: "linkedin.com/in/nancy", year: 2021, title: "Structural Engineer" },
    { name: "Oscar Wilde", photo: "/placeholder.svg?height=200&width=200", email: "oscar@example.com", linkedin: "linkedin.com/in/oscar", year: 2021, title: "Nanotechnology Engineer" },
    { name: "Penelope Cruz", photo: "/placeholder.svg?height=200&width=200", email: "penelope@example.com", linkedin: "linkedin.com/in/penelope", year: 2021, title: "Control Systems Engineer" },
    { name: "Quentin Tarantino", photo: "/placeholder.svg?height=200&width=200", email: "quentin@example.com", linkedin: "linkedin.com/in/quentin", year: 2021, title: "Mechatronics Engineer" },
    { name: "Rachel Green", photo: "/placeholder.svg?height=200&width=200", email: "rachel@example.com", linkedin: "linkedin.com/in/rachel", year: 2021, title: "Automation Engineer" },
];

const AlumniMemberCard = ({ member }) => (
    <div className="alumni-card">
        <div className="card-content">
            <div className="avatar-container">
                <img src={member.photo} alt={member.name} className="avatar" />
            </div>
            <div className="text-center">
                <h3 className="alumni-name">{member.name}</h3>
                <p className="alumni-title">{member.title}</p>
            </div>
            <div className="contact-links">
                <a href={`mailto:${member.email}`} className="contact-link" aria-label="Email">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                </a>
                <a href={`https://${member.linkedin}`} target="_blank" rel="noopener noreferrer" className="contact-link" aria-label="LinkedIn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
                </a>
            </div>
        </div>
    </div>
);

const YearSection = ({ year, members }) => (
    <section className="year-section">
        <h2 className="year-title">
            {year} Graduates
        </h2>
        <div className="alumni-grid">
            {members.map((member, index) => (
                <AlumniMemberCard key={index} member={member} />
            ))}
        </div>
    </section>
);

const AlumniPage = () => {
    const years = [2023, 2022, 2021];

    return (
        <div className="alumni-page">
            <div className="container">
                <h1 className="page-title">
                    Mechanical Engineering Alumni Showcase
                </h1>
                {years.map(year => (
                    <YearSection
                        key={year}
                        year={year}
                        members={alumniData.filter(member => member.year === year)}
                    />
                ))}
            </div>
        </div>
    );
};

export default AlumniPage;
