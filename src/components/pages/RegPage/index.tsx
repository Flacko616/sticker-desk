import React from 'react';
import Form from '../../common/Form/RegForm';
import Input from '../../common/Form/Input';
import Button from '../../common/RegButton';
import Check from '../../common/Form/Check';

const RegPage = () => (
  <Form title="Hello,World!">
    <Input title="" id="name" placeholder="Имя" />
    <Input title="" id="name" placeholder="Фамилия" />
    <Input title="" id="email" placeholder="Email" />
    <Input title="" id="password" placeholder="Пароль" />
    <Input title="" id="repeatPassword" placeholder="Повторите пароль" />
    <Check />
    <Button title="Cоздать аккаунт" />
  </Form>
);

export default RegPage;
