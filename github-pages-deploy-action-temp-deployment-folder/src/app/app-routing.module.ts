import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BconComponent } from './bcon/bcon.component';
import { HealthComponent } from './health/health.component';
import { JiraComponent } from './jira/jira.component';

const routes: Routes = [
  { path: '', redirectTo: 'bcon', pathMatch:'full'},
  { path: 'bcon', component: BconComponent},
  { path: 'jira', component: JiraComponent},
  { path: 'health', component: HealthComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
