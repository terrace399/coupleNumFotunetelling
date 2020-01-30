import React from "react";

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="header-logo">Progate</div>
        <div className="header-list">
          <ul>
            <li>プログラミングとは</li>
            <li>学べるレッスン</li>
            <li>お問い合わせ</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Header;
