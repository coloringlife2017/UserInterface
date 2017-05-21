import { UserEvent, Audit, DateTime, HostInfo, Location, GuestList } from './dto/UserEvent';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-event',
  templateUrl: './user-event.component.html',
  styleUrls: ['./user-event.component.css']
})
export class UserEventComponent implements OnInit {

  constructor(private userEvent:UserEvent) {
    userEvent.audit = new Audit();
    userEvent.dateTime = new DateTime();
    userEvent.hostInfo = new HostInfo();
    userEvent.location = new Location();
    userEvent.guestList = [new GuestList()];
  }

  ngOnInit() {
  }

  checkData(){

  }

  addGuest(){
    this.userEvent.guestList.push(new GuestList());
  }

}
