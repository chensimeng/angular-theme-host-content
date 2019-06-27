import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { HelloComponent } from './hello/hello.component';
import { AdminComponent } from './admin/admin.component';
import { TrexComponent } from './trex/trex.component';
import {ThemeDirective} from './theme.directive';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    AdminComponent,
    TrexComponent,
    ThemeDirective
  ],
  imports     : [
    BrowserModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers   : [ { provide: NZ_I18N, useValue: en_US } ],
  bootstrap   : [ AppComponent ]
})
export class AppModule {
}
