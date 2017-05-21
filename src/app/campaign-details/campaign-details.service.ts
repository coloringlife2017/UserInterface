import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from "@angular/core";

@Injectable()
export class CampaignDetailsService {

    private readonly entityName: string = "campaignDetails";
    constructor(private db: AngularFireDatabase) {
    }

    public getCampigns() {

        return this.db.list(this.entityName, {
            query: {
                orderByChild: "displayOrder"
            }
        });
    }

    public getCampaignById(campaignKey:string) {
        return this.db.list(this.entityName, {
            query: {
                orderByKey: true,
                equalTo: campaignKey
            }
        });
    }
}