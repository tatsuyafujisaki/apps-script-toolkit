function sortSheets(
  spreadsheet = SpreadsheetApp.getActiveSpreadsheet(),
): void {
  const sheets = spreadsheet.getSheets();
  const prioritySheets = sheets.slice(0, 3);
  const nonPrioritySheets = sheets.slice(3);

  nonPrioritySheets.sort((a, b) => a.getName().localeCompare(b.getName()));

  [...prioritySheets, ...nonPrioritySheets].forEach((sheet, index) => {
    spreadsheet.setActiveSheet(sheet);
    spreadsheet.moveActiveSheet(index + 1);
  });
}

function printFormulaToBePastedOnConsolidatedSheet(
  spreadsheet = SpreadsheetApp.getActiveSpreadsheet(),
): void {
  const nonPrioritySheetNames = spreadsheet
    .getSheets()
    .slice(3)
    .map(sheet => sheet.getName());

  const formula = `=SORT({${nonPrioritySheetNames.map(name => `'${name}'!A2:E`).join(';')}})`;
  console.log(formula);
}
