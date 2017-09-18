

import {NgModule} from '@angular/core';
import {MdDialogModule, MdListModule, MdButtonModule, MdCardModule} from '@angular/material';

const IMPORTS = [
  MdListModule,
  MdCardModule,
  MdDialogModule,
  MdButtonModule
];

@NgModule({
  imports: IMPORTS,
  exports: IMPORTS
})
export class MdImportsModule { }
