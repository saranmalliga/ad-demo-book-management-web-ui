import { Injectable } from '@angular/core';
import { EnvService } from 'src/app/core/config/env.service';


export const EnvServiceFactory = () => {
  // Create env
  const env = new EnvService();

  // Read environment variables from browser window
  const browserWindow = window || {};
  //const browserWindowEnv = browserWindow['__env'] || {};

//   for (const key in browserWindowEnv) {
//     if (browserWindowEnv.hasOwnProperty(key)) {
//       env[key] = window['__env'][key];
//     }
//   }
  return env;
};

export const EnvServiceProvider = {
  provide: EnvService,
  useFactory: EnvServiceFactory,
  deps: [],
};
