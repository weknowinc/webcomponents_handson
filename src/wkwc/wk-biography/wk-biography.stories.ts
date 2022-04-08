import { html, TemplateResult } from 'lit';
import './wk-biography';

export default {
  title: 'Content/Biography',
  component: 'wk-biography',
  args: {
    name: 'Dyn Chrisma',
    descriptionMarkup: html`
      <p>
        Nullam sagittis. <a href="#">Praesent porttitor</a>, nulla vitae posuere iaculis, arcu nisl dignissim dolor, a pretium mi sem ut ipsum. Praesent porttitor, nulla vitae posuere iaculis, arcu nisl dignissim dolor, a pretium mi sem ut ipsum. Etiam sollicitudin, ipsum eu pulvinar rutrum, tellus ipsum laoreet sapien, quis venenatis ante odio sit amet eros. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a libero.
      </p>
    `,
  },
};

const Template = ({ name, descriptionMarkup }): TemplateResult =>
  html`
    <wk-biography name="${name}">
      ${descriptionMarkup}
    </wk-biography>
  `;

export const Biography = Template.bind({});
