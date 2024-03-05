import React, { useEffect, useState } from "react";

import arrowRight from "../../assets/images/arrowRight.svg";
import "./chipCard.css";

const ChipCard = ({ tags, footer, children }) => {
  const [chips, setChips] = useState([]);
  const colorInfo = [
    {
      tag: "info",
      textColor: "#1D4ED8",
      bgColor: "#DBEAFE",
    },
    {
      tag: "pending",
      textColor: "#A16207",
      bgColor: "#FEF9C3",
    },
    {
      tag: "warning",
      textColor: "#C2410C",
      bgColor: "#FFEDD5",
    },
    {
      tag: "success",
      textColor: "#166534",
      bgColor: "#DCFCE7",
    },
    {
      tag: "error",
      textColor: "#B91C1C",
      bgColor: "#FEE2E2",
    },
  ];

  const getTags = (colorInfoArray, tagsArray) => {
    const resultArray = [];

    tagsArray.forEach(({ tagType, tagName }) => {
      const colorInfoMatch = colorInfoArray.find(
        (colorInfo) => colorInfo.tag === tagType
      );

      if (colorInfoMatch) {
        resultArray.push({
          tag: tagName,
          textColor: colorInfoMatch.textColor,
          bgColor: colorInfoMatch.bgColor,
        });
      }
    });

    return resultArray;
  };

  useEffect(() => {
    setChips(getTags(colorInfo, tags));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="chipCard">
        <div className="chipCardHeader">
          <div className="chipContainer">
            {chips.map((chip, i) => {
              return (
                <div
                  key={i}
                  className="chip"
                  style={{
                    backgroundColor: chip.bgColor,
                    color: chip.textColor,
                  }}
                >
                  {chip.tag}
                </div>
              );
            })}
          </div>

          <div className="chipImgWrapper">
            <img src={arrowRight} alt="more info" />
          </div>
        </div>
        {children}
      </div>

      {!!footer && footer}
    </>
  );
};

export default ChipCard;
