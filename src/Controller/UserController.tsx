// Exemplo de um controlador (controller)
import React, {useState} from 'react';
import {User} from '../Model/User';
import UserView from '../View/components/User';

const UserController = () => {
  const user = new User({
    name: 'Gabriel',
    email: 'Gabriel@teste.com',
    password: '123456',
  });
  const [createdUser] = useState(user);
  return <UserView user={createdUser} />;
};

export default UserController;
