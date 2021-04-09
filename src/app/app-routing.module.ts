import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdvancedSearchComponent } from './advanced-search/advanced-search.component';
import { HomeComponent } from './home/home.component';
import { InternshipDetailsComponent } from './internship-details/internship-details.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'advanced-search', component: AdvancedSearchComponent},
  {path: 'internship-details/:id', component: InternshipDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [AdvancedSearchComponent, 
HomeComponent, InternshipDetailsComponent]