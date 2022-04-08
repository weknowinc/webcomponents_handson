import { html, TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { OutlineElement } from '../../base/outline-element/outline-element';
import componentStyles from './wk-biography.css.lit';

/**
 * The Biography component.
 * @element wk-biography
 */
@customElement('wk-biography')
export class WkBiography extends OutlineElement {
  static styles = [componentStyles];

  /**
   * The biography name.
   */
  @property() name: string;


  render(): TemplateResult {
    return html`
    <div class="biography">
      <div class="biography__name">${this.name}</div>
      <div class="biography__description">
        <slot></slot>
      </div>
    </div>
    `;
  }
}
