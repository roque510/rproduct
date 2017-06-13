import React from 'react';
import Slider from './Slider';
import '../css/materialize.min.css';
import '../css/style.css';

class App extends React.Component {



	render(){
		return (
			<div className="catch-of-the-day">
				{/* <Menu /> */}
				<Slider />
				{/* <Search /> */}
			</div>
		)
	}
}

export default App;