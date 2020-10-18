import React, { Component } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

class BookList extends Component {
  static contextType = ThemeContext;

  render() {
    const { isLightTheme, light, dark } = this.context;
    const theme = isLightTheme ? light : dark;
    return (
      <div
        className="book-list"
        style={{ color: theme.syntax, background: theme.bg }}
      >
        <ul>
          <li style={{ background: theme.ui }}>Dream Effects</li>
          <li style={{ background: theme.ui }}>Introduction to Hooks</li>
          <li style={{ background: theme.ui }}>Learning Context</li>
        </ul>
      </div>
    );
  }
}

export default BookList;
