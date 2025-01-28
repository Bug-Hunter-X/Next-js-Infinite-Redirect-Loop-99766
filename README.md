# Next.js Infinite Redirect Loop Bug

This repository demonstrates a common but easily overlooked bug in Next.js applications: creating an infinite redirect loop using the `useRouter` hook.  The bug occurs when you attempt to use `router.push(router.asPath)` without proper conditions. This will continuously redirect to the same route. This example will help developers understand and avoid this situation.

## Bug

The `bug.js` file contains a component that triggers an infinite redirect loop upon button click.  The `handleClick` function pushes the current route using `router.asPath`, leading to continuous redirections.