import { html, TemplateResult } from 'lit';
import { customElement } from 'lit/decorators.js';
import { OutlineElement } from '../../base/outline-element/outline-element';
import componentStyles from './wk-hello.css.lit';

/**
 * The Hello component.
 * @element wk-hello
 */
@customElement('wk-hello')
export class WkHello extends OutlineElement {
  static styles = [componentStyles];

  render(): TemplateResult {
    return html`
      <p>Hello World</p>
    `;
  }
}
