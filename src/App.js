import React, { useState } from 'react';
import {BrowserRouter as Router, Route, Switch,useRouteMatch} from 'react-router-dom';
import './App.scss';
import 'antd/dist/antd.min.css'; // or 'antd/dist/antd.less'
import { Layout } from 'antd';
// import { ListOfOrganizationGridView } from './views/GridView/ListOfOrganizationGridView';
// import { ListOfOrganizationListView } from './views/ListOfOrganizationListView';
// import  {OrganizationGridContentHeader}  from './components/OrganizationGridContentHeader';
// import  {OrganizationListContentHeader}  from './components/OrganizationListContentHeader';
import {AddForm} from './views/AddForm';
import {EditForm} from './views/EditForm';
import { GridView } from './views/GridView';
import { ListView } from './views/ListView';
// import {EditForm} from './views/EditForm';


// import { EditOrganizationDetails } from './views/EditOrganizationDetails';
// import { AddOrganizationDetails } from './views/AddOrganizationDetails';
// import {Data,datacontext} from "./Fixtures/Data";
// import { Data } from './Fixtures/Data'; 



function App() {
  let {path}=useRouteMatch();
  const { Header, Sider, Content } = Layout;

  const [cardData,setCardData] = useState()

  const moveCardData =(item) => {
    setCardData(item)
    console.log('card Data ', cardData)

  }
  return (
      <Layout>
        <Header>Header</Header>
        <Layout>
            <Sider>Sider</Sider>
            <Content> 
              <Router>
                <Switch>
                    <Route exact path="/Organizations" >
                      <GridView moveCardData = {moveCardData}/>
                    </Route>
                    <Route exact path="/ListOfOrganizationListView" component={ListView}/>
                    <Route exact path="newAdd" component={AddForm}/>
                    <Route  path={path} >
                      <EditForm cardData = {cardData}/>  
                    </Route>
                </Switch>
              </Router>
            </Content>
        </Layout>
      </Layout>
      
  );
}

export default App;


  