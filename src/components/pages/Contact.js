import React, { Component } from 'react'
import Field from '../common/Field'
import { withFormik } from 'formik'
import * as Yup from 'yup'

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
	validationSchema: Yup.object().shape({
		name: Yup.string().min(2, "Your name must have at least 2 characters").required("You must give us your name."), 
		email: Yup.string().email("You need to type valid email address.").required("We need your email to send reply."), 
		phone: Yup.string().min(10, "Your phone number is too short.").max(15, "Your phone number is to long.").required("We need a phone number to reach you at."), 
		message: Yup.string().min(100, "You need to give us more details.").max(2_000, "You have reached the limit.").required("Tell us something.")
	}),
	handleSubmit: (values, {setSubmitting }) => {
		alert('You have submitted the form!')
	}
})(Contact)