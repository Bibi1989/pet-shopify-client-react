import React from "react";
import styled from "styled-components";
import { Menu } from "semantic-ui-react";

const Footer = () => {
  return (
    <Foot>
      {[1, 2, 3, 4].map(foot => {
        return <FooterList key={foot} />;
      })}
    </Foot>
  );
};

export default Footer;

const FooterList = () => {
  return (
    <div style={{ width: "100%" }}>
      <Menu inverted vertical style={{ width: "90%" }}>
        <Menu.Item href='//google.com' target='_blank'>
          <h1>Categories</h1>
        </Menu.Item>
        <Menu.Item link>Help Center</Menu.Item>
        <Menu.Item link>Contact Us</Menu.Item>
        <Menu.Item link>How to shop on Pet Shopify</Menu.Item>
        <Menu.Item link>About shop</Menu.Item>
      </Menu>

      {/* {message && <Message content={message} />} */}
    </div>
  );
};

const Foot = styled.div`
padding: 2% 10%;
  background: #1B1C1D;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;
