import Vue from 'vue';
import { Component, Emit, Prop } from 'vue-property-decorator'

@Component({
  template: `<div>DashboardItem!</div>`
})
export class DashboardItemComponent extends Vue {
  @Prop({ default: 0 }) count: number = 0;

  @Emit() clicked() { }
}