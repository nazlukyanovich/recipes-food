/* eslint-disable require-jsdoc */
import * as React from 'react';
import './FilterBean.css';

class FilterBean extends React.Component<
  { name: string },
  { selected: boolean }
> {
  state = {
    selected: false,
  };

  constructor(props: Readonly<{ name: string }>) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(): void {
    this.setState({ selected: !this.state.selected });
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
