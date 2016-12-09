import React from 'react';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import ArrowDropRight from 'material-ui/svg-icons/navigation-arrow-drop-right';
import ChevronLeft from 'material-ui/svg-icons/navigation/chevron-left';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

require('./Menu.scss');

const style = {
  display: 'inline-block',
  position: 'relative',
  float: 'left',
  margin: '16px 32px 16px 0'
};

class MenuExampleSecondary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menus: []
    };

    this.menuRenderFns = {
      'default': this.renderMainMenu.bind(this),
      'second': this.renderSecondMenu.bind(this)
    };
  }

  setActiveMenu(menuName) {
    const activeMenuName = (menuName in this.menuRenderFns)
      ? menuName
      : 'default';

    const activeMenuRenderFn = this.menuRenderFns[activeMenuName];

    const menus = [activeMenuRenderFn()];
    this.setState({menus});
  }

  componentWillMount() {
    this.setActiveMenu('default');
  }

  renderMainMenu() {
    return (
      <Paper key={1} style={{position: 'absolute', top: '0px', left: '0px', width: '256px'}}>
        <Menu style={{order: 2}} desktop={true} width={256}>
          <MenuItem primaryText="Bold" secondaryText="&#8984;B" />
          <MenuItem primaryText="Italic" secondaryText="&#8984;I" />
          <MenuItem primaryText="Underline" secondaryText="&#8984;U" />
          <MenuItem primaryText="Strikethrough" secondaryText="Alt+Shift+5" />
          <MenuItem primaryText="Superscript" secondaryText="&#8984;." />
          <MenuItem primaryText="Subscript" secondaryText="&#8984;," />
          <Divider />
          <MenuItem primaryText="Paragraph styles" rightIcon={<ArrowDropRight />} />
          <MenuItem primaryText="Align" rightIcon={<ArrowDropRight />} />
          <MenuItem primaryText="Line spacing" rightIcon={<ArrowDropRight />} />
          <MenuItem primaryText="Numbered list" rightIcon={<ArrowDropRight />} />
          <MenuItem
            primaryText="List options"
            rightIcon={<ArrowDropRight />}
            onTouchTap={() => {
              this.setActiveMenu('second');
            }}/>
          <Divider />
          <MenuItem primaryText="Clear formatting" secondaryText="&#8984;/" />
        </Menu>
      </Paper>
    );
  }

  renderSecondMenu() {
    return (
      <Paper key={2} style={{position: 'absolute', top: '0px', left: '0px', width: '256px'}}>
        <Menu style={{order: 1}} desktop={true} width={256}>
          <MenuItem
            primaryText="List options"
            onTouchTap={() => {
              this.setActiveMenu('default');
            }}
            leftIcon={<ChevronLeft />} />
          <Divider />
          <MenuItem primaryText="Open" secondaryText="&#8984;O" />
          <MenuItem primaryText="Paste in place" secondaryText="&#8679;&#8984;V" />
          <MenuItem primaryText="Research" secondaryText="&#8997;&#8679;&#8984;I" />
        </Menu>
      </Paper>
    );
  }

  render() {
    return (
        <Paper style={style}>
          <ReactCSSTransitionGroup
            transitionName="example"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={300}>
            { this.state.menus }
          </ReactCSSTransitionGroup>
        </Paper>
    );
  }
}


export default MenuExampleSecondary;
