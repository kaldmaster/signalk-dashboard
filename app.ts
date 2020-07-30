import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import { ButtonCounter } from './button-counter.component'

@Component({
  components: { ButtonCounter },
  template: `
    <div>
      <h1>Simple VueJs Typescript Starter</h1>
      <ul>
        <li>VueJs 2</li>
        <li>Typescript</li>
        <li>Vue Property Decorator</li>
      </ul>

      <h2>Button Component</h2>
    	<button-counter @clicked="onButtonClicked" :count="count"></button-counter>
    </div>
  `
})
export class App extends Vue {
  count = 0;
  onButtonClicked(val) {
    this.count++;
  }
}