import { html, TemplateResult } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import './wk-complex-card';
import '../../base/outline-heading/outline-heading';


const cardVariantOptions = ['primary' , 'secondary' , 'tertiary']

export default {
  title: 'Content/Complex Card',
  component: 'wk-complex-card',
  argTypes: {
    variant: {
      control: {
        type: 'select'
      },
      options: cardVariantOptions
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
      <wk-complex-card
        tag="${ifDefined(tag)}"
        date=${ifDefined(date)}
        url="${ifDefined(url)}"
        variant="${variant}"
        ?rounded=${rounded}
      >
      ${ifDefined(headingSlot)}
      </wk-complex-card>
    </outline-container>
  `;

export const ComplexCard = Template.bind({});
