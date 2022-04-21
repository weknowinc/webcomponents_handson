import { html, TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { OutlineElement } from '../../base/outline-element/outline-element';
import componentStyles from './wk-card.css.lit';

/**
 * The Card component.
 * @element wk-card
 */
@customElement('wk-card')
export class WkCard extends OutlineElement {
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

  render(): TemplateResult {
    return html`
      <div class="card">
        <div class="card__image">
          <img src="${this.bgImage}" alt="${this.title}" />
        </div>

        <div class="card__content">
          <span class="card__tag">Fashion</span>

          <h4 class="card__title">
            <a href="${this.url}">${this.title}</a>
          </h4>

          <div class="card__meta">${this.date}</div>
        </div>
      </div>
    `;
  }
}
