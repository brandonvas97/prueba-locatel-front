import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgbActiveModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { AccountsComponent } from './accounts/accounts.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { ConsignAccountComponent } from './consign-account/consign-account.component';
import { WithdrawAccountComponent } from './withdraw-account/withdraw-account.component';
import { DataService } from './services/data.service';
import { AccountService } from './services/account.service';
import { CustomModalComponent } from './custom-modal/custom-modal.component';




const appRoutes:Routes=[
  {path:"consultarSaldo", component:AccountsComponent},
  {path:"crearCuenta", component:CreateAccountComponent},
  {path:"consignar", component:ConsignAccountComponent},
  {path:"retirar", component:WithdrawAccountComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    AccountsComponent,
    CreateAccountComponent,
    ConsignAccountComponent,
    WithdrawAccountComponent,
    CustomModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    NgbModule
  ],
  providers: [NgbActiveModal, AccountService],
  bootstrap: [AppComponent]
})
export class AppModule { }
