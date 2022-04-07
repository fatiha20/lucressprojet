import React from 'react';
import { Collapse, DropdownItem, DropdownMenu, DropdownToggle, Nav, Navbar, NavbarBrand, NavbarText, NavbarToggler, NavItem, NavLink, UncontrolledDropdown } from 'reactstrap';

function Test (){
    return(
        <div>
          <div>
            <Navbar color="light" expand="md" light>
              <NavbarBrand href="/">KmerRetry</NavbarBrand>
              <NavbarToggler onClick={function noRefCheck(){}} />
              <Collapse navbar>
                <Nav className="me-auto" navbar>
                  <NavItem>
                    <NavLink href="/">Home</NavLink>
                    </NavItem>
                    <NavItem>
                      <UncontrolledDropdown inNavbar nav>
                        <DropdownToggle
     caret
     nav
   >
     <NavItem>
   <NavLink href="/categorie">
     Categorie
     </NavLink>
   </NavItem>
   </DropdownToggle>
   <DropdownMenu right>
     <DropdownItem>
     RODUITS ELECTRONIQUES
     </DropdownItem>
     <DropdownItem>
     PRODUITS ELECTROMENAGERS
     </DropdownItem>
     <DropdownItem>
     VETEMENTS POUR ALDULTE
     </DropdownItem>
     <DropdownItem>
     VETEMENTS POUR ENFANTS
     </DropdownItem>
     <DropdownItem divider />
     <DropdownItem>
     CHAUSSURES MIXTES
     </DropdownItem>
   </DropdownMenu>
 </UncontrolledDropdown>
 </NavItem>
 <NavItem>
   <NavLink href="/contact">
    Contact
   </NavLink>
 </NavItem>
 <NavItem>
   <NavLink href="/reservation">
   Reservation
   </NavLink>
 </NavItem>
</Nav>
<NavbarText >
Panier
</NavbarText>

<NavbarText>
 Login
</NavbarText>
</Collapse>
</Navbar>
</div>
     </div>
    )
}

export default Test;