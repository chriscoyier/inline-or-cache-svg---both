# Icons! Cached!

Can we use the [inline-cache-both](https://www.filamentgroup.com/lab/inlining-cache.html) technique?

## Needs a server...

This works on MacOS:

```
php -S localhost:2222
```

Theoretically it works with [GitHub Pages](https://chriscoyier.github.io/inline-or-cache-svg---both/), but it didn't seem to publish when I tried it.

## HERE'S THE PROBLEM THO

We're yanking the inline `<svg>` out of the DOM and caching it (which is why it needs that `xmlns="http://www.w3.org/2000/svg"` bit). Then serving it as an `<img>` on the pages that will benefit from the cache. That was just to prove it works, which it does.

But ideally, the beneficiary pages don't use `<img>`, they get to use `<svg>` also somehow, because that's way nicer for styling and scripting. **Is there a way to yank code out of cache and inject onto page?** Or reference a cache URL with a `<use href="#">` situation?
