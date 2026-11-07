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
  sheet
    .getRange(1, 1, sheet.getMaxRows(), sheet.getMaxColumns())
    .setVerticalAlignment('middle');
}

function setFont_(
  sheet = SpreadsheetApp.getActiveSheet(),
  fontFamily = 'Arial',
): void {
  sheet
    .getRange(1, 1, sheet.getMaxRows(), sheet.getMaxColumns())
    .setFontFamily(fontFamily)
    .setFontSize(10);
}

function wrap_(sheet = SpreadsheetApp.getActiveSheet()): void {
  sheet
    .getRange(1, 1, sheet.getMaxRows(), sheet.getMaxColumns())
    .setWrapStrategy(SpreadsheetApp.WrapStrategy.WRAP);
}

function autoResizeAllColumnsAndRows_(
  sheet = SpreadsheetApp.getActiveSheet(),
) {
  sheet
    .autoResizeColumns(1, sheet.getLastColumn())
    .autoResizeRows(1, sheet.getLastRow());
}
