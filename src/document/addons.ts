// https://developers.google.com/apps-script/guides/services/authorization#manual_authorization_scopes_forand
/** @OnlyCurrentDoc */
function alertDocument(): void {
  DocumentApp.getUi().alert('Hello!');
}
