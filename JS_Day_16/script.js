// Countdown function
const countdown = (timer, callback) => {
    if (timer === 0) {
      callback();
    } else {
      setTimeout(() => {
        
        document.getElementById('countdown').innerText = timer;
        countdown(timer - 1, callback);
      }, 1000);
    }
  };
  
  // Callback Hell to achieve the countdown and display message
  countdown(10, () => {
    setTimeout(() => {
      
      document.getElementById('countdown').innerText = "Happy Independence Day....!";
    }, 1000);
  });
  