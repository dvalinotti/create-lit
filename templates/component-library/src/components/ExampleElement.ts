import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import theme from '../styles/theme';

@customElement('example-element')
export default class ExampleComponent extends LitElement {
  static styles = [
    theme,
    css`
      :host {
        display: block;
        color: var(--theme-primary);
      }
    `
  ];

  @property() name = '{{capital name space=true}}';

  render() {
    return html`<h1>Hello, ${this.name}</h1>`;
  }
}
