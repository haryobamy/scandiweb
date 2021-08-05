import React, { Component } from 'react';
import { CloseIcons, Icon, SidebarBtnWrapper, SidebarContainer, SidebarLink, SidebarMenu, SidebarRoute } from './SidebarElement'



class Sidebar extends Component {
    state = {}

    render() {
        console.log(this.props.isOpen)

        return (
            <>
                <SidebarContainer isOpen={this.props.isOpen} onClick={this.props.handleClick}>
                    <Icon>
                        <CloseIcons />
                    </Icon>

                    <SidebarMenu>
                        <SidebarLink to='/'>
                            Cakes
                        </SidebarLink >
                        <SidebarLink to='/dessert'>
                            Dessert
                        </SidebarLink>
                        <SidebarLink to='/snack'>
                            Snacks
                        </SidebarLink>
                        <SidebarLink to='/cupcakes'>
                            CupCakes
                        </SidebarLink>
                        <SidebarLink to='/fullmenu'>
                            Full Menu
                        </SidebarLink>
                        <SidebarLink to='/fullmenu'>
                            Full Menu
                        </SidebarLink>
                    </SidebarMenu>
                    <SidebarBtnWrapper>
                        <SidebarRoute to='/checkout' > Order Now</SidebarRoute>
                    </SidebarBtnWrapper>
                </SidebarContainer>

            </>
        );
    }
}

export default Sidebar;


// const Sidebar = ({ isOpen, toggle }) => {
//     return (

//     )
// }

// export default Sidebar
