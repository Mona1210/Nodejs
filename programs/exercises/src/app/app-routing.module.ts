import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildParentComponent } from './child-parent/child-parent.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';


const routes: Routes = [
  { path: 'childparent', component: ChildParentComponent },
	{ path: 'first', component: FirstComponent },
	{ path: 'second', component: SecondComponent },
	{ path: '', redirectTo: '/first', pathMatch:'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
