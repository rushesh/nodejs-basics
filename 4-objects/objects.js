const name = "Ram"
const age = 26
const keyname = "email"
const user = {
    name,
    age,
    [keyname]:"ram@xyz.com",
    address:{
        city:"Delhi",
        country:"India"
    },
    getAddress:function(){
        console.log(this.address)
        //by normal syntax you can refer using this
        //for getting user object details
    },
    getDetails:()=>{
        //need to use user, this. gives undefined
        console.log(user.name,user.age)
    },
    subjects:["Physics","Maths"]
}


user.getAddress()
user.getDetails()
user.subjects.push("Chemistry")

user.getSubjects = function(){
    console.log(this.subjects)
}
user.getSubjects()