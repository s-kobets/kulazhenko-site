import React from 'react';
import { Flex, Box } from '@semcore/flex-box';
import Link from '@semcore/link';

const Header = ({ data }) => {
  const { tel, description, fullName, location } = data;
  return (
    <Flex
      px={3}
      h="80px"
      alignItems="center"
      justifyContent="space-between"
      style={{
        backgroundColor: '#fff',
        color: '#000',
        boxShadow: 'rgb(0 0 0 / 10%) 0px 2px 16px 0px',
      }}
    >
      <Flex direction="column">
        <Box>{fullName}</Box>
        <Box>{`${description} в городе ${location}`}</Box>
      </Flex>

      <Box tag="nav">
        {[
          { title: 'Услуги', href: '/services' },
          { title: 'Гонорар', href: '/fee' },
          { title: 'Контакты', href: '/contacts' },
        ].map((item) => (
          <Link px={4} key={item.title} href={item.href}>
            {item.title}
          </Link>
        ))}
      </Box>

      <Link tag="a" href={`tel:${tel}`}>
        {tel}
      </Link>
    </Flex>
  );
};

export default Header;
