import PageLayout from "pages/App/PageLayout"
import { Outlet } from 'react-router-dom'

const UserProfile = () => {
  return (
    <PageLayout title='Assessment Profile'>
      <Outlet />
    </PageLayout>
  )
}
export default UserProfile
