
const absent = document.querySelector(".absent")
let studentArr = [];
const studentList =  document.querySelector(".list")
let absentArray = [];
const absentList = document.querySelector(".absent-list")
const picked = document.querySelector(".picked")
let luckyStudent = '';
const pickedText = document.querySelector(".picked-text")
const pickerBtn = document.querySelector(".picker-button")
const val = document.querySelector('.sum-students')
let luckyStudentArr = [];






function getVal() {
  pickerBtn.disabled =false;
    if (studentArr.length != 0) {
        console.log("Have an array") // this resets the array if there are array value presents
        studentArr = []; 
    }

     let val = document.querySelector('.sum-students').value; // text input for number of students
     for (i=1; i <= val; i++ ) {
        studentArr.push(i);
        console.log(`this is val:${val}`);
     }
     console.log(studentArr);
    

}


function exclude() {
if (absentArray.length !=0) {
  // this resets the array if there are array value presents
        absentArray = [];  }

const excl = document.querySelector('.absent').value
absentArray = excl.split(",") //this splits the commas and turn each one into an arrow by the seperation of and turns it INTO an array, using absentArray.push(excl.split) will make a nested array LOL...
console.log (`this is the absent values${excl}`);
console.log (absentArray); // the array was a bunch of string before
absentArray = absentArray.map(Number); // now the array is a bunch of numbers
console.log (absentArray);

absentList.textContent = `Absent List: ${absentArray}`
randomGen() // executes random Generator
}

let randomArray = []

function randomGen() {

//this for loop removes absent from studentList, so that this list will only be used for the random Picker
    for (i=0; i < absentArray.length; i++) {

        console.log(`for loop ${absentArray[i]}`)
        const index = studentArr.indexOf(absentArray[i]);
        if (index > -1) { // only splice array when item is found
        console.log(`hello ${studentArr.splice(index, 1)}`) ; // 2nd parameter means remove one item only
        }
        console.log(studentArr); 
        studentList.textContent = `Student: ${studentArr}`
        }

}



function picker() {
 

    
  let randomMath =  Math.floor(Math.random()*studentArr.length)
  luckyStudent = studentArr[randomMath];
  luckyStudentArr.push(luckyStudent);

  for (i=0; i < studentArr.length; i++) {
    const index = studentArr.indexOf(luckyStudent);
    if (index > -1) { // only splice array when item is found
    console.log(`hello ${studentArr.splice(index, 1)}`) ; // 2nd parameter means remove one item only
    }
    console.log(studentArr); 
    studentList.textContent = studentArr;
    }
if (studentArr.length <= 0) {
  pickerBtn.disabled =true;
  picked.textContent = luckyStudent;
  //pickedText.textContent = luckyStudentArr.join(" , "); // this gives out the array then seperates it with a ,
  previousStudent()
  return
} else {
  picked.textContent = luckyStudent;
  //pickedText.textContent = `Student #: ${luckyStudentArr.join(" , ")}`;
  previousStudent()

}
}

function reset () {
  val.value = '';
  absent.value = '';
  location.reload();
}


//TODO: use a forloop to fix current picked number and previous picked number! Maybe we need to make an array just to show previous picked (basically copying the pickedArray then removing the last one via pop)


function previousStudent() {
const cloneLuckyStudentArr = [...luckyStudentArr];
cloneLuckyStudentArr.pop();
pickedText.textContent = `Previous #: ${cloneLuckyStudentArr.join(" , ")}`;
}