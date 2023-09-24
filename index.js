// Code your solution in this file!
const drivers = ['Alice', 'Bob', 'Charlie', 'David', 'Eve'];
function returnFirstTwoDrivers(drivers) {
  return drivers.slice(0, 2);
}
function returnLastTwoDrivers(drivers) {
    return drivers.slice(-2);
  }
  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
  function createFareMultiplier(multiplier) {
    return function (fare) {
      return fare * multiplier;
    };
  }
  const fareDoubler = createFareMultiplier(2);
  const fareTripler = createFareMultiplier(3);
  function selectDifferentDrivers(drivers, selectingFunction) {
    return selectingFunction(drivers);
  }