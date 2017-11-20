import { Component } from '@angular/core';
import { Platform, LoadingController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { Storage } from '@ionic/storage';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ApiConfig } from './api.config';
import { AppUtil } from './app.util';
import { AppMember } from './app.member';

import { TabsPage } from '../pages/tabs/tabs';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsPage;
    
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen
      , public loadCtrl: LoadingController, storage: Storage) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();


      ApiConfig.SetLoadingCtrl(loadCtrl);
      AppUtil.Storage = storage;
      AppMember.GetInstance().restore();

    });
  }
  
}
