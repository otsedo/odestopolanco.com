import SessionExample from "@/components/SessionExample";
import { SessionProvider } from "next-auth/react";

export default function Home() {
  return (
    <main>
      <SessionProvider>
        <SessionExample />
      </SessionProvider>
    </main>
  )
}
