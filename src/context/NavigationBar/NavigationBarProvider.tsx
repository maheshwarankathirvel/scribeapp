import React, { ReactNode, useState } from 'react'
import NavigationMenuContext, {NavigationMenu} from "./NavigationBarContext";

const NavigationMenuProvider = ({ children }: { children: ReactNode }) => {
    const [menuState, setMenuState] = useState<NavigationMenu>('None')

    const setActiveMenu = (navMenu: NavigationMenu) => {
        setMenuState(navMenu)
    }

    return (
        <NavigationMenuContext.Provider value={{ activeMenu: menuState, setActiveMenu }}>
            {children}
        </NavigationMenuContext.Provider>
    )
}

export default NavigationMenuProvider
