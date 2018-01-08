import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MemberSuperPage } from './member-super';

@NgModule({
  declarations: [
    MemberSuperPage,
  ],
  imports: [
    IonicPageModule.forChild(MemberSuperPage),
  ],
})
export class MemberSuperPageModule {}
