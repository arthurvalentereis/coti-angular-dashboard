import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';
 
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
 
  grafico: Chart = new Chart();
 
  constructor() { }
 
  ngOnInit(): void {
 
    var dados: any[] = [
      { name: 'Baixa', y: 10, color: '#5CB85C' },
      { name: 'Média', y: 8, color: '#F0AD4E' },
      { name: 'Alta', y: 14, color: '#D9534F' },
    ];
 
    var names: any[] = [
      ['BAIXA'], ['MÉDIA'], ['ALTA']
    ]
 
    this.grafico = new Chart({
      chart: {
        type: 'pie',        
      },
      plotOptions: {
        pie: {
          innerSize: '60%'
        }
      },
      title: {
        text: 'Gráfico Modelo'
      },
      subtitle: {
        text : 'Treinamento Angular / Infis'
      },
      series: [
        { data: dados, type: undefined as any }
      ],
      xAxis: {
        categories: names
      },
      yAxis: {
        title: {
          text: 'Valores'
        }
      },
      legend: {
        enabled: false
      },
      credits: {
        enabled: false
      }
    });
  }
 
}
 


