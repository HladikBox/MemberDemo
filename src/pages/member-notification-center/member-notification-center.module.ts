import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MemberNotificationCenterPage } from './member-notification-center';

@NgModule({
  declarations: [
    MemberNotificationCenterPage,
  ],
  imports: [
    IonicPageModule.forChild(MemberNotificationCenterPage),
  ],
})
export class MemberNotificationCenterPageModule {}
