import React, { useEffect, useState } from 'react'

export const Searchbox = ({data, setTableData}) => {
    const [searchtext, setSearchText] = useState("");
    const searchedColumn = ['name', 'email']
    useEffect(()=>{
        console.log(searchtext);
        if(searchtext !== ""){

            let searchedData =  filteredData(searchtext);
            
            setTableData(searchedData)
        } else{
            setTableData(data)
        }
    //    console.log("searchedData", searchedData)
    }, [searchtext]);

 

    const filteredData = (searchString)=>{
        let loweerCaseValue = searchString.toLowerCase().trim();
        if(loweerCaseValue){

            return data.filter((item)=>{
                return searchedColumn.some(key =>{
                       
                  return item[key].toString().toLowerCase().includes(loweerCaseValue)
              })
            })
        } else{

            setTableData(data)
        }
        // console.log(filterData)
    }
  return (
    <div className="flex flex-row m-2 relative" >
        {/* <BsSearchHeart /> */}
        <input  className="block w-3/4 p-4  pl-10 text-sm border rounded-md focus:ring-blue-500 focus:border-blue-500"
        type='text'
        placeholder='Search by name or email'
        onChange={(e)=>{
            setSearchText(e.target.value);
        }}
        />
    </div>
  )
}
