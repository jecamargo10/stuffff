import React, { Component } from 'react';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { lightWhite } from 'material-ui/styles/colors';
import { darkBlack } from 'material-ui/styles/colors';
import { deepOrange100 } from 'material-ui/styles/colors';
import { lightBlack } from 'material-ui/styles/colors';
import { lightGreenA100 } from 'material-ui/styles/colors';
import { darkWhite } from 'material-ui/styles/colors';

const myMuiTheme = getMuiTheme (darkBaseTheme);

const myStyles = {
  wallPaper: {
    width: 1920,
    height: 300
  },
  fillCard: {
    padding: 200
  },
  button: {
    margin: 15
  },
  checkBox: {
    textAlign: 'center'
  },
  select: {
    textAlign: 'left'
  },
  paper: {
    height: 5400,
    width: 450,
    margin: 0,
    textAlign: 'left',
    display: 'inline-block',
    background: darkWhite,
    color: darkBlack,
    scroll: true
  }
}

export {
  myMuiTheme,
  myStyles
} 