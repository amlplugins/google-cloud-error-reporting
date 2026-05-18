/**
 * @amlplugins/google-cloud-error-reporting
 *
 * Thin namespaced re-export of the native @google-cloud/error-reporting SDK.
 *
 * Symmetry rule (.claude/rules/definitions/ageni.md): every @amlplugins/google-*
 * package shares this shape — a single root index re-exporting the wrapped
 * vendor SDK with zero domain modeling on top.
 *
 * Error Reporting.
 */

import * as _sdk from "@google-cloud/error-reporting";
export * from "@google-cloud/error-reporting";
export { _sdk as sdk };
export default _sdk;
