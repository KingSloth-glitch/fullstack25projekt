import React, {Component} from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    
        }

        handleClick = () => {
            this.setState({
                count: this.state.count + 1
            });
        };

        render() {
            return (
                <div>
                    <h1>Count {this.state.count}</h1>
                    <button onClick={this.handleClick}>
                        Click me
                    </button>
                </div>
            );
        }
    }

    export default Counter;
