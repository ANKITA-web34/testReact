import React from "react";
import ChildOfNameList from "./ChildOfNameList";

function NameList() {
//   const persons = [
//       {id: 1, name:"Harry", age: 30},
//       {id: 2, name:"Zyan", age: 34}, 
//       {id: 3, name:"Loui", age: 33}, 
//       {id: 4, name:"Nail", age: 35}, 
//       {id: 5, name:"Liyam", age: 35}
//     ];
//   const personList = persons.map((person) => <ChildOfNameList key={person.id} person={person} />);
//   return personList;

    const names = ["harry", "zyan", "ankita"]
    const nameList = names.map((name, index) => <h2 key={name}> {index} {name}</h2>)
    return <div>{nameList}</div>
}

export default NameList;
