import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpFormComponent } from './sign-up-form/sign-up-form.component';
import { InformationComponent } from './information/information.component';

const routes: Routes = [
	{path: '', component: SignUpFormComponent}, 
	{path: 'information', component: InformationComponent}
];
	

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
