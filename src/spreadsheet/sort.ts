function sortSheetByColumns_(
  columnPositions: number[],
  sheet = SpreadsheetApp.getActiveSheet(),
): void {
  for (const columnPosition of columnPositions) {
    sheet.sort(columnPosition);
  }
}
