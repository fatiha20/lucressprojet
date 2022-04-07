import react from "react";
import {Navbar,NavbarBrand,NavbarToggler,NavItem,Nav,NavLink,NavbarText,Collapse,UncontrolledDropdown,DropdownItem,DropdownToggle,DropdownMenu} from 'reactstrap'

  function  Header() {

    return (
      <div>
        <Navbar
          color="light"
          expand="md"
          light
        >
          <NavbarBrand href="/">
          KmerRetry
          </NavbarBrand>
          <NavbarToggler onClick={function noRefCheck(){}} />
          <Collapse navbar>
            <Nav
              className="me-auto"
              navbar
            >
              <NavItem>
                <NavLink href="/">
                 Home
                </NavLink>
              </NavItem>

              <NavItem>
                      <UncontrolledDropdown inNavbar nav>
                        <DropdownToggle
     caret
     nav
   >
 
   <NavLink href="/categorie">
     Categorie
     </NavLink>
   
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
                <NavLink href="/test">
                  Reservation
                </NavLink>
              </NavItem>
              <NavItem>
              <NavLink href="/Contact">
            Contact
            </NavLink> 
              </NavItem>
            </Nav>
            
            <NavbarText>
               
            </NavbarText>

            <NavItem>
                <NavLink href="/Login">
                 Login
                </NavLink>
              </NavItem>

          </Collapse>
        </Navbar>
      </div>
    )
    }
  export default  Header;