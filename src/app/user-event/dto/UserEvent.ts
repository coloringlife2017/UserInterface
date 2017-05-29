
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

    export class InvitationSent {
        sent: string;
        delivered: string;
    }

    export class ReminderSent {
        sent: string;
        delivered: string;
    }

    export class Rsvp {
        rsvpStatus: string;
        rsvpDateTime: string;
        comments: string;
        device: string;
        location: string;
    }

    export class Donation {
        notificationType: string;
        amount: number;
    }

    export class GuestList {
        fullName: string;
        email: string;
        invitationSent: InvitationSent;
        reminderSent: ReminderSent;
        rsvp: Rsvp;
        donation: Donation;
        eventUrl: string;
    }

    export class HostInfo {
        name: string;
        phones: string[];
        emails: string[];
    }

    export class Privacy {
        guestListVisibility: string;
        allowGuestsToUploadPicutres: string;
         constructor(){
            this.guestListVisibility = "PUBLIC";
        }
    }

    export class UserEvent {
        audit: Audit;
        name: string;
        dateTime: DateTime;
        location: Location;
        guestList: string;
        invitationDescription: string;
        hostInfo: HostInfo;
        privacy: Privacy;
        campaignImages: string;
        eventImages: string;
        $key:string;
    }


