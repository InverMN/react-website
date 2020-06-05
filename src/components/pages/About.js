import React, { Component } from 'react'
import Header from '../common/Header'
import AboutItem from '../common/AboutItem'
import elements from '../../elements/about.json'

class About extends Component {
	render() {
		return (
			<div>
				<Header 
					image="/assets/img/header-about.jpg"
					title="Let Us Tell Something"
					subtitle="About Us"
				/>
				<section className="page-section" id="about">
					<div className="container">
						<div className="text-center">
							<h2 className="section-heading text-uppercase">About</h2>
							<h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
						</div>
						<ul className="timeline">
							{ elements.map((item, id) => <AboutItem {...item} id={id} key={id}/> ) }
							<li>
								<div className="timeline-image">
									<h4>Be Part<br />Of Our<br />Story!</h4>
								</div>
							</li>
						</ul>
					</div>
				</section>
			</div>
		)
	}
}

export default About