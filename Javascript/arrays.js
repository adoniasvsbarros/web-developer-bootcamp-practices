//initialization
var friends = [];
var friends = new Array();

//array
var friends = ["Adonias", "Caio", "João"];

//getting by index
console.log(friends[0])

// built-in methods"
var colors = ["Red", "Blue", "Green"];

colors.push("Black"); // add element to the end
colors.pop(); // remove element from the end
colors.unshift("Infrared"); // add to the beginning
colors.shift(); // remove first element
colors.indexOf("Blue"); // return index of argument, in case there is not this argument, returns -1
colors.slice(1,3); // creates new array from starting index to the end

// iteration

var colors = ["green", "blue", "pink"];

for( var i = 0; i < colors.length; i++){
    console.log(colors[i]);
}

colors.forEach(function(color){
    console.log(color)
})

function printColor(color){
    console.log("color: " + color);
}

colors.forEach(printColor);