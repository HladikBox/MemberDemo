import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { MemberPage } from '../member/member';
import { HomePage } from '../home/home';

import { AppBase } from "../../app/app.base";
import { AppLang } from '../../app/app.lang';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage extends AppBase {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = MemberPage;

  constructor() {
      super();
      AppLang.init();
  }
}
