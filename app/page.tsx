import HomePage from "./components/HomePage";
import { getTokens } from "next-firebase-auth-edge";
import { cookies } from "next/headers";
import { clientConfig, serverConfig } from "../config";

export default async function Home() {
  /*const tokens = await getTokens(cookies(), {
    apiKey: clientConfig.apiKey,
    cookieName: serverConfig.cookieName,
    cookieSignatureKeys: serverConfig.cookieSignatureKeys,
    serviceAccount: serverConfig.serviceAccount,
  })*/

  //const email = tokens ? tokens.decodedToken.email : null;
  const email = null;

  return <HomePage email={email} />;
}
