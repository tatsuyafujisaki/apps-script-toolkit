function iterateThroughSheetsExample_(
  spreadsheet: GoogleAppsScript.Spreadsheet.Spreadsheet = SpreadsheetApp.getActiveSpreadsheet(),
): void {
  console.log(spreadsheet.getName());
  for (const sheet of spreadsheet.getSheets()) {
    console.log(sheet.getName());
  }
}
