import { UserEvent } from './dto/UserEvent';
import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from "@angular/core";

@Injectable()
export class UserEventService {

    private readonly entityName: string = "userEvents";
    constructor(private db: AngularFireDatabase) {
    }

    public getUserEvents() {
        return this.db.list(this.entityName, {
            query: {
                orderByChild: "audit/createTime"
            }
        });
    }

    public saveUserEvent(userEvent: UserEvent) {
        if (userEvent.$key) {
            this.db.database.ref(this.entityName + "/" + userEvent.$key)
                .update(userEvent).then(
                res => console.log(res),
                err => console.log(err)
                );
        } else {
            let newKey: string = this.db.database.ref(this.entityName).push().key;
            this.db.database.ref(this.entityName + "/" +newKey).set(userEvent).then(
                res => console.log(res),
                err => console.log(err)
            )
        }
    }

    public getUserEventById(campaignKey: string) {
        // return this.db.list(this.entityName, {
        //     query: {
        //         orderByKey: true,
        //         equalTo: campaignKey
        //     }
        // });
    }
}