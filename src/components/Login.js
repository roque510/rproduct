import React from 'react';
import MenuBar from './MenuBar';
import {getFunName} from '../helpers';


class Login extends React.Component {


	goToProduct(event){
		event.preventDefault();

		const user = this.user.value;

		this.context.router.transitionTo(`/home/${user}`);
	}

	render() {
		return (
			<div>
				<MenuBar></MenuBar>
			<div className="wrap row container">
			        <div className="col m6 container">
			            <h2 className="center-align">Login</h2>
			            <div className="row">
			                <form className="col s12" onSubmit={(e) => this.goToProduct(e)}>
			                    <div className="row">
			                        <div className="input-field col s12">
			                            <input  id="user" type="text" className="validate" defaultValue={getFunName()} ref={(input) => {this.user = input}} />
			                            <label for="user">Email</label>
			                        </div>
			                    </div>
			                    <div className="row">
			                        <div className="input-field col s12">
			                            <input id="pass" type="password" className="validate" />
			                            <label for="pass">Password</label>
			                        </div>
			                    </div>
			                    <div className="row">
			                        <div className="col s12">
			                            <p>
			                                <input type="checkbox" id="remember" />
			                                <label for="remember">Remember me</label>
			                            </p>
			                        </div>
			                    </div>
			                    
			                    <div className="row">
			                        <div className="col m12">
			                            <p className="right-align">
			                                <button className="btn btn-large waves-effect waves-light" type="submit" name="action">Login</button>
			                            </p>
			                        </div>
			                    </div>
			                </form>
			            </div>
			        </div>
					<div className="col m6">
			            <h2>Heading 2</h2>
			            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
			                quia voluptas sit aspernatur aut odit aut fugit, sed quia cor magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius
			                modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?</p>
			        </div>
			</div>
			</div>
			);
	}
}

Login.contextTypes = {
	router: React.PropTypes.object
}

export default Login;