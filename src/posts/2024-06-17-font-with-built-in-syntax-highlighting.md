---
title: Font with Built-In Syntax Highlighting
date: 2024-01-01
description: "An experiment in javascript-free syntax highlighting, made possible by opentype contextual alternates and COLR table"
permalink: '/{{ title | slugify }}/'
tags:
    - Blog
    - Type Design
    - Fonts
webcomponent: 'tinybox'
---
## Syntax Highlighting in Hand-Coded Websites

I have been trying to identify practical reasons why hand-coding websites with basic HTML and CSS is so hard (*by hand-coding, I mean not relying on frameworks or generators*). 

Let's say, I want to make a blog. What are the **actual** things that prevent me from making—and maintaining—it by hand? What would it take to clear these roadblocks?

For a hand-coded programming oriented blog, one of these roadblocks would be **syntax highlighting**. If I want to display snippets of code, I want to make the code easy to read and understand by highlighting it with different colours. To do that, I would typically need to use a complex syntax highlighter library, like [Prism](https://prismjs.com/) or [highlight.js](https://highlightjs.org/). 

Syntax highlighter scripts parse code into tokens using regular expressions to identify language-specific patterns, rewrites the code as HTML, assigning CSS classes to each token type, and then injects the HTML back into the page. But, the resulting HTML is a messy, hard-to-read `<span>` soup. 

If I want to write code by hand, I don't want any external scripts to mess with the DOM. And I don't like the complexity and bloat it adds. I want to keep things as simple as possible.

This lead me to think: **could it be possible to bake syntax highlighting directly into a font, skipping JavaScript altogether?** 

OpenType supports multi-colored glyphs with the COLR table, but would some kind of pattern matching be possible with contextual alternates?

    <div class="spoilers">
      <strong>Yes, it's possible!</strong>
      <small>...with some caveats =)</small>
    </div>

The colors in the HTML snippet above **comes from within the font itself**. 

There is no JavaScript, no parsing. It's just plain text.

To use it yourself, download the font: [MonaspaceKrypton-SyntaxHighlighter-Regular.woff2](/assets/fonts/MonaspaceKrypton-SyntaxHighlighter-Regular.woff2)

And include the following bits of CSS:

    @font-face {
      font-family: 'Monaspace';
      src: 
        url('/MonaspaceKrypton-SyntaxHighlighter-Regular.woff2') 
        format('woff2')
      ;
    }
    code {
      font-family: "Monaspace", monospace;
      font-feature-settings: "colr", "calt";
    }

And that's it!

## What are the Pros and Cons of this method?

There are, of course, many limitations to this method. It is not a direct replacement to the more robust syntax highligting libraries, but works well enough for simple needs.

However, this method opens up some really exciting possibilities...

### Pros

1. Install is super easy: Import font, declare styles. Done. 
2. No JavaScript needed: works even if JS is disabled! No need to import a million external scripts. No need to initialize the syntax highlighter.
3. No external CSS themes needed: no need to import a billion language specific CSS themes.
4. No parsing: it's as fast as plain text (because it is plain text)!
5. No span soup: snippets of code can be put into good old `<pre>` and `<code>`, with no extra classes or `<span>`s.
6. Clean HTML: Inspect the source code and you'll see the exact same code as what's on the page.
7. Works in `<textarea>` and `<input>`! Syntax highlighting inside `<textarea>` has been [previously impossible](https://css-tricks.com/creating-an-editable-textarea-that-supports-syntax-highlighted-code/), because textareas and inputs can only contain plain text.
8. Works everywhere that supports OpenType features. Making a PDF containing code snippets in Adobe InDesign? No need for any complicated scripts of crazy GREP styles.
9. No maintenance: no packages to update and worry about.
10. Simple embeddable code editors: Did I mention it works in `<textarea>`? How about a tiny HTML, CSS & JS sandbox, with native undo and redo, in a single, self-contained, [~200 line web component](/assets/webcomponents/tinybox.js)?

<tiny-box class="u-screen-size">
 <tiny-slot slot="html">
<div class="container">
  <p>
    tiny HTML & CSS sandbox =)
  </p>
</div>
      </tiny-slot>
      <tiny-slot slot="css">
.container {
  height: 100%;
  width: 100%;
  display: grid;
  place-content: center;
  background:
    linear-gradient(
      lch(40 50 290),
      lch(60 50 60) 50%,
      lch(60 55 30) 70%,
      lch(20 20 290) 70.2%,
      lch(40 30 60)
    )
  ;
}
p {
  font-size: clamp(16px, 2vw, 32px);
  color: lch(10 40 290);
}
  </tiny-slot>
  <tiny-slot slot="js">
document.querySelector('p').style.background = 'yellow';
  </tiny-slot>
</tiny-box>

### Cons

What are the limitations then?

1. Making any modifications to the syntax highligher, like changing the color palette, means modifying the font. This is inaccessible for most people. I use Glyphs to make and modify fonts, but it only works on Mac, and costs ~300 euros. There might be some free and open source type design software that would work for this, but I don't know them.
2. The font *is* the syntax highlighter, which means that you can't change the font to your favourite programming font. If you want a different font to have this built-in syntax highlighter, you have to add it to the font yourself.
3. It only works where OpenType is supported. Fortunately, all major browsers (even Safari!) supports `font-feature-settings: "colr", "calt";`. However, you can't use it in PowerPoint for example because it doesn't support OpenType (AFAIK).
4. Finding patterns in text with OpenType contextual alternates is **very** basic. The resulting syntax highlighting is simple, and not meant to be used in actual code editors. For example, you can't tell it to ignore syntax highlighting within `<p>` tags, so words that are JS keywords will be always highlighted, like so: `<p>if I throw this Object through the window, catch it, for else it’ll continue to Infinity.</p>`. It also can't highlight comment blocks, etc.
5. So far, I've only added basic support for HTML, CSS and JavaScript in the demo font. More could be added, but again... it requires modifying the font. I made this font for my own use, and I have no plans on adding more.
6. My color palette is quite wild and it would probably be very straining in longer use, but I've made it purposefully colorful for the purpose of teaching. This is not a limitation of the technique, but of my implementation =)

## How does it actually work?

Here's roughly how it works. There are two features in OpenType that make this possible.

First is the OpenType COLR table. It makes multi-colored fonts possible. It's quite gimmicky and rare to see one in actual use, but it makes this concept work. 

The COLR setup for syntax highlighting is fairly easy. I followed [this handy guide on creating a Micro­soft color font (CPAL/‌COLR)](https://glyphsapp.com/learn/creating-a-microsoft-color-font). I made a palette with 6 colors: these are the highlight colors.

To assign colors, I duplicated letters `A`&thinsp;`–`&thinsp;`Z`, numbers `0`&thinsp;`–`&thinsp;`9` and the characters `.` `#` `*` `-` and `_` four times, as these would be highlighted using different colours based on the glyph substitution rules. Each duplicated character is then suffixed with .alt1, .alt2, .alt3 or .alt4, and then assigned a color. All .alt1's are `this` lime-yellow, for example.

<figure class="u-image-small">
    {% image
        "./src/assets/images/glyphs-syntax-highlight.png",
        "",
        "",
        "(min-width: 30em) 50vw, 100vw",
        [300, 600]
    %}
    <figcaption>Figure 1. Forme for the Jean Sibelius print at the <a href="https://merkkiin.fi">Media Museum and Archives Merkki</a>.</figcaption>
</figure>

The two other colors are used for operators and other symbols used in code, like `&`, `|` `$` `+` `−` `=` `~` `[]` `()` `{}` `/` `;` `:` `"` and `'` and are always in one color.

The second required feature is OpenType contextual alternates. Contextual alternates makes characters "aware" of their adjacent characters. The most clear example would be fonts that emulate continuous hand writing, where letters connect to each other. But *how* a letter connects depends on which letter it connects to. There is a [great article covering possible uses here](https://ilovetypography.com/2011/04/01/engaging-contextuality/). 

The core feature of contextual alternates is substituting glyphs. Here is the simplified code for finding the JavaScript keyword `if` and substituting the letters i and f with their colored variant:

    sub i' f by i.alt2;
    sub i.alt2 f' by f.alt2;

In English:
1. "When i is followed by f, don’t set the default glyph for i, but substitute it with an alternate (i.alt2)".
2. "When i.alt2 is followed by f, don’t set the default glyph for f, but substitute it with an alternate (f.alt2)".

As you can see, it's not comparable to the power of regular expression. I wish we could even do something like this: 

    sub i' f' by i.alt2 f.alt2;

...but no.

The substitution rules can get very messy. Here's the substitution rule for the keyword `localStorage`:

    lookup localStorageAttrCalt useExtension {
      ignore sub @AllLetters l' o c a l S t o r a g e;
      ignore sub l' o c a l S t o r a g e @AllLetters;
      sub l' o c a l S t o r a g e by l.alt;
      sub l.alt o' c a l S t o r a g e by o.alt;
      sub l.alt o.alt c' a l S t o r a g e by c.alt;
      sub l.alt o.alt c.alt a' l S t o r a g e by a.alt;
      sub l.alt o.alt c.alt a.alt l' S t o r a g e by l.alt;
      sub l.alt o.alt c.alt a.alt l.alt S' t o r a g e by S.alt;
      sub l.alt o.alt c.alt a.alt l.alt S.alt t' o r a g e by t.alt;
      sub l.alt o.alt c.alt a.alt l.alt S.alt t.alt o' r a g e by o.alt;
      sub l.alt o.alt c.alt a.alt l.alt S.alt t.alt o.alt r' a g e by r.alt;
      sub l.alt o.alt c.alt a.alt l.alt S.alt t.alt o.alt r.alt a' g e by a.alt;
      sub l.alt o.alt c.alt a.alt l.alt S.alt t.alt o.alt r.alt a.alt g' e by g.alt;
      sub l.alt o.alt c.alt a.alt l.alt S.alt t.alt o.alt r.alt a.alt g.alt e'  by e.alt;
    } localStorageAttrCalt;

First two lines tell it to ignore strings like `BlocalStorage` or `localStorages`. The rest substitutes letters one by one.

In the end, identifying JavaScript syntax is fairly straightforward. You just repeat the above for each keyword.

But for HTML and CSS... I had to get a bit more creative. There are simply too many keywords for both HTML and CSS combined. Making a separate rule for each keyword would inflate the file size.

Instead, I came up with this monstrosity. Here's how I find CSS value functions:

    lookup CssParamCalt useExtension {
      sub @CssParam' @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam parenleft by @CssParamAlt4;
      sub @CssParam' @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam parenleft by @CssParamAlt4;
      sub @CssParam' @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam parenleft by @CssParamAlt4;
      sub @CssParam' @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam parenleft by @CssParamAlt4;
      sub @CssParam' @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam parenleft by @CssParamAlt4;
      sub @CssParam' @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam parenleft by @CssParamAlt4;
      sub @CssParam' @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam parenleft by @CssParamAlt4;
      sub @CssParam' @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam parenleft by @CssParamAlt4;
      sub @CssParam' @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam parenleft by @CssParamAlt4;
      sub @CssParam' @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam parenleft by @CssParamAlt4;
      sub @CssParam' @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam parenleft by @CssParamAlt4;
      sub @CssParam' @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam parenleft by @CssParamAlt4;
      sub @CssParam' @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam parenleft by @CssParamAlt4;
      sub @CssParam' @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam parenleft by @CssParamAlt4;
      sub @CssParam' @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam parenleft by @CssParamAlt4;
      sub @CssParam' @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam parenleft by @CssParamAlt4;
      sub @CssParam' @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam parenleft by @CssParamAlt4;
      sub @CssParam' @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam parenleft by @CssParamAlt4;
      sub @CssParam' @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam parenleft by @CssParamAlt4;
      sub @CssParam' @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam parenleft by @CssParamAlt4;
      sub @CssParam' @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam parenleft by @CssParamAlt4;
      sub @CssParam' @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam parenleft by @CssParamAlt4;
      sub @CssParam' @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam parenleft by @CssParamAlt4;
      sub @CssParam' @CssParam @CssParam @CssParam @CssParam @CssParam @CssParam parenleft by @CssParamAlt4;
      sub @CssParam' @CssParam @CssParam @CssParam @CssParam @CssParam parenleft by @CssParamAlt4;
      sub @CssParam' @CssParam @CssParam @CssParam @CssParam parenleft by @CssParamAlt4;
      sub @CssParam' @CssParam @CssParam @CssParam parenleft by @CssParamAlt4;
      sub @CssParam' @CssParam @CssParam parenleft by @CssParamAlt4;
      sub @CssParam' @CssParam parenleft by @CssParamAlt4;
      sub @CssParam' parenleft by @CssParamAlt4;
    } CssParamCalt;

@CssParam is a custom OpenType glyph class I've set up. It includes the characters `A`&thinsp;`–`&thinsp;`Z`, `a`&thinsp;`–`&thinsp;`z`, and `-`, which are all the possible characters used in CSS value function names. Because the longest possible CSS value function name is `repeating-linear-gradient()`, with 25 letters, the first line of the lookup starts with @CssParam repeated 25 times, followed by parenleft (`(`). This lookup will match any word up to 25 letters long that's immediately followed by an opening parenthesis. When a match occurs, it substitutes the matched text with its alternate color form (@CssParamAlt4). 

This lookup works for both CSS and JavaScript. It will colorize standard CSS functions like `rgb()` as well as custom JavaScript functions like `myFunction()`. The result is a semi-flexible syntax highlighter that doesn't require complex parsing. I've repeated the same principle for finding HTML tags and attributes, and for CSS selectors and parameters.

As for the font itself, I didn't feel like designing a font from scratch, so I used the well made open source [Monaspace](https://github.com/githubnext/monaspace) font. Monaspace's source files are provided in its repository, so modifying the font was easy with [Glyphs](https://glyphsapp.com/). The font could have been anything though, I just chose Monaspace Krypton because it looks funky.

The full process is a little bit too convoluted to go into fully detailed step-by-step, but if you're a type designer who wants to do this with their own font, don't hesitate to contact. Doing this all manually would take ages, so I used a python script for generating all the contextual alternate rules, and Glyphs.app python scripting api for adding the color palette to each alternate glyph. I'm also not an OpenType expert, so I'm sure the substitution logic could be refined. I'm also open to sharing the modified source file to anyone interested, but don't want to share it publically quite yet because I haven't properly modified the licence information. If you have any ideas for use cases or feedback, let me know. You can reach me at `hlotvonen@gmail.com`.
