import {Component, OnInit} from '@angular/core';
import {Actor} from '../util/actor';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {first, last} from 'rxjs/operators';
import {log} from 'util';

@Component({
  selector: 'app-actor-list',
  templateUrl: './actor-list.component.html',
  styleUrls: ['./actor-list.component.css']
})
export class ActorListComponent implements OnInit {

  private _actorList: Actor[] = [];

  tmpActor = new Actor('', '', '');

  public tmpFirstName: string;
  public tmpLastName: string;
  public tmpLinkGoole: string;

  public tmp;

  constructor(private modalService: NgbModal) {
  }

  ngOnInit() {
    this._actorList.push(new Actor('Rone', 'Samantha', 'https://www.google.com/search?q=Samantha%20Rone'));
    this._actorList.push(new Actor('London', 'Layla', 'https://www.google.com/search?q=Layla%20London'));
    this._actorList.push(new Actor('Reid', 'Riley', 'https://www.google.com/search?q=Riley%20Reid'));
  }

  public setFieldsToNul() {
    this.tmpFirstName = null;
    this.tmpLastName = null;
    this.tmpLinkGoole = null;
  }

  public deleteActor(firstName: String, lastName: String): void {
    for (let actor of this._actorList) {
      if (actor.lastName == lastName && actor.firstName == firstName) {
        this._actorList.splice(this._actorList.indexOf(actor), 1);
      }
    }
  }

  public addActor(): void {
    if (this.tmpFirstName.length != 0 && this.tmpLastName.length != 0 && this.tmpLinkGoole.length != 0) {
      this._actorList.push(new Actor(this.tmpLastName, this.tmpFirstName, this.tmpLinkGoole));
      this.tmpFirstName = '';
      this.tmpLastName = '';
      this.tmpLinkGoole = '';

    } else {
      alert('One field is empty');
    }
  }

  open(content) {
    this.setFieldsToNul();
    this.modalService.open(content);
  }

  setDeleteTmp(firstName: string, lastName: string) {
    this.tmpLastName = lastName;
    this.tmpFirstName = firstName;
  }

  setUpdateTmp(firstName: string, lastName: string, linkGoogle: string) {
    this.tmpActor.firstName = firstName;
    this.tmpActor.lastName = lastName;
    this.tmpActor.linkGoogle = linkGoogle;
  }

  updateActor(firstName: string, lastName: string, newActor: Actor) {
    for (let actor of this._actorList) {
      if (actor.lastName == lastName && actor.firstName == firstName) {
        this._actorList[this._actorList.indexOf(actor)].lastName = newActor.lastName;
        this._actorList[this._actorList.indexOf(actor)].firstName = newActor.firstName;
        this._actorList[this._actorList.indexOf(actor)].linkGoogle = newActor.linkGoogle;
      }
    }
  }
}
