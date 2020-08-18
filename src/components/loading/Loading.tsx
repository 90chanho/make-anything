import React from "react";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import "./Loading.scss";

const antIcon = <LoadingOutlined style={{ fontSize: 150 }} spin />;

function Loading() {
  return (
    <div className="loading">
      <Spin indicator={antIcon} />
    </div>
  );
}

export default Loading;
