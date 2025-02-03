import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

// Generate pdf------
export const generatePDF = async (data) => {
  const doc = new jsPDF();

  // Set font styles for title
  doc.setFont("helvetica", "bold");
  doc.setFontSize(18);
  doc.setTextColor(0, 102, 204); // Blue color

  // Add title
  doc.text(
    "New Order Intake – Supply & Install",
    105,
    20,
    null,
    null,
    "center"
  );

  // Reset font for content
  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  doc.setTextColor(0);

  let yPos = 30;

  // Customer Information section
  yPos = createSection(
    doc,
    "Customer Information",
    {
      "Customer Number": data.customerNumber,
      "Work Order #": data.workOrder,
      "Customer Name": data.customerName,
      "Street Address": data.streetAddress,
      Email: data.email,
      "Phone Number": data.phoneNumber,
      City: data.city,
      Province: data.province,
      "Postal Code": data.postalCode,
    },
    yPos
  );

  // Order Details section
  yPos = createSection(
    doc,
    "Order Details",
    {
      Branch: data.branch,
      "Order Type": data.orderType,
      "Home Depot Order": data.homeDepotOrder,
      "Lead Source": data.leadSource,
      Estimator: data.estimator,
      Marketer: data.marketer,
      "Measure Required": data.remeasureRequired,
      "Delivery Zone": data.deliveryZone,
      "Payment Type": data.paymentType,
      "Sell Price": data.sellPrice,
      "List Price": data.listPrice,
      "Deposit Value": data.depositValue,
      "Discount Percentage": data.discountPercentage,
      "Commision Percentage": data.commissionPercentage,
    },
    yPos + 10
  );

  // Product Summary section
  yPos = createSection(
    doc,
    "Product Summary",
    {
      Windows: data.windows,
      "Patio Doors": data.patioDoors,
      "Patio Doors": data.patioDoors,
      "Sealed Units": data.sealedUnits,
      Others: data.others,
      "Submitter Email": submitterEmail,
      "Clean BCIQPCode": data.cleanBCIQPCode,
      Doors: data.doors,
      "Future Opportunity": data.futureOpportunity,
      "Alteration Drawing": data.alterationDrawing,
    },
    yPos + 10
  );

  // Add images to the PDF
  if (data.attachments.fileList.length > 0) {
    for (let file of data.attachments.fileList) {
      try {
        await addImgToPdf(file.originFileObj, doc);
      } catch (error) {
        console.error("Error adding image to PDF:", error);
      }
    }
  }

  // Add footer with page numbers
  const pageCount = doc.internal.getNumberOfPages();
  for (let i = 1; i <= pageCount; i++) {
    doc.setPage(i);
    doc.setFontSize(8);
    doc.text(
      `Page ${i} of ${pageCount}`,
      doc.internal.pageSize.width - 20,
      doc.internal.pageSize.height - 10
    );
  }

  // Return the PDF as base64 string
  return doc.output("datauristring");
};

// Function to convert File to base64----------
const addImgToPdf = (file, doc) => {
  return new Promise((resolve, reject) => {
    let reader = new FileReader();
    reader.onload = function (e) {
      let img = new Image();
      img.src = e.target.result;
      img.onload = () => {
        let canvas = document.createElement("canvas");
        let ctx = canvas.getContext("2d");
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0, img.width, img.height);
        let imgData = canvas.toDataURL("image/jpeg");

        doc.addPage(); // Add a new page for each image
        doc.addImage(
          imgData,
          "JPEG",
          10,
          10,
          190,
          190 * (img.height / img.width)
        );
        resolve();
      };
      img.onerror = reject;
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
};

// Separate function for creating a section inside pdf-------
const createSection = (doc, title, content, startY) => {
  doc.setFont("helvetica", "bold");
  doc.setFontSize(12);
  doc.text(title, 10, startY);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);

  autoTable(doc, {
    startY: startY + 5,
    head: [["Field", "Value"]],
    body: Object.entries(content),
    theme: "grid",
    styles: { fontSize: 8, cellPadding: 2 },
    columnStyles: { 0: { cellWidth: 60 }, 1: { cellWidth: 100 } },
    margin: { left: 10 },
  });

  return doc.lastAutoTable.finalY;
};
