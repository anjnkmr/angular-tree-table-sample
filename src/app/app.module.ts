import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AngularTreeTableModule } from 'angular-tree-table';
import { AppComponent } from './app.component';
import { BasicComponent } from './components/basic/basic.component';
import { ExpandableComponent } from './components/expandable/expandable.component';
import { ServerSideComponent } from './components/server-side/server-side.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicComponent,
    ExpandableComponent,
    ServerSideComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularTreeTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
