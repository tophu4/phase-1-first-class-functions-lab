// Code your solution in this file!

// first two drivers
const returnFirstTwoDrivers = function(arr){
    return [arr[0],arr[1]];
};

// last two drivers
const returnLastTwoDrivers = function(arr){
    return [arr[arr.length-2], arr[arr.length-1]];
};

// array contain returnFirstTwoDrivers() , returnLastTwoDrivers()
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// higher order func takes int | returns func multiplying fare
function createFareMultiplier(fare) {
    return function(n) {
        return fare * n;
    }
}

// func return doubledFare 
function fareDoubler(fare) {
    const doubledFare = createFareMultiplier(fare)(2);
    return doubledFare;
}

// func return tripledFare
function fareTripler(fare) {
    const tripledFare = createFareMultiplier(fare)(3);
    return tripledFare;
}

// func takes two args array of scuber drivers name, and returnFirst or returnLast
function selectDifferentDrivers(drivers,returnDrivers) {
    if (returnDrivers === selectingDrivers[1]){
        return selectingDrivers[1](drivers);
    }
    return selectingDrivers[0](drivers);
}
