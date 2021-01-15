import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
import { Options } from 'highcharts';
import { BrowserModule } from '@angular/platform-browser';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-line-kpi',
  templateUrl: './line-kpi.component.html',
  styleUrls: ['./line-kpi.component.scss']
})
export class LineKpiComponent{
 

    single2: any[]=[{
        "name": "Breakdowns",
        "value": 85
      },
      {
        "name": "Setup & Adjustments",
        "value": 118
      },
      {
        "name": "Small Stops",
        "value": 42
      },
        {
        "name": "Production Rejects",
        "value": 95
      },
      {
      "name": "Start-up Rejects",
      "value": 35
    }]
  
    // options
    gradient: boolean = true;
    showLegend: boolean = true;
    showLabels: boolean = true;
    isDoughnut: boolean = false;
  
    colorScheme2 = {
      domain: ['#045e1d', '#2308cf', '#ffee00', '#00ffea', '#e31a10']
    };

    single: any[]= [{
        "name": "Target",
        "value": 5500000
      },
      {
        "name": "Good Count",
        "value": 3006840
      },
      {
        "name": "Bad Count",
        "value": 23160
      },];
  
    colorScheme = {
      domain: ['#1A6177', '#1A6177', '#1A6177']
    };
    cardColor: string = '#f5f5f5';
    
  
    onSelect(event) {
      console.log(event);
    }

  Highcharts: typeof Highcharts = Highcharts;

    chartOptions: Options = {
    chart: {
        width: 1200,
    },
 
    title:{
        text: null
    },
    yAxis: {
        title: {
        text: ''
        },
        lineWidth: 0,
        gridLineWidth: 0,
        lineColor: 'transparent',
        minorTickLength: 0,
        tickLength: 0,
        labels: {
        enabled: false
        },
    },
    tooltip:{
        shared: false,
        useHTML: true
    },
    plotOptions: {
        column: {
            pointPadding: 0,
            groupPadding: 2,
            pointWidth: 80,
          }
      },
    xAxis: {
        min: 0,
        crosshair: true, //hover effect of column
        lineWidth: 0, //removes axis line
        gridLineWidth: 0, //removes charts background line
        lineColor: 'transparent',
        minorTickLength: 0, //removes minor axis ticks 
        tickLength: 0, //removes  axis ticks 
        labels: {
          enabled: false
        },
     },
 
    legend: {
        enabled: false
    },
 
    
    series: [{
        type: 'column',
        zones: [{
            value: 100,
            color: '#00F6FF'
        }],
        dataLabels: {
            enabled: false,
        },
        // dataSorting: {
        //     enabled: true,
        //     sortKey: 'y'
        // },
        data: [["Jan'20",92],["Feb'20",93],["March'20",95],["April'20",92],["May'20",91],["June'20",93],["July'20",94],["August'20",95],["Sep'20",93.5],["Oct'20",92]],
        tooltip: {
            valueSuffix: ' mm'
          }
    }]
 
}

chartOptions2: Options = {
    chart: {
        width: 1200,
    },
 
    title:{
        text: null
    },
    yAxis: {
        min: 0,
        title: {
        text: ''
        },
        lineWidth: 0,
        gridLineWidth: 0,
        lineColor: 'transparent',
        minorTickLength: 0,
        tickLength: 0,
        labels: {
        enabled: false
        },
    },
    tooltip:{
        shared: false,
        useHTML: true
    },
    plotOptions: {
        column: {
            pointPadding: 0,
            groupPadding: 2,
            pointWidth: 80,
          }
      },
    xAxis: {
        crosshair: true, //hover effect of column
        lineWidth: 0, //removes axis line
        gridLineWidth: 0, //removes charts background line
        lineColor: 'transparent',
        minorTickLength: 0, //removes minor axis ticks 
        tickLength: 0, //removes  axis ticks 
        labels: {
          enabled: false
        },
     },
 
    legend: {
        enabled: false
    },
 
    
    series: [{
        type: 'column',
        zones: [{
            value: 100,
            color: '#22696B'
        }],
        dataLabels: {
            enabled: false,
        },
        // dataSorting: {
        //     enabled: true,
        //     sortKey: 'y'
        // },
        data: [["Jan'20",92],["Feb'20",93],["March'20",95],["April'20",92],["May'20",91],["June'20",93],["July'20",94],["August'20",95],["Sep'20",93.5],["Oct'20",92]],
        tooltip: {
            valueSuffix: ' mm'
          }
    }]
 
}

chartOptions3: Options = {
    chart: {
        width: 2000,
        backgroundColor: '#f5f5f5'
    },
 
    title:{
        text: null
    },
    yAxis: {
        title: {
        text: ''
        },
        lineWidth: 0,
        gridLineWidth: 0,
        lineColor: 'transparent',
        minorTickLength: 0,
        tickLength: 0,
        labels: {
        enabled: false
        },
    },
    tooltip:{
        shared: false,
    },
    plotOptions: {
        line: {
            animation: true,
          lineWidth: 20,
          shadow: false,
          states: {
            hover: {
              lineWidth: 10
            }
          },
          marker: {
            radius: 40,
            states: {
              hover: {
                radius: 25
              }
            }
          },
          }
      },
    xAxis: {
        crosshair: true,
        lineWidth: 0, //removes axis line
        gridLineWidth: 0, //removes charts background line
        lineColor: 'transparent',
        minorTickLength: 0, //removes minor axis ticks 
        tickLength: 0, //removes  axis ticks 
        labels: {
          enabled: false
        },
     },
 
    legend: {
        enabled: false
    },
 
    
    series: [{
        type: 'line',
        zones: [{
            value: 100,
            color: '#3D6074'
        }],
        dataLabels: {
            enabled: false,
        },
        // dataSorting: {
        //     enabled: true,
        //     sortKey: 'y'
        // },
        data: [["Jan'20",92],["Feb'20",93],["March'20",95],["April'20",92],["May'20",91],["June'20",93],["July'20",94],["August'20",95],["Sep'20",93.5],["Oct'20",92]],
        tooltip: {
            valueSuffix: ' mm'
          }
    }]
 
}

speedOptions:Highcharts.Options = {   
    chart: {
      type: 'solidgauge',
    //   margin:[0,0,0,0]
      
  },
  
  title: null,
  
  
  pane: {
    center: ['50%', '66%'],
    size: '130%',
    startAngle: -120,
    endAngle: 120,
      background: [{
          backgroundColor:
              'transparent',
          innerRadius: '85%',
          outerRadius: '100%',
          shape: 'arc'
      }]
  },
  
  exporting: {
      enabled: false
  },
  
  tooltip: {
      enabled: false
  },
  
  // the value axis
  yAxis: {
      stops: [
          [90, '#55BF3B'], // green
          [80, '#DDDF0D'], // yellow
          [70, '#DF5353'] // red
      ],
      lineWidth: 0,
      tickWidth: 0,
      minorTickInterval: null,
      tickAmount: 2,
      min:0,
      max:100,
      title: {
         
      },
      labels: {
          y: 12
      }
  },
  
  plotOptions: {
      solidgauge: {
        'innerRadius': '85%',
          dataLabels: {
              y: 5,
              borderWidth: 0,
              useHTML: true
          }
      }
  },
  
  
  credits: {
    enabled: false
  },
  
  series: [
      {
          type: 'solidgauge',
          data:[95],
         
      }
  ]
  };

}
