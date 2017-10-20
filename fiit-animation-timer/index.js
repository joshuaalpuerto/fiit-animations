$(document).ready(() => {
  let number1 = 35;
  let number2 = 155;
  let number3 = 200;

  const el1 = document.querySelector('#odometer-1');
  const od1 = new Odometer({
    el: el1,
    animation: 'count',
    format: '',
  });

  const el2 = document.querySelector('#odometer-2');
  const od2 = new Odometer({
    el: el2,
    animation: 'count',
    format: '',
  });

  const el3 = document.querySelector('#odometer-3');
  const od3 = new Odometer({
    el: el3,
    animation: 'count',
    format: '',
  });

  setInterval(function () {

    od1.update(number1 += 1)
    od2.update(number2 += 1)
    od3.update(number3 += 1)

  }, 1000)
})

