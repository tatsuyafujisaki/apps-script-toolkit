function getRange_(
  sheet = SpreadsheetApp.getActiveSheet(),
): GoogleAppsScript.Spreadsheet.Range {
  return sheet.getRange(1, 1, sheet.getMaxRows(), sheet.getMaxColumns());
}

function getRangeWithoutHeader_(
  sheet = SpreadsheetApp.getActiveSheet(),
): GoogleAppsScript.Spreadsheet.Range {
  return sheet.getRange(`2:${sheet.getLastRow()}`);
}
