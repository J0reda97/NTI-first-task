const fs = require('fs');

const addstudent = (id, name,grades,comment,total) => {
  const student = loadstudent();

  const duplicateid = student.filter((student) => {
    return student.id === id;
  });
  console.log(duplicateid);
  console.log(duplicateid.length);

  if (duplicateid.length === 0) {
    notes.push(
      {
        id,
        name,
        grades,
        comment,
        total
      }
    );
    savestudent(student);
    console.log("Saved Successfully");
  } else {
    console.log("Error duplicate id");
  }
};

const loadstudent = () => {

  try {
    const dataBuffer = fs.readFileSync("student.json").toString();
    return JSON.parse(dataBuffer); 
  } catch (e) {
    return [];
  }
};

const savestudent = (student) => {
 
  const saveData = JSON.stringify(student);
 
  fs.writeFileSync("student.json", saveData);
};

const deletestudent = (id) =>{
    const student = loadstudent()

    const studentToKeep = student.filter((student)=>{

        return student.id !== id
    })
    console.log(student)
    console.log(studentToKeep)
    savestudent(studentToKeep)
    console.log('Removed')

}

const readstudent = (id) => {
const student = loadstudent()

const student = student.find((student)=>{
    return student.id === id
})
console.log(student)
if(student){
    console.log(student.name)
}
else{
    console.log('Sorry not found')
}
}

const listN = () =>{
    const student = loadstudent()
    student.forEach((student)=>{
        console.log(student.id,student.name)
    })

}

module.exports = {
  addstudent,
  deletestudent,
  readstudent,
  listN
};
