import React,{useState} from 'react'
import "./AddOrganizationDetails.scss"
import { Input, Select,Form, Button } from 'antd'
// import {CloseOutlined } from "@ant-design/icons";
import { message, Upload } from 'antd';
import { TreeSelect } from "antd";
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';


export const AddOrganizationDetails = () => {
  // const {Text}=Typography;
  // const {Option}=Select;

  // let [selected, setSelected] = React.useState([]);
  // const formItemLayout={
  //   wrapperCol:{
  //     span:24,
  //   }
  // }
  const { SHOW_PARENT } = TreeSelect;
const treeData = [
  {
    title: "AIMS",
    value: "AIMS",
    key: "AIMS",
  },
  {
    title: "AP",
    value: "AP",
    key: "AP",
  },
  {
    title: "LMS",
    value: "LMS",
    key: "LMS",
  },
  {
    title: "HRMS",
    value: "HRMS",
    key: "HRMS",
  },
  {
    title: "EP",
    value: "EP",
    key: "EP",
  },
  {
    title: "CMS",
    value: "CMS",
    key: "CMS",
  },
  {
    title: "LXP",
    value: "LXP",
    key: "LXP",
  },
];


// import React, { useState } from 'react';

const beforeUpload = (file) => {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  return isJpgOrPng && isLt2M;
};

const normFile = (e) => {
  // console.log("Upload event:", e);

  if (Array.isArray(e)) {
    return e;
  }
  return e && e.fileList;
};
  function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener("load", () => callback(reader.result));
    reader.readAsDataURL(img);
  }
  const [multiSelectValue, setMultiSelectValue] = useState([]);
  const onChange = (newMultiSelectValue) => {
    console.log("onChange ", multiSelectValue);
    setMultiSelectValue(newMultiSelectValue);
  };
  const tProps = {
    treeData,
    multiSelectValue,
    onChange,
    // defaultValue: ["AIMS", "AP", "LMS", "HRMS"],
    treeCheckable: true,
    showCheckedStrategy: SHOW_PARENT,
    placeholder: "Please select",
    style: {
      width: "100%",
    },
  };
  // const [loading, setLoading] = useState(false);
  // const [imageUrl, setImageUrl] = useState();
  // const handleChange = (info) => {
  //   if (info.file.status === 'uploading') {
  //     setLoading(true);
  //     return;
  //   }
  //   if (info.file.status === 'done') {
  //     // Get this url from response in real world.
  //     getBase64(info.file.originFileObj, (url) => {
  //       setLoading(false);
  //       setImageUrl(url);
  //     });
  //   }
  // };

  const [state, setState] = useState({
    loading: false,
  });
  const handleChange = (info) => {
    // let fileList = [...info.fileList];

    if (info.file.status === "uploading") {
      setState({ loading: true });
      return;
    }
    if (info.file.status === "done") {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, (imageUrl) => {
        setState({
          imageUrl,
          loading: false,
        });
      });
    }
  };
  const { imageUrl } = state;
  const uploadButton = (
    <div  style={{
      borderRadius:100,
    }}>
      {imageUrl ? <LoadingOutlined /> : <PlusOutlined />}
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </div>
  );
  // let data=[];
  // const function1 = (result) => {
  //   const previousData  = JSON.parse(localStorage.getItem("result"))
  //   previousData.push(result);
  //   localStorage.setItem("result",JSON.stringify(previousData))

  //   console.log("result Object is", result);
  //   console.log("imageUrl is ", imageUrl);
  //   // organization.logo = imageUrl;
  //   result.logo=imageUrl;
    
  
  // //  const data=[]
  //   const obj1 = {
  //     logo:result.logo,
  //     orgTitle: result.orgName,
  //     orgDomain: result.orgDomain,
  //     orgEmail: result.email,
  //     Address: result.address,
  //     uniqueId: result.orgName,
  //     // phone:result.phone,
  //     // city:result.city,
  //     // state:result.state,
  //     // admin:result.admin,
  //   };
  //   data.push(obj1);
  //   localStorage.setItem("result", JSON.stringify(data));
  //   console.log(data);

  // };
  // function getValuesFromLocalStorage() {
    
  //   // console.log('most wanted data', parsedValue)

  //   // const [data,setData]=useState([])

  //   if (parsedValue === null) {
  //     return [];
  //   } else {
  //     return parsedValue;
  //   }
  // }

 
  

  const sendToLocalStorage=(values)=>{
    let totalCardData;
    let stringifiedValue = localStorage.getItem("cardsDataInLocalStorage");
    let parsedValue = JSON.parse(stringifiedValue);
    if (parsedValue===null){
      totalCardData=[];
    } else{
      totalCardData =parsedValue;
    }
    // const totalCardData =parsedValue;
    let cardsCount=totalCardData.length;
    cardsCount=cardsCount+1;
    let cardId="card"+cardsCount;
    
    values.logo=imageUrl;
    const cardsData = {
          Id:cardId,
          uniqueNo:cardsCount,
          logo:values.logo,
          orgTitle: values.orgTitle,
          orgDomain: values.orgDomain,
          orgEmail: values.orgEmail,
          address: values.address,
          // uniqueId: values.orgName,
          phone:values.phone,
          city:values.city,
          state:values.state,
          admin:values.admin,
         
        };
        
        totalCardData.push(cardsData);
        localStorage.setItem("cardsDataInLocalStorage",JSON.stringify(totalCardData))
        // return data
        // localStorage.setItem("result", JSON.stringify(data));
        // console.log(data);
  }

  // const localStorageData = (data) => {
  //   localStorage.setItem("new",JSON.stringify(data))
  //   console.log(data)
  // }

  return (
    <div  width="100%" >
      <h1>Add Organization</h1>
      <Form
       getValueFromEvent={normFile}
       autoComplete="on"
       onFinish={(values) => {
         sendToLocalStorage(values);
         window.location.href="/";
        //  console.log("result are here ", result);

       }}
      //  onFinishFailed={(error) => {
      //    console.log({ error });
      //  }}
        > 
        <div className='add-org-container'>
          <div className='add-org-img-container'>
            <Form.Item name="logo" valuePropName="fileList" getValueFromEvent={normFile}>
            <Upload
        name="avatar"
        listType="picture-card"
        className="avatar-uploader"
        showUploadList={false}
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        beforeUpload={beforeUpload}
        onChange={handleChange}
      >
        {imageUrl ? (
          <img
            src={imageUrl}
            alt="avatar"
            style={{
              width: '100%',
            }}
          />
        ) : (
          uploadButton
        )}
      </Upload>
            </Form.Item>

          </div> 
          <div className='add-org-form'>
          <Form.Item name="orgTitle" label="Organization Name" className='add-org-form-item'>
          <Input placeholder="Enter organization name here" type='text'/>
          </Form.Item>
          <Form.Item name="orgService" style={{ width: "40%" }} label="Services" className='add-org-form-item'>

              <TreeSelect {...tProps} />
            </Form.Item>
          <Form.Item name="phone" className='add-org-form-item' label="phone">

            <Input placeholder="Enter phone number here" type='text' />
          </Form.Item>
          <Form.Item name="orgEmail" label="Email" className='add-org-form-item' >
          <Input placeholder="Enter email id here" type='text' />
          </Form.Item>       
          <Form.Item name="city" label="city" className='add-org-form-item'>
          <Input placeholder="Enter city here" type='text' />
          </Form.Item>
          <Form.Item name="state" label="State" className='add-org-form-item' >
            <Select defaultValue={"Karnataka"}>
              <Select.Option value="Andhra Pradesh">Andhra Pradesh</Select.Option>
              <Select.Option value="Tamil Nadu">Tamil Nadu</Select.Option>
              <Select.Option value="Karnataka">Karnataka</Select.Option>
              <Select.Option value="Kerala">Kerala</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item name="admin" label="Admin" className='add-org-form-item' >
            <Select defaultValue={"Madhu Patil"} >
              <Select.Option value="Madhu Patil">Madhu Patil</Select.Option>
              <Select.Option value="Radha Krishna">Radha Krishna</Select.Option>
              <Select.Option value="Vamsi">Vamsi</Select.Option>
              <Select.Option value="Rekha bhanu">Rekha bhanu</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item name="address" label="Address" className='add-org-form-item'>
          <Input placeholder="Enter address here" type='text'  />
          </Form.Item>
          <Form.Item name="orgDomain" label="Domain" className='add-org-form-item'>
          {/* <label>Domain</label> */}
          <Input placeholder="Enter domain here"  />
          </Form.Item>
          </div>
        </div>       
       
      <div className='add-org-button-container'>
        <Link to="/">
          <Form.Item>
            <Button className='add-org-button'htmlType="Cancel" >Cancel</Button>
          </Form.Item>
          </Link>
          <Form.Item>
            <Button type="primary"  className='add-org-button'  htmlType="Save"  >Save</Button>
          </Form.Item>
        
      </div>
      </Form> 
      
    </div>
  )
}
// onClick={() => {const data=getValuesFromLocalStorage()}}