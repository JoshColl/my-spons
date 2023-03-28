import { SponsorCard } from './sponsor-card.jsx';

export function SponsorsList({ sponsData }) {
	return (
		<div className="sponsors-list">
			{sponsData.map(sponsCtg => (
				sponsCtg.values.map(sponsor =>
					<SponsorCard key={sponsor.id} sponsor={sponsor} />
				)
			))}
		</div>
	);
}