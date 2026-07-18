const getRange_ = (sheet = SpreadsheetApp.getActiveSheet()) =>
  sheet.getRange(1, 1, sheet.getMaxRows(), sheet.getMaxColumns());

const getRangeWithoutHeader_ = (sheet = SpreadsheetApp.getActiveSheet()) =>
  sheet.getRange('2:' + sheet.getLastRow());
