import React from 'react';
import ReactDOM from 'react-dom';
import { injectGlobal } from 'styled-components';
import reset from 'styled-reset';
import App from 'components/App';
import './typography';

injectGlobal`
${reset}
body {
    background-color: #ecf0f1;
}
`;

ReactDOM.render(<App />, document.getElementById('root'));
