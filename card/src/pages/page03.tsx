import React from 'react';

import Card from '../components/Card';

const Page03 = () => {
  return (
    <>
      <h1>Page03</h1>
      <Card title='Card 1' rate='2' description='Configure a monetização' ></Card>
      <Card title='Card 2' rate='0' description='Configure seu sitema' ></Card>
      <Card title='Card 3' rate='4' description='Crie seu artigo' ></Card>
      <Card title='Card 4' rate='1' description='Atualize seus dados' ></Card>
    </>
  );
}

export default Page03;