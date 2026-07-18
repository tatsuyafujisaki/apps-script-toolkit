const onOpen = (): void => {
  SpreadsheetApp.getUi()
    .createMenu('🚀')
    .addItem('Download JSON', 'downloadMacTextReplacementsJson_')
    .addToUi();
};

function downloadMacTextReplacementsJson_(
  range = SpreadsheetApp.getActiveSheet().getDataRange(),
): void {
  const json = range.getValues().map(([shortcut = '', phrase = '']) => ({
    shortcut: String(shortcut),
    phrase: String(phrase),
  }));

  const encodedData = Utilities.base64Encode(
    JSON.stringify(json, null, 2),
    Utilities.Charset.UTF_8,
  );

  const html = HtmlService.createHtmlOutput(`
    <script>
      Object.assign(document.createElement('a'), {
        download: 'Text Substitutions.json',
        href: 'data:application/json;base64,${encodedData}',
      }).click();
      google.script.host.close();
    </script>
  `)
    .setWidth(1)
    .setHeight(1);

  SpreadsheetApp.getUi().showModalDialog(html, 'Downloading JSON ...');
}
