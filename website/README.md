# Website

This website is built using [Docusaurus 2](https://v2.docusaurus.io/), a modern static website generator.

## Installation

```console
yarn install
```

## Local Development

```console
yarn start
```

This command starts a local development server and open up a browser window. Most changes are reflected live without having to restart the server.

## Build

```console
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

```console
GIT_USER=<Your GitHub username> USE_SSH=true yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

## Add a new component's doc

1. Create a new `mdx` file (or folder with a file inside, if you want to create more than one file for your component's documentation) inside `docs/YourCategory`.
2. Start your file with this:

```markdown
---
id: yourComponent
title: YourComponent
---

## Your title (H2)

Your doc.
```

- `id` will be used for url
- `title` will be used inside `h1` title and inside sidebar

3. You can re-order your doc inside sidebar by adding `sidebar_position: [number]` at the top of your mdx file:

```markdown
---
id: yourComponent
title: YourComponent
sidebar_position: 1
---

4. You can re-order your folder inside sidebar by creating a file named `_category_.json` with this content:

```json
{
    "position": 1
}
```

## Write your doc

You can write content using [GitHub-flavored Markdown syntax](https://github.github.com/gfm/).

### Emphasis

Emphasis, aka italics, with _asterisks_ or _underscores_.

Strong emphasis, aka bold, with **asterisks** or **underscores**.

Combined emphasis with **asterisks and _underscores_**.

Strikethrough uses two tildes. ~~Scratch this.~~

---

### Lists

1. First ordered list item
1. Another item
    - Unordered sub-list.
1. Actual numbers don't matter, just that it's a number
    1. Ordered sub-list
1. And another item.

-   Unordered list can use asterisks

*   Or minuses

-   Or pluses

---

### Links

[I'm an inline-style link](https://www.google.com/)

[I'm an inline-style link with title](https://www.google.com/ "Google's Homepage")

[I'm a reference-style link][arbitrary case-insensitive reference text]

[You can use numbers for reference-style link definitions][1]

Or leave it empty and use the [link text itself].

URLs and URLs in angle brackets will automatically get turned into links. http://www.example.com/ or <http://www.example.com/> and sometimes example.com (but not on GitHub, for example).

Some text to show that the reference links can follow later.

[arbitrary case-insensitive reference text]: https://www.mozilla.org/
[1]: http://slashdot.org/
[link text itself]: http://www.reddit.com/

---

### Images

Here's our logo (hover to see the title text):

Inline-style: ![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png 'Logo Title Text 1')

Reference-style: ![alt text][logo]

[logo]: https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png 'Logo Title Text 2'

Images from any folder can be used by providing path to file. Path should be relative to the original markdown file or absolute to the `/static` folder.

![img](/img/e-vert.svg)

---

### Code

```javascript
var s = 'JavaScript syntax highlighting';
alert(s);
```

```python
s = "Python syntax highlighting"
print(s)
```

```
No language indicated, so no syntax highlighting.
But let's throw in a <b>tag</b>.
```

```js {2}
function highlightMe() {
    console.log('This line can be highlighted!');
}
```

---

### Tables

Colons can be used to align columns.

| Tables        |      Are      |   Cool |
| ------------- | :-----------: | -----: |
| col 3 is      | right-aligned | \$1600 |
| col 2 is      |   centered    |   \$12 |
| zebra stripes |   are neat    |    \$1 |

There must be at least 3 dashes separating each header cell. The outer pipes (|) are optional, and you don't need to make the raw Markdown line up prettily. You can also use inline Markdown.

| Markdown | Less      | Pretty     |
| -------- | --------- | ---------- |
| _Still_  | `renders` | **nicely** |
| 1        | 2         | 3          |

---

### Blockquotes

> Blockquotes are very handy in email to emulate reply text. This line is part of the same quote.

Quote break.

> This is a very long line that will still be quoted properly when it wraps. Oh boy let's keep writing to make sure this is long enough to actually wrap for everyone. Oh, you can _put_ **Markdown** into a blockquote.

---

### Inline HTML

<dl>
  <dt>Definition list</dt>
  <dd>Is something people use sometimes.</dd>


  <dt>Markdown in HTML</dt>
  <dd>Does *not* work **very** well. Use HTML <em>tags</em>.</dd>
</dl>


---

### Line Breaks

Here's a line for us to start with.

This line is separated from the one above by two newlines, so it will be a _separate paragraph_.

This line is also a separate paragraph, but... This line is only separated by a single newline, so it's a separate line in the _same paragraph_.

---

### Admonitions

:::note

This is a note

:::

:::tip

This is a tip

:::

:::important

This is important

:::

:::caution

This is a caution

:::

:::warning

This is a warning

:::

## Interactive doc

You can write JSX and use React components within your Markdown thanks to [MDX](https://mdxjs.com/).

The `.mdx` extension is not required, but will enable better support from tooling (IDE, Prettier...).

```jsx
export const Highlight = ({ children, color }) => (
    <span
        style={{
            backgroundColor: color,
            borderRadius: '2px',
            color: '#fff',
            padding: '0.2rem',
        }}
        onClick={() => alert('Highlight pressed!')}
    >
        {children}
    </span>
);

<>
    <Highlight color="#25c2a0">Docusaurus green</Highlight> and
    <Highlight color="#1877F2">Facebook blue</Highlight> are my favorite colors.
</>;
```
