/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
    arr.map((value)=>{
        if(value.profession === "developer"){
          console.log(value)
        }
    })
  
}

function PrintDeveloperbyForEach() {
  arr.forEach((value)=>{
    if(value.profession === "developer"){
      console.log(value)
    }
})
}

function addData() {
   arr.push({id:4,name:"susan",age:"20",profession:"intern"})
   console.log(arr)
}

function removeAdmin() {
  const arr2 = arr.filter((value)=>{
     if(value.profession!=="admin"){
      return value
     }
  })
  console.log(arr2)
}

function concatenateArray() {
  const arr2 = [
    { id: 5, name: "Alexa", age: "5", profession: "senior developer" },
    { id: 6, name: "Siri", age: "7", profession: "devops" },
    { id: 7, name: "Cortana", age: "6", profession: "senior developer" },
  ];
  const concatenated = arr.concat(arr2);
  console.log(concatenated); 
}
