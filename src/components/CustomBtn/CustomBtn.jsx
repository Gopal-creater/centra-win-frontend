import React from "react";
import clsx from "clsx";
import "./customBtn.css";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

const CustomBtn = ({
  type = "button",
  fullWidth,
  children,
  onClick,
  variant = "primary",
  disabled,
  size = "medium",
  loading = false,
  ...props
}) => {
  const buttonClasses = clsx(
    "button",
    disabled && "disabled",
    fullWidth && "fullWidth",
    variant === "primary" && "primary",
    variant === "secondary" && "secondary",
    size === "small" && "small",
    size === "large" && "large"
  );

  return (
    <button
      className={buttonClasses}
      onClick={onClick}
      type={type}
      disabled={disabled}
      {...props}
    >
      {loading ? (
        <Spin
          indicator={<LoadingOutlined spin className="spinner" />}
          size="medium"
        />
      ) : (
        children
      )}
    </button>
  );
};

export default CustomBtn;
