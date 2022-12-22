---
title: How to clean up your glyph drawing in Adobe Illustrator
date: 2020-02-10
cover: './src/assets/images/cleanup-cover.png'
description: Guide for making print-ready files from Glyph Drawing Club files
permalink: '/{{ title | slugify }}/'
tags:
    - Tutorial
    - Glyph Drawing Club
---

Vector files exported as SVG from Glyph Drawing Club should always be merged (joining the vector paths together to make a seamless path) for smaller filesize and easier handling.

Merging is fast and easy. Follow these steps:

1.  Export your glyph drawing as .svg

<figure class="u-image-full-width">
    {% image
        "./src/assets/images/cleanup1.png",
        "",
        "Export SVG button highlighted in the Save tab of Glyph Drawing Club" ,
        "(min-width: 30em) 50vw, 100vw",
        false
    %}
    <figcaption>Export as SVG</figcaption>
</figure>

2.  Open the exported .svg file in Adobe Illustrator
3.  Select the Selection Tool (`V`) and press `Cmd + a` to select everything
4.  Open Pathfinder window (Window -> Pathfinder)
5.  Open Pathfinder options which you find by clicking the hamburger menu icon

<figure class="u-image-full-width">
    {% image
        "./src/assets/images/cleanup3.png",
        "",
        "Highlighted pathfinder options in adobe illustrator" ,
        "(min-width: 30em) 50vw, 100vw",
        false
    %}
    <figcaption>Open pathfinder options</figcaption>
</figure>

6.  Make sure "Remove Redundant Points" is checked, click OK

<figure class="u-image-full-width">
    {% image
        "./src/assets/images/cleanup4.png",
        "",
        "Highlighted precision numbers in pathfinder options" ,
        "(min-width: 30em) 50vw, 100vw",
        false
    %}
    <figcaption>The precision number should be left at default</figcaption>
</figure>

7.  Click Merge **TWICE**

<figure class="u-image-full-width">
    {% image
        "./src/assets/images/cleanup5.png",
        "",
        "Highlighted merge button in pathfinder",
        "(min-width: 30em) 50vw, 100vw",
        false
    %}
    <figcaption>Click the merge button twice!</figcaption>
</figure>

## (optional) Transparent background

1.  Deselect everything by clicking off canvas, and then select the Direct Selection Tool (`A`)
2.  Click on any white area, and go to Select -> Same -> Fill Color

<figure class="u-image-full-width">
    {% image
        "./src/assets/images/cleanup4-1.png",
        "",
        "Highlighted merge button in pathfinder",
        "(min-width: 30em) 50vw, 100vw",
        false
    %}
    <figcaption>This selects all shapes that have white fill color</figcaption>
</figure>

3.  Hit `delete` or `backspace`

<figure class="u-image-full-width">
    {% image
        "./src/assets/images/cleanup7.png",
        "",
        "She's a happy clean dog now",
        "(min-width: 30em) 50vw, 100vw",
        false
    %}
    <figcaption>She's a happy clean dog now</figcaption>
</figure>
