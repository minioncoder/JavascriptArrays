//ES 6 syntax for JS functions
//Arrays can store multiple values in a single variables


// Concat joins two or more arrays and returns copy of the joined arrays
var ArrayConcat = function(){
    var array1 = ['Nina', 'Jake', 'Joseph'];
    var array2 = ['Beta', 'Kim'];
    var children = array1.concat(array2);
    document.getElementById("arraysConcat").innerHTML = children;
}

// CopyWithin copys the first two array elements to the last two array elements
var ArrayCopy = function() {
    var array = ["Apple","Orange","Banana","Grapes"];
    var result = array.copyWithin(1, 0);
    document.getElementById("copyWithinArray").innerHTML = result;
}

//ValueOf is the default method of array object, it will not change value of array just returns the same
var ArrayValueOf = function() {
    var array1 = ['Apple', 'Banana', 'PineApple'];
    var v = array1.valueOf();
    document.getElementById("valueOf").innerHTML = v;
}

//push method adds new element into the array at the end
var ArrayPush = function() {
    var names = ['John', 'Jacob'];
    names.push('Joseph');
    document.getElementById("pushArray").innerHTML = names;
}

//unshift method adds new value to the beginning of the array
var ArrayUnshift = function() {
    var cities = ['Oxford', 'Phili', 'Penn'];
    cities.unshift('Atlanta');
    document.getElementById("unshiftArray").innerHTML = cities;
}

//pop method removes value to the end of the array
var ArrayPop = function() {
    var cities = ['Oxford', 'Phili', 'Penn'];
    cities.pop();
    document.getElementById("popArray").innerHTML = cities;
}

//Shift method adds new value to the beginning of the array by deleting first element
var ArrayShift = function() {
    var cities = ['Oxford', 'Phili', 'Penn'];
    cities.shift('Atlanta');
    document.getElementById("shiftArray").innerHTML = cities;
}

//sort method sorts the values of the array
var ArraySort = function() {
    var cities = ['Oxford', 'Phili', 'Penn'];
    cities.sort();
    document.getElementById("sortArray").innerHTML = cities;
}

//slice method selects part of the array and returns new array
var ArraySlice = function() {
    var cities = ['Oxford', 'Phili', 'Penn', 'Newyork'];
    var newar = cities.slice(0, 2);
    document.getElementById("unshiftArray").innerHTML = newar;
}

//indexOf method searches element of the array and returns its index
var ArrayIndexof = function() {
    var cities = ['Oxford', 'Phili', 'Penn', 'Atlanta'];
    var index = cities.indexOf('Penn');
    document.getElementById("indexofArray").innerHTML = index;
}

// //unshift method adds new value to the beginning of the array
// var ArrayMap = function() {
//     var names = [{'id': 1, 'name': 'Nina'}, {'id': 2, 'name': 'Arty'}];
//     names.map(nameMap);
//     console.log(names);
//     document.getElementById("mapArray").innerHTML = names;
// }

// function nameMap(names) {
//     var newNames = names.name;
//     newNames.concat(names.id);
//     console.log(newNames);
//     return newNames;
// }

//reverse array method reverses the array elements
var ArrayReverse = function() {
    var names = ['JJ', 'PP', 'TT'];
    names.reverse();
    document.getElementById('reverseArray').innerHTML = names;
}