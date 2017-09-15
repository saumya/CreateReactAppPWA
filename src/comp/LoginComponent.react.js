//
import React, {Component} from 'react';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class LoginComponent extends Component {
	constructor(props){
		super(props);
		this.state = {};
		this.style = {};
	}
	render(){
		return(
			<div>
				<ul style={{'listStyleType': 'none', padding:'1em'}}>
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
					<li>
						<RaisedButton primary={true} label="Login" style={this.style} />
					</li>
				</ul>


			</div>
		);
	}
}

export default LoginComponent;