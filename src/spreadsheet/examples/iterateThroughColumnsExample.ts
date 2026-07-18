function iterateThroughColumnsExample_(
  sheet: GoogleAppsScript.Spreadsheet.Sheet = SpreadsheetApp.getActiveSheet(),
): void {
  const lastRow = sheet.getLastRow();
  const lastColumn = sheet.getLastColumn();
  if (lastRow === 0 || lastColumn === 0) {
    return;
  }
  for (let i = 1; i <= lastColumn; i++) {
    const column = sheet.getRange(1, i, lastRow, 1);
    console.log(column.getA1Notation());
  }
}
