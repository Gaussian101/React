import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Calculator extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>Hello</div>
        )
    }
}

ReactDOM.render(
    <Calculator />,
    document.getElementById('root')
);