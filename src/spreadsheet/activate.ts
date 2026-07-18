function activateSheetByName_(
  name: string,
  spreadsheet = SpreadsheetApp.getActiveSpreadsheet(),
): void {
  const sheet = spreadsheet.getSheetByName(name);
  if (sheet) spreadsheet.setActiveSheet(sheet);
}
