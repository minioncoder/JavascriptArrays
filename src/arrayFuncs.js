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
    var cities = ['Oxford', 'Phili', 'Penn', 'Atlanta'];
    document.getElementById("sortArray").innerHTML = cities.sort();
}

//slice method selects part of the array and returns new array
var ArraySlice = function() {
    var cities = ['Oxford', 'Phili', 'Penn', 'Newyork'];
    var newar = cities.slice(1, 3);
    document.getElementById("sliceArray").innerHTML = newar;
}

//indexOf method searches element of the array and returns its index
var ArrayIndexof = function() {
    var cities = ['Oxford', 'Phili', 'Penn', 'Atlanta'];
    var index = cities.indexOf('Penn');
    document.getElementById("indexofArray").innerHTML = index;
}

//map method maps new element or function calls to the array
var ArrayMap = function() {
    var names = [{'id': 1, 'name': 'Nina'}, {'id': 2, 'name': 'Arty'}];
    var newmaps = names.map(nameMap);
    for(var i=0; i<names.length; i++){
        names["newname"] = names.map(nameMap);
    }
    console.log(names);
    document.getElementById("mapArray").innerHTML = newmaps;
}

function nameMap(names) {
    var newNames = names.name + names.id.toString();
    return newNames;
}

//reverse array method reverses the array elements
var ArrayReverse = function() {
    var names = ['JJ', 'PP', 'TT'];
    names.reverse();
    document.getElementById("reverseArray").innerHTML = names;
}

// fill method fills the array elements with a static value for entire array
var ArrayFill = function() {
    var fruitAr = ['Apple', 'Orange', 'PineApple'];
    var f = fruitAr.fill('Grapes');
    document.getElementById("fillAr").innerHTML = f;
}

// filter method
var ArrayFilter = function(){
    var ages = [12,16,20,35,50];
    document.getElementById("filterAr").innerHTML = ages.filter(checkJuniorAge);
}

function checkJuniorAge(age){
    return age <= 20;
}


// find method returns the value of the first elem with the condition
var ArrayFind = function() {
    var ages = [13,16,18,24];
    document.getElementById("findAr").innerHTML = ages.find(checkJuniorAge);
}

// findIndex method returns index of first elem in an array that pass the condition
var ArrayFindIndex = function() {
    var ages = [12,16,18,20,25];
    document.getElementById("findIdAr").innerHTML = ages.findIndex(checkJuniorAge);
}

// forEach methods calls functions once for each arr element
var ArrayForEach = function() {
    var cities = ["Oxford","Penn","Phili"];
    cities.forEach(myFunc); 
}
var myFunc = function(elem, index) {
    document.getElementById("forEachAr").innerHTML += index + "::" + elem + "<br>";
}

// from method creates an Array from a string   
var ArrayFrom = function() {
    var str = "HELLO";
    document.getElementById("fromAr").innerHTML = Array.from(str);
}

// includes method checks if an array includes the values
var ArrayIncludes = function() {
    var fruits = ['Apple', 'Banana', 'Orange', 'Lemon'];
    document.getElementById("includeAr").innerHTML = fruits.includes('Oxford');
}

// isArray checks whether an obj is an array or not
var Arrayis = function() {
    var arr = ['Hi', 'Hello'];
    document.getElementById("isAr").innerHTML = Array.isArray(arr);
}

// join methods joins all the elements converting to a string
var ArrayJoin = function(){
    var arr = ['Apple', 'Orange', 'Grapes'];
    document.getElementById("joinAr").innerHTML = arr.join();
}

// Keys method creates an array iterator obj, containing the keys of the array
var ArrayKeys = function() {
    var fs = ['Kiwi', 'Apple', 'Grape'];
    var fk = fs.keys();

    for(x of fk){
        document.getElementById("keysAr").innerHTML += x + "<br>";
    }
}

// lastIndexOf searches at the end of the Arr
var ArrayLastIndexOf = function() {
    var fruits = ['Apple', 'Banana', 'Orange'];
    var a = fruits.lastIndexOf('Apple');
    document.getElementById("lastIdAr").innerHTML = a;
}

// reduce method reduces the values of an array to single value
var ArrayReduce = function() {
    var fs = [10, 20, 50];
    document.getElementById("reduceAr").innerHTML = fs.reduce(sumArr);
}
function sumArr(sum, num) {
    return sum + num;
}

// toString
var ArrayToString = function() {
    var fruits = ['Apple', 'Orange', 'Banana', 'Lemon'];
    document.getElementById("toStrAr").innerHTML = fruits.toString();
}

// Properties of Arrays
// Constructor
// length
// prototype