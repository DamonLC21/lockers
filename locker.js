var lockers = [];

// initialize closed locker = 0
for (var locker = 0; locker < 100; locker++) {
  lockers[locker] = 0;
}


//for loop to represent each nth pass
for (var pass = 1; pass < lockers.length + 1; pass++) {
  console.log(`pass: ${pass}`);
  
  // iterate through lockers, close or open depending on status
  for (var lockerIndex = 1; lockerIndex < lockers.length + 1; lockerIndex++) {
    // if is factor of pass, open locker
    if (lockerIndex % pass == 0) {
      if (lockers[lockerIndex - 1] === 0) {
        lockers[lockerIndex - 1] = 1;
      } else {
        lockers[lockerIndex - 1] = 0;
      }
    }
  }
}

var open = 0;
for (var i = 0; i < lockers.length; i++) {
  if (lockers[i]) { open++ }
  console.log(`locker: ${i + 1}, state: ${lockers[i]}`);
}
console.log(`Open lockers: ${open}`);

