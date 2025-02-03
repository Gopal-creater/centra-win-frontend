import { Col, Form, Input, Row, Select } from "antd";
import React from "react";

const { Option } = Select;

const OrderDetails = () => {
  return (
    <Row gutter={[16, 16]}>
      <Col lg={12} md={12} sm={12} xs={24}>
        <Form.Item
          name="branch"
          label="Branch"
          rules={[{ required: true, message: "Please select a branch!" }]}
        >
          <Select placeholder="Select branch">
            <Option value="AA">AA</Option>
            <Option value="AB">AB</Option>
            <Option value="AC">AC</Option>
            <Option value="AD">AD</Option>
          </Select>
        </Form.Item>

        <Form.Item
          name="orderType"
          label="Order Type"
          initialValue="Supply & Install"
          rules={[{ required: true, message: "Please select an order type!" }]}
        >
          <Select>
            <Option value="Supply & Install">Supply & Install</Option>
            <Option value="Supply Only">Supply Only</Option>
          </Select>
        </Form.Item>

        <Form.Item
          name="homeDepotOrder"
          label="Home Depot Order"
          rules={[{ required: true, message: "Please select a category!" }]}
        >
          <Select placeholder="Select Option">
            <Option value="tools_hardware">Tools & Hardware</Option>
            <Option value="appliances">Appliances</Option>
            <Option value="lumber_building">Lumber & Building Materials</Option>
            <Option value="electrical_lighting">Electrical & Lighting</Option>
            <Option value="plumbing">Plumbing</Option>
          </Select>
        </Form.Item>

        <Form.Item
          name="leadSource"
          label="Lead Source"
          rules={[{ required: true, message: "Please enter a lead name!" }]}
        >
          <Input placeholder="Lead Name" />
        </Form.Item>

        <Form.Item
          name="estimator"
          label="Select Estimator"
          rules={[{ required: true, message: "Please select an estimator!" }]}
        >
          <Select placeholder="Select Estimator">
            <Option value="john_doe">John Doe</Option>
            <Option value="jane_smith">Jane Smith</Option>
            <Option value="contractor">Third-Party Contractor</Option>
          </Select>
        </Form.Item>

        <Form.Item
          name="marketer"
          label="Marketer"
          rules={[{ required: true, message: "Please enter marketer name!" }]}
        >
          <Input placeholder="Marketer Name" />
        </Form.Item>
      </Col>

      <Col lg={12} md={12} sm={12} xs={24}>
        <Form.Item
          name="remeasureRequired"
          label="Remeasure Required"
          initialValue="yes"
          rules={[{ required: true, message: "Please select an option!" }]}
        >
          <Select>
            <Option value="yes">Yes</Option>
            <Option value="no">No</Option>
          </Select>
        </Form.Item>

        <Form.Item
          name="deliveryZone"
          label="Delivery Zone"
          rules={[
            { required: true, message: "Please select a delivery zone!" },
          ]}
        >
          <Select placeholder="Select Delivery Zone">
            <Option value="GTA">Greater Toronto Area (GTA)</Option>
            <Option value="vancouver">Metro Vancouver</Option>
            <Option value="montreal">Montreal Area</Option>
            <Option value="ottawa">Ottawa-Gatineau</Option>
            <Option value="calgary_edmonton">Calgary and Edmonton Areas</Option>
          </Select>
        </Form.Item>

        <Form.Item
          name="paymentType"
          label="Payment Type"
          rules={[{ required: true, message: "Select Payment Type!" }]}
        >
          <Select placeholder="Select a payment method">
            <Option value="credit_card">Credit Card</Option>
            <Option value="debit_card">Debit Card</Option>
            <Option value="cash">Cash</Option>
            <Option value="online_payment">Online Payment</Option>
          </Select>
        </Form.Item>

        <Form.Item
          name="sellPrice"
          label="Sell Price (Before Tax)"
          rules={[{ required: true, message: "Please enter the sell price!" }]}
        >
          <Input type="number" placeholder="Enter sell price before tax" />
        </Form.Item>

        <Form.Item
          name="listPrice"
          label="List Price"
          rules={[{ required: true, message: "Please enter the list price!" }]}
        >
          <Input type="number" placeholder="Enter list price" />
        </Form.Item>

        <Form.Item
          name="depositValue"
          label="Deposit Value"
          rules={[
            { required: true, message: "Please enter the deposit value!" },
          ]}
        >
          <Input type="number" placeholder="Enter deposit value" />
        </Form.Item>

        <Form.Item
          name="discountPercentage"
          label="Discount %"
          rules={[
            {
              required: true,
              message: "Please enter the discount percentage!",
            },
          ]}
        >
          <Input type="number" placeholder="Enter discount percentage" />
        </Form.Item>

        <Form.Item
          name="commissionPercentage"
          label="Commission %"
          rules={[
            {
              required: true,
              message: "Please enter the commission percentage!",
            },
          ]}
        >
          <Input type="number" placeholder="Enter commission percentage" />
        </Form.Item>
      </Col>
    </Row>
  );
};

export default OrderDetails;
