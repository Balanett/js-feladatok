/*

// 1. Duplázd meg!

function doubleArray(arr) {
    return arr.concat(arr);
}
let testArray_1 = [1,2,3,4,5,6,7];
console.log(doubleArray(testArray_1));


// 2. Egészítsd ki!

function addACharacter(arr) {
    for (let i = 0; i<arr.length; i++) {
        arr[i] = "a"+arr[i]
    } return arr;
}
let testArray_2 = ["lma", "nanász", "sztal", "kkord", "utó", "nakonda"];
console.log(addACharacter(testArray_2));


// 3. Páros és páratlan

pairs = [];
unpairs = [];
function sortNumbers(arr) {
    for (let i = 0; i<arr.length; i++) {
        if (arr[i]%2 === 0) {
            pairs.push(arr[i]);
        } else {
            unpairs.push(arr[i]);
        }
    } return "páros számok: "+pairs+"\npáratlan számok: "+unpairs;
}
let testArray = [12, 55, 234, 8765, 4, 77, 196, 133, 759, 211, 17, 45, 7698, 3];
console.log(sortNumbers(testArray));


// 4. Töltsd fel a tömböt X-ig!

function fillArray(first, second) {
    if (first < second) {
        for (let i=first; i<=second; i++) {
            filledArray.push(i)
        } return filledArray;
    } else {
        for (let i=second; i<=first; i++) {
            filledArray.push(i)
        }
    } return filledArray.reverse();
}
let filledArray = [];
console.log(fillArray(parseInt(window.prompt("Mettől?")), parseInt(window.prompt("Meddig?"))))


// 5. Classroom menedzsment program

function addParticipant(name) {
    array.push(name)
    return array
}

function removeParticipant(name) {
    if (typeof name === "string") {
        for (let i=0; i<array.length; i++) {
            if (array[i] === name) {
                delete array[i]
            }
        } return array
    } else if (typeof name !== "string") {
        return "Ez nem egy név"
    } else {
        return "A keresett szemény nincs a listában"
    }
}


let array = ["Anett", "Zsolt", "Kitti"]

console.log(addParticipant(String(window.prompt("Kit adjak a listához?"))))
console.log(removeParticipant(String(window.prompt("Kit töröljek a listából?"))))


// 6. Bazinga!

function baz(array) {
    for (let i=0; i<array.length; i++) {
        if (array[i]%15 === 0) {
            array[i] = "Bazinga"
        } else if (array[i]%5 === 0) {
            array[i] = "inga"
        } else if (array[i]%3 === 0) {
            array[i] = "Baz"
        }
    } return arrayItems
}

function oneToNum(first, second) {
    for (let i=first; i<=second; i++) {
        arrayItems.push(i)
    } return baz(arrayItems);
}

let arrayItems = [];
console.log(oneToNum(1, parseInt(window.prompt("1-től meddig?"))))


// 7. Hasáb felülete és térfogata

function prism(a,b,c) {
    if (a != parseInt(a) || b != parseInt(b) || c != parseInt(c)) {
        return "Számot kérek!"
    } else if (a<1 || b<1 || c<1) {
        return "Pozitív számot kérek!"
    } else {
        let numsArray = [a,b,c]
        let A = 2*a*b+2*c*(a+b)
        let T = a*b*c
        return "Alapadatok: "+numsArray+"\nFelszín: "+A+"\nTérfogat: "+T
    }
}

let num1 = window.prompt("Első szám")
let num2 = window.prompt("Második szám")
let num3 = window.prompt("Harmadik szám")
console.log(prism(num1,num2,num3))


// 8. Ki az ügyeletes?

function onDuty(numbers,names) {
    let people = []
    for (let i = 0; i < numbers.length; i++) {
        let serial = numbers[i]
        let person = names[i]
        people.push(person[serial-1])
    } return people
}

let namesArray = [
    ["Anna", "Béla", "Csabi", "Gergő", "Hajni", "Jani", "Kata"],
    ["Ákos", "Cili", "Dénes", "Gitta", "Karola", "Lili", "Zotya"],
    ["Ferkó", "Imre", "Márti", "Nóra", "Polly", "Szabi", "Titti"]
]
 let serialNumbers = [1, 5, 3]

console.log(onDuty(serialNumbers,namesArray))


// 9. Közös kurzus

function commonCourses (array1, array2) {
    let commonArray = []
    for (let i=0; i<array1.length; i++) {
        for (let j=0; j<array2.length; j++) {
            if (array1[i] === array2[j]) {
                commonArray.push(array1[i])
            }
        }
    } return commonArray
}

let student1 = ["Math", "Music", "Biology"]
let student2 = ["Drama", "Music", "Biology"]

console.log(commonCourses(student1,student2))


// 10. Az utolsó n szám

function lastN(array, number) {
    return (array.slice(array.length-number, array.length)).reverse()
}

let inputArray = ["Star Wars", 12, 449, true, "jedi", false, -10, 0.12, "force"]
let inputN = 5

console.log(lastN(inputArray,inputN))


 */