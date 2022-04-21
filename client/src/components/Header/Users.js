import React from "react";
import RandomUsers from "../UserApi/RandomUsers"; 
import Pagination from "../UserApi/Pagination"



const Users =  () => {
     
   
      return (
            <div>
        <h2>We are using onions!</h2>
        <RandomUsers />
        <Pagination />
         </div>
    )
}
export default Users;