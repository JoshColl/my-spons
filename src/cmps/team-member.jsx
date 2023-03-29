import linkedin from '../assets/imgs/linkedin.svg'

export function TeamMember({ member }) {
    return (
        <div className="team-member">
            <img src={member.headshot_url} alt="img" />
            <h4>{member.firstname} {member.lastname}</h4>
            <h5>{member.jobtitle}</h5>
            <a href={member.linkedin} target="_blank">
                <img src={linkedin} alt="img" />
            </a>
        </div>
    )
}