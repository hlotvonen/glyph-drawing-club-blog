---
title: Moebius Ansi & Ascii Art editor with Custom font support!
date: 2020-02-27
cover: './src/assets/images/makeascii.png'
description: Create your own textmode graphics & unusual ASCII art
permalink: '/{{ title | slugify }}/'
tags:
    - Tools
    - Tutorial
    - ASCII art
    - XBIN art
    - Fonts
---

**UPDATE 06.12.2021: I've released a new version of Moebius XBIN! This guide is completely rewritten for it.**

## Introduction

To me the salt of ASCII art is in the act of creating it. The character set holds a wealth of mysteries revealing itself with each pressed key, full of delightful discoveries. When creating ASCII art it's impossible to plan ahead so it's better to let the process guide you and let the hands do the thinking. This prompted the question, what mysteries do other character sets other than CP437 or Topaz hold?

Digging into the archives of [16colo.rs](https://16colo.rs/tags/content/custom%20font) I found that only a few people have done ASCII art with custom fonts in the past. It's no wonder though. ASCII art was usually created in textmode, where the text is displayed using the default character set stored in the ROM (read-only memory) of the computer's graphics adapter. This default font was difficult if not impossible to change, thus most ASCII art is done with what is provided.

There were a few attempts at circumventing this. For example, in 1996 art group ACiD created the [XBIN](http://www.acid.org/images/0896/XBIN.TXT) file format which saved the ASCII art as screen dump data (ones and zeros) rather than as _text_.This format never really took off though, most likely because programs and systems lacked support for creating and displaying these new XBIN files. Nonetheless there are some interesting artwork made with modified fonts... but I feel like there is still so much to be discovered.

The XBIN format has basically been in slumber for ~25 years. Some artists have used it for making large ANSI art or tinkering with custom colors. While the de-facto modern GUI based ASCII art editor PabloDraw supports XBIN, it doesn't have the possibility to load or modify custom fonts. But fairly recently [Andy Herbert](https://github.com/andyherbert) published Moebius, an amazing new ANSI & ASCII editor made with modern day javascript. While the official version also doesn't have support for "non-standard" fonts, it is [open source](https://github.com/blocktronics/moebius), which meant that I could scratch the itch and add the custom font support myself (and a few other new features along with it)!

<figure class="u-image-full-width">
    {% image
        "./src/assets/images/Screenshot 2021-12-07 at 13.31.25.png",
        "crisp",
        "User interface of MoebiusXBIN, monochrome ASCII drawing of a spaceship." ,
        "(min-width: 30em) 50vw, 100vw",
        true
    %}
    <figcaption>Spaceship drawn using TES-SYMB5 custom font in MoebiusXBIN.</figcaption>
</figure>

## Download

To download, click the link below and choose the package suitable for your OS.

[Download the latest packages from Github](https://github.com/hlotvonen/moebius/releases/)

**Note**: Server functionalities are not supported yet!

If you have suggestions or find any bugs let me know! You can email me at hlotvonen@gmail.com or make an issue at the Github page.

## Features in MoebiusXBIN

Quick summary of features:

1. Change font from the **Font** menu.
2. Change palette from **Colors -> Load Lospec palette** or double click on color in the sidebar.
3. Use `Alt + Arrow` keys to navigate the character list. Press `F1` to `F12` to insert characters.
4. Press `Cmd or Control + Alt + 2` to view canvas at 200%.
5. Save the file as XBIN (.xb) to work on it later from **File -> Save As** and save as png from **File -> Export as PNG**

## How to use custom fonts

The main feature of MoebiusXBIN is using custom fonts. MoebiusXBIN includes a few special ASCII art fonts made specifically for this release, the complete list of VGA fonts compiled by VileR and all the "classic" default fonts. You can also use your own fonts by importing a font file or importing a font from a PNG or GIF image.

-   Use `Alt + Arrow` keys or click to navigate the character list. Press `F1` to `F12` to insert characters.
-   Custom ASCII art fonts can be found from **Font -> Change Font -> Custom**
-   A huge list of fonts to use can be found from **Font -> Viler's VGA textmode fonts**

    -   To use these I recommend downloading [the font pack that includes previews](https://github.com/viler-int10h/vga-text-mode-fonts/releases/download/2020-11-25/VGAfonts-20-11-25-with-previews.zip) to quickly see what the fonts look like.

-   Load custom fonts from **Font -> Load Custom Font.**

    -   To create your own custom font I recommend using VileR's amazing VGA font editor [Fontraption](https://int10h.org/blog/2019/05/fontraption-vga-text-mode-font-editor/). Watch a video tutorial for it [here](https://www.youtube.com/watch?v=aEGT7A5RVRU).
    -   Supported file formats are bitmap font files with extensions "F06", "F07", "F08", "F10", "F12", "F14", "F16", "F18", "F19", "F20", "F22", "F24", "F26", "F28", "F30" and "F32". The number indicates the fonts height.

-   Easiest way to use your own custom font is to load it from image. **Font -> Import font from image (GIF/PNG)**.

    -   The image needs **black and white** (no gray tones), be **128px in width** and **16 times the character height**. The character height can vary from 6px to 32px, but recommended sizes are 8px or 16px. For example, if your characters are 16px in height, the image would need to be 256px in height (16 x 16 = 256).
    -   Third row, first column needs to be empty, otherwise characters cells can be anything.

## How to use custom colors

Another big feature of MoebiusXBIN is the support for custom colors.

-   There's a variety of premade palettes from [Lospec](https://lospec.com/) you can choose from **Colors -> Load Lospec palette**

    -   To preview these palettes visit the [Lospec website](https://lospec.com/palette-list) and use the "Number of colors" slider to show only palettes with exactly 16 colors.

-   You can change the colors from the sidebar by **double clicking the colors**.

## Aknowledgements & Thanks

-   Special thanks to [Polyducks](http://polyducks.co.uk/) for creating and providing FROGBLOCKS font for this release! To support his efforts you can buy the FROGBLOCKS font from [itch.io](https://polyducks.itch.io/frogblock).
-   Special thanks to [GrymmJack](https://www.youtube.com/channel/UCrp_r9aomBi4mryxSxLq24Q) for testing & for providing GJSCI fonts for this release!
-   TOPAZ 437, TES-SYM5 and TES-GIGR fonts are created by Heikki Lotvonen. Read more about TOPAZ 437 [here](https://16colo.rs/pack/impure80/grx-topazcp437.xb).
-   Special thanks to [VileR](https://int10h.org/) for the huge work combining and providing the **VGA textmode fonts** (and for Fontraption)!
-   Special thanks to LMN for creating the MoebiusXBIN splash screen!
-   Special thanks to [jejacks0n](https://github.com/blocktronics/moebius/pull/198) for adding support for custom colors!
-   And of course, special thanks to Andy Herbert for creating Moebius and all the other contributors!

## Examples

<figure class="u-image-full-width">
    {% image
        "./src/assets/images/RD-CORE1.XB.png",
        "crisp",
        "Shattered logo of the text 'Core' filled with purple to light blue to pink gradient." ,
        "(min-width: 30em) 50vw, 100vw",
        true
    %}
    <figcaption>ANSI with modified font: The Core by Raider (Shade) https://16colo.rs/pack/shade5/RD-CORE1.XB</figcaption>
</figure>

<figure class="u-image-full-width">
    {% image
        "./src/assets/images/angelgirl2.png",
        "crisp",
        "Light blue logotype 'angelgirl' with small wings on the sides" ,
        "(min-width: 30em) 50vw, 100vw",
        true
    %}
    <figcaption>Drawn with TES-GIGR font</figcaption>
</figure>

<figure class="u-image-full-width">
    {% image
        "./src/assets/images/GDC.png",
        "crisp",
        "ASCII logo of Glyph Drawing Club" ,
        "(min-width: 30em) 50vw, 100vw",
        true
    %}
    <figcaption>
        Drawn with TES-GIGR font
    </figcaption>
</figure>

<figure class="u-image-full-width">
    {% image
        "./src/assets/images/moltres.png",
        "crisp",
        "Moltres pokemon spreading its wings and looking menacing." ,
        "(min-width: 30em) 50vw, 100vw",
        true
    %}
    <figcaption>Moltres drawn with 8x8px font CHUNKY by Batfeula (https://batfeula.itch.io/chunky) and custom colors</figcaption>
</figure>

<figure class="u-image-full-width">
    {% image
        "./src/assets/images/magmar.png",
        "crisp",
        "ASCII drawing of Magmar pokemon" ,
        "(min-width: 30em) 50vw, 100vw",
        true
    %}
    <figcaption>Magmar drawn with TES-SYMB5 font and custom colors</figcaption>
</figure>

<figure class="u-image-full-width">
    {% image
        "./src/assets/images/ponyta3.png",
        "crisp",
        "ASCII drawing of Ponyta pokemon" ,
        "(min-width: 30em) 50vw, 100vw",
        true
    %}
    <figcaption>Ponyta drawn with TES-SYMB5 font and custom colors</figcaption>
</figure>

<figure class="u-image-full-width">
    {% image
        "./src/assets/images/HOUSE_positive.png",
        "crisp",
        "Monochrome ASCII drawing of a house" ,
        "(min-width: 30em) 50vw, 100vw",
        true
    %}
    <figcaption>House drawn with TES-SYMB5 font</figcaption>
</figure>

<figure class="u-image-full-width">
    {% image
        "./src/assets/images/TEMPLE.png",
        "crisp",
        "ASCII drawing of a temple" ,
        "(min-width: 30em) 50vw, 100vw",
        true
    %}
    <figcaption>Temple at Lonar Lake drawn with TES-SYMB5 font</figcaption>
</figure>

<figure class="u-image-full-width">
    {% image
        "./src/assets/images/fox_whitebg.gif",
        "crisp",
        "ASCII art animation of a fox jumping into snow" ,
        "(min-width: 30em) 50vw, 100vw",
        true
    %}
    <figcaption>ASCII animation created by the students at KADK VisCom. Each frame is drawn by a different student using the TES-SYMB5 font</figcaption>
</figure>

<figure class="u-image-full-width">
    {% image
        "./src/assets/images/touchofgod_valkoinen_vaaka.png",
        "crisp",
        "ASCII drawing with a close-up of hands from the painting 'The Creation of Adam' with a computer monitor in the background with a crypto market graph and words 'Buy' and 'Sell'" ,
        "(min-width: 30em) 50vw, 100vw",
        true
    %}
    <figcaption>Drawn using the TOPAZ437 font</figcaption>
</figure>

<figure class="u-image-full-width">
    {% image
        "./src/assets/images/pankkiiri_valkoinen_nelio.png",
        "crisp",
        "ASCII drawing depicting a closeup of a man in a suit with their hand on their chest." ,
        "(min-width: 30em) 50vw, 100vw",
        true
    %}
    <figcaption>Drawn using the TOPAZ437 font</figcaption>
</figure>

## Endnote

For any requests or questions about MoebiusXBIN, don't hesitate to ask me! You can message me on [instagram](https://www.instagram.com/heikkiveikko/), discord at synkedam#5367 or email to hlotvonen@gmail.com. I hope to see some cool custom font ASCII!
