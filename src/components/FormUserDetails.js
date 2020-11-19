import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

export class FormUserDetails extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };
  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Enter User Details"></AppBar>
          <TextField
            hintText="Enter your first name"
            floatingLabelText="First Name"
            onChange={handleChange("first name")}
            defaultValue={values.firstName}
          />
          <br></br>
          <TextField
            hintText="Enter your last name"
            floatingLabelText="Last Name"
            onChange={handleChange("last name")}
            defaultValue={values.lastName}
          />
          <br></br>
          <TextField
            hintText="Enter your Email"
            floatingLabelText="Email"
            onChange={handleChange("Email")}
            defaultValue={values.email}
          />
          <br></br>
         <RaisedButton
            label="Continue"
            primary={true}
            style={StyleSheet.button}
            onClick={this.continue}
         />
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}
const styles ={
    button:{
        margin:15
    }
}

export default FormUserDetails;
