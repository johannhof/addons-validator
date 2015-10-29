import { gettext as _, singleLineString } from 'utils';


export const JS_SYNTAX_ERROR = {
  code: 'JS_SYNTAX_ERROR',
  legacyCode: [
    'testcases_scripting',
    'test_js_file',
    'syntax_error',
  ],
  message: _('JavaScript syntax error'),
  description: _(singleLineString`There is a JavaScript syntax error in your
    code; validation cannot continue on this file.`),
};

export const MOZINDEXEDDB = {
  code: 'MOZINDEXEDDB',
  // Original code appeared to have a non-unique err_id which is no
  // use for comparsions. ('testcases_regex', 'generic', '_generated')
  legacyCode: null,
  message: _('mozIndexedDB has been removed; use indexedDB instead'),
  description: _('mozIndexedDB has been removed; use indexedDB instead.'),
};

export const MOZINDEXEDDB_PROPERTY = {
  code: 'MOZINDEXEDDB_PROPERTY',
  // Original code appeared to have a non-unique err_id which is no
  // use for comparsions. ('testcases_regex', 'generic', '_generated')
  legacyCode: null,
  message: _('mozIndexedDB used as an object key/property'),
  description: _('mozIndexedDB has been removed; use indexedDB instead.'),
};

export function _nonLiteralUri(method) {
  return {
    code: `${method}_NONLIT_URI`.toUpperCase(),
    legacyCode: [
      'js',
      'instanceactions',
      `${method}_nonliteral`,
    ],
    message: _(`'${method}' called with a non-literal uri`),
    description: _(singleLineString`Calling '${method}' with variable
      parameters can result in potential security vulnerabilities if the
      variable contains a remote URI. Consider using 'window.open' with
      the 'chrome=no' flag.`),
  };
}

export function _methodPassedRemoteUri(method) {
  return {
    code: `${method}_REMOTE_URI`.toUpperCase(),
    legacyCode: [
      'js',
      'instanceactions',
      `${method}_remote_uri`,
    ],
    message: _(`'${method}' called with non-local URI`),
    description: _(singleLineString`Calling '${method}' with a non-local
      URI will result in the dialog being opened with chrome privileges.`),
  };
}

export const OPENDIALOG_REMOTE_URI = _methodPassedRemoteUri('openDialog');
export const OPENDIALOG_NONLIT_URI = _nonLiteralUri('openDialog');