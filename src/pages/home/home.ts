import { Component, OnDestroy } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SwipeVertical } from '../../directives/swipe-up.directive';
import { ModalController } from 'ionic-angular';
import { AddressPage } from '../address/address';
import { SendCardProvider } from '../../providers/send-card/send-card';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [SwipeVertical, SendCardProvider]
})

export class HomePage implements OnDestroy {

  cardStatus: string = 'send';
  cardValue: number = null;
  constructor(
    private sendCardProvider: SendCardProvider,
    private swipeVertical: SwipeVertical,
    public navCtrl: NavController,
    public modalCtrl: ModalController,
    private db: AngularFireDatabase
  ) {  }

  sendCard(event: Event): void {
    if (this.cardValue != null && this.cardValue > -1 && this.cardValue < 24) {
      this.postCard();
    }
  }

  callNewCard(): void {
    let profileModal = this.modalCtrl.create(AddressPage);
    profileModal.present();
    this.cardStatus = 'new';
    this.cardValue = null;
  }

  onEnter(keyboard: KeyboardEvent): void {
    if ((keyboard.keyCode === 13 || keyboard.keyCode === 9) && (this.cardValue !==null && (this.cardValue > -1 || this.cardValue < 100))){
      this.postCard();
    }
  }

  ngOnDestroy(): void {
    this.swipeVertical.ngOnDestroy();
  }

  private postCard() {
    this.cardStatus = 'send';
    const code = localStorage.getItem('uuid');
    const username = localStorage.getItem('name');
    const data = {
      value: this.cardValue,
      name: username,
      code: code
    };

    this.sendCardProvider.send(data);
    this.db.object('matchs/' + code + '/' + username).set(data);
  }

  back(){
    this.cardStatus = 'send';
  }

}
