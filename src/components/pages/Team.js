import React, { Component } from 'react'
import Header from '../common/Header'
import TeamItem from '../common/TeamItem'
import elements from '../../elements/team.json'

class Team extends Component {
	render() {
		return (
			<div>
				<Header 
					image="/assets/img/header-team.jpg"
					title="We would like to"
					subtitle="introduce ourselves"
				/>
				<section className="page-section bg-light" id="team">
					<div className="container">
						<div className="text-center">
							<h2 className="section-heading text-uppercase">Our Amazing Team</h2>
							<h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
						</div>
						<div className="row">
							{ elements.map((item, id) => <TeamItem {...item} key={id}/> ) }
						</div>
						<div className="row">
								<div className="col-lg-8 mx-auto text-center"><p className="large text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde.</p></div>
						</div>
					</div>
				</section>
			</div>
		)
	}
}

export default Team