import React, { useState } from "react";
import { Form, Upload, Button } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import "./attachments.css";

const Attachments = () => {
  const [fileList, setFileList] = useState([]);

  const handleChange = (info) => {
    // Update the file list
    setFileList(info.fileList);
  };

  return (
    <Form.Item
      name="attachments"
      rules={[{ required: true, message: "Please select file!" }]}
    >
      <Upload.Dragger
        className="dragger"
        multiple
        accept=".png,.jpeg,.jpg"
        fileList={fileList} // Bind fileList to state
        onChange={handleChange} // Handle file list changes
        beforeUpload={() => false} // Prevent default upload action
      >
        <p className="text-center">Browse or drag file</p>
      </Upload.Dragger>
    </Form.Item>
  );
};

export default Attachments;
