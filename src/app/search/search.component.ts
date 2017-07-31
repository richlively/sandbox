import { Component, OnDestroy } from '@angular/core';

import { BridgeService } from '../core/bridge.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnDestroy {
  term = '';
  subscription: Subscription;
  constructor(private bridgeService: BridgeService) {
    this.subscription = bridgeService.search$.subscribe(term => {
      this.term = term;
    })
  }

  search(term: string) {
    this.bridgeService.addSearch(term);
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
