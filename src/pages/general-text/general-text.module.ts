import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GeneralTextPage } from './general-text';

@NgModule({
  declarations: [
    GeneralTextPage,
  ],
  imports: [
    IonicPageModule.forChild(GeneralTextPage),
  ],
})
export class GeneralTextPageModule {}
