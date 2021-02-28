import React from 'react';
import './Widget.scss'

class Widget extends React.Component {
    constructor(props) {
        super();
    }

    render() {
        return (
            <div className="widget">
                {this.props.title}
                <div className={this.props.isNum ? "num" : "desc"}>
                    {this.props.description}
                </div>
            </div>
        );
    }
}

export default Widget;