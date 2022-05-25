import { Container, Avatar, Stack, Text, Title, Grid, Space } from '@mantine/core';
import React from 'react';

const data = [
  {
    name: 'Annelie Deutsch',
    desc: 'going from zero to hero here!!!',
    img: 'https://randomuser.me/api/portraits/med/women/52.jpg'
  },
  {
    name: 'Jakob Terry',
    desc: 'Very fun to learn with Tuster.',
    img: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80'
  },
  {
    name: 'Oya Demirbaş',
    desc: 'Don\'t waste your time!, Just subscribe!',
    img: 'https://randomuser.me/api/portraits/med/women/43.jpg'
  }
];

function Testimonials() {
  return (
    <Container>
      <Stack align="center" sx={{ width: '100%' }}>
        <Title order={2}>Testimonials</Title>
        <Grid gutter={40}>
          {
            data.map((item, idx) => (
              <Grid.Col key={`testi-${idx}`} span={4}>
                <Testimonial img={item.img} name={item.name} desc={item.desc} />
              </Grid.Col>
            ))
          }
        </Grid>
      </Stack>
    </Container>
  );
}

const Testimonial = ({ img, name, desc }) => {
  return (
    <Stack align="center" spacing={1} sx={{ width: '300px' }}>
      <Avatar radius="xl" size="xl" src={img} />
      <Title order={4}>{name}</Title>
      <Space h="xl" />
      <Text size="md" weight={400}>{desc}</Text>
    </Stack>
  );
}

export default Testimonials;