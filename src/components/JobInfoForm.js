import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import { Card, CardHeader, CardMedia, CardTitle, CardText, CardActions, DatePicker } from 'material-ui';
import {SelectField, MenuItem} from 'material-ui';
import { Dialog, List, ListItem } from 'material-ui';

import {myMuiTheme, myStyles} from './Theme';
import imagesDefs from '../images/Images';
import {catalogsData} from './Data';

export class JobInfoForm extends Component {

  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  continue = e => {
    e.preventDefault();
    if (this.props.nextStep() == false) {
      this.handleOpen();
    }
  }

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  }

  render() {

    const { values, handleChange, handleDateChange, handleSelectChange } = this.props;

    return (
      <MuiThemeProvider muiTheme={myMuiTheme}>
        
        <Dialog
          title="Mensaje"          
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          <List>            
            {values.validationErrors.map(error => (
              <ListItem>{error}</ListItem>
              ))
            }
          </List>
        </Dialog>

        <AppBar title="Información Laboral" />
        <Card>         
          
          <SelectField
            style={myStyles.select}
            hintText="Ingrese la empresa"
            floatingLabelText="Empresa"
            value={values.employerId}
            onChange={(event, key, payload) => {handleSelectChange('employerId',event,key,payload)}}
            
          >
            {catalogsData.employerIdCat.map(employer => (
              <MenuItem
                value={employer.value}
                primaryText={employer.primaryText}
              />
              ))
            }
          </SelectField>
          <br />
          <DatePicker
            hintText="Ingrese la fecha de ingreso"
            floatingLabelText="Fecha Ingreso"
            onChange={(event, date) => {handleDateChange('entryDate',event,date);}}
            defaultValue={values.entryDate}
            openToYearSelection={true}
          />
          <br />          
          <SelectField
            style={myStyles.select}
            hintText="Ingrese el tipo de contrato"
            floatingLabelText="Tipo Contrato"
            value={values.contractType}
            onChange={(event, key, payload) => {handleSelectChange('contractType',event,key,payload)}}
            
          >
            {catalogsData.contractTypeCat.map(contract => (
              <MenuItem
                value={contract.value}
                primaryText={contract.primaryText}
              />
              ))
            }
          </SelectField>
          <br />          
          <FlatButton
            label="Continuar"
            primary={true}
            style={myStyles.button}
            onClick={this.continue}
          />
          <FlatButton
            label="Volver"
            secondary={true}
            style={myStyles.button}
            onClick={this.back}
          />        
        </Card>
        <Card style={myStyles.fillCard} />
      </MuiThemeProvider>
    )
  }
}

export default JobInfoForm
