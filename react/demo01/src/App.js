import React,{Component} from 'react' //解构赋值
// import React from 'react'
// const Component = React.Component

class App extends Component{
    render(){
        return(
            // JSX
            <ul className="my-list">
                <li>{false? 'SHSHSH' : '艾斯比'}</li>
                <li>kunkunHSH</li>
            </ul>
        )
        // var child1 = React.createElement('li',null, 'JSP.com')
        // var child2 = React.createElement('li',null,'JSP.com')
        // var root = React.createElement('li',{className:'my-list'}, child1,child2)
    }
}

export default App