import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HomeRoutingModule } from './home-routing.module';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ControllersModuleModule } from '../../controllers/controllers-module.module';

/** 配置 angular i18n **/
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { ExampleComponent } from './example/example.component';

registerLocaleData(zh);


const MODULE = [
  HomeRoutingModule,
  FormsModule,
  HttpClientModule,
  ControllersModuleModule
];
const COMPONENT = [

];
const COMPONENT_INNER = [

];

@NgModule({
  imports: [
    ...MODULE,
    CommonModule
  ],
  declarations: [
    ...COMPONENT,
    ...COMPONENT_INNER,
    ExampleComponent,
  ],
  entryComponents: [
    ...COMPONENT_INNER
  ],
  providers:[]
})
export class HomeModule { }
