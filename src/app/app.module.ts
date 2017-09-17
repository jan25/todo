import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AsyncLocalStorageModule} from 'angular-async-local-storage';

import { AppComponent } from './components/app.component';
import {MdImportsModule} from './custom-modules/md-imports.module';

const IMPORTS = [
  BrowserModule,
  BrowserAnimationsModule,
  AsyncLocalStorageModule,

  MdImportsModule
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: IMPORTS,
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
