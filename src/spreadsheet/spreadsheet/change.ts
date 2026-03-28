function setJapaneseLocale() {
  SpreadsheetApp.getActiveSpreadsheet().setSpreadsheetLocale('ja');
}

function freezeHeaderRow(sheet: GoogleAppsScript.Spreadsheet.Sheet) {
  sheet.setFrozenRows(1);
}

function fillMonthCalendar() {
  const year = 2025;
  const month = 7;

  SpreadsheetApp.getActiveSpreadsheet().setSpreadsheetLocale('ja');
  const sheet = SpreadsheetApp.getActiveSheet();

  sheet
    .clear()
    .getRange('1:1')
    .setValues([['日付', '開始時刻', '終了時刻']]);

  sheet.setFrozenRows(1);

  fillDaysInColumnA_(year, month, sheet);

  sheet.autoResizeColumns(1, sheet.getLastColumn());
}
