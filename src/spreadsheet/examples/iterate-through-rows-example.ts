function iterateThroughRowsExample_(
  range = SpreadsheetApp.getActiveSheet().getDataRange(),
): void {
  for (const row of range.getValues()) {
    console.log(row);
  }
}
