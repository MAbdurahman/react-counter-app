/*===========================================
            components/counter.jsx
===========================================*/
import React, { Component } from 'react';

class Counter extends Component {

   //**************** State Values ****************//
   state = {
      value: this.props.value

   };


   //**************** functions ****************//
   formatCount() {
      const { value } = this.state;
      return value === 0 ? 'Zero' : value;

   }

   getBadgeClasses() {
      let classes = "badge m-2 badge-";
      classes += this.state.value === 0 ? "warning" : "primary";
      return classes;
   }

   handleIncrement = () => {
      this.setState({ value: this.state.value + 1 });
   };

   render() {
      return (
         <div>
            {this.props.children}
            <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
            <button className="btn btn-secondary btn-sm" onClick={this.handleIncrement}>Increment</button>
         </div>
      );
   }
}

export default Counter;