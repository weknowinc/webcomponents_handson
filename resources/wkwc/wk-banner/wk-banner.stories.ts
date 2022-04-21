import { html, TemplateResult } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import './wk-banner';
import '../../base/outline-heading/outline-heading';


const bannerVariantOptions = ['primary' , 'secondary' , 'tertiary']

export default {
  title: 'WK/Banner',
  component: 'wk-complex-card',
  argTypes: {
    headingSlot: {
      name: 'slot="heading"',
      description: 'The heading slot.',
      table: {
        category: 'Slots',
      },
      control: { type: 'text' },
    },
    variant: {
      control: {
        type: 'select'
      },
      options: bannerVariantOptions
    }
  },
  
  args: {
    headingSlot: html`
      <outline-heading level='h1' slot='heading'>
        The 10 Most Beautiful Beaches in the World
      </outline-heading>
    `,
    tag: 'Fashion',
    date: 'September 15, 2016',
    url: '#',
    rounded: false,
    variant: 'primary'
  },
  
  decorators: [
    Story => html`
      <outline-container class="py-12">
        ${Story()} 
      </outline-container>
    `,
  ],
};

const Template = ({
  headingSlot,
  tag,
  date,
  url,
  rounded,
  variant
}): TemplateResult =>
  html`
    <outline-container>
      <wk-banner
        tag="${ifDefined(tag)}"
        date=${ifDefined(date)}
        url="${ifDefined(url)}"
        variant="${variant}"
        ?rounded=${rounded}
      >
      ${ifDefined(headingSlot)}
      </wk-banner>
    </outline-container>
  `;

export const Banner = Template.bind({});
