/*
eslint

no-restricted-syntax: 0,
no-undef: 0,
*/

(() => {
  function wait(ms) {
    const start = Date.now();
    let now = start;
    while (now - start < ms) {
      now = Date.now();
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    wait(1000);

    const timers = document.querySelectorAll('.timer');

    for (const timer of timers) {
      const timings = setInterval(() => {
        const time = Number(timer.textContent);

        if (time < 1) {
          clearInterval(timings);
        } else {
          timer.textContent = time - 1;
        }
      }, 1000);
    }
  });
})();
