import React from 'react';
import Presentation from './sections/Presentation';
import Slogan from './sections/Slogan';

function Welcome() {
	return (
		<section>
			<Presentation />
			<Slogan />
		</section>
	);
}

export default Welcome;
