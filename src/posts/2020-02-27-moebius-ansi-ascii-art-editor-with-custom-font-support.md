---
title: MoebiusXBIN ASCII & text-mode Art editor with Custom font support!
date: 2025-07-30
cover: './src/assets/images/makeascii.png'
description: Create your own textmode graphics & unusual ASCII art
permalink: '/{{ title | slugify }}/'
tags:
    - Tools
    - Tutorial
    - ASCII art
---

::: wrap note

UPDATE Summer 2025: I've released a [new version](https://github.com/hlotvonen/moebiusXBIN) of Moebius XBIN! This guide is completely rewritten for it.

:::

## MoebiusXBIN
MoebiusXBIN is an ASCII & text-mode art editor for MacOS, Linux and Windows, with support for custom fonts and colors.

<figure class="u-image-medium">
    {% image
        "./src/assets/images/xbin/moebiusXBIN_screenshot.png",
        "crisp",
        "",
        "(min-width: 30em) 50vw, 100vw",
        true
    %}
    <figcaption></figcaption>
</figure>

## Download

To download, click the link below and choose the package suitable for your OS.

[Download the latest packages from Github](https://github.com/hlotvonen/moebiusXBIN/releases/)

If you have suggestions or find any bugs let me know! You can email me at hlotvonen@gmail.com or make an issue at the Github page.

## Introduction

Traditionally ASCII art^[To purists "ASCII art" refers to art made with the 128 ASCII characters, but it has become a catch-all term for any text-based computer art, and that's how I use it.] is made in *plain text*, and displayed in text-mode using character sets stored in the ROM of computer graphics adapters. This has carried on to modern text-mode art editors, which are designed to produce files compatible with real retro hardware, even if they're rarely viewed with them.

The editor for making PC-ASCII, ANSI art^[While ANSI codes are not unique to IBM PC, "ANSI art" usually refers to this specific style popular on bulletin board systems (BBS's) in the 80s and 90s.], and [Amiga ASCII art](/amiga-ascii-art/) is nowadays [PabloDraw](https://github.com/cwensley/pablodraw), and more recently [Moebius](https://github.com/blocktronics/moebius). Those editors come with a few standard IBM PC and Amiga fonts, but which font is used to *view* them is wholly dependent on the viewer's system. There is no way to specify which font should be used to view the artwork (other than maybe writing something like "please view with font X" at the top of the artwork).  

<figure class="u-image-full-width">
    {% image
        "./src/assets/images/0x7f/amigavspc.png",
        "crisp",
        "",
        "(min-width: 30em) 50vw, 100vw",
        true
    %}
    <figcaption></figcaption>
</figure>

But as someone with no strong nostalgic relationship to retro computers, the magic of ASCII art is not necessarily in the aesthetic produced by these two fonts, but in the act of creating it: to me ASCII art is about trying to uncover the latent visual potentials of a small set of letterforms, by weaving them into imagery idiosyncratic to their textu(r)al properties. 

The latent potential of both [Amiga ASCII art](https://www.asciiarena.se/) and [PC ASCII & ANSI art]((https://16colo.rs/)) art is pretty well explored over the past 30–40 years, which made me think: *what if you could change the font?* What kind of possibilities would other character sets unlock? What is possible with ASCII art if you could change the look of the characters?

These same question were also asked back in the heydays of ASCII art, and in 1996 the art group ACiD created the [XBIN](http://www.acid.org/images/0896/XBIN.TXT) (eXtended BINary) file format to overcome the limits of plain text ASCII and ANSI files. Instead of saving the ASCII art files as text, XBIN saves them as a raw image of the video memory, *and* also includes the font and color palette data. With XBIN, artists can make text-mode graphics with customized fonts and color palettes.

XBIN was released "ready to take the Art scene by storm", but it never gained any widespread adoption or support. However, both PabloDraw and Moebius *do* support (to some extent) viewing and saving XBIN files. The problem? You can't change the font!

But Moebius, made by Andy Herbert in 2019, is [open source](https://github.com/blocktronics/moebius). So, in 2020 I forked it into **MoebiusXBIN** with the intention of adding a full support for the XBIN format and the ability to change the font. That was in 2020, and at the time of writing (2025), the editor has received multiple additional features, and has been used to explore the potentials of custom fonts by [many](https://16colo.rs/tags/content/xbin) [artists](https://16colo.rs/tags/content/custom%20font). 

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

## Features in MoebiusXBIN

Quick summary of features:

1. **Custom fonts**. Choose and favorite from almost 2400 different fonts using the dedicated Font browser. Import and export fonts as PNG files. 
2. **Custom colors**. Choose from around 200 hand-made color palettes made by the [Lospec](https://lospec.com/) community. Use the dedicated Palette browser to choose and favorite them.
3. **Multi-lingual ASCII art**. Support for hundreds of encodings to match your input source and chosen font. Support for right-to-left and top-to-bottom writing directions. Basic Arabic text shaper for the CP864 encoding.
4. **Beginner-friendly tutorial**. The step-by-step MoebiusXBIN tutorial will teach you the workflow, shortcuts and features of the editor.
    <details>
        <summary>
        ▶ (Click to open) View the tutorial as an image
        </summary>
        <figure class="u-image-full-width">
            {% image
                "./src/assets/images/xbin/moebiusXBIN_tutorial.png",
                "",
                "",
                "(min-width: 30em) 50vw, 100vw",
                true
            %}
            <figcaption></figcaption>
        </figure>
    </details>
5. ...and so much more! Check the full list on the [Github page](https://github.com/hlotvonen/moebiusXBIN)

### How to use custom fonts

The main feature of MoebiusXBIN is using custom fonts. MoebiusXBIN comes with all the classic fonts, but also includes a few special text-mode art fonts, the complete list of VGA fonts compiled by VileR and hundreds of fonts found from various Amiga discs.

However, the easiest way to use or make your own font is finding a font you like using the Font browser (*Font -> Font browser*), exporting it as a PNG (*Font -> Export Font as PNG*), modifying it in a pixel art editor, and then importing it again (*Font -> Import Font from Image (GIF/PNG)*).

I can also recommend making custom fonts with VileR's amazing VGA font editor [Fontraption](https://int10h.org/blog/2019/05/fontraption-vga-text-mode-font-editor/). Watch a video tutorial for it on [Youtube](https://www.youtube.com/watch?v=aEGT7A5RVRU).

## Examples

<figure class="u-image-medium">
    {% image
        "./src/assets/images/xbin/xz-dvinestylers3.xb.png",
        "crisp",
        "" ,
        "(min-width: 30em) 50vw, 100vw",
        true
    %}
    <figcaption>
        By <a href="https://16colo.rs/pack/impure86/xz-dvinestylers3.xb">Hellbeard</a>
    </figcaption>
</figure>
<figure class="u-image-medium">
    {% image
        "./src/assets/images/xbin/xz-belindra12.xb.png",
        "crisp",
        "" ,
        "(min-width: 30em) 50vw, 100vw",
        true
    %}
    <figcaption>
        By <a href="https://16colo.rs/pack/impure84/xz-belindra12.xb">Hellbeard</a>
    </figcaption>
</figure>
<figure class="u-image-full-width">
    {% image
        "./src/assets/images/xbin/xz-neuromancer.xb.png",
        "crisp",
        "" ,
        "(min-width: 30em) 50vw, 100vw",
        true
    %}
    <figcaption>
        By <a href="https://16colo.rs/pack/impure88/xz-neuromancer.xb">Hellbeard</a>
    </figcaption>
</figure>
<figure class="u-image-medium">
    {% image
        "./src/assets/images/xbin/xz-devotion.xb.png",
        "crisp",
        "" ,
        "(min-width: 30em) 50vw, 100vw",
        true
    %}
    <figcaption>
        By <a href="https://16colo.rs/pack/impure87/xz-devotion.xb">Hellbeard</a>
    </figcaption>
</figure>

<figure class="u-image-small">
    {% image
        "./src/assets/images/xbin/tkb-heated.xb.png",
        "crisp",
        "" ,
        "(min-width: 30em) 50vw, 100vw",
        true
    %}
    <figcaption>
        By <a href="https://16colo.rs/pack/newschool-01/tkb-heated.xb">tkb</a>
    </figcaption>
</figure>
<figure class="u-image-small">
    {% image
        "./src/assets/images/xbin/ntby-bwoi-esc08.xb.png",
        "crisp",
        "" ,
        "(min-width: 30em) 50vw, 100vw",
        true
    %}
    <figcaption>
        By <a href="https://16colo.rs/pack/newschool-01/ntby-bwoi-esc08.xb">ntby bwoi</a>
    </figcaption>
</figure>
<figure class="u-image-small">
    {% image
        "./src/assets/images/xbin/ntby-bwoi-esc02.xb.png",
        "crisp",
        "" ,
        "(min-width: 30em) 50vw, 100vw",
        true
    %}
    <figcaption>
        By <a href="https://16colo.rs/pack/newschool-01/ntby-bwoi-esc02.xb">ntby bwoi</a>
    </figcaption>
</figure>
<figure class="u-image-small">
    {% image
        "./src/assets/images/xbin/ntby-bwoi-esc05.xb.png",
        "crisp",
        "" ,
        "(min-width: 30em) 50vw, 100vw",
        true
    %}
    <figcaption>
        By <a href="https://16colo.rs/pack/newschool-01/ntby-bwoi-esc05.xb">ntby bwoi</a>
    </figcaption>
</figure>
<figure class="u-image-small">
    {% image
        "./src/assets/images/xbin/kp-ctrl.xb.png",
        "crisp",
        "" ,
        "(min-width: 30em) 50vw, 100vw",
        true
    %}
    <figcaption>
        By <a href="https://16colo.rs/pack/newschool-01/kp-ctrl.xb">kp</a>
    </figcaption>
</figure>

<figure class="u-image-full-width">
    {% image
        "./src/assets/images/xbin/lmn-meanwhile.xb.png",
        "crisp",
        "" ,
        "(min-width: 30em) 50vw, 100vw",
        true
    %}
    <figcaption>
        By <a href="https://16colo.rs/pack/impure83/lmn-meanwhile.xb">lmn</a>
    </figcaption>
</figure>

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
<figure class="u-image-small">
    {% image
        "./src/assets/images/xbin/grx-isleofman.xb.png",
        "crisp",
        "" ,
        "(min-width: 30em) 50vw, 100vw",
        true
    %}
    <figcaption>
      By [grx](https://16colo.rs/pack/impure80/grx-isleofman.xb)
    </figcaption>
</figure>
<figure class="u-image-small">
    {% image
        "./src/assets/images/xbin/grx-topazcp437.xb.png",
        "crisp",
        "" ,
        "(min-width: 30em) 50vw, 100vw",
        true
    %}
    <figcaption>
        By <a href="https://16colo.rs/pack/impure80/grx-topazcp437.xb">grx</a>
    </figcaption>
</figure>
<figure class="u-image-small">
    {% image
        "./src/assets/images/xbin/grx-touchofgod.xb.png",
        "crisp",
        "" ,
        "(min-width: 30em) 50vw, 100vw",
        true
    %}
    <figcaption>
        By <a href="https://16colo.rs/pack/impure80/grx-touchofgod.xb">grx</a>
    </figcaption>
</figure>
<figure class="u-image-small">
    {% image
        "./src/assets/images/xbin/grx-suitman.xb.png",
        "crisp",
        "" ,
        "(min-width: 30em) 50vw, 100vw",
        true
    %}
    <figcaption>
        By <a href="https://16colo.rs/pack/impure80/grx-suitman.xb">grx</a>
    </figcaption>
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

## Acknowledgements & Thanks
• All credits go to Andy Herbert who made the original Moebius.
• Huge thanks for major contributions to grymmjack (who maintains [his own fork](https://github.com/grymmjack/moebius) of my fork, but I have now merged it), jejacks0n, michael-lazar and bart-d.
• Uses modified Google's Material Icons. https://material.io/icons/

#### Included fonts:
• GJSCI-3, GJSCI-4 and GJSCI-X appears courtesy of [GrymmJack](https://www.youtube.com/channel/UCrp_r9aomBi4mryxSxLq24Q)
• [FROGBLOCK](https://polyducks.itch.io/frogblock) appears courtesy of [PolyDucks](http://polyducks.co.uk/)
• Newschool fonts collected and modified from the [NewSchool pack](https://16colo.rs/pack/newschool-01), courtesy of XBIN workshop participants at the Estonian Academy of Arts in 2021.
• structures font by [Gladys Camilo](https://gladyscamilo.com/)
• TES-* fonts by me.
• Topaz originally appeared in Amiga Workbench, courtesy of Commodore Int.
• Topaz Kickstart versions uncovered by [heckmeck](https://heckmeck.de/blog/amiga-topaz-1.4/), courtesy of Commodore Int.
• P0t-NOoDLE appears courtesy of Leo 'Nudel' Davidson
• mO'sOul appears courtesy of Desoto/Mo'Soul
• [Viler's VGA font collection](https://github.com/viler-int10h/vga-text-mode-fonts), with additional info on sources in the [FONTS.TXT](https://github.com/viler-int10h/vga-text-mode-fonts/blob/master/FONTS.TXT)
• Discmaster fonts collected from [discmaster.textfiles.com](https://discmaster.textfiles.com/search?family=font&format=amigaBitmapFont&widthMin=312&heightMin=76&widthMax=312&heightMax=85&limit=500&showItemName=showItemName)

