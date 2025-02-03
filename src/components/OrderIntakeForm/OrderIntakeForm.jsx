import React from "react";
import { Col, Form, message, Row } from "antd";
import CustomerInfo from "./components/CustomerInfo/CustomerInfo";
import OrderDetails from "./components/OrderDetails/OrderDetails";
import ProductSummary from "./components/ProductSummary/ProductSummary";
import Attachments from "./components/Attachments/Attachments";
import CustomCard from "../CustomCard/CustomCard";
import CustomBtn from "../CustomBtn/CustomBtn";
import "./orderIntake.css";
import { generatePDF } from "../../utils/pdfGenerator";
import { sendEmail } from "../../network/email.api";

const OrderIntakeForm = () => {
  const [form] = Form.useForm();
  const [state, setState] = React.useState({ isFormSubmitting: false });

  const onFormSubmit = async (values) => {
    // Set the form state loading
    setState({ ...state, isFormSubmitting: true });

    try {
      // Generate base64PDF
      const pdf = await generatePDF(values);
      const base64content =  pdf.split("base64,")[1];

      // Send email with PDF attachment
      const res = await sendEmail(base64content, values);

      // Show success message
      if (res) message.success("Order submitted successfully!");
      
      //Reset form
      form.resetFields();
    } catch (error) {
      console.error("Error submitting form:", error);
      message.error("Failed to submit order. Please try again.");
    } finally {
      setState({ ...state, isFormSubmitting: false });
    }
  };

  return (
    <Form
      form={form}
      layout="horizontal"
      onFinish={onFormSubmit}
      className="custom-form"
    >
      <Row gutter={[16, 16]}>
        {/* Customer Info */}
        <Col xs={24} md={24} lg={24} xl={12}>
          <CustomCard title="Customer Info">
            <CustomerInfo />
          </CustomCard>
        </Col>

        {/* Order Details */}
        <Col xs={24} md={24} lg={24} xl={12}>
          <CustomCard title="Order Details">
            <OrderDetails />
          </CustomCard>
        </Col>
      </Row>

      <Row gutter={[16, 16]} style={{ marginTop: "15px" }}>
        {/* Product Sumary */}
        <Col xs={24} md={24} lg={24} xl={13}>
          <CustomCard title="Product Summary">
            <ProductSummary />
          </CustomCard>
        </Col>

        {/* Attachments */}
        <Col xs={24} md={24} lg={24} xl={11}>
          <CustomCard title="Attachments">
            <Attachments />
          </CustomCard>
        </Col>
      </Row>

      {/* Submit Btn */}
      <Row justify="end" className="formBtns">
        <CustomBtn variant="secondary" onClick={() => form.resetFields()}>
          Cancel
        </CustomBtn>

        <CustomBtn
          loading={state.isFormSubmitting}
          type="submit"
          disabled={state.isFormSubmitting}
        >
          Submit
        </CustomBtn>
      </Row>
    </Form>
  );
};

export default OrderIntakeForm;
