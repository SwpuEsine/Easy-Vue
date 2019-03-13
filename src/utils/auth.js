const TokenKey="Token";
/**
 * 获取token
 */

export function getToken() {
  return localStorage.getItem(TokenKey)
}

/**
 * 设置token
 * @param token
 */
export function setToken(token) {
  return localStorage.setItem(TokenKey, token)
}
/**
 * 移除token
 */
export function removeToken() {
  return localStorage.removeItem(TokenKey)
}
