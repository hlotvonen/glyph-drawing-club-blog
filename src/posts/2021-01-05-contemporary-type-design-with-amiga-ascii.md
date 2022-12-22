---
title: Contemporary type design with Amiga Ascii
date: 2021-01-05
cover: './src/assets/images/topaz-cover.png'
description: Turn your Amiga ASCII art into vectors easily for edgy looking designs
permalink: '/{{ title | slugify }}/'
tags:
    - Tutorial
    - ASCII art
    - Fonts
    - Type Design
---

My favourite source of type design inspiration is to browse Amiga ASCII archives at [asciiarena](http://www.asciiarena.se/) and [16colo.rs](https://16colo.rs/). In those archives there is just an endless amount of really wild but mostly well made lettering and logos, and the strangest thing is that they are mostly made by teenagers in the 90's!

One of the ideas behind Glyph Drawing Club was to be able to emulate the style of Amiga ASCII specifically, but with "smooth" vector lines instead of pixelated bitmap fonts, and the "Tesserae" font supplied with Glyph Drawing Club is kind of answer to that. But there's still something in the raw interfaces of ascii art editors and in the extremely limited selection of shapes in Amiga ASCII that can't really be replicated.

I wanted to keep the type design process in the old school ascii art editors and only afterwards transform the logo into something more contemporary. Thus, I modified the original Amiga ASCII font Topaz (ttf version by <https://www.trueschool.se/>) into a "contemporary" version with straight interconnecting lines and ligatures.

Now I can do ASCII type in an ascii art editor, copy paste the ASCII into Illustrator, and then change the font into the new modified version of Topaz and get a filled, more contemporary look.

If you want to do the same or test the font, follow the small technical tutorial below!

<figure class="u-image-full-width">
    {% image
        "./src/assets/images/eccoArtboard 1.png",
        "",
        "Logo of the word Ecco in ASCII art style and smooth vectorised format.",
        "(min-width: 30em) 50vw, 100vw",
        [300, 600]
    %}
    <figcaption>Amiga ASCII into smooth vectorised format.</figcaption>
</figure>

1. Download & install [Moebius ASCII art editor](https://blocktronics.github.io/moebius/).
2. In Moebius change the font to Topaz 2+ from `View -> Change Font -> Amiga -> Amiga Topaz 2+` and draw some type with ASCII!

    **Helpful tips to draw ASCII:**

    - configure the top key mappings to include at least `/ \ |` and any other symbol that is hard to type fast. If you use Mac, make sure your `F1`, `F2` keys work as function keys (System Preferences -> Keyboard).
    - You can select an area by dragging your mouse across the drawing. You can move this selection by pressing `m` and "stamp" it with `s`. You can also press `t` to make the selection "transparent" and `u` to paste it under.

<figure class="u-image-full-width">
    {% image
        "./src/assets/images/Screenshot 2021-01-05 at 20.16.57.png",
        "",
        "Editor view of Moebius XBIN.",
        "(min-width: 30em) 50vw, 100vw",
        [300, 600]
    %}
    <figcaption>Some designs in Moebius.</figcaption>
</figure>

1. After you are done with the ASCII version, select it and copy it to your clipboard (`cmd/ctrl+c`).
2. Open Illustrator, create a new text box and paste the ASCII into it.
3. Download & install TesseraeTopaz8x16 font from [here](https://drive.google.com/file/d/1RUj1nNT8RXK3c31VioMmV4yX0U8OXcIL/view?usp=sharing).
4. Change the font into TesseraeTopaz8x16. Make sure in your paragraph styles the line height is the same as font size and there's no kerning values or other offsets / shifts.
5. Select the text box, and go to `Type -> Create Outlines`. If you get weird subpixel shifts when outlining, just scale the font super big, then outline, then scale back to desired size.
6. Select everything & merge the paths from Pathfinder. If you want a "filled" version, and not outlined version, just ungroup the vectors, select the outer path and delete it. Now you should have a smooth vectorized version of your ASCII drawing!

**Note:**
I've added several ligatures and made some "text art" modifications to the TesseraeTopaz8x16 font. For example letters `h, y, k, t, Y, X, v, V, i, l, z, Z` are heavily modified to allow continuous shapes. Ligatures such as `._` and `_.` makes underscore 150% times it's width so it lines up with the `|` symbol below it, et cetera. Test how the font behaves by switching between the original Topaz to TesseraeTopaz! Check some of the font's features below:

<figure class="u-image-full-width">
    {% image
        "./src/assets/images/topazArtboard 1.png",
        "",
        "Overview of Tesserae Topaz font ligatures" ,
        "(min-width: 30em) 50vw, 100vw",
        [300, 600]
    %}
    <figcaption>Black is original Amiga ASCII font, below that in orange is the \"TesseraeTopaz\" font with a wide variety of helpful ligatures.</figcaption>
</figure>
