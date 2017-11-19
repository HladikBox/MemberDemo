import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http'; //for 3.0
import { SQLite } from '@ionic-native/sqlite';

import { AboutPage } from '../pages/about/about';
import { MemberPage } from '../pages/member/member';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    MemberPage,
    HomePage,
    TabsPage
  ],
  imports: [
      HttpModule, //for 3.0
      BrowserModule, //for 3.0
      IonicModule.forRoot(MyApp, {
          backButtonText: '',
          iconMode: 'ios',
          modalEnter: 'modal-slide-in',
          modalLeave: 'modal-slide-out',
          tabsPlacement: 'bottom',
          pageTransition: 'ios',
          backButtonIcon: "ios-arrow-back",
          statusbarPadding: false
      }),
      IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    MemberPage,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
      SplashScreen,
      SQLite,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
