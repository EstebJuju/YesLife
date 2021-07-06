import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-yeslife-cards',
  templateUrl: './yeslife-cards.component.html',
  styleUrls: ['./yeslife-cards.component.scss']
})
export class YeslifeCardsComponent implements OnInit {
  test: Date = new Date();

  constructor() { }

  ngOnInit() {
  }

}
