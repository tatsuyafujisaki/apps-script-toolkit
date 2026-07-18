function onOpen_(): void {
  SpreadsheetApp.getUi()
    .createMenu('🚀')
    .addItem('🎩 Alert!', 'alert_')
    .addItem('🍞 Toast!', 'toast_')
    .addToUi();
}

const alert_ = (message = '🔔'): void => {
  SpreadsheetApp.getUi().alert(message);
};

const toast_ = (
  message = '🍞',
  spreadsheet = SpreadsheetApp.getActiveSpreadsheet(),
): void => spreadsheet.toast(message);
