import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MemberWalletPage } from './member-wallet';

@NgModule({
  declarations: [
    MemberWalletPage,
  ],
  imports: [
    IonicPageModule.forChild(MemberWalletPage),
  ],
})
export class MemberWalletPageModule {}
