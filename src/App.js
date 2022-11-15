import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.scss';
import 'antd/dist/antd.min.css'; // or 'antd/dist/antd.less'
import { Layout } from 'antd';
// import { ListOfOrganizationGridView } from './views/GridView/ListOfOrganizationGridView';
import { ListOfOrganizationListView } from './views/ListOfOrganizationListView';
// import  {OrganizationGridContentHeader}  from './components/OrganizationGridContentHeader';
// import  {OrganizationListContentHeader}  from './components/OrganizationListContentHeader';
import {AddForm} from './views/AddForm';
import {EditForm} from './views/EditForm';
import { GridView } from './views/GridView';
// import {EditForm} from './views/EditForm';


// import { EditOrganizationDetails } from './views/EditOrganizationDetails';
// import { AddOrganizationDetails } from './views/AddOrganizationDetails';
// import {Data,datacontext} from "./Fixtures/Data";
// import { Data } from './Fixtures/Data'; 



function App() {
  const { Header, Sider, Content } = Layout;
  return (
      <Layout>
        <Header>Header</Header>
        <Layout>
            <Sider>Sider</Sider>
            <Content> 
              <Router>
                {/* <Route exact path= "/" component={OrganizationGridContentHeader}/> */}
                {/* <Route exact path= "/ListOfOrganizationListView" component={OrganizationListContentHeader}/> */}
                <Switch>
                    <Route exact path="/" component={GridView}/>
                    <Route exact path="/ListOfOrganizationListView" component={ListOfOrganizationListView}/>
                    {/* <Route exact path= "/new" component={AddOrganizationDetails}/>
                    <Route exact path= "/edit" component={EditOrganizationDetails}/>*/}
                    <Route exact path="/newAdd" component={AddForm}/>
                    <Route exact path="/newEdit/:id" component={EditForm}/>
                </Switch>
              </Router>
            
            </Content>
        </Layout>
      </Layout>
      
  );
}

export default App;


  