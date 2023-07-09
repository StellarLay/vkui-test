import React, { useState, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';
import {
  View,
  ScreenSpinner,
  AdaptivityProvider,
  AppRoot,
  ConfigProvider,
  SplitLayout,
  SplitCol,
} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

import Home from './panels/Home';
import Persik from './panels/Persik';
import Main from './panels/Main';
import Footer from './panels/Footer';
import OpenPopup from './panels/Popup';

const App = () => {
  const [activePanel, setActivePanel] = useState('main');
  const [fetchedUser, setUser] = useState(null);
  const [popout, setPopout] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const user = await bridge.send('VKWebAppGetUserInfo');
      setUser(user);
      setPopout(null);
    }
    fetchData();
  }, []);

  const go = (value) => {
    setActivePanel(value);
  };

  const popupToggle = (popup) => {
    setPopout(popup);
  };

  return (
    <ConfigProvider>
      <AdaptivityProvider>
        <AppRoot>
          <SplitLayout popout={popout}>
            <SplitCol>
              <Main
                id='main'
                fetchedUser={fetchedUser}
                go={go}
                popupToggle={popupToggle}
              />
              {/* <Persik id='persik' go={go} /> */}
              <Footer go={go} />
            </SplitCol>
          </SplitLayout>
        </AppRoot>
      </AdaptivityProvider>
    </ConfigProvider>
  );
};

export default App;
