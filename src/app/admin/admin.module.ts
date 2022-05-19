import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartModule } from 'angular-highcharts';
import { AdminGuard } from './guards/admin.guard';
 
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
    AdminRoutingModule
  ],
  providers: [
    AdminGuard
  ]
})
export class AdminModule { }
 


