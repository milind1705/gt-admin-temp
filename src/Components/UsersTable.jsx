import React from 'react'
import {BiEdit} from "react-icons/bi"
import {AiOutlineDelete} from "react-icons/ai"
import { useEffect, useState } from 'react';
const UsersTable = ({skip, limit, tableData}) => {
    const [users, setUser] = useState([]);
    const [finalList, setFinalList] = useState([])
    const [selectedUser, setSelectedUser] = useState([]);
    useEffect(()=>{
      setUser(tableData)
    },[tableData])
    useEffect(()=>{
        setFinalList(users.slice(skip, limit)) 
        // console.log(list)
    }, [skip, limit, users])
    const handleDelete = (id)=>{
     const updateUser =  users.filter((user)=>{
        return user.id !== id
      });
      setUser(updateUser)
    }
    // useEffect(()=>{
    //     console.log(selectedUser)
    // },[selectedUser])
  
    const handleChanged = (e) =>{
        const {name, checked} = e.target;
      if(!checked){
       const removedId =  selectedUser.filter((items)=>{
          return items !== name
        });
        setSelectedUser(removedId);
      }else {
        setSelectedUser([...selectedUser, name])
      }
      
    }

    const handleAllSelect = (e)=>{
        const { checked} = e.target;
        let tempArr = []
        if(checked){
            for(let item of finalList){
                if(!selectedUser.includes(item.id)){
                  tempArr.push(item.id)
                }
            }
            setSelectedUser([...tempArr, ...selectedUser])
        } else{
            setSelectedUser([])
        }
    }

    const handleMultipleDelete = ()=>{
        const updateUser =  users.filter((user)=>{
           
            return  !selectedUser.includes(user.id)
          });
          setUser(updateUser)
    }
  return (
    <div> 
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3 text-lg">
                    <input type='checkbox' name='All Select' onChange={(e)=>handleAllSelect(e)}/>  
               </th>
                <th scope="col" className="px-6 py-3 text-lg">
                    Name
                </th>
                <th scope="col" className="px-6 py-3 text-lg">
                    Email
                </th>
                <th scope="col" className="px-6 py-3 text-lg">
                    Role
                </th>
                <th scope="col" className="px-6 py-3 text-lg">
                    Action
                </th>
               
            </tr>
        </thead>
        <tbody>
          {
            finalList.map((member)=>{
              return(
                <tr key={member.id} className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    <input 
                    type='checkbox'
                    name={member.id}
                    onChange={(e)=>handleChanged(e)}
                    checked={selectedUser.includes(member.id) ? true : false}
                    />
                </th>
                <td className="px-6 py-4">
                    {member.name}
                </td>
                <td className="px-6 py-4">
                {member.email}
                </td>
                <td className="px-6 py-4">
                {member.role}
                </td>
                <td className="px-6 py-4 flex flex-row justify-around">
                  <button>
                <BiEdit />
                  </button>
                  <button onClick={()=>handleDelete(member.id)}>
                  <AiOutlineDelete color='red' />
                  </button>
                </td>
            </tr>
              )
            })
          }
            

        </tbody>
    </table>
</div> 


        <button  className="bg-red-500 border-radius-full my-2 hover:bg-red-700 disabled:bg-red-300 text-white font-bold p-2  rounded-full" onClick={handleMultipleDelete} disabled={selectedUser.length === 0 ? true : false}>
            Delete Selected
        </button>
</div>
  )
}

export default UsersTable