//Udemy JS for BEGINNERS
//#85

function containsPurple(arr) {
    for(let color of arr){
        if(color === 'purple' || color === 'magenta'){
            console.log('true');
            return true;

    }
}
console.log('false');
return false;
}

containsPurple(['blue', 'pink', 'magenta'])

//return has the power to hold the entire function!!!