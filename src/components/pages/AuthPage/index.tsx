import React, { useEffect, useState } from 'react';
// import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
// import { SetUserNameAction } from '../../../store/auth/actions';
import Form from '../../common/Form/RegForm';
import Input from '../../common/Form/Input';
import Button from '../../common/RegButton';

const AuthPage = () => (
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const [emailDirty, setEmailDirty] = useState(false);
  // const [passwordDirty, setPasswordDirty] = useState(false);
  // const [emailError, setEmailError] = useState('Неккоректный маил');
  // const [passwordError, setPasswordError] = useState('Неккоректный пароль');

  // const blurHandler = (e) => {
  //   switch (e.target.name) {
  //     case 'email':
  //       setEmailDirty(true);
  //       break;
  //     case 'password':
  //       setPasswordDirty(true);
  //       break;
  //   }
  // };

  <Form title="Hello,World!">
    <Input title="" id="email" placeholder="Email" />
    {/* {emailDirty && emailError && <div style={{ color: 'red' }}>{emailError}</div>} */}
    <Input title="" id="password" placeholder="Пароль" />
    {/* {passwordDirty && passwordError && <div style={{ color: 'red' }}>{passwordError}</div>} */}
    <NavLink to="/pass">
      <p>Забыли пароль?</p>
    </NavLink>
    <Button title="Войти" />
  </Form>
);

//   <Form title="Hello,World!">
//     <Input title="" id="email" placeholder="email" />
//     <Input title="" id="password" placeholder="Пароль" />
//     <NavLink to="/pass">
//       <p>Забыли пароль?</p>
//     </NavLink>
//     <Button title="Войти" />
//   </Form>
// );
export default AuthPage;

// const AuthPage = () => {
//   const dispatch = useDispatch();
//   const [name] = useState('');
//   const [password] = useState('');
//   const [hasError, setHasError] = useState(false);

//   const submitHandler = () => {
//     if (password.length > 10) {
//       setHasError(false);
//       dispatch(SetUserNameAction(name));
//     } else {
//       setHasError(true);
//     }
//   };
//   useEffect(() => {
//     if (password.length > 10) {
//       setHasError(false);
//     } else if (password.length > 0) {
//       setHasError(true);
//     }
//   }, [password]);
//   // eslint-disable-next-line react/jsx-indent
//   return (
//     <Form title="Hello,World!">
//       <Input title="" id="email" placeholder="Email" />
//       <Input title="" id="password" placeholder="Пароль" type="password" />
//       {hasError && (
//         <div>
//           <span>Пароль должден быть больше 10 символов</span>
//         </div>
//       )}
//       <NavLink to="/pass">
//         <p>Забыли пароль?</p>
//       </NavLink>
//       <Button title="Войти" onClick={submitHandler} />
//     </Form>
//   );
// };
// );
