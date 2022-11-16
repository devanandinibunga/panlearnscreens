import React from 'react'
import "./OrganizationPagination.scss"
import { Pagination } from 'antd'
import PropTypes from 'prop-types'

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


OrganizationPagination.propTypes = {
  setpage : PropTypes.number,
  pagesize : PropTypes.number
}