import React from 'react';
import Header from '../../common/Navigation/Header/Header';
import Footer from '../../common/Navigation/Footer/Footer';
import Layout from '../../common/Layout/Layout';
import './Home.scss';

const home = props => {
	return (
		<div className="Home">
			<Header/>
			<Layout>
				Home
			</Layout>
			<Footer />
		</div>
	)
}
export default home;