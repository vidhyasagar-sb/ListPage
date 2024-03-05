import React, { useEffect, useRef, useState } from "react";

import chevronDown from "../../assets/images/chevronDown.svg";
import PropTypes from "prop-types";
import "./accordion.css";

const Accordion = (props) => {
  const content = useRef(null);
  const [active, setActive] = useState(false);
  const [height, setHeight] = useState("0px");

  // useEffect(() => {
  //   console.log('Height for ', props.title, ': ', height);
  // }, [height]);

  function toggleAccordion() {
    setActive(!active);
    setHeight(active ? "0px" : `${content.current.scrollHeight}px`);
  }

  return (
    <div className="accordion__section">
      <div
        className={`accordion ${active ? "active" : ""}`}
        onClick={toggleAccordion}
      >
        <div className="accordion__title">{props.title}</div>
        <div className="accordian_arrowContainer">
          <div>
            <img
              src={chevronDown}
              alt="open"
              className={active ? "fullRotate" : "defaultRotate"}
            />
          </div>
        </div>
      </div>
      <div
        ref={content}
        style={{ maxHeight: `${height}` }}
        className="accordion__content"
      >
        {/* <div
          className='accordion__text'
          dangerouslySetInnerHTML={{ __html: props.content }}
        /> */}
        {typeof props.content === "string" ? (
          <div className="accordion__text">{props.content}</div>
        ) : (
          <div className="accordion__component">{props.content}</div>
        )}
      </div>
    </div>
  );
};

Accordion.propTypes = {
  title: PropTypes.element.isRequired, // Node type allows JSX elements or strings
  content: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node, // Node type allows JSX elements
  ]).isRequired,
};

export default Accordion;
