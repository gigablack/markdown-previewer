import React , { Component } from 'react'
import Bar from './Components/AppBar.jsx'

class App extends Component {
    render(){
        return (
            <div id="app" style={{height:'100vh'}}>
                <Bar name='Markdown Previewer' variant='regular'/>
            </div>
        )
    }
}

export default App