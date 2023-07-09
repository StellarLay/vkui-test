import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import './main.scss';

import {
  Epic,
  Tabbar,
  TabbarItem,
  usePlatform,
  useAdaptivityConditionalRender,
} from '@vkontakte/vkui';
import {
  Icon28ArticleOutline,
  Icon28CalendarOutline,
  Icon28UserSquareOutline,
} from '@vkontakte/icons';

const Footer = ({ go }) => {
  const [activeStory, setActiveStory] = useState('profile');

  const platform = usePlatform();
  const { viewWidth } = useAdaptivityConditionalRender();

  const onStoryChange = (e) => setActiveStory(e.currentTarget.dataset.story);

  useEffect(() => {
    go(activeStory);
    console.log('gg');
  }, [activeStory]);

  return (
    <Epic
      className='footer'
      activeStory={activeStory}
      tabbar={
        viewWidth.tabletMinus && (
          <Tabbar id='footer-items' className={viewWidth.tabletMinus.className}>
            <TabbarItem
              onClick={onStoryChange}
              selected={activeStory === 'feed'}
              data-story='feed'
            >
              <Icon28ArticleOutline />
            </TabbarItem>
            <TabbarItem
              onClick={onStoryChange}
              selected={activeStory === 'services'}
              data-story='services'
            >
              <Icon28CalendarOutline />
            </TabbarItem>
            <TabbarItem
              onClick={onStoryChange}
              selected={activeStory === 'profile'}
              data-story='profile'
            >
              <Icon28UserSquareOutline />
            </TabbarItem>
          </Tabbar>
        )
      }
    ></Epic>
  );
};

export default Footer;
