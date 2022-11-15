import React,{useState,useEffect} from 'react'
import { Input, Select,Form, Button } from 'antd'
import {  Upload } from 'antd';
import { TreeSelect } from "antd";
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";


export const AddEditForm = ({ tProps,uploadButton,sendToLocalStorage,editedLocalStorageData,beforeUpload,handleChange,normFile,imageUrl}) => {
    let eachCardDataToLocalStorage = localStorage.getItem("eachCardDataToLocalStorage");
    let a= JSON.parse(eachCardDataToLocalStorage)
    
    const [defaultValue,setDefaultValue]=useState(
        {
         orgTitle:"",
         orgEmail:"",
         orgDomain:"",
         orgServices:"",
         phone:"",
         city:"",
         state:"",
         address:"",
         admin:"",
         logo:"",
       });
       useEffect (() => {
        //  setDefaultValue(a)  
        // console.log(location.href)
        if (location.pathname ==="/newAdd"){
            setDefaultValue({
                orgTitle:"",
                orgEmail:"",
                orgDomain:"",
                orgServices:"",
                phone:"",
                city:"",
                state:"",
                address:"",
                admin:"",
                logo:"",
              })
        } else{    
            setDefaultValue(a)
        }
         console.log(a)     
       },[])
        // imageUrl={defaultValue.logo};
    return (
    <div>
    <Form
    key={defaultValue.orgTitle}
    getValueFromEvent={normFile}
    autoComplete="on"
    onFinish={(values) => {
        if (location.href ==="http://localhost:3000/newAdd"){
          sendToLocalStorage(values); 
          window.location.href="/";

        } else{
            editedLocalStorageData(values);
            localStorage.setItem("eachCardDataToLocalStorage",JSON.stringify(values));
            window.location.href="/";


        }
        // sendToLocalStorage(values);
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
        // <img src={defaultValue.logo} alt="logo"  style={{
        //     width: '100%',
        // }}/>
        uploadButton
    )}
        </Upload>
    </Form.Item>
        </div> 
        <div className='add-org-form'>
        <Form.Item  name="orgTitle" label="Organization Name" className='add-org-form-item'>
        <Input defaultValue={defaultValue.orgTitle}  type='text'/>
        </Form.Item>
        <Form.Item  name="orgService" style={{ width: "40%" }} label="Services" className='add-org-form-item'>
        <TreeSelect {...tProps} />
        </Form.Item>
        <Form.Item  name="phone" className='add-org-form-item' label="phone">
        <Input defaultValue={defaultValue.phone} placeholder="Enter phone number here" type='text' />
        </Form.Item>
        <Form.Item name="orgEmail" label="Email" className='add-org-form-item' >
        <Input defaultValue={defaultValue.orgEmail} placeholder="Enter email id here" type='text' />
        </Form.Item>       
        <Form.Item name="city" label="city" className='add-org-form-item'>
        <Input defaultValue={defaultValue.city} placeholder="Enter city here" type='text' />
        </Form.Item>
        <Form.Item name="state" label="State" className='add-org-form-item' >
        <Select defaultValue={defaultValue.state}>
            <Select.Option value="Andhra Pradesh">Andhra Pradesh</Select.Option>
            <Select.Option value="Tamil Nadu">Tamil Nadu</Select.Option>
            <Select.Option value="Karnataka">Karnataka</Select.Option>
            <Select.Option value="Kerala">Kerala</Select.Option>
        </Select>
        </Form.Item>
        <Form.Item name="admin" label="Admin" className='add-org-form-item' >
        <Select defaultValue={defaultValue.admin} >
            <Select.Option value="Madhu Patil">Madhu Patil</Select.Option>
            <Select.Option value="Radha Krishna">Radha Krishna</Select.Option>
            <Select.Option value="Vamsi">Vamsi</Select.Option>
            <Select.Option value="Rekha bhanu">Rekha bhanu</Select.Option>
        </Select>
        </Form.Item>
        <Form.Item name="address" label="Address" className='add-org-form-item'>
        <Input defaultValue={defaultValue.address} placeholder="Enter address here" type='text'  />
        </Form.Item>
        <Form.Item name="orgDomain" label="Domain" className='add-org-form-item'>
        {/* <label>Domain</label> */}
        <Input defaultValue={defaultValue.orgDomain} placeholder="Enter domain here"  />
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
AddEditForm.propTypes={
    normFile:PropTypes.func,
    handleChange:PropTypes.func,
    beforeUpload:PropTypes.func,
    tProps:PropTypes.func,
    uploadButton:PropTypes.func,
    sendToLocalStorage:PropTypes.func,
    editedLocalStorageData:PropTypes.func,
    imageUrl:PropTypes.string,
    defaultValue:PropTypes.object,
}
   