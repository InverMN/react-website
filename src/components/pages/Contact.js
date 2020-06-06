import React, { Component } from 'react'
import Field from '../common/Field'
import { withFormik } from 'formik'

class Contact extends Component {
	render() {
		return (
			<section className="page-section" id="contact">
				<div className="container">
					<div className="text-center">
						<h2 className="section-heading text-uppercase">Contact Us</h2>
						<h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
					</div>
					<form id="contactForm" name="sentMessage" noValidate onSubmit={this.props.handleSubmit}>
						<div className="row align-items-stretch mb-5">
							<div className="col-md-6">
								<Field 
									name="name"
									values={this.props.values} 
									handleChange={this.props.handleChange}
									onBlur={this.props.handleBlur}
									touched={this.props.touched}
									errors={this.props.errors}/>
								<Field 
									name="email"
									type="email"
									values={this.props.values} 
									handleChange={this.props.handleChange}
									touched={this.props.touched}
									errors={this.props.errors}/>
								<Field 
									name="phone"
									type="tel"
									values={this.props.values} 
									handleChange={this.props.handleChange}
									touched={this.props.touched}
									errors={this.props.errors}/>
							</div>
							<div className="col-md-6">
								<Field 
									name="message"
									type="textarea"
									values={this.props.values} 
									handleChange={this.props.handleChange}
									touched={this.props.touched}
									errors={this.props.errors}/>
							</div>
						</div>
						<div className="text-center">
							<div id="success"></div>
							<button className="btn btn-primary btn-xl text-uppercase" id="sendMessageButton" type="submit">Send Message</button>
						</div>
					</form>
				</div>
			</section>
		)
	}
}

export default withFormik({
	mapPropsToValues: () => ({
		name: '',
		email: '',
		phone: '',
		message: ''
	}),
	validate: values => {
		const errors = {}

		Object.keys(values).map(v => (!values[v]) ? errors[v] = `Required` : null )

		return errors
	},
	handleSubmit: (values, {setSubmitting }) => {
		alert('You have submitted the form!')
	}
})(Contact)