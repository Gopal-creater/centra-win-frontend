import { Col, Form, Input, Row } from "antd";
import React from "react";

const CustomerInfo = () => {
  return (
    <Row gutter={[16, 16]}>
      <Col lg={12} md={12} sm={12} xs={24}>
        <Form.Item
          name="customerNumber"
          label="Customer Number"
          rules={[
            { required: true, message: "Please input the customer number!" },
          ]}
        >
          <Input placeholder="123456" />
        </Form.Item>

        <Form.Item
          name="workOrder"
          label="Work Order #"
          rules={[
            { required: true, message: "Please input the work order number!" },
          ]}
        >
          <Input placeholder="A12400" />
        </Form.Item>

        <Form.Item
          name="customerName"
          label="Customer Name"
          rules={[
            { required: true, message: "Please input the customer name!" },
          ]}
        >
          <Input placeholder="John Doe" />
        </Form.Item>

        <Form.Item
          name="streetAddress"
          label="Street Address"
          rules={[
            { required: true, message: "Please input the street address!" },
          ]}
        >
          <Input placeholder="Search Address" />
        </Form.Item>

        <Form.Item
          name="email"
          label="Email"
          rules={[
            { required: true, message: "Please input the email!" },
            { type: "email", message: "Please enter a valid email!" },
          ]}
        >
          <Input placeholder="JohnDoe@gmail.com" />
        </Form.Item>

        <Form.Item
          name="phoneNumber"
          label="Phone Number"
          rules={[
            { required: true, message: "Please input the phone number!" },
            {
              pattern: /^[0-9]{10}$/,
              message: "Please enter a valid 10-digit phone number!",
            },
          ]}
        >
          <Input placeholder="647-949-2784" />
        </Form.Item>
      </Col>

      <Col lg={12} md={12} sm={12} xs={24}>
        <Form.Item
          name="city"
          label="City"
          rules={[{ required: true, message: "Please input the city!" }]}
        >
          <Input placeholder="Langley" />
        </Form.Item>

        <Form.Item
          name="province"
          label="Province"
          rules={[{ required: true, message: "Please input the province!" }]}
        >
          <Input placeholder="BC" />
        </Form.Item>

        <Form.Item
          name="postalCode"
          label="Postal Code"
          rules={[
            { required: true, message: "Please input the postal code!" },
            {
              pattern: /^[A-Za-z]\d[A-Za-z] ?\d[A-Za-z]\d$/,
              message: "Please enter a valid postal code! Example( M2R 8A5)",
            },
          ]}
        >
          <Input placeholder="M2R0A5" />
        </Form.Item>
      </Col>
    </Row>
  );
};

export default CustomerInfo;
