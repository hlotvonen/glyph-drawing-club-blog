---
title: 'Proposal: Better CSS Text justification'
date: 2025-08-27
cover: './src/assets/images/soft-justify.png'
description: A proposal to introduce a mechanism in CSS to allow clamping the minimum and maximum word spacing of justified text
permalink: '/{{ title | slugify }}/'
tags:
    - Blog
    - CSS
    - Typography
webcomponents: 
    - soft-justify
    - tinybox-csshtml
---

# Justifying text on the web

## TLDR;
I propose to introduce a pragmatic and progressive enhancement for better text justification on the web: introduce a mechanism in CSS to allow clamping the minimum and maximum word spacing of justified text. When a line cannot be justified within the specified range, it falls back to ragged alignment with normal spacing. The result is a mix of justified and ragged lines, which might be a strange look at first, but is surprisingly readable, and never produces lines with exessively loose word spaces like the current `text-align:justify`.

## The problem 

Justifying text usually means that all lines except (usually) the last are set to equal measure. Text justification is very common in books and other printed matter, and is regarded by many as an essential property of high quality typography. 

On the web, it's the opposite. The basic rule for web typography is *not* to justify text.

The reason is that browsers employ a simple "greedy" algorithm for text justification: put words on a line, leave normal spaces between them, until the next word won't fit in the element's boundaries, and then distribute the remaining space evenly between the inter-word gaps of that line. This can work if the line width is sufficiently long...

<div class="u-medium-width" style="font-size:16px;line-height:1.2;text-align:justify; color:var(--color-7); border: 1px solid var(--color-2);resize: horizontal;overflow:hidden;">
    Justifying text usually means that all lines except (usually) the last are set to equal measure. Text justification is very common in books and other printed matter, and is regarded by many as an essential property of high quality typography. On the web, it's the opposite. The basic rule for web typography is not to justify text. The reason is that browsers employ a simple "greedy" algorithm for text justification: put words on a line, leave normal spaces between them, until the next word won't fit in the element's boundaries, and then distribute the remaining space evenly between the inter-word gaps of that line.
</div>

...but fails horribly if the line width is short or if the text has long words, resulting in excessively loose word spacing, distracting rivers, and inconsistent line rhythm. 

<div class="u-medium-width" style="font-size:16px;line-height:1.2;width:min(180px, 50%);text-align:justify; color:var(--color-7); border: 1px solid var(--color-2);resize: horizontal;overflow:hidden;">
    Justifying text usually means that all lines except (usually) the last are set to equal measure. Text justification is very common in books and other printed matter, and is regarded by many as an essential property of high quality typography. On the web, it's the opposite.
</div>

This makes reading the text difficult and tiresome. 

### Why can't browsers have a good text justification? 
High-quality text justification systems, like those in professional typesetting programs, are usually based on some variation of the [Knuth–Plass line-breaking algorithm](https://en.wikipedia.org/wiki/Knuth%E2%80%93Plass_line-breaking_algorithm). 

The Knuth-Plass algo works by introducing a few more tricks to condense or expand lines (glyph scaling, letter spacing, hyphenation). Then it tries to figure out "the least bad" settings to apply to each line of the paragraph based on some pre-determined aesthetic qualities that would result in a good looking justified paragraph. It works really well, but can be *computationally* expensive (worst case O(n<sup>2</sup>)), and requires knowing the contents of the text upfront. 

This drawback works for design software which are meant for creating static layouts, but web browsers often deal with dynamic content and need to reflow text constantly, which is, AFAIK, why web standards are reluctant to introduce the Knuth-Plass-style justification. 

Thus, on the web it's just better to use `text-align:start;` and not even attempt justification.

But: **what if there was a way to justify text that was fast but didn't suck?**

## Clamp word spaces for justified text

My proposal is simple: introduce a mechanism in CSS to allow clamping the minimum and maximum word spacing of justified text. Each line is laid out greedily. Extra space is distributed between words. If spacing falls within the minimum and maximum allowed spacing, justification is applied. If spacing would exceed the maximum allowed value, the line falls back to ragged alignment using the normal space width. Super simple.

Here's an interactive demo (done with SVG):

<soft-justify 
    text="Justifying text usually means that all lines except (usually) the last are set to equal measure. Text justification is very common in books and other printed matter, and is regarded by many as an essential property of high quality typography. On the web, it's the opposite. Browsers employ a rather simple algorithm: put words on a line, leaving normal spaces between them, until the next word won't fit in the element's boundaries, and then distribute the remaining space evenly between the line's inter-word gaps. This works fairly well if the line width is long, but fails horribly if it's not, leaving huge gaps of space between words. Thus, the 101 of high quality typography on the web is this: don't justify text!"
    width="450"
    min-space="-25"
    max-space="25"
    show-controls="true"
    show-edge="true">
</soft-justify>

See the demo on Github at [hlotvonen/soft-justify](https://github.com/hlotvonen/soft-justify).

With moderate min and max word space values (e.g. -25% and 25%), the text is mostly justified, but some lines are ragged. If the textbox is narrow, most lines fall back to being mostly ragged. If the textbox is wide, most lines remain justified. The important distinction here is that it never looks *bad*, it's always **readable**. It won't achieve the quality of Knuth-Plass, but it also won't make text unreadable, like the current `text-align: justify;`.

### Proposed syntax

I suggest that the already existing `word-spacing` property could be enhanced to control the min and max values with the already existing `clamp()`, `min()`, and `max()` functions:

    p {
        text-align: justify;
        word-spacing: clamp(-25%, 0%, 25%);
    }

The `clamp()`, `min()`, and `max()` functions already work for `word-spacing`, but as far as I can tell, *doesn't actually interpolate anything* for any of the text alignments because the line breaking algorithm kicks in before any interpolation can happen.

<tinybox-csshtml class="u-medium-width" style="height:100dvh;max-height:500px;">
  <template>
    <style>
        p.spacing-1 { word-spacing: 0%; }
        p.spacing-2 { word-spacing: 100%; }
        p.spacing-3 { word-spacing: -100%; }
        p.spacing-4 { word-spacing: clamp(-25%, 0%, 25%); }
        p.spacing-5 { word-spacing: clamp(1px, 10vw, 20px); }
    </style>
      <p class="spacing-1">The <code>word-spacing</code> CSS property sets the length of space between words and between tags.</p>
      <p class="spacing-2">The <code>word-spacing</code> CSS property sets the length of space between words and between tags.</p>
      <p class="spacing-3">The <code>word-spacing</code> CSS property sets the length of space between words and between tags.</p>
      <p class="spacing-4">The <code>word-spacing</code> CSS property sets the length of space between words and between tags.</p>
      <p class="spacing-5">The <code>word-spacing</code> CSS property sets the length of space between words and between tags.</p>
    </template>
</tinybox-csshtml>

Therefore, redefining the function of `clamp()`, `min()`, and `max()` for text alignment could be used.

An alternative solution would be to add two new properties: `min-word-spacing` and `max-word-spacing`. 

### Examples

I did not come up with this method. I first found a description of it in the book [*Type Matters!*](https://ilovetypography.com/2012/05/02/type-matters-book-review/) by Jim Williams. It says:

> Range left, range right, centered or justified: there is also a fifth way of setting type within a given measure, called *cogent*. In the 1980s [...] an advertising agency called Cogent Elliott would send out type mark-ups requesting the type to be set as 'semi-justified', whereby the setting was range left but lines that were close to the measure were pulled out to the full width, to give a more defined edge to the right-hand side.

"Cogent" or "semi-justified" text alignment bring up very few relevant result on google, but I did find another [briarpress](https://www.briarpress.org/20536) discussion where the same method is called "half justification": 

> The idea was that if the length of the text was within some predetermined distance of the maximum possible width the line would be justified. If it fell short of that it would remain ragged right.

I also remember seeing this used by some modernist typographer, possibly dutch or german, but can't remember exactly who or where. A friend suggested it might also be called "soft rag" or "dutch rag", but I haven't been able to confirm.

If you know of any examples, let me know at hlotvonen@gmail.com. 

## Conclusion

This proposal offers a pragmatic and progressive enhancement for a better text justification on the web: it's fast and predictable, and the settings are easily adjusted to users' and authors' needs. By allowing `clamp()`, `min()`, and `max()` to set bounds on word spacing during justification, we could finally make justified text viable on the web without sacrificing performance.

I would like to hear your thoughts on the feasibility and potential refinements of this approach. Note that I'm not involved in web standards, so I don't know exactly how web standards normally get proposed — but I think this idea is worth having a discussion about. Get in touch, at hlotvonen@gmail.com.
