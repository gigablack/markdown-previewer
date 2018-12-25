import React , { Component } from 'react'
import Bar from './Components/AppBar.jsx'
import { Grid } from '@material-ui/core'
import Editor from './Components/Editor.jsx'
import Preview from './Components/Preview.jsx'
import marked from 'marked'

class App extends Component {
    constructor(){
        super()
        this.state = {
            value: `# h1 \n\n## h2 \n\n[Google](https://google.com) \n\n\`let greeting = 'hello world'\` \n\n\`\`\`javascript \n\nlet greeting = 'hello world' \n\nalert(greeting) \n\n\`\`\` \n\n> this is a blackquote \n1. first element \n2. second element \n3. third element \n\n* first element unordered list \n* second element unordered list \n* third element unordered list \n\n*this is a cursive text* \n\n**this is a bold text** \n\n![react logo](https://www.theblocklearning.com/wp-content/uploads/2018/09/1_qUlxDdY3T-rDtJ4LhLGkEg.png)`,
            htmlValue: ''
        }
    }

    componentDidMount(){
        this.setState({
            htmlValue: marked(this.state.value)
        })
    }

    changeValue = (e) => {
        marked.setOptions({
            breaks: true
        })
        this.setState({
            value: e.target.value,
            htmlValue: marked(e.target.value)
        })
    }


    render(){
        return (
            <div id="app" style={{height:'100vh'}}>
                <Grid container>
                    <Bar name='Markdown Previewer'/>
                </Grid>
                <Grid container style={{padding: '20px'}} spacing={24}>
                    <Grid item xs={6}>
                        <Editor change={this.changeValue} value={this.state.value}/>
                    </Grid>
                    <Grid item xs={6}>
                        <Preview htmlValue={this.state.htmlValue}/>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default App