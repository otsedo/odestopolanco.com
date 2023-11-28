const API_USER_BY_EMAIL_END_POINT: string =
  process.env.API_USER_BY_EMAIL_END_POINT || "";
const AUTHENTICATION_SCOPE: string = process.env.AUTHENTICATION_SCOPE || "";
const AUTH_SERVER_URL: string = process.env.AUTHENTICATION_URL || "";
const AUTHENTICATION_GRANT_TYPE: string =
  process.env.AUTHENTICATION_GRANT_TYPE || "";

/**
 * Get information about the user
 * @param email email of the user
 * @param jwt jwt of the session
 * @returns response from the API
 */
export async function getUserData(email: String, jwt: string) {
  try {
    const response = await fetch(`${API_USER_BY_EMAIL_END_POINT}${email}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("API Error:", error);
    throw new Error("Failed to fetch the user data.");
  }
}

/**
 * Get a new JWT from se authorization server
 * @param credentials client and secret
 * @returns a json object with the JWT
 */
export async function getJwt(credentials: string) {
  try {
    const response = await fetch(AUTH_SERVER_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Basic ${credentials}`,
      },
      body: new URLSearchParams({
        grant_type: AUTHENTICATION_GRANT_TYPE,
        scope: AUTHENTICATION_SCOPE,
      }),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("API Error:", error);
    throw new Error("Failed to fetch the JWT.");
  }
}
