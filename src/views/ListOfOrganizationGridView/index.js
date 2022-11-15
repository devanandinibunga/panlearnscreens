import React,{useState,useEffect} from 'react'
import { useHistory } from 'react-router-dom';
import "./ListOfOrganizationGridView.scss"
import { Avatar, Card,List } from 'antd';
// import { Data } from '../../Fixtures/Data';
// import { OrganizationContentHeader } from '../OrganizationContentHeader';
import { OrganizationPagination } from '../../components/OrganizationPagination';
// import { datacontext } from '../../Fixtures/Data';
const { Meta } = Card;

export const ListOfOrganizationGridView = () => {
  const history=useHistory();
  const [page, setpage]= useState(1)
  const [filterData, setFilterData]= useState()
  const pageSize = 9
  useEffect (() => {
      const pageNumber = (page - 1)*pageSize
      // console.log(pageNumber)
      const filterArray = parsedUpdateNew.slice(pageNumber,pageNumber+pageSize)
        setFilterData(filterArray)
        // console.log(parsedUpdateData)
       
    },[page])
    // console.log(filterData)

    let updatedNew = localStorage.getItem("cardsDataInLocalStorage");
    let parsedUpdateNew = JSON.parse(updatedNew);
    // console.log(parsedUpdateNew[i])
  
   
    const moveCardData = (eachCardDataToLocalStorage,i) => {
      // eachCardDataToLocalStorage.logo=imageUrl;
      let index = parsedUpdateNew.findIndex(function (eachCard) {
        let eachCardId = "card" + eachCard.uniqueNo;
        // console.log("eachcardId", eachCardId);
        // console.log(parsedUpdateNew[i])
        // console.log("myCardId", parsedUpdateNew[i].Id);
        if (eachCardId === parsedUpdateNew[i].Id) {
          return true;
        } else {
          return false;
        }
      // console.log(eachCardId)

      });
      console.log(index);
      // console.log(eachCardId)
      // const eachCardTotalData=[];
      const eachCardData = {
        index:index,
        logo:eachCardDataToLocalStorage.logo,
        orgTitle: eachCardDataToLocalStorage.orgTitle,
        orgDomain: eachCardDataToLocalStorage.orgDomain,
        orgEmail: eachCardDataToLocalStorage.orgEmail,
        Address: eachCardDataToLocalStorage.address,
        phone:eachCardDataToLocalStorage.phone,
        city:eachCardDataToLocalStorage.city,
        state:eachCardDataToLocalStorage.state,
        admin:eachCardDataToLocalStorage.admin,
        address:eachCardDataToLocalStorage.address,
      };
      // eachCardTotalData.push(eachCardData);
      localStorage.setItem("eachCardDataToLocalStorage", JSON.stringify(eachCardData));
      // console.log(data1);
    };  
  return (
    <div style={{width:"100%"}}>
    {/* <OrganizationContentHeader/> */}  
    <div className='org-grid-view-container'>
      <List
        itemLayout="horizontal"
        grid={{ column: 3 }}
        dataSource={filterData}
        renderItem={(item,i) => (  
          // <Link to="/newEdit">
            <List.Item  className='grid-view-card'>
              <Card onClick={()=>{moveCardData(item,i)
              history.push(`/newEdit/${i+1}`)
              }}>
                <Meta 
                  avatar={<Avatar src={item.logo} className="org-logo"/>}
                  title={item.orgTitle}
                  
                  description={[
                    <div key={item.id} className='org-para-con'>
                      <p>{item.orgDomain}</p>
                      <p>{item.orgEmail}</p>
                    </div>
                  ]}
                />
              </Card>
            </List.Item>
          // </Link>
        )}
      />
    </div>
    <OrganizationPagination setpage={setpage} pagesize={pageSize}/> 
    </div>
   
  )
 
}
