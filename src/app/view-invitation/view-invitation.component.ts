import { ViewInvitationService } from './view-invitation.service';
import { UserEvent, GuestList } from './../user-event/dto/UserEvent';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-invitation',
  templateUrl: './view-invitation.component.html',
  styleUrls: ['./view-invitation.component.css']
})
export class ViewInvitationComponent implements OnInit {

  public userEvent;
  public guests: GuestList[];
  private eventKey: string;
  constructor(private service: ViewInvitationService, private currentRoute: ActivatedRoute) {
    this.eventKey = currentRoute.snapshot.params["eventId"];
  }

  ngOnInit() {
    if (this.eventKey) {
      this.service.getEventData(this.eventKey).subscribe(
        response => this.userEvent = response.json(),
        console.log
      );
    }
  }

  public getGuestList() {
    let hostRootKey: string = this.eventKey.split("$")[0];
    this.service
      .getGuestList(hostRootKey + "/" + this.userEvent.guestList)
      .then(
        guestList => this.guests = guestList,
        console.log
      );
  }
}
