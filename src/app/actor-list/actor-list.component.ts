import { Component, OnInit } from '@angular/core';
import { Actor } from '../util/actor';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-actor-list',
  templateUrl: './actor-list.component.html',
  styleUrls: ['./actor-list.component.css']
})
export class ActorListComponent implements OnInit {

  title = 'css-angular';
  closeResult: string;

  private _actorList: Actor[] = [];
  public tmpFirstName: string;
  public tmpLastName: string;
  public tmpLinkGoole: string;

  constructor(private modalService: NgbModal) {}

  ngOnInit() {
    this._actorList.push(new Actor("Rone","Samantha", "https://www.google.com/search?q=Samantha%20Rone"));
    this._actorList.push(new Actor("London","Layla", "https://www.google.com/search?q=Layla%20London"));
    this._actorList.push(new Actor("Reid","Riley", "https://www.google.com/search?q=Riley%20Reid"));
  }

  public deleteActor(firstName:String, lastName:String): void{
    for(let actor of this._actorList){
      if(actor.lastName == lastName && actor.firstName == firstName) {
        this._actorList.splice(this._actorList.indexOf(actor),1);
      }
    }
  }

  public addActor():void {
    if (this.tmpFirstName.length != 0 && this.tmpLastName.length != 0 && this.tmpLinkGoole.length != 0) {
      this._actorList.push(new Actor(this.tmpLastName, this.tmpFirstName, this.tmpLinkGoole));
      this.tmpFirstName = "";
      this.tmpLastName = "";
      this.tmpLinkGoole = "";

    } else {
      alert("One field is empty");
    }
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
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
