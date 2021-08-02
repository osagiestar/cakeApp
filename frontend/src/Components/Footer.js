import React from 'react';

const Footer = (props) => {
    return (
      <div>
        <footer className="footer">
          <h5> osagiestar concepts </h5>
          <p> All copyright reserved @bakesbydebbie {props.year} </p>
        </footer>
      </div>
    );
}

export default Footer;