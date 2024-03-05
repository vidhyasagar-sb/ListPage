import React, { useEffect, useState } from "react";
import "./chip.css";

const Chip = ({ tagName, tagType = "info" }) => {
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

  const getTags = (colorInfoArray, tagName, tagType) => {
    const resultArray = {};

    const colorInfoMatch = colorInfoArray.find(
      (colorInfo) => colorInfo.tag === tagType
    );

    if (colorInfoMatch) {
      resultArray.tagName = tagName;
      resultArray.textColor = colorInfoMatch.textColor;
      resultArray.bgColor = colorInfoMatch.bgColor;
    }

    return resultArray;
  };

  useEffect(() => {
    if (tagName && tagType) {
      setChips(getTags(colorInfo, tagName, tagType));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tagName, tagType]);

  return (
    <div
      className="chip"
      style={{
        backgroundColor: chips.bgColor,
        color: chips.textColor,
      }}
    >
      {chips.tagName}
    </div>
  );
};

export default Chip;
