import React from 'react';
import { Provider } from 'react-redux'
import MainPage from '../pages/MainPage'

import store from '../redux'

const MainLayout = props => {
    return (
        <Provider store={store}>
            <MainPage />
        </Provider>
    );
};

export default MainLayout;