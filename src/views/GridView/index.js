import React from 'react'
import { OrganizationGridContentHeader } from '../../components/OrganizationGridContentHeader'
import { ListOfOrganizationGridView } from '../ListOfOrganizationGridView'

export const GridView = () => {
  return (
    <>
        <OrganizationGridContentHeader/>
        <ListOfOrganizationGridView/>
    </>
  )
}
