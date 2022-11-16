import React from 'react'
import { ListOfOrganizationListView } from '../../components/ListOfOrganizationListView'
// import { ListOfOrganizationListView } from '../ListOfOrganizationListView'
import {OrganizationListContentHeader} from '../../components/OrganizationListContentHeader'

export const ListView = () => {
  return (
    <>
        <OrganizationListContentHeader/>
        <ListOfOrganizationListView/>
        
    </>
  )
}
