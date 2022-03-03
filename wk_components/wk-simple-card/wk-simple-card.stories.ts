import { html, TemplateResult } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import './wk-simple-card';

export default {
  title: 'Content/Simple Card',
  component: 'wk-simple-card',
  argTypes: {},
  args: {
    label: 'The 10 Most Beautiful Beaches in the World',
    tag: 'Fashion',
    date: 'September 15, 2016',
    url: '#',
    bgImage: 'https://1.bp.blogspot.com/-yo_E9jN5nk8/V9q5FiXE98I/AAAAAAAAAMo/-MoJlA7GBqs8VhLS__v_j81caWtcZ0dTACLcB/s1600/large_the-word-defines-womanhood-snsoriyo.jpg'
  },
};

const Template = ({
  label,
  tag,
  date,
  url,
  bgImage
}): TemplateResult =>
  html`
    <outline-container>
      <wk-simple-card
        label="${ifDefined(label)}"
        tag="${ifDefined(tag)}"
        date=${ifDefined(date)}
        url="${ifDefined(url)}"
        bg-image="${ifDefined(bgImage)}"
      >
      </wk-simple-card>
    </outline-container>
  `;

export const SimpleCard = Template.bind({});
