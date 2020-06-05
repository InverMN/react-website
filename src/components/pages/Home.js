import React, { Component } from 'react'
import Header from '../common/Header'

class Home extends Component {
	render() {
		return (
			<Header 
				image="/assets/img/header-bg.jpg"
				title="Welcome To Our Studio!"
				subtitle="it's nice to meet you!"
				link="/about"
				buttonText="tell me more"
			/>
		)
	}
}

export default Home