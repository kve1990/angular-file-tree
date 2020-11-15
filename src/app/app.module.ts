import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
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
        HttpClientModule
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
