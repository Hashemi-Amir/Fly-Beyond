function getTime(timeStr, secTimeStr = null) {
  const dateString = timeStr;
  const date = new Date(dateString);

  // Extracting hours and minutes
  const hours = date.getHours();
  const minutes = date.getMinutes().toString().padStart(2, '0');

  // Extracting month and day
  const month = date.toLocaleString('en-US', { month: 'long' });
  const day = date.getDate();

  // Extracting Boarding time: 45 min before takeoff
  const boarding = new Date(dateString);
  boarding.setMinutes(date.getMinutes() - 45);
  const boardingHour = boarding.getHours();
  const boardingMin = boarding.getMinutes().toString().padStart(2, '0');

  // Extracting Duaration
  const dstDate = new Date(secTimeStr);
  const diffInMilliseconds = dstDate.getTime() - date.getTime();

  const durationHours = Math.floor(diffInMilliseconds / (1000 * 60 * 60));

  const DuarationMinutes = Math.floor((diffInMilliseconds / (1000 * 60)) % 60)
    .toString()
    .padStart(2, '0');

  return {
    hours,
    minutes,
    month,
    day,
    boardingHour,
    boardingMin,
    durationHours,
    DuarationMinutes,
  };
}

export default getTime;
