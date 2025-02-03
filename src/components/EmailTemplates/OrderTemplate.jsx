import React from "react";
import {
  Container,
  Text,
  Row,
  Column,
  Html,
  Head,
  Body,
} from "@react-email/components";

const OrderTemplate = ({ data }) => {
  return (
    <Html>
      <Head />
      <Body>
        <Container
          style={{
            width: "100%",
            maxWidth: "600px",
            margin: "0 auto",
            padding: "20px",
          }}
        >
          <Text style={{ padding: "20px" }}>Dear Meng, Vhaibab,</Text>
          <Text style={{ padding: "20px" }}>
            Thank you for letting us order. Here are our details:
          </Text>

          <Text
            style={{ marginTop: "20px", fontSize: "18px", fontWeight: "bold" }}
          >
            Customer Information
          </Text>

          <Row style={{ marginBottom: "20px" }}>
            <Column style={{ width: "50%", paddingRight: "10px" }}>
              <Text style={{ fontWeight: "bold" }}>Customer Number</Text>
              <Text>{data.customerNumber}</Text>
            </Column>
            <Column style={{ width: "50%", paddingLeft: "10px" }}>
              <Text style={{ fontWeight: "bold" }}>Work Order #</Text>
              <Text>{data.workOrder}</Text>
            </Column>
          </Row>

          <Row style={{ marginBottom: "20px" }}>
            <Column style={{ width: "50%", paddingRight: "10px" }}>
              <Text style={{ fontWeight: "bold" }}>Customer Name</Text>
              <Text>{data.customerName}</Text>
            </Column>
            <Column style={{ width: "50%", paddingLeft: "10px" }}>
              <Text style={{ fontWeight: "bold" }}>Street Address</Text>
              <Text>{data.streetAddress}</Text>
            </Column>
          </Row>

          <Row style={{ marginBottom: "20px" }}>
            <Column style={{ width: "50%", paddingRight: "10px" }}>
              <Text style={{ fontWeight: "bold" }}>Email</Text>
              <Text>{data.email}</Text>
            </Column>
            <Column style={{ width: "50%", paddingLeft: "10px" }}>
              <Text style={{ fontWeight: "bold" }}>Phone Number</Text>
              <Text>{data.phoneNumber}</Text>
            </Column>
          </Row>

          <Row style={{ marginBottom: "20px" }}>
            <Column style={{ width: "50%", paddingRight: "10px" }}>
              <Text style={{ fontWeight: "bold" }}>City</Text>
              <Text>{data.city}</Text>
            </Column>
            <Column style={{ width: "50%", paddingLeft: "10px" }}>
              <Text style={{ fontWeight: "bold" }}>Province</Text>
              <Text>{data.province}</Text>
            </Column>
          </Row>

          <Row style={{ marginBottom: "20px" }}>
            <Column style={{ width: "50%", paddingRight: "10px" }}>
              <Text style={{ fontWeight: "bold" }}>Postal Code</Text>
              <Text>{data.postalCode}</Text>
            </Column>
          </Row>

          <Text
            style={{ marginTop: "20px", fontSize: "18px", fontWeight: "bold" }}
          >
            Order Information
          </Text>

          <Row style={{ marginBottom: "20px" }}>
            <Column style={{ width: "50%", paddingRight: "10px" }}>
              <Text style={{ fontWeight: "bold" }}>Branch</Text>
              <Text>{data.branch}</Text>
            </Column>
            <Column style={{ width: "50%", paddingLeft: "10px" }}>
              <Text style={{ fontWeight: "bold" }}>Order Type</Text>
              <Text>{data.orderType}</Text>
            </Column>
          </Row>

          <Row style={{ marginBottom: "20px" }}>
            <Column style={{ width: "50%", paddingRight: "10px" }}>
              <Text style={{ fontWeight: "bold" }}>Home Depot Order</Text>
              <Text>{data.homeDepotOrder}</Text>
            </Column>
            <Column style={{ width: "50%", paddingLeft: "10px" }}>
              <Text style={{ fontWeight: "bold" }}>Lead Source</Text>
              <Text>{data.leadSource}</Text>
            </Column>
          </Row>

          <Row style={{ marginBottom: "20px" }}>
            <Column style={{ width: "50%", paddingRight: "10px" }}>
              <Text style={{ fontWeight: "bold" }}>Estimator</Text>
              <Text>{data.estimator}</Text>
            </Column>
            <Column style={{ width: "50%", paddingLeft: "10px" }}>
              <Text style={{ fontWeight: "bold" }}>Marketer</Text>
              <Text>{data.marketer}</Text>
            </Column>
          </Row>

          <Text
            style={{ marginTop: "20px", fontSize: "18px", fontWeight: "bold" }}
          >
            Order Details
          </Text>

          <Row style={{ marginBottom: "20px" }}>
            <Column style={{ width: "50%", paddingRight: "10px" }}>
              <Text style={{ fontWeight: "bold" }}>Windows</Text>
              <Text>{data.windows}</Text>
            </Column>
            <Column style={{ width: "50%", paddingLeft: "10px" }}>
              <Text style={{ fontWeight: "bold" }}>Patio Doors</Text>
              <Text>{data.patioDoors}</Text>
            </Column>
          </Row>

          <Row style={{ marginBottom: "20px" }}>
            <Column style={{ width: "50%", paddingRight: "10px" }}>
              <Text style={{ fontWeight: "bold" }}>Sealed Units</Text>
              <Text>{data.sealedUnits}</Text>
            </Column>
            <Column style={{ width: "50%", paddingLeft: "10px" }}>
              <Text style={{ fontWeight: "bold" }}>Others</Text>
              <Text>{data.others}</Text>
            </Column>
          </Row>

          <Row style={{ marginBottom: "20px" }}>
            <Column style={{ width: "50%", paddingRight: "10px" }}>
              <Text style={{ fontWeight: "bold" }}>Submitter Email</Text>
              <Text>{data.submitterEmail}</Text>
            </Column>
            <Column style={{ width: "50%", paddingLeft: "10px" }}>
              <Text style={{ fontWeight: "bold" }}>CleanBCIQPCode</Text>
              <Text>{data.cleanBCIQPCode}</Text>
            </Column>
          </Row>

          <Row style={{ marginBottom: "20px" }}>
            <Column style={{ width: "50%", paddingRight: "10px" }}>
              <Text style={{ fontWeight: "bold" }}>Doors</Text>
              <Text>{data.doors}</Text>
            </Column>
            <Column style={{ width: "50%", paddingLeft: "10px" }}>
              <Text style={{ fontWeight: "bold" }}>Future Opportunity</Text>
              <Text>{data.futureOpportunity}</Text>
            </Column>
          </Row>

          <Row style={{ marginBottom: "20px" }}>
            <Column style={{ width: "50%", paddingRight: "10px" }}>
              <Text style={{ fontWeight: "bold" }}>Alteration Drawing</Text>
              <Text>{data.alterationDrawing}</Text>
            </Column>
          </Row>

          <Text style={{ padding: "20px", textAlign: "center" }}>
            &copy; 2025 Your Company Name. All rights reserved.
          </Text>
        </Container>
      </Body>
    </Html>
  );
};

export default OrderTemplate;
