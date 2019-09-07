import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
@IonicPage()
@Component({
  selector: 'page-address',
  templateUrl: 'address.html',
})
export class AddressPage {
  code:string = '';
  name:string = '';

  constructor(private viewCtrl : ViewController ,public navCtrl: NavController, public navParams: NavParams) {
    this.code = localStorage.getItem('uuid');
    this.name = localStorage.getItem('name');
  }

  done(){
    if ((this.code != '' && this.code != null) && (this.name != '' && this.name != null)) {
      localStorage.setItem('uuid',this.code);
      localStorage.setItem('name',this.name);
      this.viewCtrl.dismiss();
    }
  }

  back() {
  this.viewCtrl.dismiss();
  }

}
