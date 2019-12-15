import React, { Component } from 'react';
import './style.scss';
import { Line } from 'react-chartjs-2';
import 'chartjs-plugin-lineheight-annotation';

class Charts extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   data: {
    //     labels: ['January', 'February', 'March', 'April', 'June'],
    //     datasets: [
    //         {
    //           label: "Calories",
    //           backgroundColor: "rgba(255, 0, 255, 0.75)",
    //           data: [2500, 3700, 2500, 3900, 2500, 3450, 4400]
    //         }
    //         ,
    //       {
    //         label: 'Volume',
    //         backgroundColor: 'rgba(0, 255, 0, 0.75)',
    //         data: [2300, 2400, 2500, 2600, 2500, 2000, 1800]
    //       }
    //     ]
    //   }
    // };
  }

  setGradientColor = (canvas, color) => {
    const ctx = canvas.getContext('2d');
    console.log(ctx);
    const gradient = ctx.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, color);

    return gradient;
  };

  getChartData = canvas => {
    const data = this.state.data;
    if (data.datasets) {
      let colors = ['rgba(255, 0, 0, 0.75)', 'rgba(0, 0, 255, 0.75)'];
      data.datasets.forEach((set, i) => {
        set.backgroundColor = this.setGradientColor(canvas, colors[i]);
        set.borderColor = 'firebrick';
        set.borderWidth = 2;
      });
    }
    return data;
  };

  render() {
    return (
      <div className='container-fluid' style={{ position: 'relative' }}>
        <Line
          options={{
            responsive: true,
            lineHeightAnnotation: {
              always: false,
              hover: true,
              color: 'white',
              noDash: true
            }
          }}
          data={this.getChartData}
        />
      </div>
    );
  }
}

export default Charts;
