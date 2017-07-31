import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class BridgeService {
  // Observable string source
  private searchSource = new Subject<string>();

  // Observable string streams
  search$ = this.searchSource.asObservable();

  clearSearch(): void {
    this.searchSource.next('');
  }

  addSearch(query: string): void {
    this.searchSource.next(query);
  }
}
