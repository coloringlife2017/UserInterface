
    // Library with commonly used 

    export class Audit {
        createTime: string;
        createdBy: string;
        updateTime: string;
        updatedBy: string;

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
