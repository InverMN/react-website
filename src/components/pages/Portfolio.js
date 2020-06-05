import React, { Component } from 'react'
import Header from '../common/Header'
import PortfolioItem from '../common/PortfolioItem'
import elements from '../../elements/portfolio.json'

class Portfolio extends Component {
	render() {
		return (
			<div>
				<Header 
					image="/assets/img/header-portfolio.jpg"
					title="We have got a lot experience"
					subtitle="check it out"
				/>
				<section className="page-section bg-light" id="portfolio">
					<div className="container">
						<div className="text-center">
							<h2 className="section-heading text-uppercase">Portfolio</h2>
							<h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
						</div>
						<div className="row">
							{
								elements.map((item, id) => {
									return <PortfolioItem {...item} key={id}/>
								})
							}
						</div>
					</div>
				</section>
			</div>
		)
	}
}

export default Portfolio