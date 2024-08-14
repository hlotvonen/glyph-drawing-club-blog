---
title: Font with Built-In Syntax Highlighting
date: 2024-01-01
description: "An experiment in javascript-free syntax highlighting, made possible by opentype contextual alternates and COLR table"
cover: './src/assets/images/cover-syntax-highlighter.png'
permalink: '/{{ title | slugify }}/'
tags:
    - Blog
    - Type Design
    - Fonts
webcomponent: 'tinybox'
---
## Syntax Highlighting in Hand-Coded Websites

### The problem 

I have been trying to identify practical reasons why hand-coding websites with HTML and CSS is so hard (*by hand-coding, I mean not relying on frameworks, generators or 3rd party scripts that modify the DOM*).

Let's say, I want to make a blog. What are the **actual** things that prevent me from making—and maintaining—it by hand? What would it take to clear these roadblocks?

There are many, of course, but for a hand-coded programming oriented blog one of these roadblocks is **syntax highlighting**. 

When I display snippets of code, I want to make the code easy to read and understand by highlighting it with colors. To do that, I would normally need to use a complex syntax highlighter library, like [Prism](https://prismjs.com/) or [highlight.js](https://highlightjs.org/). These scripts work by scanning and chopping up the code into small language-specific patterns, then wrapping each part in tags with special styling that creates the highlighted effect, and then injecting the resulting HTML back into the page.

But, I want to write code by hand. I don't want any external scripts to inject things I didn't write myself. Syntax highlighters also add to the overall complexity and bloat of each page, which I'm trying to avoid. I want to keep things as simple as possible.

### Leveraging OpenType features to build a simple syntax highlighter inside the font

This lead me to think: **could it be possible to build syntax highlighting directly into a font**, skipping JavaScript altogether? Could I somehow leverage OpenType features, by creating colored glyphs with the COLR table, and identifying and substituting code syntax with contextual alternates?

    <div class="spoilers">
      <strong>Yes, it's possible!</strong>
      <small>...to some extent =)</small>
    </div>

The colors in the HTML snippet above **comes from within the font itself**, the code is **plain text**, and requires **no JavaScript**.

To achieve that, I modified an open source font Monaspace Krypton to include colored versions of each character, and then used OpenType contextual alternates to essentially find & replace specific strings of text based on HTML, CSS and JS syntax. The result is a simple syntax highlighter, **built-in** to the font itself.

If you want to try it yourself, download the font: [MonaspaceKrypton-SyntaxHighlighter-Regular.woff2](/assets/fonts/MonaspaceKrypton-SyntaxHighlighter-Regular.woff2)

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

This method opens up some interesting possibilities...

### Pros

1. Install is easy: Import the font and enable OpenType COLR (color) and CALT (contextual alternates) features.
2. Works without JavaScript.
3. Works without CSS themes.
4. It's as fast as plain text, because it is plain text.
5. Snippets of code can be put into `<pre>` and `<code>`, with no extra classes or `<span>`s.
6. Clean HTML source code.
7. Works everywhere that supports OpenType features, like InDesign.
8. Doesn't require maintenance or updating.
9. Works in `<textarea>` and `<input>`! Syntax highlighting inside `<textarea>` has been [previously impossible](https://css-tricks.com/creating-an-editable-textarea-that-supports-syntax-highlighted-code/), because textareas and inputs can only contain plain text. This is where the interesting possibilities lie. As a demo, I made this tiny HTML, CSS & JS sandbox, with native undo and redo, in a single, [~200 line web component](/assets/webcomponents/tinybox.js).

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

There are, of course, many limitations to this method. It is not a direct replacement to the more robust syntax highligting libraries, but works well enough for simple needs.

1. Making any modifications to the syntax highligher, like changing the color palette, adding more language supports or changing the look of the font, requires modifying the font file. This is inaccessible for most people. I used Glyphs to modify this font, but it only works on Mac, and costs ~300 euros.
2. It only works where OpenType is supported. Fortunately, all major browsers support `font-feature-settings: "colr", "calt";`. However, eg. PowerPoint doesn't support OpenType (as far as I know).
3. Finding patterns in text with OpenType contextual alternates is basic, and is no match for scripts that use regular expressions. For example, words within `<p>` tags that are JS keywords will be always highlighted: `<p>if I throw this Object through the window, catch it, for else it’ll continue to Infinity & break</p>`. It can't highlight comment blocks, or strings between quotes, etc.

## How does it actually work?

Here's roughly how it works. There are two features in OpenType that make this possible: OpenType COLR table and contextual alternates.

### OpenType COLR table

OpenType COLR table makes multi-colored fonts possible. [There is a good guide on creating a color font using Glyphs](https://glyphsapp.com/learn/creating-a-microsoft-color-font). 

I made a palette with 6 colors. I duplicated letters `A`&thinsp;`–`&thinsp;`Z`, numbers `0`&thinsp;`–`&thinsp;`9` and the characters `.` `#` `*` `-` and `_` four times. Each duplicated character is then suffixed with .alt1, .alt2, .alt3 or .alt4, and then assigned a color from the palette. For example, all .alt1 glyphs are `this` lime-yellow.

<figure class="u-image-small">
    {% image
        "./src/assets/images/glyphs-syntax-highlight.png",
        "",
        "",
        "(min-width: 30em) 50vw, 100vw",
        [300, 600]
    %}
    <figcaption>View from Glyps app. Each alternate character has a different color.</figcaption>
</figure>

The two other colors I used for symbols `&`, `|` `$` `+` `−` `=` `~` `[]` `()` `{}` `/` `;` `:` `"` and `'`, and are always in one color.

### OpenType contextual alternates

The second required feature is OpenType contextual alternates. [There is an indepth guide to advanced contextual alternates for Glyphs](https://glyphsapp.com/learn/features-part-3-advanced-contextual-alternates).

Contextual alternates makes characters "aware" of their adjacent characters. An example would be fonts that emulate continuous hand writing, where *how* a letter connects depends on which letter it connects to. There is a [great article covering possible uses here](https://ilovetypography.com/2011/04/01/engaging-contextuality/).

The core feature of contextual alternates is substituting glyphs. Here is the simplified code for finding the JavaScript keyword `if` and substituting the letters i and f with their colored variant:

    sub i' f by i.alt2;
    sub i.alt2 f' by f.alt2;

In English:
1. When i is followed by f, substitute the default i with an alternate (i.alt2).
2. When i.alt2 is followed by f, substitute the default f with an alternate (f.alt2).
3. As a result, every "if" in text gets substituted with `if`.

The substitution rules can get very long. Here's the substitution rule for the keyword `localStorage`:

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

First two lines tell it to ignore strings like `XlocalStorage` or `localStorages`, but not if there's a period like `localStorage.setItem()`. The rest substitutes letters `l o c a l S t o r a g e` with alternates, one by one.

Identifying basic JavaScript keywords is fairly straightforward. The logic is the same for each keyword.

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

@CssParam is a custom OpenType glyph class I've set up. It includes the characters `A`&thinsp;`–`&thinsp;`Z`, `a`&thinsp;`–`&thinsp;`z`, and `-`, which are all the possible characters used in CSS value function names. Because the longest possible CSS value function name is `repeating-linear-gradient()`, with 25 letters, the first line of the lookup starts with @CssParam repeated 25 times, followed by parenleft (`(`). This lookup will match any word up to 25 letters long, if it's immediately followed by an opening parenthesis. When a match occurs, it substitutes the matched text with its alternate color form (@CssParamAlt4). 

This lookup works for both CSS and JavaScript. It will colorize standard CSS functions like `rgb()` as well as custom JavaScript functions like `myFunction()`. The result is a semi-flexible syntax highlighter that doesn't require complex parsing. I've repeated the same principle for finding HTML tags and attributes, and for CSS selectors and parameters.

### End note

The full process is a little bit too convoluted to go into step-by-step, but if you're a type designer who wants to do this with their own font, don't hesitate to contact me. I'm also not an OpenType expert, so I'm sure the substitution logics could be improved upon. I'm open to sharing the modified source file to anyone interested. If you have any ideas, suggestions or feedback, let me know. You can reach me at `hlotvonen@gmail.com`.
