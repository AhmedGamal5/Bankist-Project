'use strict';

/////////////////////////////////////////////////
// BANKIST APP

// Data

///Date
const arrDate = new Date();
const arrDay = `${arrDate.getDate()}`;
const arrMonth = `${arrDate.getMonth() + 1}`;
const arrYear = arrDate.getFullYear();
const arrHour = `${arrDate.getHours()}`;
const arrMinute = `${arrDate.getMinutes()}`;
const arrSecond = `${arrDate.getSeconds()}`;
///Accounts
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,
  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    `${arrYear}-${arrMonth.padStart(2, '0')}-${`${arrDay - 2}`.padStart(
      2,
      '0'
    )}T${arrHour.padStart(2, '0')}:${arrMinute.padStart(
      2,
      '0'
    )}:${arrSecond.padStart(2, '0')}.604Z`,
    `${arrYear}-${arrMonth.padStart(2, '0')}-${`${arrDay - 1}`.padStart(
      2,
      '0'
    )}T${arrHour.padStart(2, '0')}:${arrMinute.padStart(
      2,
      '0'
    )}:${arrSecond.padStart(2, '0')}.604Z`,
    `${arrYear}-${arrMonth.padStart(2, '0')}-${arrDay.padStart(
      2,
      '0'
    )}T${arrHour.padStart(2, '0')}:${arrMinute.padStart(
      2,
      '0'
    )}:${arrSecond.padStart(2, '0')}.604Z`,
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    `${arrYear}-${arrMonth.padStart(2, '0')}-${`${arrDay - 2}`.padStart(
      2,
      '0'
    )}T${arrHour.padStart(2, '0')}:${arrMinute.padStart(
      2,
      '0'
    )}:${arrSecond.padStart(2, '0')}.604Z`,
    `${arrYear}-${arrMonth.padStart(2, '0')}-${`${arrDay - 1}`.padStart(
      2,
      '0'
    )}T${arrHour.padStart(2, '0')}:${arrMinute.padStart(
      2,
      '0'
    )}:${arrSecond.padStart(2, '0')}.604Z`,
    `${arrYear}-${arrMonth.padStart(2, '0')}-${arrDay.padStart(
      2,
      '0'
    )}T${arrHour.padStart(2, '0')}:${arrMinute.padStart(
      2,
      '0'
    )}:${arrSecond.padStart(2, '0')}.604Z`,
  ],
  currency: 'USD',
  locale: 'en-US',
};

const account3 = {
  owner: 'Ahmed Gamal',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 3333,
  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    `${arrYear}-${arrMonth.padStart(2, '0')}-${`${arrDay - 2}`.padStart(
      2,
      '0'
    )}T${arrHour.padStart(2, '0')}:${arrMinute.padStart(
      2,
      '0'
    )}:${arrSecond.padStart(2, '0')}.604Z`,
    `${arrYear}-${arrMonth.padStart(2, '0')}-${`${arrDay - 1}`.padStart(
      2,
      '0'
    )}T${arrHour.padStart(2, '0')}:${arrMinute.padStart(
      2,
      '0'
    )}:${arrSecond.padStart(2, '0')}.604Z`,
    `${arrYear}-${arrMonth.padStart(2, '0')}-${arrDay.padStart(
      2,
      '0'
    )}T${arrHour.padStart(2, '0')}:${arrMinute.padStart(
      2,
      '0'
    )}:${arrSecond.padStart(2, '0')}.604Z`,
  ],
  currency: 'USD',
  locale: 'en-US',
};

const account4 = {
  owner: 'Mustafa Mansy',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 4444,
  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    `${arrYear}-${arrMonth.padStart(2, '0')}-${`${arrDay - 2}`.padStart(
      2,
      '0'
    )}T${arrHour.padStart(2, '0')}:${arrMinute.padStart(
      2,
      '0'
    )}:${arrSecond.padStart(2, '0')}.604Z`,
    `${arrYear}-${arrMonth.padStart(2, '0')}-${`${arrDay - 1}`.padStart(
      2,
      '0'
    )}T${arrHour.padStart(2, '0')}:${arrMinute.padStart(
      2,
      '0'
    )}:${arrSecond.padStart(2, '0')}.604Z`,
    `${arrYear}-${arrMonth.padStart(2, '0')}-${arrDay.padStart(
      2,
      '0'
    )}T${arrHour.padStart(2, '0')}:${arrMinute.padStart(
      2,
      '0'
    )}:${arrSecond.padStart(2, '0')}.604Z`,
  ],
  currency: 'USD',
  locale: 'en-GB',
};

const account5 = {
  owner: 'Mohamed Zakria Elbohy ',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 5555,
  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    `${arrYear}-${arrMonth.padStart(2, '0')}-${`${arrDay - 2}`.padStart(
      2,
      '0'
    )}T${arrHour.padStart(2, '0')}:${arrMinute.padStart(
      2,
      '0'
    )}:${arrSecond.padStart(2, '0')}.604Z`,
    `${arrYear}-${arrMonth.padStart(2, '0')}-${`${arrDay - 1}`.padStart(
      2,
      '0'
    )}T${arrHour.padStart(2, '0')}:${arrMinute.padStart(
      2,
      '0'
    )}:${arrSecond.padStart(2, '0')}.604Z`,
    `${arrYear}-${arrMonth.padStart(2, '0')}-${arrDay.padStart(
      2,
      '0'
    )}T${arrHour.padStart(2, '0')}:${arrMinute.padStart(
      2,
      '0'
    )}:${arrSecond.padStart(2, '0')}.604Z`,
  ],
  currency: 'USD',
  locale: 'de-DE',
};

const account6 = {
  owner: 'Ehab Elfilo',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 6666,
  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    `${arrYear}-${arrMonth.padStart(2, '0')}-${`${arrDay - 2}`.padStart(
      2,
      '0'
    )}T${arrHour.padStart(2, '0')}:${arrMinute.padStart(
      2,
      '0'
    )}:${arrSecond.padStart(2, '0')}.604Z`,
    `${arrYear}-${arrMonth.padStart(2, '0')}-${`${arrDay - 1}`.padStart(
      2,
      '0'
    )}T${arrHour.padStart(2, '0')}:${arrMinute.padStart(
      2,
      '0'
    )}:${arrSecond.padStart(2, '0')}.604Z`,
    `${arrYear}-${arrMonth.padStart(2, '0')}-${arrDay.padStart(
      2,
      '0'
    )}T${arrHour.padStart(2, '0')}:${arrMinute.padStart(
      2,
      '0'
    )}:${arrSecond.padStart(2, '0')}.604Z`,
  ],
  currency: 'USD',
  locale: 'ca-ES',
};
const account7 = {
  owner: 'Mo2men Ashraf ',
  movements: [430, -200, 340, 700, -20, 50, 400],
  interestRate: 1,
  pin: 7777,
  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    `${arrYear}-${arrMonth.padStart(2, '0')}-${`${arrDay - 2}`.padStart(
      2,
      '0'
    )}T${arrHour.padStart(2, '0')}:${arrMinute.padStart(
      2,
      '0'
    )}:${arrSecond.padStart(2, '0')}.604Z`,
    `${arrYear}-${arrMonth.padStart(2, '0')}-${`${arrDay - 1}`.padStart(
      2,
      '0'
    )}T${arrHour.padStart(2, '0')}:${arrMinute.padStart(
      2,
      '0'
    )}:${arrSecond.padStart(2, '0')}.604Z`,
    `${arrYear}-${arrMonth.padStart(2, '0')}-${arrDay.padStart(
      2,
      '0'
    )}T${arrHour.padStart(2, '0')}:${arrMinute.padStart(
      2,
      '0'
    )}:${arrSecond.padStart(2, '0')}.604Z`,
  ],
  currency: 'USD',
  locale: 'ar-EG',
};

const accounts = [
  account1,
  account2,
  account3,
  account4,
  account5,
  account6,
  account7,
];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

/////////////////////////////////////////////////
//------------Format-Date-Function-------------------//
const setDates = function (date) {
  const currentday = `${date.getDate()}`.padStart(2, '0');
  const currentMonth = `${date.getMonth() + 1}`.padStart(2, '0');
  const currentYear = date.getFullYear();
  const currentHour = `${date.getHours()}`.padStart(2, '0');
  const currentMinutes = `${date.getMinutes()}`.padStart(2, '0');
  const formatedDate = `${currentday}/${currentMonth}/${currentYear}, ${currentHour}:${currentMinutes}`;
  return formatedDate;
};
const currentDate = new Date();
const formatDateFunction = function (date) {
  const calcDiffrentDays = function (date1, date2) {
    return Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));
  };
  const differentDays = calcDiffrentDays(new Date(), date);
  if (differentDays === 0) return 'today';
  if (differentDays === 1) return 'yesterday';
  if (differentDays <= 7) return `${differentDays} days ago`;
  else {
    return setDates(date);
  }
};
//------------displayMovements-----------------//
containerMovements.textContent = '';
const displayMovements = function (accountUser, sort = false) {
  containerApp.style.opacity = '100';
  labelWelcome.textContent = `welcome back, ${accountUser.owner.split(' ')[0]}`;
  //------------Balance Date&Time---------------------//
  labelDate.textContent = new Intl.DateTimeFormat(accountUser.locale).format(
    currentDate
  );
  containerMovements.innerHTML = '';
  //check if movements sorted
  const SortedMovements = sort
    ? accountUser.movements.slice().sort((a, b) => a - b)
    : accountUser.movements;
  SortedMovements.forEach(function (movement, i) {
    const type = `${movement > 0 ? 'deposit' : 'withdrawal'}`;
    // format Date
    const date = new Date(currentUser.movementsDates[i]);
    const moveDate = formatDateFunction(date);

    containerMovements.insertAdjacentHTML(
      'afterbegin',
      `<div class="movements__row">
    <div class="movements__type movements__type--${type}">
    ${i + 1} ${type}</div>
    <div class="movements__date">${moveDate}</div>
    <div class="movements__value">${movement.toFixed(2)}€</div>
  </div>`
    );
  });
};
//---------------acc-balance--------------------//
const accBalance = function (accountUser) {
  const allBalance = accountUser.movements
    .reduce((acc, move) => acc + move, 0)
    .toFixed(2);
  accountUser.balance = allBalance;
  labelBalance.textContent = allBalance + '€';
};
//---------------[In/Out/Interest]--------------------//
const inOutInterest = function (accountUser) {
  const inMovements = accountUser.movements
    .filter(move => move > 0)
    .reduce((acc, move) => acc + move, 0);
  const outMovements = accountUser.movements
    .filter(move => move < 0)
    .reduce((acc, move) => acc + move, 0);

  const interestMovements = (inMovements * `${accountUser.interestRate}`) / 100;
  labelSumIn.textContent = inMovements.toFixed(2) + '€';
  labelSumOut.textContent = Math.abs(outMovements).toFixed(2) + '€';
  labelSumInterest.textContent = interestMovements.toFixed(2) + '€';
};

//---------------user-name--------------------//
const implementUserNames = function (accounts) {
  accounts.forEach(function (account) {
    const names = account.owner.toLowerCase().split(' ');
    const userNames = names.map(name => name[0]).join('');
    account.userName = userNames;
  });
};
implementUserNames(accounts);

//***********Update-UI*******//
const updateUi = function (acc) {
  displayMovements(acc);
  accBalance(acc);
  inOutInterest(acc);
};

//***********Time-Counter***//

const timerLogOut = function () {
  const tick = function () {
    const min = String(Math.trunc(time / 60)).padStart(2, '0');
    const sec = String(time % 60).padStart(2, '0');
    labelTimer.textContent = `${min}:${sec}`;
    if (time === 0) {
      clearInterval(setTimeCounter);
      containerApp.style.opacity = '0';
      labelWelcome.textContent = `Log in to get started`;
    }
    time--;
  };
  let time = 300;
  tick();
  const setTimeCounter = setInterval(tick, 1000);
  return setTimeCounter;
};

//---------------log-In--------------------//
let currentUser, setTimeCounter;
const checkLogIn = function (users) {
  const userInput = inputLoginUsername.value;
  const userPin = inputLoginPin.value;
  currentUser = users.find(
    user => user.userName === userInput && user.pin === Number(userPin)
  );
  if (currentUser) {
    updateUi(currentUser);
    inputLoginPin.value = inputLoginUsername.value = '';
    if (setTimeCounter) {
      clearInterval(setTimeCounter);
    }
    setTimeCounter = timerLogOut();
  } else {
    window.alert('Please enter valid user name and valid password');
    containerApp.style.opacity = '0';
    inputLoginPin.value = inputLoginUsername.value = '';
    labelWelcome.textContent = `Log in to get started`;
  }
};
btnLogin.addEventListener('click', function (e) {
  e.preventDefault();
  checkLogIn(accounts);
});

//---------------Transfer-Money--------------------//
btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amountTransfer = Number(inputTransferAmount.value);
  const receiverAccount = inputTransferTo.value;
  inputTransferAmount.value = inputTransferTo.value = '';
  const checckAcc = accounts.find(
    account => account.userName === receiverAccount
  );
  if (
    checckAcc &&
    amountTransfer > 0 &&
    currentUser.balance >= amountTransfer &&
    checckAcc?.userName !== currentUser.userName
  ) {
    checckAcc.movements.push(amountTransfer);
    checckAcc.movementsDates.push(currentDate);
    currentUser.movements.push(-amountTransfer);
    currentUser.movementsDates.push(currentDate);
    //***********Update-UI*******//
    updateUi(currentUser);
    clearInterval(setTimeCounter);
    setTimeCounter = timerLogOut();
  } else {
    console.log(`can't do this transfer`);
  }
});
//---------------Request-Loan--------------------//
btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const loanAmount = Number(inputLoanAmount.value);
  if (currentUser.movements.some(move => move > 0.1 * loanAmount)) {
    setTimeout(function () {
      currentUser.movements.push(loanAmount);
      currentUser.movementsDates.push(currentDate);
      updateUi(currentUser);
      clearInterval(setTimeCounter);
      setTimeCounter = timerLogOut();
    }, 3000);
  } else {
    console.log('failed Amount');
  }
  inputLoanAmount.value = ' ';
});

//---------------Sort-Acount--------------------//

let sortItems = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentUser, !sortItems);
  sortItems = !sortItems;
});

//---------------Delete-Account--------------------//
btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  if (
    currentUser.userName === inputCloseUsername.value &&
    currentUser.pin === Number(inputClosePin.value)
  ) {
    const accountIndex = accounts.findIndex(
      acc => acc.userName === inputCloseUsername.value
    );
    accounts.splice(accountIndex, 1);
    containerApp.style.opacity = '0';
    console.log(accounts);
    inputCloseUsername.value = inputClosePin.value = '';
  } else {
    console.log(`input valid user name or pin`);
    inputCloseUsername.value = inputClosePin.value = '';
    labelWelcome.textContent = `Log in to get started`;
  }
});
