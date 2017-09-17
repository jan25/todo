

import {NgModule} from '@angular/core';
import {MdListModule} from '@angular/material';

const IMPORTS = [
  MdListModule
];

@NgModule({
  imports: IMPORTS,
  exports: IMPORTS
})
export class MdImportsModule { }
