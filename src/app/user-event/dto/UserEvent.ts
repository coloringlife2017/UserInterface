
    export class Audit {
        createTime: string;
        createdBy: string;
        updateTime: string;
        updatedBy: string;

        constructor(){
            this.createTime = new Date().toISOString();
            this.createdBy = "admin";
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
    }

    export class HostInfo {
        name: string;
        phones: string[];
        emails: string[];
    }

    export class Privacy {
        guestListVisibility: string;
        allowGuestsToUploadPicutres: string;
    }

    export class UserEvent {
        audit: Audit;
        name: string;
        dateTime: DateTime;
        location: Location;
        guestList: GuestList[];
        invitationDescription: string;
        hostInfo: HostInfo;
        privacy: Privacy;
        campaignImages: string;
        eventImages: string;
        $key:string;
    }


