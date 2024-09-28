/**
 * This component exports the app for the studio as embedded in the application
 */

import Head from "next/head";
import { NextStudio, metadata } from "next-sanity/studio";
import config from "../../../sanity.config";

export default function StudioPage() {
  return (
    <>
      <Head>
        {Object.entries(metadata).map(([key, value]) => (
          <meta key={key} name={key} content={value} />
        ))}
      </Head>
      <NextStudio config={config} />
    </>
  );
}
