function downloadMacTextReplacementsJson_(): void {
  const values = SpreadsheetApp.getActiveSheet().getDataRange().getValues();
  const json = values.map(([shortcut = '', phrase = '']) => ({
    shortcut: (shortcut ?? '').toString(),
    phrase: (phrase ?? '').toString(),
  }));
  const jsonData = JSON.stringify(json, null, 2);
  const encodedData = Utilities.base64Encode(
    jsonData,
    Utilities.Charset.UTF_8,
  );

  const htmlString = `
    <script>
      const a = document.createElement('a');
      a.href = 'data:application/json;base64,${encodedData}';
      a.download = 'Text Substitutions.json';
      a.click();
      google.script.host.close();
    </script>
  `;

  const html = HtmlService.createHtmlOutput(htmlString)
    .setWidth(1)
    .setHeight(1);
  SpreadsheetApp.getUi().showModalDialog(
    html,
    'Downloading JSON ...',
  );
}

function onOpen(): void {
  SpreadsheetApp.getUi()
    .createMenu('🚀')
    .addItem('Download JSON', 'downloadMacTextReplacementsJson_')
    .addToUi();
}
