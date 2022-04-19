import { Row } from "antd";
import React from "react";
import Story from "../Story/Story";
import { useSelector } from "react-redux";

const StoryList = () => {
  const stories = useSelector((state) => state.stories);
  return (
    <Row gutter={[48, 32]}>
      <Story />
      <Story />
    </Row>
  );
};

export default StoryList;
