import React, { useState }  from 'react'

const  ConditionalRendering = () =>  {
  const isLoggedIn = true;
//   let message;
  
//   if(isLoggedIn) {
//      message = <div>Hy Harry you logged in succesfuly 🎉✨</div>
//   } else {
//       message = <div>Hy guest user please logged in for more info ⚠</div>
//   }

//   return message;

//   if(isLoggedIn) {
//       return <div>Hy Harry you logged in succesfuly 🎉✨</div>
//   }else {
//       return <div>Hy guest user please logged in for more info ⚠</div>
//   }

//   return (
//     <div>ConditionalRendering</div>
//   )

   return isLoggedIn ? 
    <div>Hy Harry you logged in succesfuly 🎉✨</div> :
    <div>Hy guest user please logged in for more info ⚠</div>
}

export default ConditionalRendering;
