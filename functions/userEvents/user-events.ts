function getUserEvent(){

}

let userEvents = {
    getUserEvent: this.getUserEvent
}
declare module 'user-events' {
  export = userEvents;
}
