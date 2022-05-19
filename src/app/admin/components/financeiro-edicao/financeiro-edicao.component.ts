import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { ActivatedRoute } from '@angular/router';
import { Financeiro } from '../../models/financeiro.model';
import { FinanceiroService } from '../../services/financeiro.service';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-financeiro-edicao',
  templateUrl: './financeiro-edicao.component.html',
  styleUrls: ['./financeiro-edicao.component.css']
})
export class FinanceiroEdicaoComponent implements OnInit {

  mensagem: string = '';

  constructor(
    private spinner: NgxSpinnerService,
    private financeiroService: FinanceiroService,
    private activatedRoute: ActivatedRoute
  ) { }

  formEdicao = new FormGroup({
    idMovimentacaoFinanceira: new FormControl('', []),
    nomeMovimentacao: new FormControl('', [Validators.required]),
    dataMovimentacao: new FormControl('', [Validators.required]),
    valor: new FormControl('', [Validators.required]),
    tipo: new FormControl('', [Validators.required]),
  });

  get form(): any {
    return this.formEdicao.controls;
  }

  ngOnInit(): void {
    let id = this.activatedRoute.snapshot.paramMap.get('id') as string;
    this.spinner.show();
    this.financeiroService.getMovimentacao(id)
      .then(
        (data: Financeiro) => {
          this.formEdicao.patchValue(data);
          this.formEdicao.controls['dataMovimentacao'].setValue(formatDate(data.dataMovimentacao as Date, 'yyyy-MM-dd', 'en'));
        }
      )
      .finally(
        () => { this.spinner.hide(); }
      )
  }

  onSubmit(): void {
    this.spinner.show();
    this.financeiroService.putMovimentacao(this.formEdicao.value)
      .then(
        (data: Financeiro) => {
          this.mensagem = `Movimentação financeira '${data.nomeMovimentacao}' atualizada com sucesso.`
        }
      )
      .finally(
        () => { this.spinner.hide(); }
      )
  }

}


