// WORKS ONLY FOR AUS/BRISBANE TIMEZONE
function isDST(date) {
    if(!date) date = new Date();
    console.log("date" , date);
    let year = new Date(date).getFullYear();
    let firstSunApril = firstSunday(3, year);
    let firstSunOct = firstSunday(9, year);
  
    let tempDate = new Date();
    tempDate.setHours(0,0,0,0);
    tempDate.setFullYear(year);
    // first of jan
    tempDate.setMonth(0);
    tempDate.setDate(1);
    
    let startOfTheYear = new Date(tempDate);
    // end of Dec
    tempDate.setMonth(11);
    tempDate.setDate(31);
    
    let endOfTheYear = new Date(tempDate);
  
    console.log("firstSunApril", firstSunApril);
    console.log("firstSunOct", firstSunOct);
    console.log("startOfTheYear", startOfTheYear);
    console.log("endOfTheYear", endOfTheYear);
  
  
    let firstHalf = (date > startOfTheYear) && (date < firstSunApril);
    let secHalf = date > firstSunOct && date < endOfTheYear;
  
    console.log("firstHalf" , firstHalf, (date > startOfTheYear) , (date < firstSunApril));
    console.log("secHalf" , secHalf,date > firstSunOct , date < endOfTheYear);

    let dateisDst = firstHalf || secHalf;
    
    console.log("dateisDst", dateisDst);
    return dateisDst;
  }
  
  
  function firstSunday(month, year) {
    let tempDate = new Date();
    tempDate.setHours(0,0,0,0);
    // first SUNDAY of april
    tempDate.setMonth(month);
    tempDate.setYear(year);
    tempDate.setDate(1);

    let day = tempDate.getDay();
    let toNextSun = day !== 0 ? 7 - day : 0;
    tempDate.setDate(tempDate.getDate() + toNextSun);
    
    return tempDate;

}
isDST(new Date());
