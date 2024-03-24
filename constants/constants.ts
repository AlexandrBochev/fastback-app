export const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export const POST_URL = 'https://e5df2c8e-1d37-45d4-9423-c69fc110cdde.mock.pstmn.io/users'

export const SITES_URL = 'https://6389df1b4eccb986e89cf319.mockapi.io/give-some-data/websites'

export const INJECTED_JS = `
  (function() {
    const copyrightRegex = /©[^\\n]*inc[^\\n]*/gi;
    const elements = document.getElementsByTagName('body')[0].innerText;
    const matches = elements.match(copyrightRegex);
    if (matches && matches.length > 0) {
      window.ReactNativeWebView.postMessage(matches[0]);
    } else {
      window.ReactNativeWebView.postMessage('No match found');
    }
  })();
`;