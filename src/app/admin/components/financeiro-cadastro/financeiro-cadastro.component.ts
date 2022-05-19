import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { FinanceiroService } from '../../services/financeiro.service';
import { Financeiro } from '../../models/financeiro.model';
@Component({
  selector: 'app-financeiro-cadastro',
  templateUrl: './financeiro-cadastro.component.html',
  styleUrls: ['./financeiro-cadastro.component.css']
})
export class FinanceiroCadastroComponent implements OnInit {
  mensagem: string = '';
  constructor(
    private financeiroService: FinanceiroService,
    private spinner: NgxSpinnerService
  ) { }
  formCadastro = new FormGroup({
    nomeMovimentacao: new FormControl('', [Validators.required]),
    dataMovimentacao: new FormControl('', [Validators.required]),
    valor: new FormControl('', [Validators.required]),
    tipo: new FormControl('', [Validators.required]),
  });
  get form(): any {
    return this.formCadastro.controls;
  }
  ngOnInit(): void {
  }
  onSubmit():void{
    this.spinner.show()

    this.financeiroService.postMovimentacao(this.formCadastro.value)
    .then(

      (data: Financeiro) => {
        this.mensagem = " Movimentação feita com sucesso" + data.dataMovimentacao;
        this.formCadastro.reset();
      }
    )
    // .catch() error 
    .finally(
      () => { this.spinner.hide();}
    )
  }
}