# vue-plugin-scroll-into-view
<!-- badge -->
[![LICENSE](https://img.shields.io/github/license/victornpb/vue-plugin-scroll-into-view?style=flat-square)](LICENSE)
[![Node](https://img.shields.io/node/v/vue-plugin-scroll-into-view.svg?style=flat-square)](package.json)
[![CodeFactor](https://www.codefactor.io/repository/github/victornpb/vue-plugin-scroll-into-view/badge?style=flat-square)](https://www.codefactor.io/repository/github/victornpb/vue-plugin-scroll-into-view)

[![Coverage Status](https://img.shields.io/coveralls/victornpb/vue-plugin-scroll-into-view.svg?style=flat-square)](https://coveralls.io/github/victornpb/vue-plugin-scroll-into-view)
![Snyk Vulnerabilities for GitHub Repo](https://img.shields.io/snyk/vulnerabilities/github/victornpb/vue-plugin-scroll-into-view?style=flat-square)

[![Version](https://img.shields.io/npm/v/vue-plugin-scroll-into-view.svg?style=flat-square)](https://www.npmjs.com/package/vue-plugin-scroll-into-view)
[![Downloads](https://img.shields.io/npm/dt/vue-plugin-scroll-into-view.svg?style=flat-square)](https://www.npmjs.com/package/vue-plugin-scroll-into-view)
[![](https://img.shields.io/bundlephobia/minzip/vue-plugin-scroll-into-view?style=flat-square)](https://www.npmjs.com/package/vue-plugin-scroll-into-view)
[![](https://img.shields.io/tokei/lines/github/victornpb/vue-plugin-scroll-into-view?style=flat-square)](https://www.npmjs.com/package/vue-plugin-scroll-into-view)

[![GitHub Stars](https://img.shields.io/github/stars/victornpb/vue-plugin-scroll-into-view?style=flat-square)](https://github.com/victornpb/vue-plugin-scroll-into-view/stargazers)
[![GitHub Forks](https://img.shields.io/github/forks/victornpb/vue-plugin-scroll-into-view?style=flat-square)](https://github.com/victornpb/vue-plugin-scroll-into-view/network/members)
[![GitHub Discussions](https://img.shields.io/github/discussions/victornpb/vue-plugin-scroll-into-view?style=flat-square)](https://github.com/victornpb/vue-plugin-scroll-into-view/discussions)
[![GitHub closed pull requests](https://img.shields.io/github/issues-pr-closed/victornpb/vue-plugin-scroll-into-view?style=flat-square&color=green)](https://github.com/victornpb/vue-plugin-scroll-into-view/pulls?q=is%3Apr+is%3Aclosed)
[![GitHub closed issues](https://img.shields.io/github/issues-closed/victornpb/vue-plugin-scroll-into-view?style=flat-square&color=green)](https://github.com/victornpb/vue-plugin-scroll-into-view/issues?q=is%3Aissue+is%3Aclosed)
<!-- endbadge -->


**vue-scroll-into-view** is a simple Vue.js plugin that provides a convenient way to scroll an element into view with just a single line of code. Whether you have a long page with many sections, or you need to navigate to a specific part of the page, this plugin makes it easy to do so.

# Features

Scrolls an element into the visible area of the browser window
Supports scrolling to an element by `$refs`, `selector`, `VNode`, or `HTMLElement`
Allows for customization of scroll options, such as animation and alignment
Easy to install and use in your Vue.js 2 or 3 project



# Usage Examples
Inside your code you can do something like this:

## Basic usage
```html
<template>
  <div>
    <h1>Hello World</h1>

    <table ref="table">
      <!-- long content -->
    </table>

    <button @click="nextPage"> Next </button>

  </div>
</template>
<script>
export default {
  methods: {
    nextPage() {

      // await requestNextPage();
      
      // scroll to top of the table
      this.$scrollIntoView(this.$refs.table); // refs or VNodes
      
      this.$scrollIntoView('div > table'); // CSS Selectors
    },
  }
}
</script>
```


# Installation

## [NPM](https://npmjs.com/package/vue-plugin-scroll-into-view)
```sh
npm install vue-plugin-scroll-into-view
```
## [Yarn](https://github.com/yarnpkg/yarn)
```sh
yarn add --dev vue-plugin-scroll-into-view
```

# Adding to your project

#### index.js
```js
import Vue from 'vue';
import VueScrollIntoView from 'vue-plugin-scroll-into-view';

Vue.use(VueScrollIntoView);
```

## Options

this.$scrollIntoView(ref, options);

| Option                     | Type    | Description                                                                      | Default value |
|----------------------------|---------|----------------------------------------------------------------------------------|---------------|
| behavior                   | String  | Defines the transition animation. One of "auto" or "smooth".                     | "auto"        |
| block                      | String  | Defines vertical alignment. One of "start", "center", "end", or "nearest".       | "start"       |
| inline                     | String  | Defines horizontal alignment. One of "start", "center", "end", or "nearest".     | "nearest"     |
| scrollMode                 | String  | Defines the scrolling mode. One of "always", "if-needed", or "never".            | "always"      |
| skipOverflowHiddenElements | Boolean | Whether to skip scrolling the ancestor elements with overflow: hidden.           | false         |
| allowHorizontalScroll      | Boolean | Whether to allow horizontal scrolling if the element is wider than the viewport. | false         |
| force                      | Boolean | Whether to always scroll the element, even if it's already in view.              | false         |

### Options example

This will scroll the element with the ID my-section into view with default scroll options. You can also pass in custom scroll options if desired:

```js
this.$scrollIntoView('#my-section', { behavior: 'smooth', block: 'center' });
```

## License

The code is available under the [MIT](LICENSE) license.

## Contributing

We are open to contributions, see [CONTRIBUTING.md](CONTRIBUTING.md) for more info.

You need at least Node 18 to build the project
