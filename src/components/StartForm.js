import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
import { Card, CardHeader, CardMedia, CardTitle, CardText, CardActions, AppBar, Table, TableRow } from 'material-ui';
import IconButton from 'material-ui/IconButton';

import {myMuiTheme, myStyles} from './Theme';
import imagesDefs from '../images/Images';
import { NavigationMenu } from 'material-ui/svg-icons';

export class StartForm extends Component {

  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  }

  render() {

    const { values } = this.props;

    return (
      <MuiThemeProvider muiTheme={myMuiTheme}>
        <AppBar
          title="Solicite su crédito YA!"
          iconElementLeft={<IconButton><NavigationMenu /></IconButton>}
          iconElementRight={<FlatButton label="Log In" />}
        />
        <Card
          
        >
          <CardHeader
            title="Su crédito en solo cinco minutos"
            subtitle="Regístrese"
            avatar={imagesDefs.imgCompanySquare}
          />
          <CardMedia
            overlay={
              <CardTitle 
                title="No deje pasar esta oportunidad"
              />
            }
          >
            <img 
              src={imagesDefs.imgWallPaper} 
              style={myStyles.wallPaper} 
            />
          </CardMedia>                              
          <CardText>
            Tenga a la mano sus datos personales
          </CardText>
          <CardActions>
            <FlatButton 
              label="Iniciar"
              onClick={this.continue}              
              primary={true}
            />            
          </CardActions>
        </Card>
        <Card style={myStyles.fillCard} />
      </MuiThemeProvider>
    )
  }
}

export default StartForm
