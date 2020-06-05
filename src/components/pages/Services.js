import React, { Component } from 'react'
import Header from '../common/Header'
import ServicesItem from '../common/ServicesItem'
import elements from '../../elements/services.json'

class Services extends Component {
	render() {
		return (
			<div>
				<Header 
					image="/assets/img/header-services.jpg"
					title="Let's take a look"
					subtitle="what we can offer you"
				/>
				<section className="page-section" id="services">
					<div className="container">
						<div className="text-center">
							<h2 className="section-heading text-uppercase">Services</h2>
							<h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
						</div>
						<div className="row text-center">
							{
								elements.map((item, id) => <ServicesItem {...item} key={id}/>	)
							}
						</div>
					</div>
				</section>
			</div>
		)
	}
}

export default Services