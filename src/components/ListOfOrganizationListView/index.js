import React,{useState, useEffect} from 'react';
import "./ListOfOrganizationListView.scss";
// import { OrganizationContentHeader } from '../OrganizationContentHeader';
// import { Data } from '../../Fixtures/Data';
import {  Table} from 'antd';
import { OrganizationPagination } from '../../components/OrganizationPagination';
import { useHistory } from 'react-router-dom';


export const ListOfOrganizationListView = () => {
  const history=useHistory();
  const [page, setpage]= useState(1)
  const [filterData, setFilterData]= useState()
  const pageSize = 7
  useEffect (() => {
      const pageNumber = (page - 1)*pageSize
      // console.log(pageNumber)
      const filterArray = parsedUpdateNew.slice(pageNumber,pageNumber+pageSize)
        setFilterData(filterArray)
    },[page])
    let updatedNew = localStorage.getItem("cardsDataInLocalStorage");
    let parsedUpdateNew = JSON.parse(updatedNew);
 
  const columns = [
    {
      title: 'Name',
      key: 'orgTitle',
      dataIndex:'orgTitle',
      sorter: (a, b) => a.orgTitle > b.orgTitle, 
      sortDirections: ["descend"], 
      render: (text,record) => {
        return (
         <div className='list-view-logo-name'>
            <img width="13%" className='list-view-logo' alt="img-logo" src={record.logo}/>
            {/* <Avatar width="13%" className='list-view-logo' alt="img-logo" src={record.orgLogo}/>  */}
            <p className='list-view-name' >{record.orgTitle}</p> 
         </div>
       );},
      // key: 'orgTitle',
      width: '30%',
    },
    {
      title: 'Email',
      dataIndex: 'orgEmail',
      // key: 'orgEmail',
      width: '20%',
    },
    {
      title: 'Domain',
      dataIndex: 'orgDomain',
      // key: 'orgDomain',
    },
  ];

  // const data2=[];
  // const display = (output1) => {
  //   // output1.logo=imageUrl;
  //   const object = {
  //     logo:output1.orgLogo,
  //     orgTitle: output1.orgTitle,
  //     orgDomain: output1.orgDomain,
  //     orgEmail: output1.orgEmail,
  //     Address: output1.address,
  //     uniqueId: output1.orgName,
  //     phone:output1.phone,
  //     city:output1.city,
  //     state:output1.state,
  //     admin:output1.admin,
  //   };
  //   data2.push(object);
  //   localStorage.setItem("output1", JSON.stringify(data2));
  //   console.log(data2);
  // };
  return (
    <>
      {/* <OrganizationContentHeader/> */}
      <Table className="org-table"  onRow={(i) => ({
        onClick: (e) => 
        history.push('/edit')})}
       columns={columns} dataSource={filterData} pagination={false} />
      <OrganizationPagination setpage={setpage} pagesize={pageSize}/>       
    </>
  )
}
// onRow={(i) => ({ onClick: (e) => history.push('/admin/ViewLog')})}

// pagination={{pageSize: 5}}