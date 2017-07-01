//
import React, {Component} from 'react';

class LoginComponent extends Component {
	constructor(props){
		super(props);
		this.state = {}
	}
	render(){
		return(
			<div>
				This has to be Material UI Component.
				<ul>
					<li>user name</li>
					<li>password</li>
				</ul>
			</div>
		);
	}
}

export default LoginComponent;