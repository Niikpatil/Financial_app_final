import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { LoginPage } from '../../profile/login/login.page';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.page.html',
  styleUrls: ['./transactions.page.scss'],
})
export class TransactionsPage implements OnInit {
  constructor(public uLogin: NavController) {}

  userLogin() {
    this.uLogin.navigateForward([LoginPage]);
  }

  ngOnInit() {}
}
