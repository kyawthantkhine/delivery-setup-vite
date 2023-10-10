function generateTimeSlots(startTime, endTime, timeInterval) {
    const timeSlots = [];
    let current = new Date(startTime);
    const endTimeObj = new Date(endTime);
  
    while (current < endTimeObj) {
      const slotStart = current.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      current.setMinutes(current.getMinutes() + timeInterval);
      const slotEnd = current.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      timeSlots.push(`${slotStart}-${slotEnd}`);
    }
  
    return timeSlots;
  }
  
  const startTime = new Date('2023-10-10T09:00:00'); // Start time as a Date object
  const endTime = new Date('2023-10-10T18:00:00');   // End time as a Date object
  const timeInterval = 15; // 15 minutes interval
  
  const timeSlots = generateTimeSlots(startTime, endTime, timeInterval);
  console.log(timeSlots);


  export default generateTimeSlots;