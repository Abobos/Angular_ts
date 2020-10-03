import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersonInputComponent } from './persons/person-input.component';
import { PersonsComponent } from './persons/persons.component';

const routes: Routes = [
  { path: '', component: PersonsComponent },
  { path: 'input', component: PersonInputComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
