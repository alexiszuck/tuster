import { Footer, Group, Space, Center, ActionIcon } from '@mantine/core';
import { Copyleft, BrandInstagram, BrandTwitter, BrandGithub, BrandDiscord } from 'tabler-icons-react';

export default function BottomBar() {
  return (
    <Footer fixed height={60} p="md">
      <Group position='apart'>
        <Center>
          Copyleft<Space w="4px" /><Copyleft size={14} strokeWidth={1} /><Space w="4px" />2022 Tuster. All right reserved
        </Center>
        <Group width='100%' align='right'>
          <ActionIcon>
            <BrandInstagram />
          </ActionIcon>
          <ActionIcon>
            <BrandTwitter />
          </ActionIcon>
          <ActionIcon>
            <BrandGithub />
          </ActionIcon>
          <ActionIcon>
            <BrandDiscord />
          </ActionIcon>
        </Group>
      </Group>
    </Footer>
  );
}