import React, {Component} from 'react';
import Menu from './components/menu';


import 'jquery';
import 'bootstrap/dist/js/bootstrap';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <nav className="navbar navbar-default navbar-fixed-top" role="navigation">
          <div className="container">
            <Menu/>
          </div>
        </nav>

      	<div className="container">
      		{this.props.children}
      	</div>
        
      	<footer>

      		<div className="last-div">
      			<div className="container">
      				<div className="row">
      					<div className="copyright">
                              <div className="credits">
                                  WellTravel
                              </div>

      					</div>
      				</div>
      			</div>
      			<div className="container">
      				<div className="row">
      					<ul className="social-network">
      						<li><a href="#" data-placement="top" title="Facebook"><i className="fa fa-facebook fa-1x"></i></a></li>
      						<li><a href="#" data-placement="top" title="Twitter"><i className="fa fa-twitter fa-1x"></i></a></li>
      						<li><a href="#" data-placement="top" title="Linkedin"><i className="fa fa-linkedin fa-1x"></i></a></li>
      						<li><a href="#" data-placement="top" title="Pinterest"><i className="fa fa-pinterest fa-1x"></i></a></li>
      						<li><a href="#" data-placement="top" title="Google plus"><i className="fa fa-google-plus fa-1x"></i></a></li>
      					</ul>
      				</div>
      			</div>

      		</div>
      	</footer>

      </div>
    );
  }
}

export default App;
