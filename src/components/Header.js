import React, { useState } from "react";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { selectCars } from "../features/car/carSlice";
import { useSelector } from "react-redux";

function Header() {
  const [burgerStatus, setBurgerStatus] = useState(false);
  const cars = useSelector(selectCars);

  return (
    <Container>
      <Logo>
        <img src="/images/logo.svg" alt="Tesla Logo" />
      </Logo>
      <Menu>
        {cars &&
          cars.map((car, index) => (
            <MenuLink key={index} href="#">
              {car}
            </MenuLink>
          ))}
        <MenuLink href="#">Model S</MenuLink>
        <MenuLink href="#">Model 3</MenuLink>
        <MenuLink href="#">Model X</MenuLink>
        <MenuLink href="#">Model Y</MenuLink>
      </Menu>
      <RightMenu>
        <RightMenuLink href="#">Shop</RightMenuLink>
        <RightMenuLink href="#">Tesla Account</RightMenuLink>
        <CustomMenu onClick={() => setBurgerStatus(true)} />
      </RightMenu>
      <BurgerNav
        // @ts-ignore
        show={burgerStatus}
      >
        <CloseWrapper>
          <CustomClose onClick={() => setBurgerStatus(false)} />
        </CloseWrapper>
        <NavList>
          {cars &&
            cars.map((car, index) => (
              <NavItem key={index}>
                <NavItemLink href="#">{car}</NavItemLink>
              </NavItem>
            ))}
          <NavItem>
            <NavItemLink href="#">Existing Inventory</NavItemLink>
          </NavItem>
          <NavItem>
            <NavItemLink href="#">Used Inventory</NavItemLink>
          </NavItem>
          <NavItem>
            <NavItemLink href="#">Trade-in</NavItemLink>
          </NavItem>
          <NavItem>
            <NavItemLink href="#">Cybertruck</NavItemLink>
          </NavItem>
          <NavItem>
            <NavItemLink href="#">Roadster</NavItemLink>
          </NavItem>
        </NavList>
      </BurgerNav>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
`;

const Logo = styled.div`
  img {
    height: 20px;
  }
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;

  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const MenuLink = styled.a`
  font-weight: 600;
  text-transform: uppercase;
  padding: 0 10px;
  flex-wrap: nowrap;
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;

  a {
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 10px;
  }
`;

const RightMenuLink = styled.a`
  font-weight: 600;
  text-transform: uppercase;
  margin-right: 10px;
`;

const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`;

const BurgerNav = styled.nav`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background: white;
  width: 300px;
  z-index: 16;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  transform: ${(props) =>
    // @ts-ignore
    props.show
      ? "translateX(0)"
      : "translateX(100%)"};
  transition: transform 0.2s;

  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);

    a {
      font-weight: 600;
    }
  }
`;

const CustomClose = styled(CloseIcon)`
  cursor: pointer;
`;

const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const NavList = styled.ul`
  list-style: none;
  padding: 0;
`;

const NavItem = styled.li`
  padding: 15px 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`;

const NavItemLink = styled.a`
  font-weight: 600;
  text-transform: uppercase;
`;
