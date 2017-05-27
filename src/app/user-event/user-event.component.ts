import { UserEventService } from './user-event.service';
import { UserEvent, Audit, DateTime, HostInfo, Location, GuestList } from './dto/UserEvent';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-event',
  templateUrl: './user-event.component.html',
  styleUrls: ['./user-event.component.css']
})
export class UserEventComponent implements OnInit {

  private userEvent:UserEvent;
  constructor(private userEventService:UserEventService) {
    this.initUserEvent();
  }

  private initUserEvent(){
    this.userEvent = null;
    this.userEvent = new UserEvent();
    this.userEvent.audit = new Audit();
    this.userEvent.dateTime = new DateTime();
    this.userEvent.hostInfo = new HostInfo();
    this.userEvent.location = new Location();
    this.userEvent.guestList = [new GuestList()];
  }

  ngOnInit() {
  }

  saveEvent(){
    this.userEventService.saveUserEvent(this.userEvent);
    this.initUserEvent();
  }

  addGuest(){
    this.userEvent.guestList.push(new GuestList());
  }

}
