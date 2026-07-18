function iterateThroughRowsExample_(
  sheet = SpreadsheetApp.getActiveSheet(),
): void {
  const lastRow = sheet.getLastRow();
  const lastColumn = sheet.getLastColumn();
  if (lastRow === 0 || lastColumn === 0) {
    return;
  }
  for (let i = 1; i <= lastRow; i++) {
    const row = sheet.getRange(i, 1, 1, lastColumn);
    console.log(row.getA1Notation());
  }
}
