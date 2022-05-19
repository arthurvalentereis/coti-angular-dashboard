import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { FinanceiroService } from '../../services/financeiro.service';
 
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
 
  graficoTipos: Chart = new Chart();
  graficoPeriodo: Chart = new Chart();
 
  constructor(
    private financeiroService: FinanceiroService
  ) { }
 
  ngOnInit(): void {
 
    this.financeiroService.getTiposMovimentacao()
      .then(
        (data) => {
          this.graficoTipos = new Chart({
            chart: {
              type: 'pie',
            },
            plotOptions: {
              pie: {
                innerSize: '60%'
              }
            },
            title: {
              text: 'Comparativo Receitas / Despesas'
            },
            subtitle: {
              text: 'Treinamento Angular / Infis'
            },
            series: [
              { data: data as any[], type: undefined as any }
            ],
            legend: {
              enabled: false
            },
            credits: {
              enabled: false
            }
          });
        }
      )
 
    this.financeiroService.getPeriodoMovimentacao()
      .then(
        (data) => {
          this.graficoPeriodo = new Chart({
            chart: {
              type: 'line',
            },
            title: {
              text: 'Saldo por período'
            },
            subtitle: {
              text: 'Resultado consolidado'
            },
            series: [
              { data: data as any[], type: undefined as any }
            ],
            xAxis: {
              title: {
                text: 'Períodos'
              }
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
      )
  }
}


