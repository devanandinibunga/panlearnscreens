import React from 'react'
import "./OrganizationPagination.scss"
import { Pagination } from 'antd'

export const OrganizationPagination = ({setpage, pagesize}) => {
  return (
    <div  className="pagination">
    <Pagination
        total={20}
        
        defaultPageSize={pagesize}
        defaultCurrent={1}
        onChange = {(page) => setpage(page)}
     
    />
     </div> 
  )
}
