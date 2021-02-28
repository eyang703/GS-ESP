import React from "react";
import Portfolio from "../../components/Portfolio";
import Widget from "../../components/Widget";
import './Forecaster.scss'
import "react-vis/dist/style.css";
import {makeWidthFlexible, makeHeightFlexible, XYPlot, XAxis, YAxis, HorizontalGridLines, LineSeries, Crosshair} from 'react-vis';

class ForecasterHome extends React.Component {
  constructor(props) {
      super();
      this.state = {
        crosshairValues: []
      }
  }

  render() {
    const DATA = [
      [
        {x: 0, y: 10000},
        {x: 1, y: 11000},
        {x: 2, y: 10500},
        {x: 3, y: 10000},
        {x: 4, y: 12000},
        {x: 5, y: 13000},
        {x: 6, y: 15500},
        {x: 7, y: 14000},
        {x: 8, y: 16000},
        {x: 9, y: 17000},
        {x: 10, y: 17000},
      ],
    ];

    const FlexibleXYPlot = makeHeightFlexible(makeWidthFlexible(XYPlot))
    var titles = ['Investment Forecaster', 'Predicted Amount', 'Dollar Increase', 'Percent Increase']
    var descriptions = ['This page allows you to customize your investments and view the potential growth of $10,000 over a period of 10 years', '$15,128', '+ $5,128', '51.28%']
    var isnum = [false, true, true, true]
    var widgets = []
    for (var i = 0; i < titles.length; i++) {
      widgets.push(<Widget title={titles[i]} description={descriptions[i]} isNum={isnum[i]}/>)
    }
    return (
      <>
         <div>
              <div>
                <div class="portfolio-section">
                  <Portfolio/>
                </div>
                <div class="not-portfolio-section">
                  <div class="widgets-section">
                    {widgets}
                  </div>
                  <div class="graph-section">
                    <FlexibleXYPlot 
                    margin={{left: 70, right: 50, top: 10, bottom: 50}}
                    onMouseLeave={() => this.setState({crosshairValues: []})}
                    >
                      <HorizontalGridLines />
                      <LineSeries
                        onNearestX={(value, {index}) =>
                      this.setState({crosshairValues: DATA.map(d => d[index])})}
                        data={DATA[0]} 
                        color="#6D9A7D"/>
                        <Crosshair values={this.state.crosshairValues}/>
                      <XAxis />
                      <YAxis />
                    </FlexibleXYPlot>
                  </div>
                </div>
              </div>
            </div>
      </>
    );
  }
}

export default ForecasterHome;