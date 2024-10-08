const returnFirstTwoDrivers = function(drivers = ['Antonia','Nuru','Amari','Mo']){
return drivers.slice(0,2)
}

const returnLastTwoDrivers = function (drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']){
    return drivers.slice(drivers.length-2);
}

const  selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(multiplier){
    return function(fare){
        return fare * multiplier;
    }
        
}
const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers (drivers, callback){
    return callback(drivers);
}