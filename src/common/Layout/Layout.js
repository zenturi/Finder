import React from 'react';
import Aux from '../../hoc/hoc';

const layout = (props) => {
	return (
		<Aux>
			<main>
				{props.children}
			</main>
		</Aux>
	)
}

export default layout;