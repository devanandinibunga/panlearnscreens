import React,{useState} from 'react'
// import { Link } from 'react-router-dom';
import "./EditForm.scss"
// import { Input, Select,Form, Button, Modal,Typography } from 'antd'
// import {CloseOutlined } from "@ant-design/icons";
// import { message } from 'antd';
import { TreeSelect, message } from "antd";
import { AddEditForm } from '../../components/AddEditForm';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
// import { datacontext } from '../../Fixtures/Data';
// const {Text}=Typography;
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


export const EditForm = () => {
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

  let updatedData = localStorage.getItem("eachCardDataToLocalStorage");
  let parsedUpdateData = JSON.parse(updatedData);

  let updatedNew = localStorage.getItem("cardsDataInLocalStorage");
  let parsedUpdateNew = JSON.parse(updatedNew);

 const editedLocalStorageData = (values) => {
    
  parsedUpdateNew[parsedUpdateData.index]  = values  
  localStorage.setItem("cardsDataInLocalStorage",JSON.stringify(parsedUpdateNew))
  console.log(parsedUpdateNew)
//   values.logo=imageUrl
};
  return (
    <div  width="100%" >
        <h1>Edit Organization</h1>
        <AddEditForm  tProps={tProps} uploadButton={uploadButton}  beforeUpload={beforeUpload} handleChange={handleChange} normFile={normFile} imageUrl={imageUrl} editedLocalStorageData={editedLocalStorageData} />
    </div>
  );
}
