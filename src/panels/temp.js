import React from 'react';
import PropTypes from 'prop-types';

import './main.scss';

import {
  Panel,
  PanelHeader,
  Header,
  Button,
  Group,
  Cell,
  Div,
  Avatar,
} from '@vkontakte/vkui';

const groupName = 'С748';

const Main = ({ id, go, fetchedUser }) => (
  <Panel id={id}>
    <PanelHeader>Профиль</PanelHeader>
    {fetchedUser && (
      <Group className='main-profile-group'>
        <Cell
          className='cell'
          before={
            fetchedUser.photo_200 ? (
              <Avatar src={fetchedUser.photo_200} />
            ) : null
          }
          subtitle={'Создатель • ' + groupName}
        >
          {`${fetchedUser.first_name} ${fetchedUser.last_name}`}
        </Cell>
      </Group>
    )}

    <Group header={<Header mode='secondary'>Navigation Example</Header>}>
      <Div>
        <Button
          stretched
          size='l'
          mode='secondary'
          onClick={go}
          data-to='persik'
        >
          Show me the Persik, please
        </Button>
      </Div>
    </Group>
  </Panel>
);

Main.propTypes = {
  id: PropTypes.string.isRequired,
  go: PropTypes.func.isRequired,
  fetchedUser: PropTypes.shape({
    photo_200: PropTypes.string,
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    city: PropTypes.shape({
      title: PropTypes.string,
    }),
  }),
};

export default Main;
