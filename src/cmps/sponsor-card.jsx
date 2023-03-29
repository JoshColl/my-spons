import { TeamMember } from './team-member.jsx';

import arrowRight from '../assets/imgs/arrow-right.svg'

export const SponsorCard = ({ sponsor }) => {
	const teamMembers = JSON.parse(sponsor.team_members)
	console.log(teamMembers);


	return (
		<div className="sponsor-card">
			<h3>{sponsor.display_name} Partner</h3>
			<img src={sponsor.logo_url} alt="logo" />
			<p>{sponsor.description}</p>
			<section className="sponsor-team-members">
				{teamMembers.map((member, idx) =>
					<TeamMember key={idx} member={member} />
				)}
			</section>
			<button >
				<a href={sponsor.website} target="_blank">
					LEARN MORE
					<img src={arrowRight} alt="img" />
				</a>
			</button>
		</div>
	);
};