import { html, TemplateResult } from "lit";
import { customElement, property } from "lit/decorators.js";
import { OutlineElement } from "../../base/outline-element/outline-element";
import { classMap } from "lit/directives/class-map.js";
import componentStyles from "./wk-banner.css.lit";

export type BannerVariant = "primary" | "secondary" | "tertiary";

/**
 * The Banner component.
 * @element wk-banner
 */
@customElement("wk-banner")
export class WkBanner extends OutlineElement {
  static styles = [componentStyles];

  /**
   * The banner URL.
   */
  @property() url: string;

  /**
   * The banner tag.
   */
  @property() tag: string;

  /**
   * The banner published date.
   */
  @property() date: string;

  /**
   * Define if the banner has rounded corners.
   */
  @property({ type: Boolean })
  rounded = false;

  /**
   * The banner style variant to use.
   */
  @property()
  variant: BannerVariant = "primary";

  render(): TemplateResult {
    const classes = {
      banner: true,
      "banner--rounded": this.rounded,
      [`banner--${this.variant}`]: true,
    };

    return html`
      <a class="${classMap(classes)}" href="${this.url}">
        <div class="banner__content">
          <span class="banner__tag">${this.tag}</span>

          <div class="banner__heading">
            <slot name="heading"></slot>
          </div>

          <div class="banner__meta">${this.date}</div>
        </div>
      </a>
    `;
  }
}
