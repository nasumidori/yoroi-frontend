/**
 * retrieves URI parameters following the web+cardano protocol
 * TODO:
 * - improve and test code
 * - we might potentially support other similar protocols
 *
 * @param uri
 * @returns {Object}
 */
export const getURIParameters = (uri) => {
  let params = {};
  if (!uri) uri = decodeURIComponent(window.location.href);
  // TODO: check all possible address formats
  const addressRegex = new RegExp('cardano:([A-Za-z0-9]+)\?');
  const addressMatch = addressRegex.exec(uri);
  if (addressMatch && addressMatch[1]) {
    params.address = addressMatch[1];
  }
  // consider use of URLSearchParams
  const amountRegex = new RegExp('amount=([0-9]+\.?[0-9]*)');
  const amountMatch = amountRegex.exec(uri);
  if (amountMatch && amountMatch[1]) {
    params.amount = amountMatch[1];
  }
  return params;
};
