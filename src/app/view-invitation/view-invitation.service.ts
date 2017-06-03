import { GuestList, Rsvp } from './../user-event/dto/UserEvent';
import { AngularFireDatabase } from 'angularfire2/database';
import { HttpModule, Http, RequestOptionsArgs } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ViewInvitationService {

  private readonly EVENT_DATA_URL = "https://us-central1-coloringlife-fc2a8.cloudfunctions.net/getEventById";
  private readonly RSVP_URL = "https://us-central1-coloringlife-fc2a8.cloudfunctions.net/updateRsvp";
  private readonly GUEST_LIST_PATH = "guestList/"
  private eventParams:Array<string>;
  constructor(private http: Http, private db: AngularFireDatabase) {
  }

  public updateRsvp(rsvpStatus:string){
    let rsvp:Rsvp = new Rsvp();
    rsvp.rsvpStatus = rsvpStatus;
    let eventPath:string = this.eventParams[0]+"/"+this.eventParams[1];
    let guestKey = this.eventParams[2];
    this.http.post(this.RSVP_URL, {
      
        guestKey: guestKey,
        data: rsvp,
        eventPath: eventPath
      
    }).subscribe(console.log);
  }

  public getEventData(eventKey: string) {
     this.eventParams = eventKey.split("$");
     let eventPath:string = this.eventParams[0]+"/"+this.eventParams[1];
    return this.http.get(this.EVENT_DATA_URL, {
      params: {
        "eventId": eventPath
      }
    });
  }

  public getGuestList(guestListKey: string) : Promise<GuestList[]> {
    return new Promise<GuestList[]>((resolve, reject) =>
      this.db.database.ref(this.GUEST_LIST_PATH + guestListKey)
        .once(
          "value",
          data => {
            let val = data.exportVal();
            resolve(Object.keys(val).map( key => val[key]))
          },
          reject
        ));
  }
}
