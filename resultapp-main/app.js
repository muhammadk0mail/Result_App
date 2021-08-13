var student_info = [
{name:"Muhammad Kumail", age:21, gender: "M" , result: 1},
{name:"Muhammad Shaffan", age:22, gender: "M" , result: 1},
{name:"Ali", age:19, gender: "M" , result: 0},
{name:"Eman", age:17, gender: "F" , result: 1},
{name:"Noor", age:22, gender: "F" , result: 1},
{name:"Hadiqa", age:20, gender: "F" , result: 1},
{name:"Hunzila", age:20, gender: "M" , result: 1},
{name:"Anas", age:23, gender: "M" , result: 0},
{name:"Hamza", age:21, gender: "M" , result: 1},
{name:"Aiman", age:24, gender: "F" , result: 0},
{name:"Samina", age:23, gender: "F" , result: 1},]



for (let i = 0; i < student_info.length; i++) {
    student_info[i].rollNo = i+1
}

for (let i = 0; i < student_info.length; i++) {
    if (student_info[i] == 0) {
        student_info[i].rank = "fail";
        a.innerHTML = "sorry You are failed"
        
    }else{
        student_info[i].rank = "pass" 
    }
    
}

console.log(student_info)



var roll_no = document.getElementById("rolno")
var a = document.getElementById("main")
function searchingresult() {
    for (let i = 0; i < student_info.length; i++) {
        if (student_info[i].rollNo == roll_no.value ) {
          console.log(student_info[i])  
          a.innerHTML = ""
          var element2 = document.createElement("h4")
          element2.append(document.createTextNode("Name :  "+student_info[i].name))
          a.append(element2)
          var element3 = document.createElement("h4")
          element3.append(document.createTextNode("Gender :  "+student_info[i].gender))
          a.append(element3)
          var element1 = document.createElement("h4")
          element1.append(document.createTextNode("Result :  "+ student_info[i].rank))
          a.append(element1)
          roll_no.value = ""
        }
        
    }

    
}