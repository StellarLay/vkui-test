import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';

import './main.scss';

import placeholder from '../img/persik.png';

import {
  View,
  Panel,
  PanelHeader,
  PanelHeaderBack,
  Header,
  Button,
  Epic,
  Group,
  Cell,
  Div,
  Avatar,
  Spinner,
  SimpleCell,
  Search,
  IconButton,
  Tabbar,
  TabbarItem,
  usePlatform,
  SplitCol,
  useAdaptivityConditionalRender,
  Badge,
  Card,
  Spacing,
} from '@vkontakte/vkui';
import {
  Icon28SchoolOutline,
  Icon28HelpCircleOutline,
  Icon28MoreHorizontal,
  Icon12Verified,
  Icon28AddOutline,
  Icon28EducationOutline,
  Icon28Message,
  Icon28Messages,
  Icon20ChevronRightOutline,
} from '@vkontakte/icons';

import Popup from './Popup';

const groupName = 'С748';

const friendsList = [
  {
    name: 'Владислав Великоиваненко',
    subtitle: 'Команда ВКонтакте',
    photo: placeholder,
    isAdmin: true,
  },
  {
    name: 'Алексей Денисов',
    subtitle: 'Малой',
    photo: placeholder,
    isAdmin: false,
  },
  {
    name: 'Евгений Кузьмич',
    subtitle: 'Участник',
    photo: placeholder,
    isAdmin: false,
  },
  {
    name: 'Иван Петров',
    subtitle: 'Участник',
    photo: placeholder,
    isAdmin: false,
  },
  {
    name: 'Бот Ботович',
    subtitle: 'Участник',
    photo: placeholder,
    isAdmin: false,
  },
  {
    name: 'Бот Ботович',
    subtitle: 'Участник',
    photo: placeholder,
    isAdmin: false,
  },
  {
    name: 'Бот Ботович',
    subtitle: 'Участник',
    photo: placeholder,
    isAdmin: false,
  },
];

const Main = ({ id, go, popupToggle, fetchedUser }) => {
  const [activePanel, setActivePanel] = useState('profile');

  const PopupTargetRef = useRef();

  return (
    <View activePanel={activePanel}>
      <Panel id='profile'>
        <PanelHeader separator={false}>Профиль</PanelHeader>
        {fetchedUser && (
          <Group>
            <Div className='profle-group'>
              <Card className='main-profile-group' mode='tint'>
                <Spacing size={8} />
                <Cell
                  className='cell'
                  before={
                    fetchedUser.photo_200 ? (
                      <Avatar src={fetchedUser.photo_200} />
                    ) : null
                  }
                  subtitle={'Создатель • ' + groupName}
                  hasHover={false}
                  hasActive={false}
                >
                  {`${fetchedUser.first_name} ${fetchedUser.last_name}`}
                </Cell>
                <Spacing size={8} />
              </Card>
            </Div>
            <Div>
              <Cell
                before={<Icon28SchoolOutline />}
                after={<Icon20ChevronRightOutline />}
                onClick={() => setActivePanel('group')}
              >
                Настройки группы
              </Cell>
              <Cell
                before={<Icon28HelpCircleOutline />}
                after={<Icon20ChevronRightOutline />}
                onClick={() => setActivePanel('feedback')}
              >
                Связаться с нами
              </Cell>
            </Div>
          </Group>
        )}
        <Group>
          <Header mode='secondary'>Участники группы</Header>
          <SimpleCell
            className='add-friend__text'
            color='#2688EB'
            before={<Avatar size={48} fallbackIcon={<Icon28AddOutline />} />}
          >
            Пригласить участников
          </SimpleCell>
          <SimpleCell
            before={<Avatar size={48} src={placeholder} />}
            badgeAfterTitle={<Icon12Verified />}
            after={
              <IconButton
                getRootRef={PopupTargetRef}
                onClick={() =>
                  popupToggle(<Popup iconsTargetRef={PopupTargetRef} />)
                }
              >
                <Icon28MoreHorizontal />
              </IconButton>
            }
            subtitle='Тестовый чел'
          >
            ТЕСТ
          </SimpleCell>
          {friendsList.map((friend) => (
            <SimpleCell
              before={<Avatar size={48} src={placeholder} />}
              badgeAfterTitle={friend.isAdmin && <Icon12Verified />}
              after={
                <IconButton>
                  <Icon28MoreHorizontal />
                </IconButton>
              }
              subtitle={friend.subtitle}
            >
              {friend.name}
            </SimpleCell>
          ))}
        </Group>
      </Panel>
      <Panel id='feedback'>
        <PanelHeader
          separator={false}
          before={<PanelHeaderBack onClick={() => setActivePanel('profile')} />}
        >
          Связаться с нами
        </PanelHeader>
        <Group>
          <Cell
            subtitle='Официальное сообщество'
            before={
              <Avatar
                className='education-icon'
                fallbackIcon={<Icon28EducationOutline color='#fff' />}
              />
            }
          >
            Расписание
          </Cell>
          <Cell
            subtitle='Если есть вопросы или идеи'
            before={
              <Avatar
                className='message-icon'
                fallbackIcon={<Icon28Message color='#fff' />}
              />
            }
          >
            Поддержка
          </Cell>
          <Cell
            subtitle='Если хочешь оставить фидбек'
            before={
              <Avatar
                className='messages-icon'
                fallbackIcon={<Icon28Message color='#fff' />}
              />
            }
          >
            Чат ВКонтакте
          </Cell>
        </Group>
      </Panel>
      <Panel id='group'>
        <PanelHeader
          separator={false}
          before={<PanelHeaderBack onClick={() => setActivePanel('profile')} />}
        >
          Моя группа
        </PanelHeader>
        <Group>
          <Cell
            before={
              <Avatar
                className='education-icon'
                fallbackIcon={<Icon28EducationOutline color='#fff' />}
              />
            }
          >
            Не готово ещё:)
          </Cell>
        </Group>
      </Panel>
    </View>
  );
};

export default Main;
