import React from 'react';
import Presentation from './sections/Presentation';
import Slogan from './sections/Slogan';
import DebitAcc from './sections/DebitAcc';

function Welcome() {
	return (
		<section>
			<Presentation />
			<Slogan />
			<DebitAcc />
		</section>
	);
}

export default Welcome;
