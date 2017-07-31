import {
  ModuleWithProviders, NgModule,
  Optional, SkipSelf
} from '@angular/core';

import { CommonModule } from '@angular/common';

import { BridgeService } from './bridge.service'

@NgModule({
  imports: [CommonModule],
  declarations: [],
  exports: [],
  providers: [BridgeService]
})
export class CoreModule {

  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}
