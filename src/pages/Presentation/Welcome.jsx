import React from 'react';
import Presentation from './sections/Presentation';
import Slogan from './sections/Slogan';
import DebitAcc from './sections/DebitAcc';
import CreditCard from './sections/CreditCard';
import HomeLoan from './sections/HomeLoan';
import CommunityLoan from './sections/CommunityLoan';

function Welcome() {
	return (
		<section>
			<Presentation />
			<Slogan />
			<DebitAcc />
			<CreditCard />
			<HomeLoan />
			<CommunityLoan />
		</section>
	);
}

export default Welcome;
