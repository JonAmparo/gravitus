import React, { Component } from 'react';
import { Chart } from 'react-chartjs-2';
import 'chartjs-plugin-lineheight-annotation';
import classes from './LineGraph.module.css';
let myLineChart;

class LineGraph extends Component {
  chartRef = React.createRef();

  componentDidMount() {
    this.buildChart();
  }

  componentDidUpdate() {
    this.buildChart();
  }

  buildChart = () => {
    const myChartRef = this.chartRef.current.getContext('2d');
    const {
      data,
      average,
      labels,
      visits
    } = this.props;

    if (typeof myLineChart !== 'undefined') myLineChart.destroy();

    // const { width: graphWidth, height: graphHeight } = myChartRef.canvas;
    let width = window.innerWidth || document.body.clientWidth;
    // let gradientLine = myChartRef.createLinearGradient(0, 0, graphWidth * 2, 0);

    let gradientLine = myChartRef.createLinearGradient(0, 0, width, 0);
    gradientLine.addColorStop(0, '#7C4DFF');
    gradientLine.addColorStop(0.3, '#448AFF');
    gradientLine.addColorStop(0.6, '#00BCD4');
    gradientLine.addColorStop(1, '#1DE9B6');

    let gradientLine2 = myChartRef.createLinearGradient(0, 0, width, 0);
    gradientLine2.addColorStop(0, '#F44336');
    gradientLine2.addColorStop(0.3, '#F50057');
    gradientLine2.addColorStop(0.6, '#FF4081');
    gradientLine2.addColorStop(1, '#FF9100');

    let gradientLine3 = myChartRef.createLinearGradient(0, 0, width, 0);
    gradientLine3.addColorStop(0, '#3C365E');
    gradientLine3.addColorStop(0.3, '#2EC4B6');
    gradientLine3.addColorStop(0.6, '#FFF04C');
    gradientLine3.addColorStop(1, '#003049');

    myLineChart = new Chart(myChartRef, {
      type: 'line',
      data: {
        // Protect yourself from label errors
        // labels: labels.length === data.length ? labels : new Array(data.length).fill("Data"),
        //Bring in data
        labels: labels,
        datasets: [
          {
            label: 'Calories',
            data: data,
            fill: false,
            borderColor: gradientLine,
            borderWidth: 4,
            pointBorderColor: gradientLine,
            pointBackgroundColor: gradientLine,
            pointHoverBackgroundColor: gradientLine,
            pointHoverBorderColor: gradientLine,
            pointBorderWidth: 8,
            pointHoverRadius: 8,
            pointHoverBorderWidth: 1,
            pointRadius: 3
          },
          {
            label: 'Volume',
            data: average,
            fill: false,
            borderColor: '#E0E0E0'
          },
          {
            label: 'Weight',
            data: visits,
            fill: false,
            borderColor: gradientLine2,
            borderWidth: 4,
            pointBorderColor: gradientLine2,
            pointBackgroundColor: gradientLine2,
            pointHoverBackgroundColor: gradientLine2,
            pointHoverBorderColor: gradientLine2,
            pointBorderWidth: 8,
            pointHoverRadius: 8,
            pointHoverBorderWidth: 1,
            pointRadius: 3
          }
          // ,
          // {
          //   label: 'Lost',
          //   data: sum,
          //   fill: false,
          //   borderColor: gradientLine3,
          //   borderWidth: 4,
          //   pointBorderColor: gradientLine3,
          //   pointBackgroundColor: gradientLine3,
          //   pointHoverBackgroundColor: gradientLine3,
          //   pointHoverBorderColor: gradientLine3,
          //   pointBorderWidth: 8,
          //   pointHoverRadius: 8,
          //   pointHoverBorderWidth: 1,
          //   pointRadius: 3
          // }
        ]
      },
      // options: {
      //   responsive: true,
      //   maintainAspectRatio: false,
      //   tooltips: {
      //     backgroundColor: '#263238',
      //     callbacks: {
      //       label: (tooltipItem, sum) => {
      //         var label = data.sum[tooltipItem.value].label;
      //         return label;
      //         // return "newark " + `${tooltipItem.value}`;
      //       }
      //     }
      //   },
      //   layout: {
      //     padding: {
      //       top: 5,
      //       left: 15,
      //       right: 15,
      //       bottom: 15
      //     }
      //   }
      // },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        layout: {
          padding: {
            top: 5,
            left: 15,
            right: 15,
            bottom: 15
          }
        }
      },
      scales: {
        yAxes: [
          {
            ticks: {
              fontFamily: 'Roboto Mono',
              fontColor: '#556F7B',
              fontStyle: 'bold',
              beginAtZero: true,
              maxTicksLimit: 5,
              padding: 20
            },
            gridLines: {
              drawTicks: false,
              display: false,
              drawBorder: false
            }
          }
        ],
        xAxes: [
          {
            ticks: {
              padding: 20,
              fontColor: '#556F7B',
              fontStyle: 'bold',
              fontFamily: 'Roboto Mono'
            },
            gridLines: {
              zeroLineColor: 'transparent',
              drawTicks: false,
              display: false,
              drawBorder: false
            }
          }
        ]
      }
    });
  };

  render() {
    return (
      <div className={classes.graphContainer}>
        <canvas id='myChart' ref={this.chartRef} />
      </div>
    );
  }
}

export default LineGraph;
