import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Financeiro } from '../../models/financeiro.model';
import { FinanceiroService } from '../../services/financeiro.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-financeiro-consulta',
  templateUrl: './financeiro-consulta.component.html',
  styleUrls: ['./financeiro-consulta.component.css']
})
export class FinanceiroConsultaComponent implements OnInit {

  movimentacoes = new MatTableDataSource<Financeiro>();
  displayedColumns: string[] = ['nomeMovimentacao', 'dataMovimentacao', 'valor', 'tipo', 'actions'];

  @ViewChild('paginator') paginator: MatPaginator | null = null;

  mensagem: string = '';

  constructor(
    private spinner: NgxSpinnerService,
    private financeiroService: FinanceiroService
  ) { }

  ngOnInit(): void {
    this.spinner.show();
    this.financeiroService.getMovimentacoes()
      .then(
        (data: Financeiro[]) => {
          this.movimentacoes.data = data;
          this.movimentacoes.paginator = this.paginator;
          if(this.paginator != null){
            this.paginator._intl.itemsPerPageLabel = 'Itens por página';
          }
        }
      )
      .finally(
        () => { this.spinner.hide(); }
      )
  }

  excluir(id: string): void {
    if (window.confirm('Deseja realmente excluir o registro?')) {
      this.spinner.show();
      this.financeiroService.deleteMovimentacao(id)
        .then(
          (data: Financeiro) => {
            this.mensagem = `Movimentação '${data.nomeMovimentacao}' excluída com sucesso.`;
            this.ngOnInit();
          }
        )
        .finally(
          () => { this.spinner.hide(); }
        )
    }
  }

}



