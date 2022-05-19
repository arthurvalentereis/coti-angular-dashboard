import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from './guards/admin.guard';
 
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FinanceiroCadastroComponent } from './components/financeiro-cadastro/financeiro-cadastro.component';
import { FinanceiroConsultaComponent } from './components/financeiro-consulta/financeiro-consulta.component';
import { FinanceiroEdicaoComponent } from './components/financeiro-edicao/financeiro-edicao.component';
 
const routes: Routes = [
  {
    path: 'admin/dashboard',
    component: DashboardComponent,
    canActivate: [AdminGuard]
  },
  {
    path: 'admin/financeiro-cadastro',
    component: FinanceiroCadastroComponent,
    canActivate: [AdminGuard]
  },
  {
    path: 'admin/financeiro-consulta',
    component: FinanceiroConsultaComponent,
    canActivate: [AdminGuard]
  },
  {
    path: 'admin/financeiro-edicao/:id',
    component: FinanceiroEdicaoComponent,
    canActivate: [AdminGuard]
  },
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
 



