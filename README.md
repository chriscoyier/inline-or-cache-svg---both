# Icons! Cached!

I wrote that inlining your <code>&lt;svg></code> icons makes for <a href="https://css-tricks.com/pretty-good-svg-icon-system/">the best icon system</a>. Scott Jehl wrote that <a href="https://www.filamentgroup.com/lab/inlining-cache.html">just because you inline something doesn't mean you can't cache it</a>. Let's see if Scott's idea can extend to SVG icons.

## Needs a server...

This works on macOS:

```
php -S localhost:2222
```

Theoretically it works with [GitHub Pages](https://chriscoyier.github.io/inline-or-cache-svg---both/), but it didn't seem to publish when I tried it.

## Build

There is a wildly simple build step here:

```
node build/build.js
```

It's just so that the SVG icons can be included and not duplicated needlessly.
