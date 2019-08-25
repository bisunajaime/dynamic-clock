(function() {
  setInterval(setClock, 1000);

  const hourHand = document.querySelector('[data-hour-hand]');
  const minuteHand = document.querySelector('[data-minute-hand]');
  const secondHand = document.querySelector('[data-second-hand]');

  function setClock() {
    const currentDate = new Date();
    const secondRatio = currentDate.getSeconds() / 60;
    const minuteRatio = (secondRatio + currentDate.getMinutes()) / 60;
    const hourRatio = (minuteRatio + currentDate.getHours()) / 12;
    setRotation(secondHand, secondRatio);
    setRotation(minuteHand, minuteRatio);
    setRotation(hourHand, hourRatio);
    let period;
    let numArr = [
      [0, 'zero'],
      [1, 'one'],
      [2, 'two'],
      [3, 'three'],
      [4, 'four'],
      [5, 'five'],
      [6, 'six'],
      [7, 'seven'],
      [8, 'eight'],
      [9, 'nine'],
      [10, 'ten'],
      [11, 'eleven'],
      [12, 'twelve'],
      [13, 'thirteen'],
      [14, 'fourteen'],
      [15, 'fifteen'],
      [16, 'sixteen'],
      [17, 'seventeen'],
      [18, 'eighteen'],
      [19, 'nineteen'],
      [20, 'twenty'],
      [30, 'thirty'],
      [40, 'fourty'],
      [50, 'fifty']
    ];
    if (currentDate.getHours() < 12) {
      period = 'am';
    } else {
      period = 'pm';
    }
    let hourOut, minuOut, secOut;
    for(let i = 0; i <= 23; i++){
    	if (currentDate.getSeconds() == numArr[i][0]) {
        secOut = `${numArr[i][1]}`;
      }
      for (let x = 1; x < 10; x++) {
        if (currentDate.getSeconds() == (numArr[i][0] + numArr[x][0])) {
          secOut = `${numArr[i][1]} ${numArr[x][1]}`;
        }
      }
    }

    for (let i = 0; i <= 23; i++) {
      if (currentDate.getMinutes() == numArr[i][0]) {
        minOut = `${numArr[i][1]}`;
      }
      for (let x = 1; x < 10; x++) {
        if (currentDate.getMinutes() == (numArr[i][0] + numArr[x][0])) {
          minOut = `${numArr[i][1]} ${numArr[x][1]}`;
        }
      }
    }
    for (let i = 0; i < 13; i++) {
      if (i == numArr[12][0]) {
        if (currentDate.getHours() > 12) {
          hourOut = `${numArr[currentDate.getHours()-i][1]}`;
        }
      }
      if (currentDate.getHours() == numArr[i][0]) {
        hourOut = `${numArr[i][1]}`;
        if (currentDate.getHours() == numArr[0][0]) {
          hourOut = `${numArr[numArr[12][0]][1]}`;
        }
      }
    }
    console.log(`Hour: ${currentDate.getHours()}; Minute/s: ${currentDate.getMinutes()}; Seconds: ${currentDate.getSeconds()}`);
    if (currentDate.getMinutes() < 10 && currentDate.getMinutes() != 0) {
      console.log(`It's ${hourOut} oh ${minOut} and ${secOut} second ${period}`);
    } else if (currentDate.getMinutes() == 0) {
      console.log(`It's ${hourOut} ${minOut} and ${secOut} seconds${period}`);
    } else {
      console.log(`It's ${hourOut} ${minOut} and ${secOut} seconds ${period}`);
    }
  }

  function setRotation(element, rotationRatio) {
    element.style.setProperty('--rotation', rotationRatio * 360);
  }


  setClock();
})();