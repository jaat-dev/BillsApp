import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './components/default/default.component';
import { LoginComponent } from './components/login/login.component';
import { OutcomeCreateComponent } from './components/outcome/outcome-create/outcome-create.component';
import { OutcomeListComponent } from './components/outcome/outcome-list/outcome-list.component';
import { OutcomeUpdateComponent } from './components/outcome/outcome-update/outcome-update.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', component: DefaultComponent, canActivate: [AuthGuard] },
  {
    path: 'outcomes',
    canActivate: [AuthGuard],
    children: [
      { path: '', component: OutcomeListComponent },
      { path: 'create', component: OutcomeCreateComponent },
      { path: ':id/update', component: OutcomeUpdateComponent },
    ],
  },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
