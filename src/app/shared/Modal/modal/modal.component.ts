import { Component, Input, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styles: [
  ]
})
export class ModalComponent implements OnInit {
  closeResult: string = '';
  @Input() nameButton: string = '';
  titleModal:string ='';
  @Input() content:string ='';
  htmlExample:string ='';


  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
   this.titleModal = this.nameButton;
  }

  open(content:any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title',size:'xl'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

}
