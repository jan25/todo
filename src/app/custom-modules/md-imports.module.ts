

import {NgModule} from '@angular/core';
import {MdDialogModule, MdListModule, MdButtonModule, MdCardModule, MdIconModule} from '@angular/material';

const IMPORTS = [
  MdListModule,
  MdCardModule,
  MdDialogModule,
  MdButtonModule,
  MdIconModule
];

@NgModule({
  imports: IMPORTS,
  exports: IMPORTS
})
export class MdImportsModule { }
