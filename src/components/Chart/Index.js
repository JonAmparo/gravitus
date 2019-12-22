import React, { Component } from 'react';
import classes from './IndexChart.module.css';
import LineGraph from './LineGraph';
import chartIcon from '../../assets/images/chart-icon.svg';
import {
  caloriesData,
  volumeAverageData,
  yearLabels,
  caloriesQuarterData,
  volumeAverageQuarterData,
  quarterLabels,
  weightData,
  weightQuarterData
} from '../../assets/data/chartData';

export default class Dashboard extends Component {
  state = {
    data: caloriesData,
    average: volumeAverageData,
    labels: yearLabels,
    visits: weightData
  };

  handleButtonClick = e => {
    const { value } = e.target;
    const isAnnual = value === 'annual';

    const newData = isAnnual ? caloriesData : caloriesQuarterData;
    const newLabels = isAnnual ? yearLabels : quarterLabels;
    const newAverage = isAnnual ? volumeAverageData : volumeAverageQuarterData;
    const newVisits = isAnnual ? weightData : weightQuarterData;

    this.setState({
      data: newData,
      average: newAverage,
      labels: newLabels,
      visits: newVisits
    });
  };

  render() {
    const { data, average, labels, visits } = this.state;

    return (
      <div className={classes.container}>
        <header>
          <img src={chartIcon} alt='bar chart icon' className='iconchart' />
          <h1>Dashboard</h1>
        </header>

        <div className={classes.buttonContainer}>
          <button value='annual' onClick={this.handleButtonClick}>
            Annual
          </button>

          <button value='lastquarter' onClick={this.handleButtonClick}>
            Quarter
          </button>
        </div>

        <LineGraph
          data={data}
          average={average}
          labels={labels}
          visits={visits}
        />
      </div>
    );
  }
}
