import React, { Fragment } from 'react';
import Flex from 'styled-flex-component';
import Header from 'components/Header';
import Notification from 'components/Notification';

const AppPresenter = () => (
  <Fragment>
    <Header />
    <Flex alignCenter full column>
      <Notification text="Hello" seen={false} />
    </Flex>
  </Fragment>
);

export default AppPresenter;
