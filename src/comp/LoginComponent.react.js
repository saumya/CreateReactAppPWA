//
// Login / Register UI Component
//

import React, {Component} from 'react';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';

class LoginComponent extends Component {
	constructor(props){
		super(props);
		this.state = {viewLogin:true};
		this.style = {};
	}
	render(){
		return(
			<div>
				<ul style={{'listStyleType': 'none', padding:'1em'}}>
				{ ( (this.state.viewLogin===true) ? "Login" : "Register") }
					<li>
						<TextField style={{width:'100%'}}
							hintText="Blue Forest"
							floatingLabelText="User Name" />
					</li>
					<li>
						<TextField style={{width:'100%', 'marginBottom':'1em'}}
							hintText="Your Password"
							type="password"
							floatingLabelText="Password" />
					</li>
					{
						(this.state.viewLogin===true) 
						?
						<li>
							<RaisedButton primary={true} label="Login" style={this.style} onClick={this.onLoginView.bind(this)} />
							<FlatButton label="Register" style={this.style} onClick={this.onRegisterView.bind(this)} />
						</li> 
						:
						<li>
							<FlatButton  label="Login" style={this.style} onClick={this.onLoginView.bind(this)} />
							<RaisedButton primary={true} label="Register" style={this.style} onClick={this.onRegisterView.bind(this)} />
						</li>

					}
					
				</ul>


			</div>
		);
	}
	onRegisterView(){
		console.log('onRegisterView');
		console.log(this.state);
		this.setState({viewLogin:false});
	}
	onLoginView() {
		console.log(this.state);
		this.setState({viewLogin:true});
	}
}

export default LoginComponent;