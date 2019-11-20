const Family = function() {
    let members = []
    const birth = function(name){
        members.push(name)
        console.log(members)
    }    
    return birth

}

giveBirth = Family()

giveBirth("sdsa")
giveBirth("sdsa")
giveBirth("sdsa")
giveBirth("sdsa")



// const foo = function () {
//     const x = 1
  
//     const bar = function () {
//       console.log(x) //notice this inner function using the outer function's variable
//     }
  
//     return bar
//   }
  
// const baz = foo() //out here, x doesn't exist
// baz() //but when we invoke baz, we're printing x!
  



// const determineWeather = temp => {
//     if(temp > 25){
//       return "hot"
//     }
//     return "cold"
//   }

//   const commentOnWeather = temp => "it's" + determineWeather(temp) 


//const capitalize = string =>  string[0].toUpperCase()+ string.slice(1).toLowerCase()

//string[0].toUpperCase() + string.toLowerCase().slice(0,1) 

//string.splice(1,1)

//+string.toLowerCase()  

//string[0].toUpperCase()

// const theThreeP = (x,y,z) => x+y+z

// console.log (theThreeP(1,1,1))



// const displayData = function (alertDataFunc, logDataFunc, data) {
//     alertDataFunc(data);
//     logDataFunc(data);
//   };
  
// const alertDataFunc = function(data){

//     alert(data)
// }

// const logData = function (data){
//     console.log(data)
// }


//   displayData(alert, logData, "I like to party")
  

// const returnTime = function (time) {
//     alert('The current time is: ' + time)
//   }
  
//   const getTime = function(fun){
//     const time = new Date()
//     fun(time)
//   }


//   getTime(returnTime)
  
  
//   const pushPull= function (pull){
      
//     console.log("pushing it!")   
//     pull()
//   }
  
//   const pull = function () {
//     console.log("pulling it!")
//   }

//   pushPull(pull)


// const getFormalTitle = (title, name) => title+ " " +name

// console.log(getFormalTitle ("asdsa","asdsad"))

// const square = x => {
//     counter=x
//     for (let i=0; i<1;i++ ){
//         x=x*x 
//     } 
//     return x
// }




// console.log(square(10))

 
//setInterval(function(){console.log(new Date())}, 1000)



// let users = []

// const getData = function (displayData) {
//     setTimeout(function () {
//         users = [{ name: "Rick" }, { name: "Morty" }]
//         console.log("Got users")
//         displayData()
//     }, 3000);
// }

// const displayData = function () {
//     console.log("Going to display: " + users)
//     for (user of users) {
//         console.log(user.name)
//     }
// }

// getData(displayData)

