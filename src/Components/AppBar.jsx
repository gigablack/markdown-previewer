import React, {Component} from 'react'
import {AppBar,Toolbar,Typography} from '@material-ui/core'

class Bar extends Component {
    render(){
        return (
            <AppBar>
                <Toolbar variant={this.props.variant}>
                    <Typography variant='h6' color='inherit'>
                        {this.props.name}
                    </Typography>
                </Toolbar>
            </AppBar>
        )
    }
}

export default Bar