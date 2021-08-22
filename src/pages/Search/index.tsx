import PageLayout from "pages/App/PageLayout"
import Filters from "./Filters"
import { Map } from 'components/Map/Map'
import { useState } from "react"

const Search = () => {
  const [filters, setFiltes] = useState<any>();
  
  return (
    <PageLayout title='Visualisation'>
      <Map selectedSuburb={filters?.location} />
      <Filters onChange={(values: any) => setFiltes(values)} />
    </PageLayout>
  )
}
export default Search
