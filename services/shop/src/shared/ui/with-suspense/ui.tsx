import React, { Suspense } from "react"

const WithSuspense: React.FC<{children: React.ReactNode}> = ({children}) => {
  return (
    <Suspense
      fallback={'Loading...'}
    >
      {children}
    </Suspense>
  )
}

export const withSuspense = (Component: React.FC) => {
  return () => (
    <WithSuspense>
      <Component />
    </WithSuspense>
  )
}