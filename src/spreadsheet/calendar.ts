function drawMonthCalendar_(
  spreadsheet = SpreadsheetApp.getActiveSpreadsheet(),
): void {
  const year = 2050;
  const month = 1;

  spreadsheet.setSpreadsheetLocale('ja');
  const sheet = SpreadsheetApp.getActiveSheet();
  sheet
    .clear()
    .getRange('1:1')
    .setValues([['日付', '開始時刻', '終了時刻', '備考']]);
  sheet.setFrozenRows(1);

  fillDaysInColumnA_(year, month, sheet);
  colorSaturdayRowsInBlue_(sheet);
  colorSundayRowsInRed_(sheet);

  sheet.autoResizeColumns(1, sheet.getLastColumn());
}

function fillDaysInColumnA_(
  year: number,
  month: number,
  sheet = SpreadsheetApp.getActiveSheet(),
): void {
  const daysInMonth = new Date(year, month, 0).getDate();

  const dates = Array.from({length: daysInMonth}, (_, day) => [
    new Date(year, month - 1 /* zero-based */, day + 1),
  ]);

  sheet
    .getRange(2 /* excludes header row */, 1, dates.length, 1)
    .setValues(dates)
    .setNumberFormat('yyyy年m月d日(ddd)');
}

const colorSaturdayRowsInBlue_ = (
  sheet = SpreadsheetApp.getActiveSheet(),
): void => {
  addConditionalFormatRule_('=WEEKDAY($A2)=7', '#C9DAF8', sheet);
};

const colorSundayRowsInRed_ = (
  sheet = SpreadsheetApp.getActiveSheet(),
): void => {
  addConditionalFormatRule_('=WEEKDAY($A2)=1', '#F4CCCC', sheet);
};
