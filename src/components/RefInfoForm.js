import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import { Card, CardHeader, CardMedia, CardTitle, CardText, CardActions, Checkbox } from 'material-ui';
import {SelectField, MenuItem} from 'material-ui';
import { Dialog, List, ListItem } from 'material-ui';

import {myMuiTheme, myStyles} from './Theme';
import imagesDefs from '../images/Images';
import {catalogsData} from './Data';


export class RefInfoForm extends Component {

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

        <AppBar title="Referencia Personal" />

        <Card>
          <TextField
            hintText="Ingrese nombres"
            floatingLabelText="Nombres y Apellidos"
            onChange={handleChange('perRefName')}
            defaultValue={values.perRefName}
          />
          <br />
          <TextField
            hintText="Ingrese la dirección"
            floatingLabelText="Dirección"
            onChange={handleChange('perRefAddress')}
            defaultValue={values.perRefAddress}
          />
          <br />          
          <SelectField
            style={myStyles.select}
            hintText="Ingrese la ciudad"
            floatingLabelText="Ciudad"
            value={values.perRefCity}
            onChange={(event, key, payload) => {handleSelectChange('perRefCity',event,key,payload)}}
            
          >
            {catalogsData.citiesCat.map(city => (
              <MenuItem
                value={city.value}
                primaryText={city.primaryText}
              />
              ))
            }
          </SelectField>
          <br />
          <TextField
            hintText="Ingrese el teléfono"
            floatingLabelText="Teléfono"
            onChange={handleChange('perRefPhone')}
            defaultValue={values.perRefPhone}
          />
          <br />
          <TextField
            hintText="Ingrese el celular"
            floatingLabelText="Celular"
            onChange={handleChange('perRefCell')}
            defaultValue={values.perRefCell}
          />
          <br />
          <TextField
            hintText="Ingrese la relación"
            floatingLabelText="Relación"
            onChange={handleChange('perRefRel')}
            defaultValue={values.perRefRel}
          />
          <br />
          <FlatButton
            label="Enviar"
            primary={true}
            style={myStyles.button}
            onClick={this.continue}
          />
          <FlatButton
            label="Volver"
            secondary={true}
            style={myStyles.button}
            onClick={this.continue}
          />                  
        </Card>
        <Card style={myStyles.fillCard} />
      </MuiThemeProvider>
    )
  }
}

export default RefInfoForm
