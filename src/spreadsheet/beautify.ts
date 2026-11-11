function beautifySpreadsheet(
  spreadsheet = SpreadsheetApp.getActiveSpreadsheet(),
): void {
  for (const sheet of spreadsheet.getSheets()) {
    alignVerticallyMiddle_(sheet);
    setFont_(sheet);
    wrap_(sheet);
    autoResizeAllColumnsAndRows_(sheet);
  }
}

function alignVerticallyMiddle_(
  sheet = SpreadsheetApp.getActiveSheet(),
): void {
  getRange_(sheet).setVerticalAlignment('middle');
}

function setFont_(
  sheet = SpreadsheetApp.getActiveSheet(),
  fontFamily = 'Arial',
): void {
  getRange_(sheet).setFontFamily(fontFamily).setFontSize(10);
}

function wrap_(sheet = SpreadsheetApp.getActiveSheet()): void {
  getRange_(sheet).setWrapStrategy(SpreadsheetApp.WrapStrategy.WRAP);
}

function autoResizeAllColumnsAndRows_(
  sheet = SpreadsheetApp.getActiveSheet(),
): void {
  sheet
    .autoResizeColumns(1, sheet.getLastColumn())
    .autoResizeRows(1, sheet.getLastRow());
}
