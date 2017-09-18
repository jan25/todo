

import {NgModule} from '@angular/core';
import {
  MdDialogModule, MdListModule, MdButtonModule, MdCardModule, MdIconModule, MdToolbarModule, MdRadioButton,
  MdRadioModule, MdFormFieldModule
} from '@angular/material';

const IMPORTS = [
  MdListModule,
  MdCardModule,
  MdDialogModule,
  MdButtonModule,
  MdIconModule,
  MdToolbarModule,
  MdRadioModule,
  MdFormFieldModule
];

@NgModule({
  imports: IMPORTS,
  exports: IMPORTS
})
export class MdImportsModule { }
