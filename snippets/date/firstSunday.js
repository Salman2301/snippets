function firstSunday(month, year) {
    let tempDate = new Date();
    tempDate.setHours(0,0,0,0);
    // first SUNDAY of april
    tempDate.setMonth(month);
    tempDate.setYear(year);
    tempDate.setDate(1);

    let day = tempDate.getDay();
    let toNextSun = day !== 0 ? 7 - day : 0;
    console.log(day, tempDate);
    tempDate.setDate(tempDate.getDate() + toNextSun);
    
    return tempDate;

}

console.log("first sunday of april : " , firstSunday(3, 2020))
