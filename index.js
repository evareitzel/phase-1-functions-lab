// Code your solution in this file!

function distanceFromHqInBlocks(num){
    if (num > 42) {
        return num - 42;
    }
    return 42 - num;
}
 
function distanceFromHqInFeet (num2){
    return (distanceFromHqInBlocks(num2)) * 264;
}
 
function distanceTravelledInFeet(start, destination){
    if (start > destination) {
        return (start - destination) * 264;
    }
    else {
        return (destination - start) * 264;
    }
}

function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination)
    // if (distanceTravelledInFeet(start, destination) <= 400) {
    if (distance <= 400) {
        return 0;
    } else if ((distance > 400) && (distance <= 2000)) {
        return (distance-400) * .02;
    } else if ((distance > 2000) && (distance <= 2500)) {
        return 25;
    } else if (distance > 2500) {
        return 'cannot travel that far'
    }
}