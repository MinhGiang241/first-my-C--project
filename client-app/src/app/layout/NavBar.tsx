import React from "react";
import { Button, Container, Menu } from "semantic-ui-react";

// eslint-disable-next-line import/no-anonymous-default-export
export default function () {
  return (
    <Menu inverted fixed="top">
      <Container>
        <Menu.Item header>
          <img
            src="/assets/logo.png"
            alt="logo"
            style={{ marginRight: "10px" }}
          />
        </Menu.Item>
        <Menu.Item name="Activities" />
        <Menu.Item>
          <Button positive content="Create Activities" />
        </Menu.Item>
      </Container>
    </Menu>
  );
}
