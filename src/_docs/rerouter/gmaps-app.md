---
title: The Google Maps App
date: 2023-08-30
tag: Deep Dive
---

## How Does the Google Maps Apps Affect Rerouter?
Rerouter works by observing the URL of the site you are currently visiting and reacting to it. If the URL matches a structure Rerouter knows to be Google Maps, it is taken apart and reconstructed as an Apple Maps URL. This new URL subsequently replaces the URL in your browser. The entire process takes just milliseconds.

This system allows Rerouter to work from any website—not just Google's search results pages. However, it's not without caveats. Mainly, Rerouter must actually visit the URL it wants to Reroute. The page doesn't necessarily need to load, but Safari should at least attempt to navigate to it.

Some websites employ a system Apple calls [Universal Links](), which directly associates a website with an app. The Universal Links system intercepts web traffic and redirects it to the correct app. With Universal Links, redirection happens at the system level, not Safari. That means Rerouter never sees the URL in the first place.