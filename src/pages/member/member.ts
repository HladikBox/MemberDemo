import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AppBase } from "../../app/app.base";

@Component({
  selector: 'page-member',
  templateUrl: 'member.html'
})
export class MemberPage extends AppBase{

    constructor(public navCtrl: NavController) {
        super();
  }
    gotoLogin() {

    }
}
