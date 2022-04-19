import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import * as LDClient from 'launchdarkly-js-client-sdk';

const user: LDClient.LDUser = {
  key: '5de6fc8b62da8a3d7fc41402624f2319'
};

const client = LDClient.initialize('609ead905193530d7c28647b', user);


client.on('ready', () => {
  // initialization succeeded, flag values are now available
  const myFeature = client.variation('toms-beautiful-feature', false) as boolean;
  // etc.
  console.log("Feature is " + String(myFeature));

});


if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
