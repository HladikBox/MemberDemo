import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MemberConsumeDetailPage } from './member-consume-detail';

@NgModule({
  declarations: [
    MemberConsumeDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(MemberConsumeDetailPage),
  ],
})
export class MemberConsumeDetailPageModule {}
