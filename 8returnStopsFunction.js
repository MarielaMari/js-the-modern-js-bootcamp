function isPurple(color) {
    console.log(`the color is ${color}, therefore the claim is:`);
    if(color.toLowerCase() === 'purple') {
        console.log('true');
        return true;
    }else{
        console.log ('false'); //used to check our code
        return false; //used for the actual code
    }
}
isPurple('red');

//THERE IS A BETTER WAY OF WRITING THIS FUNCTION!