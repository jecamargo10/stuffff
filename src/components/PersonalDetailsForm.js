import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import { Card, CardHeader, CardMedia, CardTitle, CardText, CardActions } from 'material-ui';
import {SelectField, MenuItem} from 'material-ui';
import { Dialog, List, ListItem } from 'material-ui';

import {myMuiTheme, myStyles} from './Theme';
import imagesDefs from '../images/Images';
import {catalogsData} from './Data';

export class PersonalDetailsForm extends Component {

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

    const { values, handleChange, handleSelectChange } = this.props;

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

        <AppBar title="Información Personal" />     
          
        <Card>

          
          <SelectField
            style={myStyles.select}
            hintText="Ingrese el género"
            floatingLabelText="Género"
            value={values.gender}
            onChange={(event, key, payload) => {handleSelectChange('gender',event,key,payload)}}
            
          >
            {catalogsData.gendersCat.map(gender => (
              <MenuItem
                value={gender.value}
                primaryText={gender.primaryText}
              />
              ))
            }
          </SelectField>
          <br />
          <TextField
            hintText="Ingrese las personas a cargo"
            floatingLabelText="Personas a Cargo"
            onChange={handleChange('dependents')}
            defaultValue={values.dependents}
          />
          <br />
          
          <SelectField
            style={myStyles.select}
            hintText="Ingrese nivel de estudios"
            floatingLabelText="Nivel Estudios"
            value={values.edLevel}
            onChange={(event, key, payload) => {handleSelectChange('edLevel',event,key,payload)}}
            
          >
            {catalogsData.educationLevelsCat.map(level => (
              <MenuItem
                value={level.value}
                primaryText={level.primaryText}
              />
              ))
            }
          </SelectField>
          <br />
          
          <SelectField
            style={myStyles.select}
            hintText="Ingrese estado civil"
            floatingLabelText="Estado Civil"
            value={values.civilStatus}
            onChange={(event, key, payload) => {handleSelectChange('civilStatus',event,key,payload)}}
            
          >
            {catalogsData.civilStatusCat.map(status => (
              <MenuItem
                value={status.value}
                primaryText={status.primaryText}
              />
              ))
            }
          </SelectField>
          <br />          
          <SelectField
            style={myStyles.select}
            hintText="Ingrese tipo vivienda"
            floatingLabelText="Tipo Vivienda"
            value={values.homeType}
            onChange={(event, key, payload) => {handleSelectChange('homeType',event,key,payload)}}
            
          >
            {catalogsData.homeTypeCat.map(home => (
              <MenuItem
                value={home.value}
                primaryText={home.primaryText}
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

export default PersonalDetailsForm
