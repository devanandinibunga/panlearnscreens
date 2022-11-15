import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import "./EditOrganizationDetails.scss"
import { Input, Select,Form, Button, Modal,Typography } from 'antd'
// import {CloseOutlined } from "@ant-design/icons";
// import { message } from 'antd';
import { TreeSelect } from "antd";
// import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
// import { datacontext } from '../../Fixtures/Data';
const {Text}=Typography;
// const {handleCancel,showModal,isModalOpen}=Modal;
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
// const getBase64 = (img, callback) => {
//   const reader = new FileReader();
//   reader.addEventListener('load', () => callback(reader.result));
//   reader.readAsDataURL(img);
// };
// const beforeUpload = (file) => {
//   const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
//   if (!isJpgOrPng) {
//     message.error('You can only upload JPG/PNG file!');
//   }
//   const isLt2M = file.size / 1024 / 1024 < 2;
//   if (!isLt2M) {
//     message.error('Image must smaller than 2MB!');
//   }
//   return isJpgOrPng && isLt2M;
// };

export const EditOrganizationDetails = () => {
  // const {Text}=Typography;
  // const {Option}=Select;

  // let [selected, setSelected] = React.useState([]);
  // const formItemLayout={
  //   wrapperCol:{
  //     span:24,
  //   }
  // }
  const [multiSelectValue, setMultiSelectValue] = useState([]);
  const onChange = (newMultiSelectValue) => {
    // console.log("onChange ", multiSelectValue);
    setMultiSelectValue(newMultiSelectValue);
  };
  const tProps = {
    treeData,
    multiSelectValue,
    onChange,
    defaultValue: ["AIMS", "AP", "LMS", "HRMS"],
    treeCheckable: true,
    showCheckedStrategy: SHOW_PARENT,
    placeholder: "Please select",
    style: {
      width: "100%",
    },
  };

  // const [isModalOpen, setIsModalOpen] = useState(false);

  // const showModal = () => {
  //   setIsModalOpen(true);
  // };
  //   const handleCancel = () => {
  //     setIsModalOpen(false);
  //   };


    const countDown = () => {
      const modal = Modal.success({
      title: 'Password Changed',
       content: `New Password has been sent to ${parsedUpdateData[0].orgEmail}`,
      });
      
      setTimeout(() => {
      setIsResetPassword(false)
      }, 100);
      
      setTimeout(() => {
      modal.destroy();
       }, 1000);
      };
      const [isResetPassword, setIsResetPassword] = useState(false);
      
      const showModal = () => {
        setIsResetPassword(true);
    };
      

  let updatedData = localStorage.getItem("eachCardDataToLocalStorage");
  let parsedUpdateData = JSON.parse(updatedData);

  let updatedNew = localStorage.getItem("cardsDataInLocalStorage");
  let parsedUpdateNew = JSON.parse(updatedNew);

  // console.log(parsedUpdateData[0].logo)
  // console.log(parsedUpdateData[0].phone)
  // console.log(parsedUpdateData[0].address)

//  const edited=(change)=>{
//   localStorage.setItem("newData",JSON.stringify(change))
//   let newLocalData=JSON.parse(localStorage.getItem("newData"))
//   console.log(newLocalData)
//  }
//  const [change,setChange]=useState(
//   {
//     orgTitle:"",
//     orgEmail:"",
//     phone:"",
//   }
//  );
//  const handleChange=(event)=>{
//   setChange({
//     orgTitle:event.target.defaultValue,
//     orgEmail:event.target.defaultValue,
//     phone:event.target.defaultValue,
//   })
//  }
 const editedLocalStorageData = (values) => {
  parsedUpdateNew[parsedUpdateData[0].index]  = values
  // parsedUpdateNew[parsedUpdateData[0].index].orgTitle  = values.orgTitle
  // parsedUpdateNew[parsedUpdateData[0].index].orgEmail  = values.orgEmail
  // parsedUpdateNew[parsedUpdateData[0].index].orgDomain  = values.orgDomain
  // parsedUpdateNew[parsedUpdateData[0].index].phone  = values.phone
  // parsedUpdateNew[parsedUpdateData[0].index].address  = values.address
  // parsedUpdateNew[parsedUpdateData[0].index].admin  = values.admin
  // parsedUpdateNew[parsedUpdateData[0].index].city  = values.city
  // parsedUpdateNew[parsedUpdateData[0].index].state  = values.state
  // parsedUpdateNew[parsedUpdateData[0].index].logo  = values.logo
  // parsedUpdateNew[parsedUpdateData[0].index].orgServices  = values.orgServices
   
  localStorage.setItem("cardsDataInLocalStorage",JSON.stringify(parsedUpdateNew))


};
  return (
    <div  width="100%" >
      <h1>Edit Organization</h1>
      <Form 
      // getValueFromEvent={normFile}
      autoComplete="on"
      onFinish={(values) => {
        editedLocalStorageData(values);
        localStorage.setItem("eachCardDataToLocalStorage",JSON.stringify(values));
        window.location.href="/";
        //  event.preventDefault();
        // console.log("values are here ", values);
 
      }}

      // onFinishFailed={(error) => {
      //   // console.log({ error });
      // }}
      >
        <div className='edit-org-container'>      
          <div className='edit-org-img-container'>
            <Form.Item>
            {/* <Upload
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
            src={parsedUpdateData[0].logo}
            alt="avatar"
            style={{
              width: '100%',
            }}
          />
        ) : (
          uploadButton
        )}
            </Upload> */}
            <div>
              <img style={{width:"50%"}} src={parsedUpdateData.logo} alt="edit"/>
            </div>
            </Form.Item>
            <Form.Item style={{ width: "100%" }}>
              <Button className="reset-button" onClick={showModal}>
                Reset Password
              </Button>
              <Modal
                open={isResetPassword}
                // onCancel={countDown}
                closable={false}
                footer={null}
              >
                <div className="reset-password-container">
                  <Text className="reset-password-title"> Reset Password</Text>
                  <Form>
                    <Form.Item
                      name="password"
                      rules={[
                        {
                          required: true,
                          message: "Please enter new password!",
                        },
                      ]}
                      style={{ width: "100%" }}
                    >
                      <Input.Password className="reset-password-input" placeholder="New Password" />
                    </Form.Item>
                    <Form.Item
                      name="confirm"
                      dependencies={["password"]}
                      hasFeedback
                      rules={[
                        {
                          required: true,
                          message: "Please confirm your password!",
                        },
                        ({ getFieldValue }) => ({
                          validator(_, value) {
                            if (!value || getFieldValue("password") === value) {
                              return Promise.resolve();
                            }
                            return Promise.reject(
                              new Error(
                                "The two passwords that you entered do not match!"
                              )
                            );
                          },
                        }),
                      ]}
                    >
                      <Input.Password className="reset-password-input" placeholder="Confirm Password" />
                    </Form.Item>
                    <Form.Item >
                      <div className="reset-button-container">
                      <Button type="primary" onClick={countDown}>Reset</Button>
                        
                      </div>
                    </Form.Item>
                  </Form>
                </div>
              </Modal>
            </Form.Item>
          </div> 
          <div className='edit-org-form'>
          <Form.Item name="orgTitle" className='edit-org-form-item'>
            {/* <label>Organization Name</label> */}
          <Input placeholder="Enter organization name here" 
          defaultValue={parsedUpdateData[0].orgTitle}  />
          </Form.Item>
          <Form.Item name="orgServices" style={{ width: "40%" }} className='edit-org-form-item'>
          <label> Services</label>
              <TreeSelect {...tProps} />
            </Form.Item>
          <Form.Item name="phone" className='edit-org-form-item' >
          {/* <label>Phone</label> */}
            <Input placeholder="Enter phone number here" defaultValue={parsedUpdateData[0].phone} />
          </Form.Item>
          <Form.Item name="orgEmail"className='edit-org-form-item' >
          {/* <label>Email</label> */}
          <Input placeholder="Enter email id here" defaultValue={parsedUpdateData[0].orgEmail} />
          </Form.Item>       
          <Form.Item name="city"className='edit-org-form-item'>
          {/* <label>City</label> */}
          <Input placeholder="Enter city here" defaultValue={parsedUpdateData[0].city}  />
          </Form.Item>
          <Form.Item name="state"className='edit-org-form-item' >
          {/* <label>State</label> */}
            <Select defaultValue={"Karnataka"} value={parsedUpdateData[0].state} >
              <Select.Option value="Andhra Pradesh">Andhra Pradesh</Select.Option>
              <Select.Option value="Tamil Nadu">Tamil Nadu</Select.Option>
              <Select.Option value="Karnataka">Karnataka</Select.Option>
              <Select.Option value="Kerala">Kerala</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item name="admin" className='edit-org-form-item' >
          {/* <label>Admin</label> */}
            <Select  defaultValue={parsedUpdateData[0].admin}  >
              <Select.Option value="Madhu Patil">Madhu Patil</Select.Option>
              <Select.Option value="Madhu Patil">Madhu Patil</Select.Option>
              <Select.Option value="Madhu Patil">Madhu Patil</Select.Option>
              <Select.Option value="Madhu Patil">Madhu Patil</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item name="address"className='edit-org-form-item'>
          {/* <label>Address</label> */}
          <Input placeholder="Enter addrress here" defaultValue={parsedUpdateData[0].address}  />
          </Form.Item>
          <Form.Item name="orgDomain"className='edit-org-form-item'>
          {/* <label>Domain</label> */}
          <Input placeholder="Enter domain here" defaultValue={parsedUpdateData[0].orgDomain}  />
          </Form.Item>
          </div>
        </div> 
        <div className='edit-org-button-container'>
          <Link to="/">
            <Button className='edit-org-button'>Cancel</Button>
          </Link>
          <Button type="primary" style={{width:"10%"}} htmlType="submit" >Save</Button>
        </div>
      </Form>    
    </div>
  )
}
// onClick={()=>{edited(change)}}