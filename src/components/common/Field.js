import React, { Component } from 'react'

class Field extends Component {
	render() {
		return (
			<div className={`form-group ${this.props.type === "textarea" ? "form-group-textarea mb-md-0" : null}`}>
				{	this.props.type === 'textarea' ? 
					<textarea 
						className="form-control" 
						id={this.props.name}  
						placeholder={`Your ${this.props.name.charAt(0).toUpperCase() + this.props.name.slice(1)} *`}
						data-validation-required-message={`Please enter your ${this.props.name}.`} 
						name={this.props.name}
						value={this.props.values[this.props.name]}
						onChange={this.props.handleChange}
						onBlur={this.props.onBlur}/>
					:	<input 
						className="form-control" 
						id={this.props.name} 
						type={this.props.type || "text"} 
						placeholder={`Your ${this.props.name.charAt(0).toUpperCase() + this.props.name.slice(1)} *`} 
						required 
						data-validation-required-message={`Please enter your ${this.props.name}.`} 
						name={this.props.name}
						value={this.props.values[this.props.name]}
						onChange={this.props.handleChange}
						onBlur={this.props.onBlur}/>
					} 
					<p className="help-block text-danger">
						{	(this.props.touched[this.props.name] && this.props.errors[this.props.name]) &&
							<span>This field is required</span>
						}
					</p>
			</div>
		)
	}
}

export default Field