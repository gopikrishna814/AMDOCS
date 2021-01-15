import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import * as Highcharts from 'highcharts';
import { Options } from 'highcharts';
import Highchartsbullet from 'highcharts/modules/bullet';

Highchartsbullet(Highcharts);





@Component({
  selector: 'app-kanbanmachinelevel',
  templateUrl: './kanbanmachinelevel.component.html',
  styleUrls: ['./kanbanmachinelevel.component.scss']
})
export class KanbanmachinelevelComponent implements OnInit {

  constructor(private ss : DataService) { }
  chartsdata:any=this.ss.chartsdata
  secondchartsdata:any=this.ss.secondchartsdata

  bulletdata: [{
             y: 1650,
            target: 2100
        }]


  bullet =Highcharts;
  bulletOptions= {
       
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
      color:'#080101'
  }],
  tooltip: {
      pointFormat: '<b>{point.y}</b> (with target at {point.target})'
  },
  credits: {
      enabled: false
  }
  }


  highcharts1 = Highcharts;
  chartOptions1 = {   
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
        '7',
        '8',
        '9',
        '10',
        '11',
        '12pm',
        '1 ',
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
      }
    },
    series: [{
      name: '',
      data: [42.4, 33.2, 34.5, 39.7, 52.6, 75.5, 57.4, 60.4, 47.6, 39.1, 46.8, 51.1]
  
    }]
  };

  highcharts2 = Highcharts;
  chartOptions2 = {   
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
        '7',
        '8',
        '9',
        '10',
        '11',
        '12pm',
        '1 ',
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
      }
    },
    series: [{
      name: '',
      data: [42.4, 33.2, 34.5, 39.7, 52.6, 75.5, 57.4, 60.4, 47.6, 39.1, 46.8, 51.1]
  
    }]
  };

  highcharts3 = Highcharts;
  chartOptions3 = {   
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
        '7',
        '8',
        '9',
        '10',
        '11',
        '12pm',
        '1 ',
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
      }
    },
    series: [{
      name: '',
      data: [42.4, 33.2, 34.5, 39.7, 52.6, 75.5, 57.4, 60.4, 47.6, 39.1, 46.8, 51.1]
  
    }]
  };

  highcharts4 = Highcharts;
  chartOptions4 = {   
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
        '7',
        '8',
        '9',
        '10',
        '11',
        '12pm',
        '1 ',
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
      }
    },
    series: [{
      name: '',
      data: [42.4, 33.2, 34.5, 39.7, 52.6, 75.5, 57.4, 60.4, 47.6, 39.1, 46.8, 51.1]
  
    }]
  };
  
  highcharts5 = Highcharts;
  chartOptions5 = {   
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
        '7',
        '8',
        '9',
        '10',
        '11',
        '12pm',
        '1 ',
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
      }
    },
    series: [{
      name: '',
      data: [42.4, 33.2, 34.5, 39.7, 52.6, 75.5, 57.4, 60.4, 47.6, 39.1, 46.8, 51.1]
  
    }]
  };

  highcharts6 = Highcharts;
  chartOptions6 = {   
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
        '7',
        '8',
        '9',
        '10',
        '11',
        '12pm',
        '1 ',
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
      }
    },
    series: [{
      name: '',
      data: [42.4, 33.2, 34.5, 39.7, 52.6, 75.5, 57.4, 60.4, 47.6, 39.1, 46.8, 51.1]
  
    }]
  };



  ngOnInit() {
  }

}
