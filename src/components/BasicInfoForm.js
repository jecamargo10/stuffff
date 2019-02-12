import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import FlatButton from 'material-ui/FlatButton';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import { Card, CardHeader, CardMedia, CardTitle, CardText, CardActions } from 'material-ui';
import { Dialog, List, ListItem } from 'material-ui';
import {SelectField, MenuItem} from 'material-ui';

import {myMuiTheme, myStyles} from './Theme';
import {catalogsData} from './Data';

export class BasicInfoForm extends Component {
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
        
        <AppBar title="Datos Básicos" />
        <Card>
          <Table
            fixedHeader={false}
            fixedFooter={false}
            selectable={false}
            multiSelectable={false}
          >
            <TableHeader
              displaySelectAll={false}
              adjustForCheckbox={false}
              enableSelectAll={false}
            >
            </TableHeader>            
            <TableBody
              displayRowCheckbox={false}
              deselectOnClickaway={false}
              showRowHover={false}
              stripedRows={false}
            >              
              <TableRow displayBorder={false}>
                <TableRowColumn/>
                <TableRowColumn>
                  <TextField
                    hintText="Ingrese su primer nombre"
                    floatingLabelText="Primer Nombre"
                    onChange={handleChange('firstName')}
                    defaultValue={values.firstName}
                  />
                </TableRowColumn>
                <TableRowColumn>
                  <TextField
                    hintText="Ingrese su segundo nombre"
                    floatingLabelText="Segundo Nombre"
                    onChange={handleChange('middleName')}
                    defaultValue={values.middleName}
                  />
                </TableRowColumn>  
                <TableRowColumn/>              
              </TableRow>
              <TableRow displayBorder={false}>
                <TableRowColumn/>
                <TableRowColumn>
                  <TextField
                    hintText="Ingrese su primer apellido"
                    floatingLabelText="Primer Apellido"
                    onChange={handleChange('firstSurName')}
                    defaultValue={values.firstSurName}
                  />
                </TableRowColumn>
                <TableRowColumn>
                  <TextField
                    hintText="Ingrese su segundo apellido"
                    floatingLabelText="Segundo Apellido"
                    onChange={handleChange('secondSurName')}
                    defaultValue={values.secondSurName}
                  />
                </TableRowColumn>     
                <TableRowColumn/>           
              </TableRow>
              <TableRow displayBorder={false}>
                <TableRowColumn/>
                <TableRowColumn>
                  <TextField
                    hintText="Ingrese su identificación"
                    floatingLabelText="Identificación"
                    onChange={handleChange('idNumber')}
                    defaultValue={values.idNumber}
                  />
                </TableRowColumn>
                <TableRowColumn>
                  <DatePicker
                    hintText="Ingrese su fecha de nacimiento"
                    floatingLabelText="Fecha Nacimiento"                    
                    onChange={(event, date) => {handleDateChange('birthDate',event,date);}}
                    defaultValue={values.birthDate}
                    openToYearSelection={true}
                  />                  
                </TableRowColumn>        
                <TableRowColumn/>        
              </TableRow>   
              <TableRow displayBorder={false}>
                <TableRowColumn/>
                <TableRowColumn>
                  <DatePicker
                    hintText="Ingrese la fecha de expedición de su documento"
                    floatingLabelText="Fecha Expedición"
                    onChange={(event, date) => {handleDateChange('idIssuanceDate',event,date);}}                    
                    defaultValue={values.idIssuanceDate}
                    openToYearSelection={true}
                  />
                </TableRowColumn>
                <TableRowColumn>
                  <SelectField
                    style={myStyles.select}
                    hintText="Ingrese la ciudad de expedición"
                    floatingLabelText="Ciudad Expedición"
                    value={values.idIssuanceCity}
                    onChange={(event, key, payload) => {handleSelectChange('idIssuanceCity',event,key,payload)}}
                    
                  >
                    {catalogsData.citiesCat.map(city => (
                      <MenuItem
                        value={city.value}
                        primaryText={city.primaryText}
                      />
                      ))
                    }
                  </SelectField>
                </TableRowColumn>  
                <TableRowColumn/>              
              </TableRow>    
            </TableBody>            
          </Table>
          <FlatButton
            label="Continuar"
            primary={true}
            onClick={this.continue}
            style={myStyles.button}
          />
          <FlatButton
            label="Volver"
            secondary={true}
            onClick={this.back}
            style={myStyles.button}
          />   
        </Card>
        <Card
          style={myStyles.fillCard}
        />
      </MuiThemeProvider>
    )
  }
}

export default BasicInfoForm
