import ProfileLayout from '@src/components/Layouts/ProfileLayout'
import Overview from './pages/Overview'
import Teams from './pages/Teams'
import SettingsPC from './pages/SettingsPC'

export const userRouteList = [
  {
    path: '/profile',
    element: (
      <ProfileLayout>
        <Overview />
      </ProfileLayout>
    )
  },

  {
    path: '/calendar',
    element: (
      <ProfileLayout>
        <Teams />
      </ProfileLayout>
    )
  },
  {
    path: '/document',
    element: (
      <ProfileLayout>
        <SettingsPC />
      </ProfileLayout>
    )
  }
]
