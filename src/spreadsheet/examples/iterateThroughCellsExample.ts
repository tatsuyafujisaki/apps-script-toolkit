function iterateThroughCellsExample_(
  range = SpreadsheetApp.getActiveSheet().getDataRange(),
): void {
  console.log(range.getA1Notation());
  for (let row = 1; row <= range.getNumRows(); row++) {
    for (let column = 1; column <= range.getNumColumns(); column++) {
      const cell = range.getCell(row, column);
      console.log(cell.getA1Notation());
    }
  }
}
