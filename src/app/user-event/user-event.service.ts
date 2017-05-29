import { UserAuthService } from './../commons/services/user-auth.service';
import { UserEvent, GuestList } from './dto/UserEvent';
import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from "@angular/core";

@Injectable()
export class UserEventService {

    constructor(private db: AngularFireDatabase, private authService: UserAuthService) {
    }

    private getEntityPath(): string {
        if (!this.authService.currentUser) {
            return "userEvents";
        }
        return "userEvents/" + this.authService.currentUser.uid;
    }

    private getGuestListPath(eventKey:string): string {
        if (!this.authService.currentUser) {
            return "guestList";
        }
        return "guestList/" + this.authService.currentUser.uid +"/"+eventKey;
    }

    public getUserEvents() {
        let entityPath: string = this.getEntityPath();
        return this.db.list(entityPath, {
            query: {
                orderByChild: "audit/createTime"
            }
        });
    }

    public saveUserEvent(userEvent: UserEvent, guestList: GuestList[]) {

        if (userEvent.$key) {
            // this.db.database.ref(entityPath + "/" + userEvent.$key)
            //     .update(userEvent).then(
            //     res => console.log(res),
            //     err => console.log(err)
            //     );
        } else {
            this.saveEvent(userEvent, guestList);
        }
    }

    private saveGuestList(guestList: GuestList[], guestListKey: string, eventUrl:string) {
        let promises: Array<Promise<string>> = [];
        guestList.forEach(guest => {
            if (guest) {
                guest.eventUrl = "http://localhost:4200/userEvent/eventKey=" + eventUrl;
                let p: Promise<string> = new Promise(resolve => {
                    this.db.database.ref(this.getGuestListPath(guestListKey)).push(guest).then(
                        data => resolve(data.key));
                });
                promises.push(p);
            }
        });
        return Promise.all(promises);
    }

    private saveEvent(userEvent: UserEvent, guestList: GuestList[]) {
        let entityPath: string = this.getEntityPath();
        let eventKey = this.db.database.ref(entityPath).push().key;
        let guestListKey = this.db.database.ref(this.getGuestListPath("")).push().key;
        this.saveGuestList(guestList, guestListKey, entityPath + "/" + eventKey).then(call => {
             userEvent.guestList = guestListKey;
            this.db.database.ref(this.getEntityPath()+"/"+eventKey).set(userEvent).then(
                data => console.log(data.key));
        });

    }

    public getUserEventById(campaignKey: string) {
        return this.db.database.ref(this.getEntityPath() + "/" + campaignKey).once("value",
            data => console.log("result>> " + data.toJSON())
        );
    }
}