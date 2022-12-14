import React from 'react'
import { Link } from 'react-router-dom';
import "./OrganizationGridContentHeader.scss"
// import { Data } from '../../Fixtures/Data';
import { Button,Input,Menu, Dropdown} from 'antd';
import {DownOutlined, SearchOutlined, AppstoreOutlined,UnorderedListOutlined} from "@ant-design/icons";
// import { ListOfOrganizationListView } from '../ListOfOrganizationListView';

export const OrganizationGridContentHeader = () => {
  // let {url}=useRouteMatch();
  // const {Search}=Input;
  // const {Text}=Typography;
  const handleMenuClick = (e) => {
    console.log("click", e);
  };
  const menu = (
    <Menu
      onClick={handleMenuClick}
      items={[
        {
          label: "A-Z",
          key: "1",
        },
        {
          label: "Z-A",
          key: "2",
        },
      ]}
    />
  );
  // const [dataSource, setDataSource] = useState(Data);
  // const [value, setValue] = useState('');
  return (
    <div className='top-container'>
      <span className='content-header-heading'>List of Organizations</span>
      <div className='top-right-container'>
      <Input
        placeholder="Search for a oraganization"
        prefix={<SearchOutlined />}
        />
      <Link to="/Organizations" className='icon1'>
      <AppstoreOutlined />
      </Link>
      <Link to="/ListOfOrganizationListView" className='icon2'>
      <UnorderedListOutlined />
      </Link>
      
      <Dropdown overlay={menu}>
      <Button>
          Sort By
          <DownOutlined />
      </Button>
      </Dropdown>
      <Link to="/newAdd">
        <Button type="primary">Add Organisation</Button>
      </Link>
      </div> 
    </div> 
    

  )
}





