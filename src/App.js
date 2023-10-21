import { useEffect, useState } from 'react';
import './App.css';
import Pagiation from './Components/Pagiation';
import UsersTable from './Components/UsersTable'; 
import { useUserList } from './Data/data-fetch';
import { Searchbox } from './Components/Searchbox';
function App() {
  const [skip, setSkip] = useState(0);
  const [limit, setLimit] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [tableData, setTableData] = useState([]);
  const {userList} = useUserList();
  useEffect(()=>{
    setTableData(userList)
  },[userList]);

  return (
    <div className="App">
    <Searchbox data={userList} setTableData={setTableData}/>
    <UsersTable skip={skip} limit={limit} tableData={tableData} />
    <Pagiation setCurrentPage={setCurrentPage} setLimit={setLimit} setSkip={setSkip} currentPage={currentPage} tableData={tableData} />
    </div>
  );
}

export default App;
