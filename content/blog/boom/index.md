---
title: Serverless with now
date: "2019-04-29T22:12:03.284Z"
image: https://res.cloudinary.com/dgdniqfi9/image/upload/v1556535368/blog/boom.png
description: This is a custom description for SEO and Open Graph purposes, rather than the default generated excerpt. Simply add a description field to the frontmatter.
---


Ever since I stumbled across next.js, I’ve been somewhat of a Zeit fan-boy.

For those who don’t know next.js is a frame work built on top of React. It makes doing things that are normally relatively hard, of at least fiddly, super simple. For example: a pages folder handles routing - each file maps to a url; and server-side rendering is included out of the box.

Zeit’s entire philosophy centres on making complicated processes very simple. This was definitely the case with next, and is also true for their flagship product: [Now cloud hosting](https://zeit.co/).

Now allows you to deploy, to an automatically generated (and unique) url, using a single command:

```bash
$ now
```

With now 1.0 that was literally it. Zeit's software would then Dockerise your project and deploy it to the cloud.

## Now goes serverless

However, with [now 2.0](https://zeit.co/) Zeit made the move to go fully serverless; creating an architecture build on top of AWS's lambda. It's now required to have a simple configuration file, which is slightly more work - but ultimately a far superior product.

The configuration is fairly straight forward:

```javascript
// now.json
{
    //highlight-next-line
    "version": 2
}
```

First, specify the version. (2 refers to the newest serverless version of now, this is required to build serverless projects).

```javascript
// now.json
{
    "version": 2,
    //highlight-start
    "builds" :[
        { "src": "package.json", "use": "@now/next" }
    ]
    //highlight-end
}
```

Second, specify the build: Zeit provides a number a builders for different projects. The one above is for building a server rendered next.js app (slightly confusing this is serverless, but it basically means that the site is rendered in the cloud rather than in the browser).

There are lots of different builders available, from python to golang.

Another awesome option is @now/static-build. This allows you to build react apps (and presumably many other things - although I haven't tried it) into statically served sites. This is great for performance, particularly when serving projects built with create-react-app (have you ever tried loading a non-cached create-react-app hosted on heroku? 😦).

##Building APIs

Above are a couple of simple examples. However, building apis is where things get really interesting.

Traditionally, if you were to build a node.js api, you would: install express, set up a server and define a series of functions to handle different endpoints and request methods.

```javascript
const app = require('express')();

app.get('/hi', (req, res) => {
    res.status(200).send('hi!');
});

app.get('/hello', (req, res) => {
    res.status(200).send('hello!');
});

app.listen(3000);
```

When deployed this app would run on a single server and be running all the time.

With serverless a very different approach is taken. Each endpoint is simply a single function. When a request hits that endpoint the code for that specific function is fired up, it serves its purpose and then stops running.

This has a number of consequences:
* First, there is no set up what so ever - the developer simply writes their logic for each endpoint and does not have to worry about the infrastructure AT ALL.
* Second, the app can scale infinitely with no configuration, on the developers part (each request maps to a function on a 1:1 basis, so each time a new request comes in a new instance of the function is fired up)
* Third, cost is drastically reduced - code is only running when it needs to.

So, this all sounds great, but how does it work in practice?

###Building a node.js API with now

Building a serverless api with node and now is, unsurprisingly, rather straightforward.

To achieve the same result as the above express based api, we simply need to do the following:

Create a few folders:

```bash
api/
|--- hi/
|-------index.js
|--- hello/
|-------index.js
```

Export a simple function in each index.js to handle a request:

```javascript
// api/hi/index.js
module.exports = (req, res) => {
    res.end('hi');
}
```

```javascript
// api/hello/index.js
module.exports = (req, res) => {
    res.end('hello');
}
```