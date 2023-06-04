import { createContext, useContext } from 'react'

export type NavigationMenu = 'DashBoard' | 'BookScribe' | 'ManageBooking' | 'RaiseEvent' | 'MyScribes' | 'None'

type NavigationMenuContextType = {
    activeMenu: NavigationMenu
    setActiveMenu: (activeMenu: NavigationMenu) => void
}

const NavigationMenuContext = createContext<NavigationMenuContextType>({
    activeMenu: 'None',
    setActiveMenu: () => {}
})

export const useActiveMenu = () => useContext(NavigationMenuContext)

export default NavigationMenuContext