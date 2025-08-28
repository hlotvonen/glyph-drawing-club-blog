---
title: 'Semi-Justified Text'
date: 2025-08-27
cover: './src/assets/images/soft-justify.png'
description: An unconventional method of mixing ragged and justified lines produces surprisingly readable paragraphs
permalink: '/{{ title | slugify }}/'
tags:
    - Blog
    - Typography
webcomponents: 
    - soft-justify
---

## An obscure text justification method

I thrifted a book [*Type Matters!*](https://ilovetypography.com/2012/05/02/type-matters-book-review/) by Jim Williams. It's not a [great book](https://tosche.net/blog/book-review-type-matters), but it had one interesting tidbit in it, describing an obscure text justification setting. It says:

> Range left, range right, centered or justified: there is also a fifth way of setting type within a given measure, called *cogent*. In the 1980s [...] an advertising agency called Cogent Elliott would send out type mark-ups requesting the type to be set as 'semi-justified', whereby the setting was range left but lines that were close to the measure were pulled out to the full width, to give a more defined edge to the right-hand side.

I had never heard of "cogent" or "semi-justified" text alignment, and searching for it online brings up almost no relevant result on. But I did find a [briarpress](https://www.briarpress.org/20536) discussion where the same method is called "half justification":

> I have a design book somewhere I believed mentioned a technique for justifying type that was called something like half justification. [...] The idea was that if the length of the text was within some predetermined distance of the maximum possible width the line would be justified. If it fell short of that it would remain ragged right.

<figure class="u-image-full-width">
    {% image
        "./src/assets/images/justification-briarpress.png",
        "",
        "",
        "(min-width: 30em) 50vw, 100vw",
        true
    %}
    <figcaption>Semi-justified and ragged comparison. Images from the briarpress discussion.</figcaption>
</figure>

I found this idea interesting, so I had to try it out. Here's an interactive demo:

<soft-justify 
    text="Justifying text usually means that all lines except (usually) the last are set to equal measure. Text justification is very common in books and other printed matter, and is regarded by many as an essential property of high quality typography. On the web, it's the opposite. Browsers employ a rather simple algorithm: put words on a line, leaving normal spaces between them, until the next word won't fit in the element's boundaries, and then distribute the remaining space evenly between the line's inter-word gaps. This works fairly well if the line width is long, but fails horribly if it's not, leaving huge gaps of space between words. Thus, the 101 of high quality typography on the web is this: don't justify text!"
    width="450"
    min-space="-25"
    max-space="25"
    show-controls="true"
    show-edge="false">
</soft-justify>

It's a bit jarring at first — probably because this style of justification is so uncommon — but it's surprisingly readable after getting used to it.

## How does it work?

*Type Matters* and the briarpress discussion describe the semi-justification as ragged, where lines that are almost to the full width are justified. But then the question is: what does it mean "almost"? How do we decide which lines should be justified?

After some prototypes, I found that a better approach is **justification with bounded word-spaces**. It achieves the same results. With moderate min and max word space values (e.g. -25% and 25%), most of the lines get justified while some lines get ragged. If the textbox is narrow, most lines fall back to being mostly ragged, which is great. If the textbox is wide, most lines remain justified, which is also great. It never produces *unacceptable* results.

### Justification with bounded word-spaces

The normal greedy algorithm puts words on a line, then leaves *normal spaces between them*, until the next word won't fit in the element's boundaries, and then distributes the remaining space evenly between the inter-word gaps of that line. If we leave it at that, the algorithm can produce really wide spaces in-between words. This is how it's usually done, and it's what we have on the web.

Instead what we can do is the following:
1. Determine what the *minimum allowed word space* should be. I found that 25% smaller normal space is usually acceptable. 
2. Add words to a line if there's enough room for *at least the minimum spacing between all words*. 
3. Determine what the *maximum allowed word space* should be (25% bigger than normal space still looks ok), and distribute the remaining space until the maximum spacing between all words is reached. 
4. If even the maximum spacing can't reach the target line width, *don't distribute the remaining space*; instead use normal spacing to make the line ragged.
5. Repeat for each line.

That's it. It's a really simple system. Here's a non-optimised implementation in JavaScript:

    class SoftJustify {
      // measureText should return the pixel width of a text string
      #measure
      constructor(measureText) {
        this.#measure = measureText;
      }

      justify(text, { maxWidth, minSpace, maxSpace, normalSpace }) {
        const words = text.trim().split(/\s+/);
        const lines = this.#breakLines(words, maxWidth, minSpace);

        return lines.map((words, i) => {
          const isLast = i === lines.length - 1;
          const canJustify = words.length > 1 && !isLast &&
            this.#totalWidth(words) + (words.length - 1) * maxSpace >= maxWidth;

          return {
            words,
            spacing: canJustify
              ? this.#calcSpacing(words, maxWidth, minSpace, maxSpace)
              : normalSpace
          };
        });
      }

      #breakLines(words, maxWidth, minSpace) {
        const lines = [];
        let line = [];

        for (const word of words) {
          if (line.length && !this.#fits(line, word, maxWidth, minSpace)) {
            lines.push(line);
            line = [];
          }
          line.push(word);
        }

        if (line.length) lines.push(line);
        return lines;
      }

      #fits(line, word, maxWidth, minSpace) {
        return this.#totalWidth(line) + this.#measure(word) + line.length * minSpace <= maxWidth;
      }

      #calcSpacing(words, maxWidth, minSpace, maxSpace) {
        const gaps = words.length - 1;
        if (!gaps) return minSpace;

        const spacing = (maxWidth - this.#totalWidth(words)) / gaps;
        return Math.min(Math.max(spacing, minSpace), maxSpace);
      }

      #totalWidth(words) {
        return words.reduce((sum, word) => sum + this.#measure(word), 0);
      }
    }

and here's a crude example use for canvas:

    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    ctx.font = '9px Arial';

    // Create the soft justifier
    const measureText = (text) => ctx.measureText(text).width;
    const justifier = new SoftJustify(measureText);

    const text = "Justifying text usually means that all lines except (usually) the last are set to equal measure. Text justification is very common in books and other printed matter, and is regarded by many as an essential property of high quality typography. On the web, it's the opposite.";

    const normalSpaceWidth = ctx.measureText(' ').width;
    const result = justifier.justify(text, {
        maxWidth: 150,
        minSpace: normalSpaceWidth * 0.75,
        maxSpace: normalSpaceWidth * 1.5,
        normalSpace: normalSpaceWidth
    });

    // Render each line
    let y = 9; // Starting Y position
    const lineHeight = 12;
    result.forEach(line => {
        let x = 0; // Starting X position
        line.words.forEach((word, i) => {
            ctx.fillText(word, x, y); // Draw the word
            x += ctx.measureText(word).width;
            // Add spacing (except after the last word)
            if (i < line.words.length - 1) {
                x += line.spacing;
            }
        });
        y += lineHeight;
    });

The algorithm could be further improved with hyphenation, and even further with bounded glyph scaling and letter spacing adjustments.

## Why not Knuth-Plass?

While a justification system based on the [Knuth–Plass line-breaking algorithm](https://en.wikipedia.org/wiki/Knuth%E2%80%93Plass_line-breaking_algorithm) is the holy grail for near-perfect justification (it's usually what professional typesetting programs use), it's also really complex and requires a lot of tricky optimisations to be fast and reliable. That, and the fact that Knuth-Plass requires knowing the contents of the text upfront to make its calculations, is the reason the web (for example) only implements a simple greedy algorithm for text justification. But anyone who has ever set type with `text-align:justify;` knows that the greedy justification fails horribly if the line width is short or if the text has long words. So the *one* rule for web typography has been to *not* justify text under any circumstances, but rather keep everything ragged. 

<div class="u-medium-width" style="font-size:16px;line-height:1.2;width:min(180px, 50%);text-align:justify; color:var(--color-7); border: 1px solid var(--color-2);resize: horizontal;overflow:hidden;">
    Justifying text usually means that all lines except (usually) the last are set to equal measure. Text justification is very common in books and other printed matter, and is regarded by many as an essential property of high quality typography. On the web, it's the opposite.
</div>

We can't have Knuth-Plass on the web — sad, but understandable. But `text-align:justify;` is nigh useless, so maybe this semi-justified system could offer a real alternative. It has essentially the same computational cost as regular greedy justification since it's still a greedy algorithm, just with bounds checking. Since we've only really had *one* option for text alignment since the birth of the web, `text-align: left;`, maybe this could some day provide another one? Imagine if you could just do something like this...

    p {
      text-align: justify;
      word-spacing: clamp(-25%, 0%, 25%);
    }


#### End note
If you found this idea interesting and want to discuss it, or if you know of any examples of this method used, please contact me at hlotvonen@gmail.com