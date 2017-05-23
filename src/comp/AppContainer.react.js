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
        </div>
      </MuiThemeProvider>
    );
  }

}
export default AppContainer;
