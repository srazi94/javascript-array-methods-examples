
var person = [
        {id:1,name:"sajjad",age:26},
        {id:2,name:"nadeem",age:20},
        {id:3,name:"rahul",age:30},
        {id:4,name:"deepak",age:28},
        {id:5,name:"samir",age:50}
      ];
      (function filterArrayMethod(person){
        let personObj = person
        console.log(Array.isArray(personObj));
        let filteredPersons = personObj.filter((element,index,arr)=>{
          let condition = element.age > 30;
          return condition;
        });
      }(person));

      (function mapArrayMethod(person){
        let personObj = person;
        let res = personObj.map((element,index,arr)=>{
          let transformedResult = {
              id:element.id,
              name:element.name,
              age:element.age,
              message:element.age > 30 ? "you are not eligible for covid-19 test":"give your sample",
          }
          return transformedResult;
        }).filter((element)=>element.age >30);
        console.log(res);
      }(person));

      (function forEachArrayMethod(personObj){
        personObj.forEach((element,index,arr)=>{
          console.log(element);
        });
      }(person));