import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartModule } from 'angular-highcharts';
import { AdminGuard } from './guards/admin.guard';
import { NgxSpinnerModule } from 'ngx-spinner';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
 
import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FinanceiroCadastroComponent } from './components/financeiro-cadastro/financeiro-cadastro.component';
import { FinanceiroConsultaComponent } from './components/financeiro-consulta/financeiro-consulta.component';
import { FinanceiroEdicaoComponent } from './components/financeiro-edicao/financeiro-edicao.component';
 
@NgModule({
  declarations: [
    DashboardComponent,
    FinanceiroCadastroComponent,
    FinanceiroConsultaComponent,
    FinanceiroEdicaoComponent
  ],
  imports: [
    CommonModule,
    ChartModule,
    AdminRoutingModule,
    NgxSpinnerModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  providers: [
    AdminGuard
  ]
})
export class AdminModule { }
 


