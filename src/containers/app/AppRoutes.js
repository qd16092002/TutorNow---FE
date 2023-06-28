import { customerRouteList } from './feature/Customer/route'
import { staticRouteList } from './feature/StaticPages/route'
import { userRouteList } from './feature/User/route'

export const AppRouteList = [...customerRouteList, ...staticRouteList, ...userRouteList]
