import React, { useEffect } from 'react'

const Pagiation = ({setSkip, setLimit, setCurrentPage, currentPage, tableData}) => {

    let count = tableData?.length;
    let rows = 10;
    let pages = Math.ceil(count/rows) ;
    const pageNumber = [];
    useEffect(()=>{
        // console.log(currentPage);
        setSkip((currentPage -1) * rows );
        setLimit(currentPage * rows)
    },[currentPage, rows])
    useEffect(()=>{
        console.log("count", count);
    },[count])
    for(let i=1; i<= pages; i++){
        pageNumber.push(i)
    }
  return (
    <div className='flex flex-row justify-around max-w-3/4 p-4'>
        <button className="bg-blue-500 border-radius-full disabled:bg-blue-200 hover:bg-blue-700 text-white font-bold px-2  rounded-full" onClick={()=>setCurrentPage(1)} disabled={currentPage === 1 ? true : false}>
            {"<<"}
        </button>
        <button className="bg-blue-500 disabled:bg-blue-200 border-radius-full hover:bg-blue-700 text-white font-bold px-2  rounded-full" disabled={currentPage === 1 ? true : false} onClick={()=>setCurrentPage(currentPage - 1)}>
            {"<"}

        </button>
         {
            pageNumber.map((no)=>{
                return(
                    <button key={no} className="bg-blue-500 border-radius-full hover:bg-blue-700 text-white font-bold px-2  rounded-full" onClick={()=>setCurrentPage(no)}>
                        {no}
                    </button>
                )
            })
         }   
        <button className="bg-blue-500 disabled:bg-blue-200 border-radius-full hover:bg-blue-700 text-white font-bold px-2  rounded-full" disabled={currentPage === pages ? true : false} onClick={()=>setCurrentPage(currentPage + 1)}>
            {">"}
        </button><button className="bg-blue-500 disabled:bg-blue-200 border-radius-full hover:bg-blue-700 text-white font-bold px-2  rounded-full" onClick={()=>setCurrentPage(pages)} disabled={currentPage === pages ? true : false}> 
            {">>"}
        </button>
    </div>
    
  )
}

export default Pagiation