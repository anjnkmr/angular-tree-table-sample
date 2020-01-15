import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BasicComponent } from './components/basic/basic.component';
import { ExpandableComponent } from './components/expandable/expandable.component';
import { ServerSideComponent } from './components/server-side/server-side.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'basic',
    pathMatch: 'full'
  },
  {
    path: 'basic',
    component: BasicComponent
  },
  {
    path: 'expandable',
    component: ExpandableComponent
  },
  {
    path: 'server-side',
    component: ServerSideComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
