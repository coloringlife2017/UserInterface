import { UserAuthService } from './../commons/services/user-auth.service';
import { UserEventService } from './user-event.service';
import { UserEvent, Audit, DateTime, HostInfo, Privacy, GuestList, Location } from './dto/UserEvent';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-event',
  templateUrl: './user-event.component.html',
  styleUrls: ['./user-event.component.css']
})
export class UserEventComponent implements OnInit {

  private userEvent: UserEvent;
  public guestList : GuestList[];
  constructor(private userEventService: UserEventService, private authService: UserAuthService) {
    this.initUserEvent();
  }

  public getEvent(eKey:string) {
    this.userEventService.getUserEventById(eKey)
  }

  private initUserEvent() {
    this.userEvent = null;
    this.userEvent = new UserEvent();
    this.userEvent.audit = new Audit();
    this.userEvent.dateTime = new DateTime();
    this.userEvent.hostInfo = new HostInfo();
    this.userEvent.location = new Location();
    this.userEvent.privacy = new Privacy();
    this.guestList = [new GuestList()];
  }

  ngOnInit() {
  }

  saveEvent() {
    this.userEventService.saveUserEvent(this.userEvent, this.guestList);
    this.initUserEvent();
  }

  addGuest() {
    this.guestList.push(new GuestList());
  }

}
