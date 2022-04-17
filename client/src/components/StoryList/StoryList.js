import { Row } from "antd";
import React from "react";
import Story from "../Story/Story";

const StoryList = () => {
  return (
    <Row gutter={[48, 32]}>
      <Story />
      <Story />
    </Row>
  );
};

export default StoryList;
