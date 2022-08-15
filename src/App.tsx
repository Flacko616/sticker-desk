import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PageWrapper from './components/common/PageWrapper';
import AdminContainer from './containers/AdminContainer';
import AdminRedContainer from './containers/AdminRedContainer';
import AuthContainer from './containers/AuthContainer';
import ErrorContainer from './containers/ErrorContainer';
import OneDeviceContainer from './containers/OneDeviceContainer';
import ProfRedactionContainer from './containers/ProfRedactionContainer';
import RecoverContainer from './containers/RecoverContainer';
import RegContainer from './containers/RegContainer';
import ShopContainer from './containers/ShopContainer';

const App = () => (
  <Routes>
    <Route path="/" element={<PageWrapper />}>
      <Route path="/" element={<ShopContainer />} />
      <Route path="error" element={<ErrorContainer />} />
      <Route path="device" element={<OneDeviceContainer />} />
      <Route path="superadmin" element={<AdminContainer />} />
      <Route path="profred" element={<ProfRedactionContainer />} />
      <Route path="adminred" element={<AdminRedContainer />} />
      {/* <Route path="*" element={<h1>NOT FOUND</h1>} /> */}
      <Route path="reg" element={<RegContainer />} />
      <Route path="auth" element={<AuthContainer />} />
      <Route path="pass" element={<RecoverContainer />} />
    </Route>
  </Routes>
);

export default App;
