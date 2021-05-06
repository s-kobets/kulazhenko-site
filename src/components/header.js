import React, { useState, useContext } from 'react';
import { Flex, Box } from '@semcore/flex-box';
import Link from '@semcore/link';
import Button from '@semcore/button';
import Sticky from '@semcore/sticky';
import { List, Text } from '@semcore/typography';
import SidePanel from '@semcore/side-panel';
import Divider from '@semcore/divider';

import HamburgerM from '@semcore/icon/lib/Hamburger/m';

const Navigation = [
  { title: 'Услуги', href: '#services' },
  { title: 'Гонорар', href: '#fee' },
  { title: 'Контакты', href: '#contacts' },
];
const Header = ({ data }) => {
  const [visible, setVisible] = useState(false);
  const { tel, description, fullName, location } = data;

  return (
    <>
      <Sticky zIndex={1}>
        <Flex
          className="container-x"
          h="80px"
          alignItems="center"
          justifyContent="space-between"
          style={{
            backgroundColor: '#fff',
            color: '#000',
            boxShadow: 'rgb(0 0 0 / 10%) 0px 2px 16px 0px',
          }}
        >
          <Flex direction="column" className="is_desktop">
            <Box>{fullName}</Box>
            <Box>{`${description} в городе ${location}`}</Box>
          </Flex>

          <Box tag="nav" className="is_desktop">
            {Navigation.map((item) => (
              <Link px={4} key={item.title} href={item.href}>
                {item.title}
              </Link>
            ))}
          </Box>

          <Button
            size="xl"
            onClick={() => setVisible(true)}
            className="is_mobile"
          >
            <Button.Addon tag={HamburgerM} />
          </Button>

          <Link tag="a" href={`tel:${tel}`}>
            {tel}
          </Link>
        </Flex>
      </Sticky>
      <SidePanel
        placement="left"
        visible={visible}
        onClose={() => setVisible(false)}
      >
        <Flex direction="column">
          <Text size={400} bold>
            {fullName}
          </Text>
        </Flex>
        <List size={400} mt={5} marker={null}>
          {Navigation.map((item, ind) => (
            <>
              <List.Item>
                <Link size="l" my={2} key={item.title} href={item.href}>
                  {item.title}
                </Link>
              </List.Item>
              {ind < Navigation.length - 1 && <Divider my={2} />}
            </>
          ))}
        </List>
      </SidePanel>
    </>
  );
};

export default Header;
