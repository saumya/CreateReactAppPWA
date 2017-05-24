//
import React,{Component} from 'react';
//
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


class AppContainer extends Component {
  
  /*
  constructor(props){
    super(props)
  }
  */
  
  render(){
    return(
      <MuiThemeProvider>
        <div> 
          AppContainer.react
          <div>
            The application will render here
          </div>
        </div>
      </MuiThemeProvider>
    );
  }

}
export default AppContainer;
