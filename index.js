// helpers.js

// Returns a new array containing the first two drivers from the passed-in array
function returnFirstTwoDrivers(drivers) {
    return drivers.slice(0, 2);
  }
  
  // Returns an array of the last two drivers
  function returnLastTwoDrivers(drivers) {
    return drivers.slice(-2);
  }
  
  // An array containing the two driver selection functions
  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
  
  // Higher-order function that takes a multiplier and returns a function that multiplies a fare
  function createFareMultiplier(multiplier) {
    return function(fare) {
      return fare * multiplier;
    };
  }
  
  // Fare doubler function
  const fareDoubler = createFareMultiplier(2);
  
  // Fare tripler function
  const fareTripler = createFareMultiplier(3);
  
  // Function that takes an array of drivers and a callback function
  function selectDifferentDrivers(drivers, callback) {
    return callback(drivers);
  }
  
  // Exporting functions for testing purposes
  module.exports = {
    returnFirstTwoDrivers,
    returnLastTwoDrivers,
    selectingDrivers,
    createFareMultiplier,
    fareDoubler,
    fareTripler,
    selectDifferentDrivers
  };