import PageLayout from "pages/App/PageLayout"
import Filters from "./Filters"
import { Map } from 'components/Map/Map'

const Search = () => {
  return (
    <PageLayout title='Visualisation'>
      <Map onSuburbChange={() => {}} selectedSuburb="AcaciaRidge" />
      <Filters />
    </PageLayout>
  )
}
export default Search
