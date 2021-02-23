# @ddatabase/multi-key

Function that takes a dDatabase and returns a new one
that is signed by a new key pair but backed by the same data.

```
npm install @ddatabase/multi-key
```

Useful if you want to do one-off sharing of a dDatabase

## Usage

``` js
const multiKey = require('@ddatabase/multi-key')

// returns a new feed that is identical as the one passed
// but signed by a new key pair
const newFeed = multiKey(feed)

feed.append('hello')
newFeed.get(0, console.log) // returns 'hello'
```

## API

#### `newFeed = multiKey(feed, [keyPair], [options])`

Create a new dDatabase that is backed by the same data as another
one but signed by a new key pair.

You can replicate this new one to other people just like you would
any other dDatabase.

If you want to use a specific new key pair pass it in as the 2nd arguments.
Otherwise a random one is generated.

All options are passed to the dDatabase constructor.

## License

MIT
