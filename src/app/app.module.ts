import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AngularTreeTableModule } from 'angular-tree-table';
import { AppComponent } from './app.component';
import { BasicComponent } from './components/basic/basic.component';
import { ExpandableComponent } from './components/expandable/expandable.component';
import { ServerSideComponent } from './components/server-side/server-side.component';
import { SelectComponent } from './components/select/select.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicComponent,
    ExpandableComponent,
    ServerSideComponent,
    SelectComponent
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
