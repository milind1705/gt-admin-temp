import { useEffect, useState } from "react";
const BASEURL = "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json"
const useUserList = ()=>{

    const [userList, setUserList] = useState([]);

    useEffect(()=>{
        (async()=>{
            const res =await fetch(BASEURL);
            const result = await res.json();
            // console.log(result);
            setUserList(result)

        })()
    },[])
    return {userList}
}

export {useUserList};