import React from 'react';
import './InvestmentCategory.scss'

class InvestmentCategory extends React.Component {
    constructor(props) {
        super();
        this.minimum = props.minimum
        this.state = {
            percentage: this.minimum,
            belowMinimum: false
        }
        this.increasePercent = this.increasePercent.bind(this);
        this.decreasePercent = this.decreasePercent.bind(this);
    }

    increasePercent() {
        if (this.state.percentage < 100) {
            this.setState(state => ({
                percentage: state.percentage + 1
            }));
            this.props.useMore()
        }
        // concurrent so check if it's just under the threshold
        if (this.state.percentage === this.minimum - 1) {
            this.setState({
                belowMinimum: false
            })
        }
    }

    decreasePercent() {
        if (this.state.percentage > 0) {
            this.setState(state => ({
                percentage: state.percentage - 1
            }));
            this.props.useLess()
        }
        if (this.state.percentage <= this.minimum) {
            this.setState({
                belowMinimum: true
            })
        }
    }

    render() {
        return (
            <div className="investment">
                <div className="category">
                    <b>{this.props.category}</b>
                    {this.state.belowMinimum ? 
                    <span class="warning" data-icon="❗">Minimum: {this.minimum}%</span> : <span></span>}
                    
                </div>
                <div className="percent" id={this.state.belowMinimum ? "red" : "black"}>
                    {this.state.percentage}.00 %
                </div>

                <div className="arrows">
                     <div className="up" onClick={this.increasePercent}></div>
                     <div className="down" onClick={this.decreasePercent}></div>
                </div>
            </div>


        );
    }
}

export default InvestmentCategory;
