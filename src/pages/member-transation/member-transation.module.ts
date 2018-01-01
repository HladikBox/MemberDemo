import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MemberTransationPage } from './member-transation';

@NgModule({
  declarations: [
    MemberTransationPage,
  ],
  imports: [
    IonicPageModule.forChild(MemberTransationPage),
  ],
})
export class MemberTransationPageModule {}
