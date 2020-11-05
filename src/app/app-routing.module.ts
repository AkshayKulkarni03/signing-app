import { CreateTransactionComponent } from './components/create-transaction/create-transaction.component';
import { OverviewComponent } from './components/overview/overview.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: 'home', component: OverviewComponent },
  { path: 'create', component: CreateTransactionComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
