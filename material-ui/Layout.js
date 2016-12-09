import React, { Component } from 'react';

import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import RaisedButton from 'material-ui/RaisedButton';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import FlatButton from 'material-ui/FlatButton';

import {
  Toolbar,
  ToolbarGroup,
  ToolbarSeparator,
  ToolbarTitle
} from 'material-ui/Toolbar';

import Menu from './Menu';

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {open: false};

    this.handleOnRequestChange = this.handleOnRequestChange.bind(this);
    this.handleOnLeftIconButtonTouchTap = this.handleOnLeftIconButtonTouchTap.bind(this);
  }

  /**
   * handleOnRequestChange
   */
  handleOnRequestChange(open, reason) {
    this.setState({open: open});
  }

  /**
   * handleOnLeftIconButtonTouchTap
   */
  handleOnLeftIconButtonTouchTap() {
    this.setState({open: !this.state.open});
  }

  render() {
    return (
      <div>
        <AppBar onLeftIconButtonTouchTap={this.handleOnLeftIconButtonTouchTap}/>
        <Toolbar>
          <ToolbarGroup>
            <FlatButton label="Link"/>
          </ToolbarGroup>
          <ToolbarGroup firstChild={true}>
          <DropDownMenu value={this.state.value} onChange={this.handleChange}>
            <MenuItem value={1} primaryText="All Broadcasts" />
            <MenuItem value={2} primaryText="All Voice" />
            <MenuItem value={3} primaryText="All Text" />
            <MenuItem value={4} primaryText="Complete Voice" />
            <MenuItem value={5} primaryText="Complete Text" />
            <MenuItem value={6} primaryText="Active Voice" />
            <MenuItem value={7} primaryText="Active Text" />
          </DropDownMenu>
          </ToolbarGroup>
          <ToolbarGroup>
            <ToolbarTitle text="Options" />
            <FontIcon className="muidocs-icon-custom-sort" />
            <ToolbarSeparator />
            <RaisedButton label="Create Broadcast" primary={true} />
            <IconMenu
              iconButtonElement={
                <IconButton touch={true}>
                  <NavigationExpandMoreIcon />
                </IconButton>
              }
            >
              <MenuItem primaryText="Download" />
              <MenuItem primaryText="More Info" />
            </IconMenu>
          </ToolbarGroup>
        </Toolbar>
        <Menu />
        <Drawer
          docked={false}
          open={this.state.open}
          onRequestChange={this.handleOnRequestChange}>
          <MenuItem>Option A</MenuItem>
          <MenuItem>Option B</MenuItem>
        </Drawer>
      </div>
    );
  }
}

export default Layout;
