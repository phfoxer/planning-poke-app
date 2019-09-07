import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SwipeVertical } from '../directives/swipe-up.directive';
import { SendCardProvider } from '../providers/send-card/send-card';
import { RegisterMatchProvider } from '../providers/register-match/register-match';
import { HttpClientModule } from '@angular/common/http';
import { AddressPageModule } from '../pages/address/address.module';
import { config } from './config';
import { AngularFirestore } from '@angular/fire/firestore';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SwipeVertical
  ],
  imports: [
    BrowserModule,
    AddressPageModule,
    HttpClientModule,
    AngularFireModule.initializeApp(config.firebase),
    AngularFireDatabaseModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SendCardProvider,
    RegisterMatchProvider,
    AngularFirestore
  ]
})
export class AppModule {}
