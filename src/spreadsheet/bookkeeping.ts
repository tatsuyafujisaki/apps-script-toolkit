const LEFTMOST_FIXED_SHEET_COUNT = 2;

function sortSheets(
  spreadsheet = SpreadsheetApp.getActiveSpreadsheet(),
): void {
  const sheets = spreadsheet.getSheets();
  const sortableSheets = sheets.slice(LEFTMOST_FIXED_SHEET_COUNT);

  sortableSheets.sort((a, b) => a.getName().localeCompare(b.getName()));

  sortableSheets.forEach((sheet, index) => {
    spreadsheet.setActiveSheet(sheet);
    spreadsheet.moveActiveSheet(LEFTMOST_FIXED_SHEET_COUNT + index + 1);
  });
}

function logFormulaToBePastedOnConsolidatedSheet(
  spreadsheet = SpreadsheetApp.getActiveSpreadsheet(),
): void {
  const sortableSheetNames = spreadsheet
    .getSheets()
    .slice(LEFTMOST_FIXED_SHEET_COUNT)
    .map(sheet => sheet.getName());

  const formula = `=SORT({${sortableSheetNames.map(name => `'${name}'!A$2:E`).join(';')}})`;
  console.log(formula);
}
