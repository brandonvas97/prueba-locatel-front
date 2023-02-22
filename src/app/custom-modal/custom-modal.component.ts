import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-custom-modal',
  templateUrl: './custom-modal.component.html',
  styleUrls: ['./custom-modal.component.css']
})
export class CustomModalComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal, private dataService:DataService) { }

  message:any;
  subscription: any;

  ngOnInit(): void {
    this.subscription = this.dataService.currentMessage.subscribe(message => this.message = message)
  }
     
  closeModal(message: string) {
    this.activeModal.close();
  }

}
