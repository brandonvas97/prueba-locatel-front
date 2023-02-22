import { Component, OnInit } from '@angular/core';
import { AccountService } from '../services/account.service';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CustomModalComponent } from '../custom-modal/custom-modal.component';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {
  client_name:any;
  password:any;
  dataResponse:any;
  constructor(private routes:ActivatedRoute, private accountService:AccountService, 
              public modalService:NgbModal, private dataService:DataService) { }

  ngOnInit(): void {
  }

  onClickSubmit(data:any) {
    this.client_name = data.client_name;
    this.password = data.password;
    this.accountService.createAccount(this.client_name, this.password).subscribe(data => {
      this.dataResponse = data;
      console.log(this.dataResponse.response);
      this.dataService.changeMessage(this.dataResponse.response)
    });
  }

  openModal() {
    const modalRef = this.modalService.open(CustomModalComponent,
      {
        scrollable: true,
        windowClass: 'myCustomModalClass',
      });
    modalRef.result.then((result:any) => {
      console.log(result);
    }, (reason:any) => {
    });
  }

}
