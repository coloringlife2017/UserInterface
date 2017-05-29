import { GuestList } from './../user-event/dto/UserEvent';
import { AngularFireDatabase } from 'angularfire2/database';
import { HttpModule, Http, RequestOptionsArgs } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ViewInvitationService {

  private readonly EVENT_DATA_URL = "https://us-central1-coloringlife-fc2a8.cloudfunctions.net/getEventById";
  private readonly GUEST_LIST_PATH = "guestList/"
  constructor(private http: Http, private db: AngularFireDatabase) {
  }

  public getEventData(eventKey: string) {
    return this.http.get(this.EVENT_DATA_URL, {
      params: {
        "eventId": eventKey.replace("$", "/")
      }
    });
  }

  public getGuestList(guestListKey: string) {
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
