import React, { Component } from 'react'
import Nav from './common/Nav'
import Footer from './common/Footer'

class PageWrapper extends Component {
	render() {
		return (
			<div id="page-top">
				<Nav/>
				{this.props.children}
				<Footer/>
			</div>
		)
	}
}

export default PageWrapper