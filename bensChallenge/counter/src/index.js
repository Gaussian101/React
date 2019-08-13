import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


class App extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            value: 0
        }
    }
    
    renderButton(i) {
        let num = i;
        return (
            <Button
                num={i}
                value={this.state.value}
                onClick={() => this.onClick(this.state.value, num)}
            />
        )
    }

    onClick(prevState, a) {
        if (a === 0) {
            this.setState(
                {
                    value: prevState + 1
                },
                () => {
                }
            )
        }
        else {
            this.setState(
                {
                    value: prevState - 1
                },
                () => {
                }
            )
        }
    }

    render() {
        return (
            <div>
                {this.renderButton(0)}
                <p>{this.state.value}</p>
                {this.renderButton(1)}
            </div>
        )
    }
}

function Button(props) {
    let name = (props.num === 0) ? "+1" : "-1"
    return (
        <div>
            <button onClick={props.onClick}>
                {name}
            </button>
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);  