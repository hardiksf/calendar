import { html, render } from 'lit-html';
import '../sass/styles.sass';

import './calendar-element';

const renderCalendar = html`
    <my-element></my-element>
`;

render(renderCalendar, document.body);
