import { Col, Form, Input, Row, Select } from "antd";
import React from "react";

const ProductSummary = () => {
  return (
    <Row gutter={[16, 16]}>
      <Col lg={12} md={12} sm={12} xs={24}>
        <Form.Item
          name="windows"
          label="Windows"
          rules={[
            { required: true, message: "Please enter the number of windows!" },
          ]}
        >
          <Input type="number" placeholder="0" />
        </Form.Item>

        <Form.Item
          name="patioDoors"
          label="Patio Doors"
          rules={[
            {
              required: true,
              message: "Please enter the number of patio doors!",
            },
          ]}
        >
          <Input type="number" placeholder="0" />
        </Form.Item>

        <Form.Item
          name="sealedUnits"
          label="Sealed Units"
          rules={[
            {
              required: true,
              message: "Please enter the number of sealed units!",
            },
          ]}
        >
          <Input type="number" placeholder="0" />
        </Form.Item>

        <Form.Item
          name="others"
          label="Others"
          rules={[
            { required: true, message: "Please enter the number of others!" },
          ]}
        >
          <Input type="number" placeholder="0" />
        </Form.Item>

        <Form.Item
          name="submitterEmail"
          label="Submitter Email"
          rules={[
            { required: true, message: "Please enter the submitter's email!" },
            { type: "email", message: "Please enter a valid email!" },
          ]}
        >
          <Input type="email" placeholder="Enter submitter's email" />
        </Form.Item>
      </Col>

      <Col lg={12} md={12} sm={12} xs={24}>
        <Form.Item
          name="cleanBCIQPCode"
          label="CleanBC IQP Code required before submitting order"
          rules={[{ required: true, message: "Select a CleanBC IQP code!" }]}
        >
          <Select placeholder="Select Option">
            <Option value="IQP12345">IQP12345</Option>
            <Option value="IQP67890">IQP67890</Option>
            <Option value="IQP11223">IQP11223</Option>
            <Option value="IQP44556">IQP44556</Option>
            <Option value="IQP78901">IQP78901</Option>
            <Option value="IQP23456">IQP23456</Option>
          </Select>
        </Form.Item>

        <Form.Item
          name="doors"
          label="Doors Saved In Codel Program"
          initialValue="N/A" // Default value is "N/A"
          rules={[{ required: true, message: "Please select a door option!" }]}
        >
          <Select>
            <Option value="NA">N/A</Option>
            <Option value="singleDoor">Single Door</Option>
            <Option value="doubleDoor">Double Door</Option>
            <Option value="slidingDoor">Sliding Door</Option>
            <Option value="frenchDoor">French Door</Option>
          </Select>
        </Form.Item>

        <Form.Item
          name="futureOpportunity"
          label="Was a future opportunity created?"
          rules={[{ required: true, message: "Select an option!" }]}
        >
          <Select placeholder="Select Option">
            <Option value="Yes">Yes</Option>
            <Option value="No">No</Option>
          </Select>
        </Form.Item>

        <Form.Item
          name="alterationDrawing"
          label="Alteration Drawing & Price Breakdown Submitted?"
          rules={[{ required: true, message: "Select an option!" }]}
        >
          <Select placeholder="Select Option">
            <Option value="Yes">Yes</Option>
            <Option value="No">No</Option>
          </Select>
        </Form.Item>
      </Col>
    </Row>
  );
};

export default ProductSummary;
