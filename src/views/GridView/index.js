import React from 'react'
import { OrganizationGridContentHeader } from '../../components/OrganizationGridContentHeader'
import { ListOfOrganizationGridView } from '../../components/ListOfOrganizationGridView'
import PropTypes from 'prop-types'

export const GridView = ({moveCardData}) => {
  return (
    <>
        <OrganizationGridContentHeader/>
        <ListOfOrganizationGridView moveCardData={moveCardData}/>
    </>
  )
}

GridView.propTypes = {
  moveCardData : PropTypes.func,
}