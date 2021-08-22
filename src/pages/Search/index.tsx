import PageLayout from "pages/App/PageLayout"
import Filters from "./Filters"
import { Map } from 'components/Map/Map'
import { useState } from "react"

const Search = () => {
  const [filters, setFiltes] = useState<any>()
  console.log(filters)
  
  return (
    <PageLayout title='Visualisation'>
      <Map onSuburbChange={() => {}} selectedSuburb="AcaciaRidge" />
      <Filters onChange={(values: any) => setFiltes(values)} />
    </PageLayout>
  )
}
export default Search
