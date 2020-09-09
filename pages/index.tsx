import React from 'react';
import {
  Heading,
  Grid,
  Flex,
  Input,
  Link,
  Button,
  Text,
} from '@chakra-ui/core';

import Divider from '../components/Divider';

const Home: React.FC = () => (
  <Grid
    as='main'
    height='100vh'
    templateColumns='1fr 480px 480px 1fr'
    templateRows='1fr 480px 1fr'
    justifyContent='center'
    alignItems='center'
    templateAreas="
  '. . . .'
  '. logo form .'
  '. . . .'
  "
  >
    <Flex gridArea='logo' flexDir='column' alignItems='flex-start'>
      <img
        src='https://raw.githubusercontent.com/rocketseat-content/youtube-nextjs-design-system/85ee2d7014ba1fff5a042847206aa819d31a1669/public/rocketseat.svg'
        alt='Rocketseat'
      />

      <Heading size='2xl' lineHeight='shorter' marginTop={16}>
        Faça seu login na plataforma
      </Heading>
    </Flex>

    <Flex
      gridArea='form'
      height='100%'
      backgroundColor='gray.700'
      borderRadius='md'
      flexDir='column'
      align='stretch'
      padding={16}
    >
      <Input
        height='50px'
        backgroundColor='gray.800'
        focusBorderColor='purple.500'
        borderRadius='sm'
        placeholder='E-mail'
      />
      <Input
        height='50px'
        backgroundColor='gray.800'
        focusBorderColor='purple.500'
        borderRadius='sm'
        marginTop={2}
        placeholder='Senha'
      />

      <Link
        alignSelf='flex-start'
        marginTop={2}
        fontSize='sm'
        color='purple.600'
        fontWeight='bold'
        _hover={{ color: 'purple.500' }}
      >
        Esquci minha senha
      </Link>

      <Button
        marginTop={6}
        backgroundColor='purple.500'
        height='50px'
        borderRadius='sm'
        _hover={{ backgroundColor: 'purple.600' }}
      >
        ENTRAR
      </Button>

      <Text textAlign='center' fontSize='sm' color='gray.300' marginTop={6}>
        Não tem uma conta?{' '}
        <Link
          color='purple.600'
          fontWeight='bold'
          _hover={{ color: 'purple.500' }}
        >
          Registre-se
        </Link>
      </Text>

      <Divider />

      <Flex alignItems='center'>
        <Text fontSize='sm'>Ou entre com</Text>
        <Button
          height='50px'
          flex='1'
          backgroundColor='gray.600'
          marginLeft={6}
          borderRadius='sm'
          _hover={{ backgroundColor: 'purple.500' }}
        >
          GITHUB
        </Button>
      </Flex>
    </Flex>
  </Grid>
);

export default Home;
