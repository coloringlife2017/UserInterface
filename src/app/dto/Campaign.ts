import { DateRange, CurrencyAmount, Location, CurrencyType } from './Common';


    export class ImpactUnit {
        unitLabel: String;
        donationOptions:number[];
        minimumUnits: number;
        maximumUnits: number;
        defaultSelection: number;
        unitCost: number;
    }

    export class Campaign {
       name: string;                    //Campaign name given by the Non-profit.
       url:string;                      //URL created for the cmpaign.
       title:string;                    //Campaign title given by the Non-profit or system generated (in future) 
       shortDescription: string;        //Free Form short description field for the campaign.
       description:string;              //Free Form detail description field for the campaign.
       organizationID:string;           //Link to the Non-profit table.
       organizationName: string;        //name of the non-profit
       organizationLogoUrl: string;     //logo of the non-profit
       displayRank:number;              //Display Rank for the campaigns, to be used to sort pages to display on the home page and other Campaign listings
       dateRange:DateRange;              //Object with a StartDate and EndDate for the campaign
       location:Location;               //Location Object with the address of the Campaign, to be entered by the Non-Profit.
       currencyType: CurrencyType;      //What is the currency type for the campaign - $ / RS/ EURO
       minimumAmount:number;            //Minimum amount the Non-profit would like to raise (per event?)
       maximumAmount:number;            //Maximum amount the Non-profit can raise.
       amountRaised:number;             //Amount raised so far, to be updated everytime a donation is done.
       status:string;                   // Status field with potential values: Active, On-hold, Closed. 
       impactUnits: ImpactUnit[];        //Object Array to capture items associated with the donations sought by the Non-profit. This could be a meal to feed the poor, a month of a child's education etc.
       imageUrls: string[];             //image urls for the campaign

       constructor(){
           this.dateRange = new DateRange();
           this.location = new Location();
           this.currencyType = new CurrencyType(); 
       }
    }
    


