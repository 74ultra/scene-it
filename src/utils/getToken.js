export const getIdToken = username => {
    const tokenKey = `CognitoIdentityServiceProvider.1162a9vks52gb45g1uvotcfbv6.${username}.idToken`
    const localToken = localStorage.getItem(tokenKey)
    return localToken
}