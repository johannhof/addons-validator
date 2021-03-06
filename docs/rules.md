
# Validator Rules

This document is automatically published on [github pages](http://mozilla.github.io/addons-validator/).
To update it edit `docs/rules.md` in the
[github repo](https://github.com/mozilla/addons-validator).


## JavaScript

### Actions

| Done? | MsgType | Rule name | Addon type | Description | File Type | Source ref | Old Code | New Code |
| ----- | ------- | --------- | ---------- | ----------- | --------- | ---------- | -------- | -------- |
| :negative_squared_cross_mark: | warning | dangerous_contract | | Dangerous XPCOM contract ID |  | [testcases/javascript/actions.py](https://github.com/mozilla/amo-validator/blob/master/validator/testcases/javascript/actions.py)| | ('js', 'actions', 'dangerous_contract') | **Removed** |
| :white_check_mark: | warning |  banned_identifier | | Banned or deprecated JavaScript Identifier | | | ('js', 'actions', 'banned_identifier') | BANNED_NEWTHREAD |
| :white_check_mark: | warning |  banned_identifier | | Banned or deprecated JavaScript Identifier | | | ('js', 'actions', 'banned_identifier') | BANNED_PROCESSNEXTEVENT |
| :x: | warning | complex_prefs_defaults_code | | Complex code should not appear in preference defaults files | | | | |
| :x: | warning | called_dangerous_global | | `%s` called in potentially dangerous manner' | | | | |
| :white_check_mark: | error? | eval | | In order to prevent vulnerabilities, the `setTimeout` 'and `setInterval` functions should be called only with function expressions as their first argument. | | [testcases/javascript/actions.py](https://github.com/mozilla/amo-validator/blob/7a8011aba8bf8c665aef2b51eb26d0697b3e19c3/validator/testcases/javascript/actions.py#L488) | | EVAL_STRING_ARG |
| :x: | warning | low_level_module (not from src) | | Usage of low-level or non-SDK interface | | | | |
| :x: | warning | widget | | Use of deprecated SDK module | | | | |
| :negative_squared_cross_mark: | notice |  \_readonly_top | | window.top is a reserved variable | | | ('testcases_javascript_actions', '_readonly_top' | **Removed** |
| :x: | warning | global_overwrite | | Global variable overwrite | | | | |

### Call definitions
| Done? | MsgType | Rule name | Addon type | Description | File Type | Source ref | Old Code | New Code |
| ----- | ------- | --------- | ---------- | ----------- | --------- | ---------- | -------- | -------- |
| :negative_squared_cross_mark: | warning | webbrowserpersist | | nsIWebBrowserPersist should no longer be used |  | [testcases/javascript/call_definitions.py](https://github.com/mozilla/amo-validator/blob/master/validator/testcases/javascript/call_definitions.py)| ('testcases_javascript_call_definititions', 'webbrowserpersist') | **Removed **|
| :negative_squared_cross_mark: | warning | webbrowserpersist_saveuri | | saveURI should not be called with a null load context | | | ('testcases_javascript_call_definititions', 'webbrowserpersist_saveuri') | **Removed** |
| :negative_squared_cross_mark: | notice | deprec | | Deprecated nsIJSON methods in use | | | ('testcases_javascript_calldefinitions', 'nsIJSON', 'deprec') | **Removed** |
| :white_check_mark: | warning | shallow | | Shallow XPCOM wrappers should not be used | | | ('testcases_js_xpcom', 'xpcnativewrapper', 'shallow' | SHALLOW_WRAPPER |
| :x: | notice | %s_nonliteral | | `%s` called with non-literal parameter. | | | | |
| :white_check_mark: | notice | opendialog_nonlit_uri |  | openDialog called with non-literal parameter | | | ('js', 'instanceactions', 'openDialog_nonliteral' | OPENDIALOG_NONLIT_URI |
| :x: | warning | %s_remote_uri | | `%s` called with non-local URI. | | | | |
| :white_check_mark: | warning | opendialog_remote_uri |  | openDialog called with non-local URI | | | ('js', 'instanceactions', 'openDialog_remote_uri' | OPENDIALOG_REMOTE_URI |

###  Entity values

*Deprecated entities are checked with a generated set of rules*

| Done? | MsgType | Rule name | Addon type | Description | File Type | Source ref | Old Code | New Code |
| ----- | ------- | --------- | ---------- | ----------- | --------- | ---------- | -------- | -------- |
| :x: | warning | deprecated_entity | | THIS IS A GENERATED ERROR |  | [testcases/javascript/entity_values.py](https://github.com/mozilla/amo-validator/blob/master/validator/testcases/javascript/entity_values.py)| | |
| :x: | warning | evil | | Use of `document.write` strongly discouraged. | | | | |
| :x: | warning | nsIDNSServiceResolve | | `nsIDNSService.resolve()` should not be used. | | | | |
| :x: | warning | nsISound_play | | `nsISound.play` should not be used | | | | |
| :x: | warning | init | | `init` should not be called with a null first argument | | | | |
| :x: | warning | override | | Extensions must not alter user preferences such as the new tab URL without explicit user consent.  | | | | |

### instanceactions

| Done? | MsgType | Rule name | Addon type | Description | File Type | Source ref | Old Code | New Code |
| ----- | ------- | --------- | ---------- | ----------- | --------- | ---------- | -------- | -------- |
| :x: | notice | addEventListener_fourth | | `addEventListener` called with truthy fourth argument |  | [testcases/javascript/instanceactions.py](https://github.com/mozilla/amo-validator/blob/master/validator/testcases/javascript/instanceactions.py)| | |
| :x: | warning | called_createelement | | createElement() used to create script tag | | | | |
| :x: | warning | createelement_variable | | Variable element type being created | | | | |
| :x: | warning | setting_on\*  | | on\* attribute being set using setAttribute | | | | |
| :x: | warning | launch | | Potentially dangerous use of `launch()` | | | | |
| :x: | warning | executeSimpleSQL_dynamic | | SQL statements should be static strings | | | | |
| :x: | warning | executeSimpleSQL | | Synchronous SQL should not be used | | | | |
| :x: | warning | called_set_preference | | Attempt to set a dangerous preference | | | | |


### instanceproperties

| Done? | MsgType | Rule name | Addon type | Description | File Type | Source ref | Old Code | New Code |
| ----- | ------- | --------- | ---------- | ----------- | --------- | ---------- | -------- | -------- |
| :x: | warning | event_assignment | | Event handler assignment via %s |  | [testcases/javascript/instanceproperties.py](https://github.com/mozilla/amo-validator/blob/master/validator/testcases/javascript/instanceproperties.py)| | |
| :x: | warning | script_assignment | | Scripts should not be created with `%s` | | | | |
| :x: | warning | variable_assignment | | Markup should not be passed to `%s` dynamically. | | | | |
| :x: | warning | on\*_str_assignment | | on\* property being assigned string | | | | |
| :x: | warning | handleEvent | | `handleEvent` no longer implemented in Gecko 18 | | | | |
| :x: | warning | \_\_proto\_\_ | | Using `__proto__` or `setPrototypeOf` to set a prototype is now deprecated | | | | |
| :x: | warning | \_\_exposedProps\_\_ | | Use of deprecated `__exposedProps__` declaration | | | | |
| :x: | warning | set_non_literal | | `contentScript` properties should not be used | | | | |

### jsshell

| Done? | MsgType | Rule name | Addon type | Description | File Type | Source ref | Old Code | New Code |
| ----- | ------- | --------- | ---------- | ----------- | --------- | ---------- | -------- | -------- |
| :white_check_mark: | warning | syntax_error | | JavaScript Compile-Time Error |  | [testcases/javascript/jsshell.py](https://github.com/mozilla/amo-validator/blob/master/validator/testcases/javascript/jsshell.py)| | JS_SYNTAX_ERROR |
| :x: | notice | recursion_error | | JS too deeply nested for validation | | | | |
| :x: | error | retrieving_tree | | JS reflection error prevented validation | | | | |

### jstypes

| Done? | MsgType | Rule name | Addon type | Description | File Type | Source ref | Old Code | New Code |
| ----- | ------- | --------- | ---------- | ----------- | --------- | ---------- | -------- | -------- |
| :x: | warning | unwrapped_js_object | | Assignment of unwrapped JS Object's properties |  | [testcases/javascript/jstypes.py](https://github.com/mozilla/amo-validator/blob/master/validator/testcases/javascript/jstypes.py)| | |
| :x: | warning | const_overwrite | | Overwritten constant value | | | | |
| :x: | warning | global_overwrite | | Global overwrite. An attempt to overwrite a global variable was made in some JS code | | | | |
| :x: | warning | global_member_deletion | | Members of global object may not be deleted | | | | |
| :x: | warning | jetpack_abs_uri |  | Absolute URIs in Jetpack 1.4 are disallowed | | | | |

### predefinedentities

*this file appear to contain lot of data but looks to be used elsewhere a second pass would be good to check*

| Done? | MsgType | Rule name | Addon type | Description | File Type | Source ref | Old Code | New Code |
| ----- | ------- | --------- | ---------- | ----------- | --------- | ---------- | -------- | -------- |
| :x: | warning | dangerous_global | | The FUEL library is now deprecated |  | [testcases/javascript/predefinedentities.py](https://github.com/mozilla/amo-validator/blob/master/validator/testcases/javascript/predefinedentities.py)| | |
| :x: | warning | changes (search_service) | | Potentially dangerous use of the search service | | | |  |
| :x: | warning | write (windows_registry) | | Writes to the registry may be dangerous | | | | |

### Traverser

| Done? | MsgType | Rule name | Addon type | Description | File Type | Source ref | Old Code | New Code |
| ----- | ------- | --------- | ---------- | ----------- | --------- | ---------- | -------- | -------- |
| :x: | warning | namespace_pollution | | JavaScript namespace pollution |  | [testcases/javascript/traverser.py](https://github.com/mozilla/amo-validator/blob/master/validator/testcases/javascript/traverser.py)| | |
| :x: | warning | dangerous_global | | Access to the `%s` property is deprecated for security or other reasons. | | | | |


## Markup

### CSS

| Done? | MsgType | Rule name | Addon type | Description | File Type | Source ref | Old Code | New Code |
| ----- | ------- | --------- | ---------- | ----------- | --------- | ---------- | -------- | -------- |
| :white_check_mark: | warning | -moz-binding_external | | Illegal reference to external scripts |  | [testcases/markup/csstester.py](https://github.com/mozilla/amo-validator/blob/master/validator/testcases/markup/csstester.py)| | MOZ_BINDING_EXT_REFERENCE |
| :x: | warning | remote_url | | Themes may not reference remote resources | | | | |
| :x: | warning | identity_box | | Modification to identity box | | | | |
| :x: | info? (should be an error) | unicode_decode | | Unicode decode error. | | | | |
| :white_check_mark: | error | CSS syntax error | | A CSS syntax error was detected | | N/A | N/A | CSS_SYNTAX_ERROR |

### HTML

| Done? | MsgType | Rule name | Addon type | Description | File Type | Source ref | Old Code | New Code |
| ----- | ------- | --------- | ---------- | ----------- | --------- | ---------- | -------- | -------- |
| :x: | warning | parse_error | | There was an error parsing a markup file |  | [testcases/markup/markuptester.py](https://github.com/mozilla/amo-validator/blob/master/validator/testcases/markup/markuptester.py)| | |
| :x: | error | banned_element | | A banned markup element was found | | | | |
| :x: | warning | unsafe_theme_xbl_element | theme | Certain XBL elements are disallowed in full themes | | | | |
| :x: | warning | theme_xbl_property | theme | Themes are not allowed to use XBL properties | | | | |
| :x: | warning | unsafe_langpack_theme | theme / langpack | Unsafe tag for add-on type | | | | |
| :x: | warning | remote_src_href | theme / langpack | `src`/`href` attributes must be local | | | | |
| :white_check_mark: | warning | prefwindow_id | | `<prefwindow>` elements must have IDs | | | | PREFWINDOW_REQUIRES_ID |
| :x: | warning | iframe_type_unsafe | | iframe/browser missing 'type' attribute | | | | |
| :x: | warning | iframe_type_unsafe | | Typeless iframes/browsers must be local | | | | |
| :x: | warning | banned_remote_scripts | | Scripts must not be remote | | | | |
| :x: | warning | jetpack_abs_uri | | Absolute URI referenced in Jetpack 1.4 | | | | |
| :x: | warning | theme_attr_prefix | theme | Attribute contains banned prefix | | | | |
| :x: | warning | dom_manipulation_handler | | DOM Mutation Events Prohibited | | | | |
| :x: | warning | generic_ids | | Overlay contains generically-named IDs | | | | |
| :x: | warning | complex_script | | Long inline script | | | | |
| :x: | warning | extra_closing_tags | | Markup parsing error | | | | |
| :x: | warning | extra_closing_tags | | Parse error: tag closed before opened | | | | |
| :x: | warning | invalid_nesting | | Markup invalidly nested | | | | |


## chrome.manifest

| Done? | MsgType | Rule name | Addon type | Description | File Type | Source ref | Old Code | New Code |
| ----- | ------- | --------- | ---------- | ----------- | --------- | ---------- | -------- | -------- |
| :white_check_mark: | warning | resource_modules | | Potentially dangerous category entry |  chrome.manifest | [testcases/chromemanifest.py](https://github.com/mozilla/amo-validator/blob/master/validator/testcases/chromemanifest.py)| 'resource_modules') | DANGEROUS_CATEGORY |
| :x: | error | resource_modules | | Resources should not be packages in the 'modules' namespace | chrome.manifest | | | |
| :x: | warning | missing_triplicates | | `content` instruction missing information | chrome.manifest | | | |
| :x: | error | godlikea | | Banned namespace in chrome.manifest | chrome.manifest | | | |
| :x: | notice | trailing | | Content instruction URIs must end with trailing slash | chrome.manifest | | | |


## Content

| Done? | MsgType | Rule name | Addon type | Description | File Type | Source ref | Old Code | New Code |
| ----- | ------- | --------- | ---------- | ----------- | --------- | ---------- | -------- | -------- |
| :x: | warning | found_in_chrome_manifest| | xpcnativewrappers not allowed in chrome.manifest |  chrome.manifest | [testcases/content.py](https://github.com/mozilla/amo-validator/blob/master/validator/testcases/content.py)| | |
| :x: | warning | found_in_chrome_manifest| | newTab.xul is now newTab.xhtml |  chrome.manifest | | | |
| :x: | warning | hidden_files | | Hidden files and folders flagged | | | | |
| :x: | warning | flagged_files | | Flagged filename found | | | | |
| :x: | notice | blacklisted_js_library | | JS Library Detected | | | | |
| :x: | warning | invalid_chrome_url | | Invalid chrome URL | | | | |
| :x: | warning | too_much_js | | TOO MUCH JS FOR EXHAUSTIVE VALIDATION | | | | |
| :x: | error | unsigned_sub_xpi | | Sub-package must be signed | | | | |
| :x: | warning | signed_xpi | | Package already signed | | | | |
| :x: | error | jar_subpackage_corrupt  | | Subpackage corrupt | | | | |


## Install.rdf

TODO: Alot of these are generated so this will need expanded with each unique code.

| Done? | MsgType | Rule name | Addon type | Description | File Type | Source ref | Old Code | New Code |
| ----- | ------- | --------- | ---------- | ----------- | --------- | ---------- | -------- | -------- |
| :white_check_mark: | error | shouldnt_exist | | Banned element in install.rdf | install.rdf | [96](https://github.com/mozilla/amo-validator/blob/master/validator/testcases/installrdf.py) | ('testcases_installrdf', '_test_rdf', 'shouldnt_exist') | TAG_NOT_ALLOWED_HIDDEN |
| :white_check_mark: | error | shouldnt_exist | | Banned element in install.rdf | install.rdf | [96](https://github.com/mozilla/amo-validator/blob/master/validator/testcases/installrdf.py) | ('testcases_installrdf', '_test_rdf', 'shouldnt_exist') | TAG_NOT_ALLOWED_UPDATEKEY |
| :white_check_mark: | error | shouldnt_exist | | Banned element in install.rdf | install.rdf | [96](https://github.com/mozilla/amo-validator/blob/master/validator/testcases/installrdf.py) | ('testcases_installrdf', '_test_rdf', 'shouldnt_exist') | TAG_NOT_ALLOWED_UPDATEURL |
| :white_check_mark: | notice | obsolete | | Obsolete element in install.rdf | install.rdf | | | TAG_OBSOLETE_FILE |
| :white_check_mark: | notice | obsolete | | Obsolete element in install.rdf | install.rdf | | | TAG_OBSOLETE_REQUIRES |
| :white_check_mark: | notice | obsolete | | Obsolete element in install.rdf | install.rdf | | | TAG_OBSOLETE_SKIN |
| :x: | warning | optionsType | | `<em:optionsType>` has bad value. | install.rdf | | | |
| :x: | notice | unrecognized | | Unrecognized element in install.rdf | install.rdf | | | |
| :x: | notice | missing_updateKey | | Missing updateKey element | install.rdf | | | |
| :x: | notice | Missing updateURL element | | Missing updateURL element | install.rdf | | | |
| :x: | error | missing_addon | | install.rdf missing element(s). | install.rdf | | | |




## Jetpack

| Done? | MsgType | Rule name | Addon type | Description | File Type | Source ref | Old Code | New Code |
| ----- | ------- | --------- | ---------- | ----------- | --------- | ---------- | -------- | -------- |
| :x: | warning | mismatched_version | | Jetpack module version mismatch |  | [testcases/jetpack.py](https://github.com/mozilla/amo-validator/blob/master/validator/testcases/jetpack.py) | | |
| :x: | warning | extra_hashes | | Extra hashes registered in harness-options | harness-options.json | | | |
| :x: | warning | bad_harness-options.json | | harness-options.json is not decodable JSON | harness-options.json | | | |
| :x: | warning | harness-options_missing_elements | | Elements are missing from harness-options.json | harness-options.json | | | |
| :x: | error | redacted_version | | Unsupported version of Add-on SDK | | | | |
| :x: | warning | outdated_version | | Outdated version of Add-on SDK | | | | |
| :x: | notice | future_version | | Future version of Add-on SDK unrecognized | | | | |
| :x: | warning | irregular_module_location | | Irregular Jetpack module location | harness-options.json | | | |
| :x: | warning | irregular_module_elements | | Irregular Jetpack module elements | harness-options.json | | | |
| :x: | warning | missing_jetpack_module | | Missing Jetpack module | harness-options.json | | | |
| :x: | warning | mismatched_checksum | | Jetpack module hash mismatch | | | | |


## l10ncompleteness

| Done? | MsgType | Rule name | Addon type | Description | File Type | Source ref | Old Code | New Code |
| ----- | ------- | --------- | ---------- | ----------- | --------- | ---------- | -------- | -------- |
| :x: | warning | manager_absent | | Listed locale does not exist   | chrome.manifest | [testcases/l10ncompleteness.py](https://github.com/mozilla/amo-validator/blob/master/validator/testcases/l10ncompleteness.py) | | |
| :x: | notice | no_locales | | Add-on appears not to be localized | chrome.manifest | | | |
| :x: | info? | missing_app_support |  | Supported app missing in localization completeness | | | | |
| :x: | warning | find_corresponding_locale | | Could not find corresponding locale | chrome.manifest | | | |
| :x: | warning | missing_file | | Missing translation file | | | | |
| :x: | warning | missing_translation_entity | | Missing translation entity |   | | | |
| :x: | notice | unchanged_entities | | Unchanged translation entities | | | | |
| :x: | warning | unexpected_encodings | | Unexpected encodings in locale files | | | | |


## langpacks

| Done? | MsgType | Rule name | Addon type | Description | File Type | Source ref | Old Code | New Code |
| ----- | ------- | --------- | ---------- | ----------- | --------- | ---------- | -------- | -------- |
| :x: | warning | invalid_subject | | Invalid chrome.manifest subject. chrome.manifest files in language packs are only allowed to contain items that are prefixed with 'locale', 'manifest', or 'override' | chrome.manifest | [testcases/langpack.py](https://github.com/mozilla/amo-validator/blob/master/validator/testcases/langpack.py) | | |
| :x: | warning | invalid_override | | Invalid chrome.manifest object/predicate. | chrome://\*/locale/\* | | | |
| :x: | warning | unsafe_content_html | | Unsafe HTML found in language pack files | | | | |
| :x: | warning | unsafe_content_link | | Unsafe remote resource found in language pack | | | | |


## package.json

| Done? | MsgType | Rule name | Addon type | Description | File Type | Source ref | Old Code | New Code |
| ----- | ------- | --------- | ---------- | ----------- | --------- | ---------- | -------- | -------- |
| :x: | error | field_required | | Your package.json is missing a required field | | [testcases/packagejson.py](https://github.com/mozilla/amo-validator/blob/master/validator/testcases/packagejson.py) | | |


## Package layout

| Done? | MsgType | Rule name | Addon type | Description | File Type | Source ref | Old Code | New Code |
| ----- | ------- | --------- | ---------- | ----------- | --------- | ---------- | -------- | -------- |
| :x: | notice | deprecated_file | |  Extension contains a deprecated file | | [testcases/packagelayout.py](https://github.com/mozilla/amo-validator/blob/master/validator/testcases/packagelayout.py) | | |
| :x: | warning | disallowed_file_type | | Flagged file type found | | | | |
| :x: | warning | java_jar | | Java JAR file detected | | | | |
| :x: | warning | disallowed_extension | | Flagged file extensions found | | | | |
| :x: | error | test_godlikea | | Banned 'godlikea' chrome namespace | | | | |
| :x: | notice | disallowed_file_type | | (Binary) Flagged file type found | | | | |
| :x: | error | missing_install_rdf | | Add-on missing install.rdf | | | | |
| :white_check_mark: | warning | duplicate_entries | | Package contains duplicate entries | | | | DUPLICATE_XPI_ENTRY |
| :x: | warning | should_be_true | | Add-on should set `<em:unpack>` to true | | | | |
| :x: | notice | should_be_false | | Add-on contains JAR files, no `<em:unpack>` | | | | |
| :x: | warning | unknown_file | | Unknown file found in add-on | | | | |
| :x: | warning | missing_required | | Required file missing | | | | |

## Type detection

| Done? | MsgType | Rule name | Addon type | Description | File Type | Source ref | Old Code | New Code |
| ----- | ------- | --------- | ---------- | ----------- | --------- | ---------- | -------- | -------- |
| :white_check_mark: | notice | missing_install_rdf | | Add-on missing install.rdf for type detection | | [22](https://github.com/mozilla/amo-validator/blob/master/validator/typedetection.py#L22) | ('typedetection', 'detect_type', 'missing_install_rdf') | TYPE_NO_INSTALL_RDF |
| :white_check_mark: | error | invalid_em_type | | The only valid values for `<em:type>` are 2, 4, 8, and 32 | | [46](https://github.com/mozilla/amo-validator/blob/master/validator/typedetection.py#L46) | ('typedetection', 'detect_type', 'invalid_em_type') | TYPE_INVALID |
| :white_check_mark: | notice | no_em:type | | No `<em:type>` element found in install.rdf | | [66](https://github.com/mozilla/amo-validator/blob/master/validator/typedetection.py#L66) | ('typedetection', 'detect_type', 'no_em:type') | TYPE_MISSING |
| :white_check_mark: | error | undeterminable_type | | Unable to determine add-on type | | [195](https://github.com/mozilla/amo-validator/blob/master/validator/submain.py#L195) | ('main', 'test_package', 'undeterminable_type') | TYPE_NOT_DETERMINED |


## Themes

| Done? | MsgType | Rule name | Addon type | Description | File Type | Source ref | Old Code | New Code |
| ----- | ------- | --------- | ---------- | ----------- | --------- | ---------- | -------- | -------- |
| :x: | warning | invalid_chrome_manifest_subject | theme | chrome.manifest files for full themes are only allowed to have 'skin' and 'style' items. Other types of items are disallowed for security reasons.' | chrome.manifest | [testcases/themes.py](https://github.com/mozilla/amo-validator/blob/master/validator/testcases/themes.py) | | |
| :x: | warning | theme_js | theme | Themes should not contain executable code. | \*.js | [testcases/scripting.py](https://github.com/mozilla/amo-validator/blob/master/validator/testcases/themes.py) | | |


## Target Versions

| Done? | MsgType | Rule name | Addon type | Description | File Type | Source ref | Old Code | New Code |
| ----- | ------- | --------- | ---------- | ----------- | --------- | ---------- | -------- | -------- |
| :x: | error | invalid_min_version | addon? |  The minimum version that was specified is not an acceptable version number for the Mozilla product that it corresponds with. | install.rdf | [testcases/targetapplication.py](https://github.com/mozilla/amo-validator/blob/master/validator/testcases/targetapplication.py) | | |
| :x: | error | invalid_max_version | addon? |  The maximum version that was specified is not an acceptable version number for the Mozilla product that it corresponds with. | install.rdf | | | |
| :x: | error | invalid_version_order | addon? | The version numbers provided for the application in question are not in the correct order. The maximum version must be greater than the minimum version.' | install.rdf | | | |
| :x: | warning | missing_minversion | addon? | Missing minVersion property. A targetApplication element is missing its minVersion property. This may cause it to be ignored as invalid. | install.rdf | | | |
| :x: | warning | missing_maxversion | addon? | Missing maxVersion property. A targetApplication element is missing its maxVersion property. This may cause it to be ignored as invalid. | install.rdf | | | |
| :x: | warning | duplicate_targetapps | addon? | Found duplicate `<em:targetApplication>` elements. Multiple targetApplication elements were found in the install.manifest file that refer to the same application GUID. There should not be duplicate target applications entries. | install.rdf | | | |
| :x: | error | no_mozilla_support | addon? | None of the target applications listed in                     'install.rdf are supported Mozilla products. At least one official Mozilla product must be supported for inclusion on addons.mozilla.org. See [appversions](https://addons.mozilla.org/firefox/pages/appversions/) for more information on supported target applications on AMO.' | install.rdf | | | |

## Regex Tests

*Note the rule names for these do not come from the code*

| Done? | MsgType | Rule name | Addon type | Description | File Type | Source ref | Old Code | New Code |
| ----- | ------- | --------- | ---------- | ----------- | --------- | ---------- | -------- | -------- |
| :x: | warning | invalid_sync_services_object_reuse |   | Sync services objects are not intended to be re-used |  | [testcases/regex.py](https://github.com/mozilla/amo-validator/blob/master/validator/testcases/regex.py) | | |
| :x: | warning | warn_mouse_events |   | Mouse events may cause performance issues |  |  | | |
| :x: | warning | dom_mutation_events_disallowed |  | DOM mutation event use prohibited |  | | | |
| :x: | warning | new_tab_override |  |  Possible attempt to override new tab page |  | | | |
| :x: | warning | unsafe_template_escape |  | Potentially unsafe template escape sequence | | | | |
| :x: | warning | js_protoype_extension_dissallowed |  | JS prototype extension not allowed  | | | | |
| :white_check_mark: | warning | mozindexdb_removed |  | mozIndexedDB has been removed |  | | | MOZINDEXEDDB |
| :white_check_mark: | warning | mozIndexedDB property not allowed |  | mozIndexedDB has been removed |  | N/A | N/A | MOZINDEXEDDB_PROPERTY |
| :x: | warning | composition_features_removed |  | nsICompositionStringSynthesizer, sendCompositionEvent and createCompositionStringSynthesizer were removed | | | | |
| :x: | warning | asyncfetch2_newchannel2_deprecated |  | asyncFetch2 and newChannel2 are now deprecated | | | | |
| :x: | warning | onproxyavailable_asyncresolve_changed |  | The onProxyAvailable and asyncResolve functions have changed |  | | | |
| :x: | warning | noSuchMethod_deprecated |  | The \_\_noSuchMethod__ property has been deprecated |  | | | |
| :x: | warning | sendAsBinary_removed |  | The function sendAsBinary() in XMLHttpRequest has been removed |  | | | |
| :x: | warning | theme_prefs_changed | | The preferences used to store theme selection have changed |  | | | |
| :x: | warning | old_keywords_api_deprecated | | The old keywords API is deprecated | | | | |
| :x: | warning | fuel_library_deprecated | | The FUEL library is now deprecated | | | | |
| :x: | warning | dictjsm_removed | | The Dict.jsm module has been removed | | | | |
| :x: | warning | sessionstore_state_write_removed | | The sessionstore-state-write notification has been removed. | | | | |
| :x: | warning | nsISSLErrorListener_removed | | The nsISSLErrorListener interface has been removed |  | | | |
| :x: | warning | widget_module_removed | | The widget module has been removed | | | | |
| :x: | warning | user_profile_data_reference | | Reference to critical user profile data | | | | |
| :x: | warning | em_action_requested | | Obsolete Extension Manager API | | | | |
| :x: | warning | unsafe_pref_branch_ref | | Potentially unsafe preference branch  referenced (x2) | | | | |
| :x: | warning | browsernewtaburl_pref_removed |  |  The browser.newtab.url preference has been removed | | | | |
| :x: | warning | password_stored_in_prefs | | Passwords should not be stored in preferences | | | | |

## Thunderbird Regex Tests

*Note the rule names for these do not come from the code*


| Done? | MsgType | Rule name | Addon type | Description | File Type | Source ref | Old Code | New Code |
| ----- | ------- | --------- | ---------- | ----------- | --------- | ---------- | -------- | -------- |
| :x: | warning | removed_labels_in_use |  | Removed labels in use (Repeated for multiple versions) | | | | |
