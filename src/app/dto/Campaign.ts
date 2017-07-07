
      export class ImpactUnit {
        Label: String;
        DonationOptions:number[];
        MinimumUnits: number;
        MaximumUnits: number;
        DefaultSelection: number;
        UnitCost: number;
    }

    export class Campaign {
       name: string;                    //Campaign name given by the Non-profit.
       url:string;                      //URL created for the cmpaign.
       title:string;                    //Campaign title given by the Non-profit or system generated (in future) 
       description:string;              //Free Form detail description field for the campaign.
       organizationID:string;           //Link to the Non-profit table.
       displayRank:number;              //Display Rank for the campaigns, to be used to sort pages to display on the home page and other Campaign listings
       dateRange:DateTime;              //Object with a StartDate and EndDate for the campaign
       location:Location;               //Location Object with the address of the Campaign, to be entered by the Non-Profit.
       minimumAmount:CurrencyAmount;    //Minimum amount the Non-profit would like to raise (per event?)
       maximumAmount:CurrencyAmount;    //Maximum amount the Non-profit can raise.
       amountRaised:CurrencyAmount;     //Amount raised so far, to be updated everytime a donation is done.
       status:string;                   // Status field with potential values: Active, On-hold, Closed. 
       impactUnit: ImpactUnit[];        //Object Array to capture items associated with the donations sought by the Non-profit. This could be a meal to feed the poor, a month of a child's education etc.
    }
    


