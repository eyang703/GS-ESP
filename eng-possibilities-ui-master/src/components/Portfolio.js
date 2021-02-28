import React from 'react';
import InvestmentCategory from './InvestmentCategory';
import './Portfolio.scss'
import {investments} from '../data'

class Portfolio extends React.Component {
    constructor() {
        super();
        this.state = {
            used: investments.reduce(function (acc, obj) { return acc + obj.minimum; }, 0)
        }
        this.useMore = this.useMore.bind(this);
        this.useLess = this.useLess.bind(this);
    }

    useMore() {
        this.setState({
            used: this.state.used + 1
        })
    }

    useLess() {
        this.setState({
            used: this.state.used - 1
        })
    }

    render() {
        var invs = []
        investments.forEach((inv) => {
            invs.push(<InvestmentCategory category={inv.category} minimum={inv.minimum} useMore={this.useMore} useLess={this.useLess}/>)
        })
        return (
            <div className="portfolio">
                <div class="center">
                   <h1>My portfolio</h1>
                </div>
                <div className="spacer">
                </div>
                <div className="test2">
                    {
                        invs
                    }
                </div>
                
            </div>
        );
    }
}

export default Portfolio;
