var Gender

const Answer1 = (value) =>Gender = value

var Race

const Answer2 = (value) =>Race = value

var Citizenship

const Answer3 = (value) => Citizenship = value

var Province = []

const Answer4= (value) => Province = [...Province, value]




function Submit(){
    let firstname=document.getElementById("fname").value
    let SecondName=document.getElementById("sname").value
    let LastName=document.getElementById("lname").value
    let DateOfBirth=document.getElementById("DOB").value
    let IDNumber=document.getElementById("idnumber").value
    let EmailAddress=document.getElementById("email").value
    let ContactNumber=document.getElementById("number").value
    let PhysicalAddress=document.getElementById("address").value
    let Institute=document.getElementById("institute").value
    let Qualification=document.getElementById("qualification").value
    let Year=document.getElementById("year").value
    //console.log(document.getElementById("province9").value)



    var student1 = {
        FirstName:firstname,
        SecondName:SecondName,
        LastName:LastName,
        DateOfBirth:DateOfBirth,
        IDNumber:IDNumber,
        EmailAddress:EmailAddress,
        ContactNumber:ContactNumber,
        PhysicalAddress:PhysicalAddress,
        Gender:Gender,
        Race:Race,
        Citizenship: Citizenship,
        Institute: Institute,
        Qualification: Qualification,
        Year: Year,
        Province: Province,

    }
    //student1 = [student1]

    console.log(student1)

    
    const url ="https://formspree.io/f/xleqdygj"
    // const url ="https://formspree.io/f/mdoqkynl"

    let send =JSON.stringify(student1)

    fetch(url,{
        method: "POST",
        body: send,
        headers:{
            "Content-Type":"application/json"
        }
    })
.catch(function(e){console.log(e)})
    
   

    
}

