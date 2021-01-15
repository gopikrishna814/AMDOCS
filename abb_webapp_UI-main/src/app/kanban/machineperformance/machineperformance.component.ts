import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { Options } from 'highcharts';
import More from 'highcharts/highcharts-more';
import Tree from 'highcharts/modules/treemap';
import Heatmap from 'highcharts/modules/heatmap';
import HCSoldGauge from 'highcharts/modules/solid-gauge';
import HighchartsMore from 'highcharts/highcharts-more.src';
import HighchartsSolidGauge from 'highcharts/modules/solid-gauge';
import Highchartsbullet from 'highcharts/modules/bullet';





// HCSoldGauge(Highcharts);
// More(Highcharts);
Tree(Highcharts);
Heatmap(Highcharts);
Highchartsbullet(Highcharts);




@Component({
  selector: 'app-machineperformance',
  templateUrl: './machineperformance.component.html',
  styleUrls: ['./machineperformance.component.scss']
})
export class MachineperformanceComponent implements OnInit {

  

  
     
mychartsdata= [{
  id: 'A',
  name: 'Startup/ production Rejects',
  color: "#169BA6"
}, {
  id: 'B',
  name: 'Rework',
  color: "#169BA6"
}, {
  id: 'O',
  name: 'Incorrect Assembly',
  color: '#169BA6'
}, {
  name: 'Anne',
  parent: 'A',
  value: 5
}, {
  name: 'Rick',
  parent: 'A',
  value: 3
}, {
  name: 'Peter',
  parent: 'A',
  value: 4
}, {
  name: 'Anne',
  parent: 'B',
  value: 4
}, {
  name: 'Rick',
  parent: 'B',
  value: 10
}, {
  name: 'Peter',
  parent: 'B',
  value: 1
}, {
  name: 'Anne',
  parent: 'O',
  value: 1
}, {
  name: 'Rick',
  parent: 'O',
  value: 3
}, {
  name: 'Peter',
  parent: 'O',
  value: 3
}, {
  name: 'in process expiration',
  parent: 'Kiwi',
  value: 2,
  color: '#169BA6'
}];
  
      
  Firstrejections: Options= {   
    chart: {
      type: 'solidgauge',
    //   margin:[0,0,0,0]
    },
  
    title: null,
    pane: {
      center: ['50%', '63%'],
      size: '80%',
      startAngle: -120,
      endAngle: 120,
        background: [{
          backgroundColor:'transparent',
          innerRadius: '80%',
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
      'innerRadius': '80%',
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
  series: [{
      type: 'solidgauge',
      data:[70]
    }]
  };

  
  Quality: Options= {   
    chart: {
      type: 'solidgauge',
    //   margin:[0,0,0,0]
    },
  
    title: null,
    pane: {
      center: ['50%', '63%'],
      size: '125%',
      startAngle: -120,
      endAngle: 120,
        background: [{
          backgroundColor:'transparent',
          innerRadius: '80%',
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
      'innerRadius': '80%',
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
  series: [{
      type: 'solidgauge',
      data:[70]
    }]
  };



   
  treechart =Highcharts;

  treeOptions={
    series: [{
      type: "treemap",
      layoutAlgorithm: 'stripes',
      alternateStartingDirection: true,
      levels: [{
        level: 1,
        layoutAlgorithm: 'sliceAndDice',
        dataLabels: {
          enabled: true,
          align: 'left',
          verticalAlign: 'top',
          style: {
            fontSize: '15px',
            fontWeight: 'bold'
          }
        }
      }],
      data: this.mychartsdata
    }],
    title: {
      text: ''
    },
    credits: {
      enabled: false
  }
  };

  constructor() { HighchartsMore(Highcharts);
    HighchartsSolidGauge(Highcharts);}



 
  bullet =Highcharts;
  bulletOptions={
    chart: {
      inverted: true,
      marginLeft: 70,
      marginRight:70,
      type: 'bullet'
  },
  title: {
      text: null
  },
  legend: {
      enabled: false
  },
    xAxis: {
      categories: ['<span class="hc-cat-title">New Customers</span><br/>Count']
  },
  yAxis: {
      plotBands: [{
          from: 0,
          to: 1400,
          color: '#999999'
      }, {
          from: 1400,
          to: 2000,
          color: '#999'
      }, {
          from: 2000,
          to: 9e9,
          color: '#bbb'
      }],
      labels: {
          format: '{value}'
      },
      title: null
  },
  series: [{
      data: [{
          y: 1650,
          target: 2100
      }],
      color: '#080101'
  }],
  tooltip: {
      pointFormat: '<b>{point.y}</b> (with target at {point.target})'
  },
  credits: {
      enabled: false
  }
  };
    


 


  


gaugeChart: typeof Highcharts = Highcharts;  // performance chart options
performance : Options= {   
  chart: {
    type: 'solidgauge',
  //   margin:[0,0,0,0]
  },

  title: null,
  pane: {
    center: ['50%', '63%'],
    size: '125%',
    startAngle: -120,
    endAngle: 120,
      background: [{
        backgroundColor:'transparent',
        innerRadius: '80%',
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
    'innerRadius': '80%',
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
series: [{
    type: 'solidgauge',
    data:[70]
  }]
};



  mytreedata=[];
   
  highcharts = Highcharts;
  chartOptions = {   
     chart: {
      type: 'column'
    },
    credits: {
      enabled: false
  },
    title: {
      text: ''
    },
    legend: {
      enabled: false
  },
    
    subtitle: {
      // text: 'Source: WorldClimate.com'
    },
    xAxis: {
      categories: [
        '6 am',
        '7 ',
        '8 ',
        '9 ',
        '10 ',
        '11',
        '12 pm',
        '1',
        '2',
        '3',
        '4',
        '5'
      ],
      crosshair: true
    },
    yAxis: {
      min: 0,
      title: {
        text: ''
      }
    },
    tooltip: {
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
      footerFormat: '</table>',
      shared: true,
      useHTML: true
    },
    plotOptions: {
      column: {
        pointPadding: 0.2,
        borderWidth: 0
      },
      series: {
        point:{
        events: {}
        }
    }
    },
    series: [{
      name: '',
      data: [42.4, 33.2, 34.5, 39.7, 52.6, 75.5, 57.4, 60.4, 47.6, 39.1, 46.8, 51.1]
  
    }]

  };



 



  ngOnInit() {
    Highchartsbullet(Highcharts);
    HighchartsMore(Highcharts);
    
    
  }

}





  
