function iterateThroughCellsExample_(
  range = SpreadsheetApp.getActiveSheet().getDataRange(),
): void {
  for (const row of range.getValues()) {
    for (const cell of row) {
      console.log(cell);
    }
  }
}
