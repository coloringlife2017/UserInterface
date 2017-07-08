
    // Library with commonly used objects.

    export class Audit {           // Object to capture audits to a particular item.
        createTime: string;
        createdBy: string;
        updateTime: string;
        updatedBy: string;

        constructor(){
            this.createTime = new Date().toISOString();
        }
    }

    export class DateRange {     // basic DateRange Object, if endDate is empty it means there is no Range.
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

    export class CurrencyAmount {
        format: string;
        currency: string;
        amount: number;
    }

    export class CurrencyType {
        format: string;
        currency: string;
    }
