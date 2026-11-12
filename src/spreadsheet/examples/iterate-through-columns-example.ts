function iterateThroughColumnsExample_(
  range = SpreadsheetApp.getActiveSheet().getDataRange(),
): void {
  const values = range.getValues();
  const columnCount = values[0]?.length ?? 0;
  for (let columnIndex = 0; columnIndex < columnCount; columnIndex++) {
    const column = values.map(row => row[columnIndex]);
    console.log(column);
  }
}
