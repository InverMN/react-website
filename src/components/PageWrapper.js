import React, { Component } from 'react'
import Nav from './Nav'
import Footer from './Footer'

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