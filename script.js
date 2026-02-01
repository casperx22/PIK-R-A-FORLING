function doPost(e) {
  var ss = SpreadsheetApp.openById("1ZSYjxlOxxrUVEcm8fVQ1NBgXH-TR8RGTey_b13bepyg");
  var sheet = ss.getSheetByName("Sheet1");
  
  try {
    var data = JSON.parse(e.postData.contents);
    sheet.appendRow([
      data.tanggal, 
      data.nama, 
      data.kelas, 
      data.ket, 
      data.materi, 
      data.bulan
    ]);
    return ContentService.createTextOutput("Success").setMimeType(ContentService.MimeType.TEXT);
  } catch (err) {
    return ContentService.createTextOutput("Error: " + err).setMimeType(ContentService.MimeType.TEXT);
  }
}

function doGet() {
  var ss = SpreadsheetApp.openById("1ZSYjxlOxxrUVEcm8fVQ1NBgXH-TR8RGTey_b13bepyg");
  var sheet = ss.getSheetByName("Sheet1");
  var data = sheet.getDataRange().getValues();
  data.shift(); 
  return ContentService.createTextOutput(JSON.stringify(data)).setMimeType(ContentService.MimeType.JSON);
}
