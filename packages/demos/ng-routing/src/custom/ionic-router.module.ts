import { CUSTOM_ELEMENTS_SCHEMA, ModuleWithProviders, NgModule } from '@angular/core';
import { RouteReuseStrategy } from '@angular/router';

import { IonicAngularModule } from '@ionic/angular';

import { IonicRouteReuseStrategy } from './ionic-reuse-strategy';
import { IonicRouterOutlet } from './ionic-router-outlet';
import { RouterDelegate } from './router-delegate';

@NgModule({
  declarations: [
    IonicRouterOutlet
  ],
  imports: [
    IonicAngularModule
  ],
  exports: [
    IonicRouterOutlet
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class IonicRouterModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: IonicRouterModule,
      providers: [
        RouterDelegate,
        {
          provide: RouteReuseStrategy,
          useClass: IonicRouteReuseStrategy
        }
      ]
    };
  }
}