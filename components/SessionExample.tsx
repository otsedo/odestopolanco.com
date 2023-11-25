"use client"
import { useSession } from "next-auth/react"

export default function ClientExample() {
  const { data: session, status } = useSession()
  return (
    <>
      {status === "loading" ? (
        <div>Loading...</div>
      ) : (
        status === "unauthenticated" ? (
          <p>Debe iniciar sesión</p>
        ) : (
          <code>{JSON.stringify(session, null, 4)}</code>
        )
      )}
    </>
  )
}
