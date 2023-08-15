const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const currentDate = new Date();
const year = currentDate.getFullYear();
const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
const day = currentDate.getDate().toString().padStart(2, '0');
const currentTime = new Date().toLocaleTimeString();


const salesReport = (req, res) => {
    // Generate the sales report data from your database or any other source
    const salesReportData = [
      { date: '2022-01-01', product: 'Product A', quantity: 10, revenue: 100 },
      { date: '2022-01-02', product: 'Product B', quantity: 5, revenue: 50 },
      // Add more sales data as needed
    ];
     // Set the CSV file path
    const csvFilePath = './sales-report.csv';
     // Create a CSV writer
    const csvWriter = createCsvWriter({
      path: csvFilePath,
      header: [
        { id: 'date', title: 'Date' },
        { id: 'product', title: 'Product' },
        { id: 'quantity', title: 'Quantity' },
        { id: 'revenue', title: 'Revenue' },
      ],
    });
     // Write the sales report data to the CSV file
    csvWriter.writeRecords(salesReportData)
      .then(() => {
        console.log('Sales report generated');
        res.status(200).download(csvFilePath);
      })
      .catch((error) => {
        console.error('Error generating sales report', error);
        res.status(500).json({ message: 'Internal server error' });
      });
  };

  const membershiReport = (req, res) => {
    // Generate the membership report data from your database or any other source
    const membershipReportData = [
      { name: 'John Doe', email: 'johndoe@example.com', membershipType: 'Gold' },
      { name: 'Jane Smith', email: 'janesmith@example.com', membershipType: 'Silver' },
      // Add more membership data as needed
    ];
     // Set the CSV file path
    const csvFilePath = './membership-report.csv';
     // Create a CSV writer
    const csvWriter = createCsvWriter({
      path: csvFilePath,
      header: [
        { id: 'name', title: 'Name' },
        { id: 'email', title: 'Email' },
        { id: 'membershipType', title: 'Membership Type' },
      ],
    });
     // Write the membership report data to the CSV file
    csvWriter.writeRecords(membershipReportData)
      .then(() => {
        console.log('Membership report generated');
        res.status(200).download(csvFilePath);
      })
      .catch((error) => {
        console.error('Error generating membership report', error);
        res.status(500).json({ message: 'Internal server error' });
      });
  };


  module.exports = {salesReport, membershiReport};