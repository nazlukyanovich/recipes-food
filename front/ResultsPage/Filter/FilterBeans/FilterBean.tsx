/* eslint-disable require-jsdoc */
import * as React from 'react';
import { store } from './../../../store/store';
import './FilterBean.css';

class FilterBean extends React.Component<
  { name: string },
  { selected: boolean }
> {
  constructor(props: Readonly<{ name: string }>) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(): void {
    store.addSelectedFilterBean(this.props.name);
    // console.log(store.getSelectedFilterBeans());
  }

  render(): any {
    return (
      <button className="filter-button" onClick={this.handleClick}>
        {this.props.name}
      </button>
    );
  }
}

export default FilterBean;
