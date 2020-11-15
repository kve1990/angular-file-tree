import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { NodeComponent } from './node/node.component';
import { CountFilesPipe } from './count-files.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NodeComponent,
    CountFilesPipe
  ],
    imports: [
        BrowserModule.withServerTransition({appId: 'app-root'}),
        ReactiveFormsModule,
        ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production}),
        FormsModule,
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
