import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],

  declarations: [],

  providers:[],

  exports:[],

  entryComponents:[]
})
export class ControllersModuleModule {
  static forRoot(): ModuleWithProviders {
    return {
        ngModule: ControllersModuleModule,
    };
}
 }
