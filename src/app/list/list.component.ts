import { Component, OnInit, OnDestroy, Input } from '@angular/core';

import { BridgeService } from '../core/bridge.service';
import { Subscription } from 'rxjs/Subscription';

const words = [
  'Hello',
  'World',
  'int',
  'main',
  'hello',
  'planet',
  'universe',
  'dinosaur',
  'test',
  'ping',
  'pong',
  'null',
  'NA',
  'end'
]

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, OnDestroy {
  @Input() max: number;
  text: string;

  array = words;
  searchArray: string[] = this.array;
  groupArray: string[][];

  subscription: Subscription;
  constructor(private bridgeService: BridgeService) {
    this.subscription = bridgeService.search$.subscribe(term => {
      this.text = term;
      this.searchArray = this.array.filter(function(val) {
        const regxp = new RegExp(`.*(${term}).*`);
        return regxp.test(val);
      })
      // this.groupArray = [];
      // for (let i = 0; i < this.searchArray.length; i += this.max) {
      //   this.groupArray.push(this.searchArray.slice(i, i + this.max));
      // }
      // // this.groupArray.push(this.searchArray.slice(0, this.max));
      this.groupUp();
    })
  }

  ngOnInit(): void {
    this.groupUp();
  }

  reset() {
    this.bridgeService.clearSearch();
  }

  getText(): string {
    return this.text ? this.text : 'nothing'
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  groupUp() {
    this.groupArray = [];
      for (let i = 0; i < this.searchArray.length; i += this.max) {
        this.groupArray.push(this.searchArray.slice(i, i + this.max));
      }
  }

}
