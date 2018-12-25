import React, { Component } from 'react'
import { Paper } from '@material-ui/core'
import Bar from './AppBar.jsx'

class Preview extends Component {

    componentDidUpdate(){
        document.querySelector('#preview').innerHTML = this.props.htmlValue
    }


    render(){
        return (
            <div>
                <Paper>
                    <Bar name='Preview' variant='dense' color='secondary'/>
                    <div id='preview'>
                    </div>
                </Paper>
            </div>
        )
    }
}

export default Preview