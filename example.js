const ram = require('random-access-memory')
const ddatabase = require('ddatabase')
const feed = ddatabase(ram)
const multiKey = require('./')

feed.append(['a', 'b', 'c'], function () {
  const otherFeed = multiKey(feed)

  otherFeed.on('append', function () {
    console.log(otherFeed)
  })

  otherFeed.ready(function () {
    console.log(otherFeed)
    feed.append('d')
  })

  const clone = ddatabase(ram, otherFeed.key)

  const stream = otherFeed.replicate(true, { live: true })
  stream.pipe(clone.replicate(false, { live: true })).pipe(stream)

  clone.get(3, console.log)
})
