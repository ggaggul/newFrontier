
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { enableProdMode } from '@angular/core';

import './assets/styles/style.scss';

if(webpack.MODE === 'production'){
	enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);