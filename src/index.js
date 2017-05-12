import 'react-hot-loader/patch';
import React from 'react';
import ReactDOM from 'react-dom';
import Messages from './messages';
import HolaButton from './TestButton';

ReactDOM.render(
            <HolaButton />,
    document.getElementById('app')
);