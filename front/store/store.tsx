/* eslint-disable no-invalid-this */
import { observable } from 'mobx';

export const store = observable({
  selectedFilterBeans: [],

  getSelectedFilterBeans() {
    return `${this.selectedFilterBeans}`;
  },

  addSelectedFilterBean(filterBeanName) {
    this.selectedFilterBeans.push(filterBeanName);
  },

  removeSelectedFilterBean(filterBeanName) {
    this.selectedFilterBeans.splice(
      this.selectedFilterBeans.indexOf(filterBeanName),
      1,
    );
  },
});
