import React, { Component } from 'react'
import {Paper} from '@material-ui/core'
import Bar from './AppBar.jsx'

class Editor extends Component {
    render(){
        return (
            <div>
                <Paper>
                    <Bar variant='dense' name='Editor' color='secondary'/>
                    <textarea name="" id="editor" style={{width: '99%', border:'none',height: '70vh'}} onChange={this.props.change} value={this.props.value}></textarea>
                </Paper>
            </div>
        )
    }
}

export default Editor