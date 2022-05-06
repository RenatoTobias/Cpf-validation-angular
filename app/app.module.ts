import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { from } from 'rxjs';

import { AppComponent } from './app.component';
import { CpfComponent } from './cpf/cpf.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CepComponent } from './cep/cep.component';
import { NgxMaskModule } from 'ngx-mask';


@NgModule({
  declarations: [
    AppComponent,
    CpfComponent,
    CepComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    ReactiveFormsModule,
    NgxMaskModule,
    NgxMaskModule.forRoot(),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
