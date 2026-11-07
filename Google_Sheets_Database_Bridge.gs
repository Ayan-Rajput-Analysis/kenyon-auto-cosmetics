function doPost(e) {
  var d = JSON.parse(e.postData.contents);
  SpreadsheetApp.getActiveSpreadsheet().getActiveSheet()
    .appendRow([new Date(), d.client, d.vehicle, d.mode, d.zip, d.pkg, d.fee, d.total, d.status || "Booked"]);
  MailApp.sendEmail("client.support@kenyonmobiledetailing.com", "New Kenyon Booking: " + d.client, JSON.stringify(d, null, 2));
  return ContentService.createTextOutput("OK");
}
