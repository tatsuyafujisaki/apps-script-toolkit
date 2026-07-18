const sortSheetByColumns_ = (
  columnPositions: number[],
  sheet = SpreadsheetApp.getActiveSheet(),
): void =>
  columnPositions.forEach(columnPosition => sheet.sort(columnPosition));
