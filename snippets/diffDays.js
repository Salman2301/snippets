function getDiffDays(date1, date2) {
  if(!date1 || !date2) return 0;
  date1 = new Date(date1);
  date2 = new Date(date2);
  const diffTime = Math.abs(date2 - date1);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
  return diffDays
}

getDiffDays(new Date("1/1/2020") , new Date("2/2/2020")); // 32
