import ProfileLayout from '@src/components/Layouts/ProfileLayout'
import Infomation from './pages/Infomation'
import Calendar from './pages/Calendar'
import Documents from './pages/Documents'

export const userRouteList = [
  {
    path: '/infomation',
    element: (
      <ProfileLayout>
        <Infomation />
      </ProfileLayout>
    )
  },

  {
    path: '/calendar',
    element: (
      <ProfileLayout>
        <Calendar />
      </ProfileLayout>
    )
  },
  {
    path: '/document',
    element: (
      <ProfileLayout>
        <Documents />
      </ProfileLayout>
    )
  }
]
