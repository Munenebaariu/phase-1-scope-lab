// Write your solution in this file!

// Global variable
window.customerName = 'bob';

function upperCaseCustomerName() {
  window.customerName = window.customerName.toUpperCase();
}

function setBestCustomer() {
  window.bestCustomer = 'not bob';
}

function overwriteBestCustomer(newFavorite) {
  window.bestCustomer = newFavorite;
}

const leastFavoriteCustomer = 'bob';

function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'not bob';
}

// Attach all to window for mocha/jsdom to see them
window.upperCaseCustomerName = upperCaseCustomerName;
window.setBestCustomer = setBestCustomer;
window.overwriteBestCustomer = overwriteBestCustomer;
window.changeLeastFavoriteCustomer = changeLeastFavoriteCustomer;
window.leastFavoriteCustomer = leastFavoriteCustomer;
