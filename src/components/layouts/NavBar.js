import { AppBar, IconButton, makeStyles, Toolbar, Typography } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      margin:0
    },
    title: {
      flexGrow: 1,
      color:'white'
    },
    color:{
        backgroundColor:'#356D9C'
    }
  }));
const NavBar = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar className={classes.color}>
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                    ACME SEARCH
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default NavBar
