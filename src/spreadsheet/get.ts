function getRange_(sheet = SpreadsheetApp.getActiveSheet()) {
  return sheet.getRange(1, 1, sheet.getMaxRows(), sheet.getMaxColumns());
}

function getRangeWithoutHeader_(sheet = SpreadsheetApp.getActiveSheet()) {
  return sheet.getRange('2:' + sheet.getLastRow());
}
