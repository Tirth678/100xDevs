function GetTime(){
    const newDate = new Date();
    console.log(`new date: `, newDate);
    console.log("hours: ", newDate.getHours());
    console.log("mins: ", newDate.getHours());
    console.log("seconds: ", newDate.getMilliseconds());
    newDate.setFullYear(2022);
    console.log("new year", newDate);
}
GetTime();
