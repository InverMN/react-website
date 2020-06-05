import React, { Component } from 'react'
import Nav from './common/Nav'
import Footer from './common/Footer'
import Clients from './common/Clients'

class PageWrapper extends Component {
	render() {
		return (
			<div id="page-top">
				<Nav/>
				{this.props.children}
				<Clients/>
				<Footer/>
			</div>
		)
	}
}

export default PageWrapper