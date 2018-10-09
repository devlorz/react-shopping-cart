import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';

const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1,
    textAlign: 'left'
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
};

function ButtonAppBar(props) {
  const { classes, onClickMenu } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            className={classes.menuButton}
            color="inherit"
            aria-label="Menu"
            onClick={onClickMenu}
          >
            <Icon>menu</Icon>
          </IconButton>
          <Typography variant="h6" color="inherit" className={classes.grow}>
            Simple Shopping Cart
          </Typography>
          {/*<Button color="inherit">Login</Button>*/}
          <Icon>shopping_cart</Icon>
        </Toolbar>
      </AppBar>
    </div>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ButtonAppBar);
