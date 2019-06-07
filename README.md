# Node.js Templating Engines Comparison

Choosing a templating language is tough sometimes. I thought I'd look into solving the problem by looking into a few and trying to render the same page in them. Effectively, a benchmark.

## Running the test

Using the CLI, run `npm run start` and you should see a table of engines and their performance.

## B...but this isn't enough of a test...

Not yet, I'm working on it. Wanna test another different engine, a language feature, etc? Submit a PR!

## Engines

Currently tests written for:

 * Handlebars
 * Liquid

## The Future

 * Add more templating languages: https://github.com/expressjs/express/wiki
 * Add more complexity to the benchmarks
 * Make the tests bigger HTML pages
 * Maybe test some of the language features individually (like iterations, ifs, etc)
 * Set it up to run the same test many times and take an average for more fair numbers

## Results

At the moment, Liquid is beating Handlebars slightly in rendering speed.
