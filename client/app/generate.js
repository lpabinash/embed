import jsPDF from "jspdf";
import "jspdf-autotable";
// Date Fns is used to format the dates we receive
// from our API call

// define a generatePDF function that accepts a tickets argument
const generatePDF = tickets => {
  // initialize jsPDF
  const doc = new jsPDF();

  // define the columns we want and their titles
  const tableColumn = ["Who", "Message"];
  // define an empty array of rows
  const tableRows = [];
  

  // for each ticket pass all its data into an array
  tickets.forEach(ticket => {
    const bot=ticket.isBot?"Bot":"User"
    const ticketData = [
      bot,
      ticket.msg
    ];
    // push each tickcet's info into a row
    tableRows.push(ticketData);
  });


  // startY is basically margin-top
  doc.autoTable(tableColumn, tableRows, { startY: 20 });
  // we use a date string to generate our filename.
  // ticket title. and margin-top + margin-left
  // we define the name of our PDF file.
  doc.save(`report.pdf`);
};

export default generatePDF;