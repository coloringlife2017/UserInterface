
    export class Audit {
        createTime: string;
        createdBy: string;
        lastUpdateTime: string;
        lastUpdatedBy: string;
        updateCount:number;
        constructor(){
            this.createTime = new Date().toISOString();
        }
    }

    export class DateTime {
        endDataTime: string;
        startDateTime: string;
    }

    export class Location {
        city: string;
        fullAddress: string;
        latLong: string;
        state: string;
        country: string;
    }

      export class ImpactUnit {
        Label: String;
        DonationOptions:number[];
        MinimumUnits: number;
        MaximumUnits: number;
        DefaultSelection: number;
        UnitCost: number;
    }

 export class CurrencyAmount {
     format: string;
     currency: string;
     amount: number;
 }

    export class Campaign {
       name: string;
       url:string;
       title:string;
       description:string;
       organizationID:string;
       displayRank:number;
       dateRange:DateTime;
       location:Location;
       minimumAmount:CurrencyAmount;
       maximumAmount:CurrencyAmount;
       amountRaised:CurrencyAmount;
       status:string;
       impactUnit: ImpactUnit[];
    }
    


