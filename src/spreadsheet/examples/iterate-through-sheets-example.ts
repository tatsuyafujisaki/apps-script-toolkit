function iterateThroughSheetsExample_(
  spreadsheet = SpreadsheetApp.getActiveSpreadsheet(),
): void {
  console.log(spreadsheet.getName());
  for (const sheet of spreadsheet.getSheets()) {
    console.log(sheet.getName());
  }
}
