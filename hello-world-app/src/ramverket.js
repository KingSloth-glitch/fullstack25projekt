import React, {component} from 'react';

class counter extends component {
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
                <h2>Antal klick: {this.state.count}</h2>
                <button onClick={this.handleClick}>
                    klicka här
                </button>
            </div>
        );
    }
}

export default counter;