import { html, TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { OutlineElement } from '../../base/outline-element/outline-element';
import componentStyles from './wk-simple-card.css.lit';

/**
 * The Simple Card component.
 * @element wk-simple-card
 */
@customElement('wk-simple-card')
export class WkSimpleCard extends OutlineElement {
  static styles = [componentStyles];

  /**
   * The card title.
   */
  @property({ attribute: 'label' }) title: string;

  /**
   * The card URL.
   */
  @property() url: string;

  /**
   * The card background image.
   */
  @property({ attribute: 'bg-image' }) bgImage: string;

  /**
   * The card published date.
   */
  @property() date: string;

  /**
   * Whether or not this is a nested container. If it's nested, remove padding.
   */
  @property({ type: Boolean, attribute: 'is-rounded' }) isRounded = false;

  render(): TemplateResult {
    return html`
      <div class="simple-card">
        <div class="simple-card__background">
          <a href="${this.url}">
            <img src="${this.bgImage}" alt="${this.title}" />
          </a>
        </div>

        <div class="simple-card__content">
          <span class="simple-card__tag">Fashion</span>

          <h4 class="simple-card__title">
            <a href="${this.url}">${this.title}</a>
          </h4>

          <div class="simple-card__meta">${this.date}</div>
        </div>
      </div>
    `;
  }
}
