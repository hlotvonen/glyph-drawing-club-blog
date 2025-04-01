---
title: Why is there a "small house" in IBM's Code page 437?
date: 2025-01-06
description: "There's a small house in the moddle of IBM's Code Page 437. Why?"
cover: './src/assets/images/cp437house.png'
eleventyExcludeFromCollections: true
permalink: '/{{ title | slugify }}/'
tags:
    - Essay
    - ASCII Art
    - Fonts
    - History
webcomponents: 
    - character-viewer-cp437
---

::: wrap note
#### Note: 
This post is a short companion piece to my article [The origins of DEL (0x7F) and its Legacy in Amiga ASCII art](../the-origins-of-del-0x7f-and-its-legacy-in-amiga-ascii-art/). That article is all about the character DEL, what it is, how it was used, and why it even has a visual representation, but with a focus on Commodore's Amiga computers. Whereas AmigaOS's Topaz font renders DEL with diagonal lines, IBM's PC renders it... as a house. This bonus article is about that.

This article wouldn't have happened without the great help and insights of [Michael Walden](https://mw.rat.bz/) and [VileR](https://int10h.org/blog/), thank you!

If you want to comment on something (minor or major), please send me an email at **hlotvonen@gmail.com**. I would greatly it, and if something needs fixing I would gladly update the article with proper credit.
:::

---

::: wrap initial

# a-b-c-d-x-y-z...HOUSE?

There's a small house ( <span class="cp437-inline">⌂</span> ) in the middle of IBM's infamous character set Code Page 437. **"Small house"**—that's the official IBM name given to the glyph at code position 0x7F. It's cute, but a little strange. I wonder, how did it get there? Why did IBM include a *house*, of all things, in their character set?

:::

<figure class="u-image-full-width">
    {% image
        "./src/assets/images/0x7f/cp437-smallhouse.png",
        "crisp",
        "Code Page 437 table, highlighting the character 'small house' at 0x7F",
        "(min-width: 30em) 50vw, 100vw",
        true
    %}
    <figcaption>IBM PC's Code Page 437</figcaption>
</figure>

## The Urban Sprawl of IBM PC

Released in 1981, the *IBM Personal Computer* (PC) launched IBM's first microcomputer model line. Alongside it, they introduced an 8-bit character set known as *Code Page 437* (CP437). Unlike earlier IBM machines, the PC was built using off-the-shelf components instead of proprietary IBM technology, which spawned a wave of third-party clones marketed as "IBM-compatible" systems. IBM PC architecture quickly became the dominant global computing standard. By the end of the '80s, 84% of all sold microcomputers were either IBM PC's or its clones.^[Jeremy Reimer (2005): [Total Share: 30 Years of Computer Market Share Figures](http://arstechnica.com/old/content/2005/12/total-share.ars/), Ars Technica. 20.3.2025] 

The rise of PC also meant the widespread adoption of CP437, making it one of the most copied and recognizable character sets ever. VileR's [Ultimate Oldschool PC Font Pack](https://int10h.org/oldschool-pc-fonts/) lists over 200 fonts based on CP437 from various IBM PC models and their clones.

<div class="u-image-full-width">
  <character-viewer-cp437></character-viewer-cp437>
</div>

CP437 was based on *American Standard Code for Information Interchange* (ASCII), which defines the first 127 characters. This was a big change for IBM who had previously used the fundamentally different EBCDIC standard. But as ASCII covers only 96 *printable* characters of the total 256 available in 8-bit code, IBM had to figure out what to do with the rest of them. Instead of basing their choices on any predefined standards extending ASCII, or copying others, they decided (yet again) to do their own thing. 

## A set of "not serious" characters

The extended bits (characters 128–255) of CP437 contain mainly a mishmash of international text characters, box drawing shapes and mathematical symbols. But for the undefined control characters they did something wildly different. Dr. David J. Bradley, one of the creators of the IBM PC, recounts the [*origins of the ASCII smiley character*](https://www.vintagecomputing.com/index.php/archives/790/the-ibm-smiley-character-turns-30) in an email conversation with Benj Edwards of vintagecomputing.com:

> "Now, what to do about the first 32 characters (x00-x1F)? ASCII defines them as control codes, carriage return, line feed, tab… These characters originated with teletype transmission. But we could display them on the character based screens. So we added a set of “not serious” characters. They were intended as display only characters, not for transmission or storage. Their most probable use would be in character based games."^[[Edwards, Benj (2015): Origins of the ASCII Smiley Character: An Email Exchange With Dr. David Bradley (2011)](https://www.vintagecomputing.com/index.php/archives/790/the-ibm-smiley-character-turns-30#more-790) 19.3.2025]

The first 32 characters (x00-x1F) of CP437 mentioned by Bradley include smileys, playing card suits, musical notes, a solar symbol, gender symbols and arrows. What Bradley doesn't explicitly mention is the character at 0x7F, which is also a (sort-of) control character used in teletype transmission. It's assigned to the Delete character, which was used to obliterate undesirable characters on paper tape by punching it full of holes. The all-holes pattern in ASCII is at the 127th code point, represented by 0x7F in hexadecimal. This character is like all the other 32 control characters in that it doesn't have a defined visual representation, nor any particular use in digital computers like the IBM PC. So, even though Bradley doesn't explicitly mention 0x7F, it's represented in CP437 as a "not serious" house glyph ( <span class="cp437-inline">⌂</span> ), suggesting it also belongs to the "not serious" group of characters.

<figure class="u-image-full-width">
    {% image
        "./src/assets/images/0x7f/cp437-nonserious.png",
        "crisp",
        "Code Page 437 table, highlighting the 'not serious' characters",
        "(min-width: 30em) 50vw, 100vw",
        true
    %}
    <figcaption>The "not serious" characters</figcaption>
</figure>

According to Bradley, the "not serious" characters were developed during a 4-hour plane travel. He's of course exaggerating, but gave it as an "indication of the rapidity in which many significant decisions were undertaken". But even though they developed them relatively quickly, they must have based them on *something*.

IBM could implemented the visual representation for control character from ANSI X3.32-1973 standard—but they are ambiguous and hard-to-use (see part 2 of [The origins of DEL (0x7F) and its Legacy in Amiga ASCII art](../the-origins-of-del-0x7f-and-its-legacy-in-amiga-ascii-art/#part-2)). Instead, going with these "not serious" characters was arguably a better choice, at least as a business decision. Characters like the smiley face at 0x01 became iconic, precicely because they offered a simple way to represent player characters in text-based games like [Rogue](https://en.wikipedia.org/wiki/Rogue_(video_game)) and [ZZT](https://en.wikipedia.org/wiki/ZZT).

IBM was by no means the first to include "non-serious" characters. For example, Commodore's PETSCII character set from 1977 is known for its graphical shapes which also include card suites.^[Reunanen, Markku; Heikkinen, Tero; Carlsson, Anders (2019): [*PETSCII – A Character Set and a Creative Platform*](https://acris.aalto.fi/ws/portalfiles/portal/39040680/PETSCII_A_Character_Set_and_a_Creative_Platform.pdf)] 

<figure class="u-image-full-width">
    {% image
        "./src/assets/images/0x7f/PETSCII_MODE_01.png",
        "crisp",
        "",
        "(min-width: 30em) 50vw, 100vw",
        true
    %}
    <figcaption>PETSCII (manually ordered)</figcaption>
</figure>

Even the American National Standards Institute's (ANSI) X3.2 committee considered including some "not serious" symbols for an official 8-bit ASCII extension.

<figure class="u-image-full-width">
    {% image
        "./src/assets/images/0x7f/8-bit-ascii-proposal.png",
        "crisp",
        "",
        "(min-width: 30em) 50vw, 100vw",
        true
    %}
    <figcaption>Proposal for an 8-bit extension for ASCII. It didn't get standardized. The closest to an "official" 8-bit extension to ASCII is ISO 8859-1 (also called ISO Latin-1), which extended support for additional Latin based languages, standardized by the International Organization for Standardization (ISO) in 1987.</figcaption>
</figure>

But, why add these quirky characters, when arguably more useful characters (like exteding support for additional languages or writing systems) could be added? Bob Bemer ("The Father of ASCII") defends their inclusion in an article for the *Interface Age* in July 1978:

> "Presumably the card suits will strike your eye, and you will wonder why so many other useful symbols were ignored in favor of these. Don't worry, they will always come in handy; it's sometimes useful to have symbols whose meaning you can reassign without harm to programming languages, etc."^[R.W. Bemer (1978): Inside ASCII, part 3 of 3 parts. Included in the "Source documents on the history of character codes, 1977-1981", compiled by Eric Fischer, [on Internet Archive](https://archive.org/details/enf-ascii-1977-1981/page/n40/mode/1up)]

This is definitely the case with Code Page 437's house symbol ( <span class="cp437-inline">⌂</span> ). It is ambiguous enough that it can resemble many different things, not just a house. For example, in the DOS games [*By Fire & Sword*](https://www.mobygames.com/game/16049/by-fire-sword/) (1985) it's a **town**, in [*ZZT*](https://cheerfulghost.com/jdodson/posts/1179/zzt-an-epic-dos-ansi-adventure) (1991) it stands for **"energizers"**, in [*Bugs!*](https://www.mobygames.com/game/67110/bugs/) (1982) it's the **player's gun**, in [*Target*](https://www.mobygames.com/game/72491/ibm-personal-computer-basic-compiler-included-game/) (1982) it represents **player's ammo**, and in [*Numjump*](https://sparcie.wordpress.com/2018/03/28/numjump-for-dos/) (2017) they're deadly **spikes**.

<figure class="u-image-full-width">
    {% image
        "./src/assets/images/0x7f/numjump.png",
        "crisp",
        "Screenshot from Numjump. In this game, the house symbols represent spikes.",
        "(min-width: 30em) 50vw, 100vw",
        true
    %}
    <figcaption>In the 2017 homebrew DOS game <em>Numjump</em> by Daniel Remar, the house symbols represent spikes.</figcaption>
</figure>

PC ASCII artists have used the house symbol, not as a specific thing with meaning, but purely for its shape and size, to create what is called "newskool", or filled ASCII art. In the classic 8&times;16 pixels-per-character IBM VGA font, it's one of the few characters that sit one pixel *higher* from the baseline.

<figure class="u-image-full-width">
    {% image
        "./src/assets/images/0x7f/HOUSE-COMPARISON.png",
        "crisp",
        "The house, compared to a and $",
        "(min-width: 30em) 50vw, 100vw",
        true
    %}
</figure>

When combined with other characters that are just slighly larger or smaller creates an illusion of a continuous shape: <span class="cp437-inline">·∙•↔*⌂S§¼╣$♫b%⌂≈←·</span>. 

It's also fairly wide and "dark" in its typographic color, so it fills the space it occupies, without leaving any considerable gaps of negative space. In other words, it doesn't stand out when used carefully.

Its angled top makes it useful for creating curves, as seen in ddrj's [drj-mmc.ans](https://16colo.rs/pack/mimic73/drj-mmc.ans) from 2004 (house characters are highlighted in red):

<figure class="u-image-full-width">
    {% image
        "./src/assets/images/0x7f/2004_mimic73.zip_drj-mmc-modified.png",
        "crisp",
        "Screenshot from Numjump. In this game, the house symbols represent spikes.",
        "(min-width: 30em) 50vw, 100vw",
        true
    %}
    <figcaption>drj-mmc.ans. Colors have been changed from original to highlight the use of 0x7F.</figcaption>
</figure>

But what about IBM? Did they actually intend it to represent a house... or something else? 

## Why a house?

So, to get back to the question at hand, why did IBM decide to include a symbol representing a house in their character set? And why specifically at 0x7F? 

::: wrap note
#### Acknowledgements
Most of these theories are based on my conversations with VileR and Michael Walden, credit goes to them!
:::

#### Theory #1: House as a symbol for home computers
My first thought was that maybe the house was included as a symbol for IBM's new line of personal *home* computers? Before IBM PC's launch in 1981, IBM had largely been known for their business computers. So, it makes sense that, as IBM was entering the growing market of personal computers, they wanted to signal to the home users that their PC had soemthing *fun* to offer—hence the "not serious" glyphs, like the smiley, which were added with text-based games in mind. So maybe they added the house glyph for the same reason? Surely the smileys have to have a house they live in? It's compelling to think this might be true, but to be clear, this is pure speculation, and there's nothing substantial to support this claim.

#### Theory #2: It's related to backspace
Another "hunch" was suggested by VileR. He entertained the idea that the house character itself was associated with the action of deleting text, or related to the backspace symbol ⌫ (U+232B). If you rotate ⌫ 90˚ clockwise, you do get a house ⌂ (with an &times; in it). It's an interesting idea, but there doesn't seem to be nothing to support this claim either.

#### Theory #3: It comes from Blissymbolics

What I've always found weird about the house symbol is that its representation is somewhat atypical for a house. Wouldn't a more intuitive house icon have a [roof with an overhang](https://www.google.com/search?q=iconography%20house&udm=2)? Instead, the CP437 house glyph <span class="cp437-inline">⌂</span> is a simple box with a triangular top.

<figure class="u-image-float-right-inline">
    {% image
        "./src/assets/images/0x7f/hotel.jpg",
        "",
        "An icon for a hotel resembles CP437's house glyph",
        "(min-width: 30em) 50vw, 100vw",
        true
    %}
</figure>

Henry Dreyfuss *Symbol sourcebook* debunks my assumption: of course both presentations have been used in iconography well before CP437. For example, a hotel icon used by the <abbr title="International Civil Aviation Organization">ICAO</abbr> in the 1970s is very similar to CP437 representation of the house. 

<figure class="u-image-float-right-inline">
    {% image
        "./src/assets/images/0x7f/house.jpg",
        "",
        "A house symbol from blissymbolics",
        "(min-width: 30em) 50vw, 100vw",
        true
    %}
</figure>

Also a nearly direct match associated with the word *house* and the specific symbol, can be found from Blissymbolics. It's a constructed language based on graphic symbols, introduced in 1949 by Charles Bliss in his book *Semantography*. Blissymbolics remained in obscurity for decades, but gained some popularity after 1971 when it was used to teach children with cerebral palsy how to communicate.^[Radiolab (2012): [Mr.Bliss](https://radiolab.org/podcast/257194-man-became-bliss)] This led to workshops worldwide, including the United States, and a new [book published in 1980](https://archive.org/details/OTUED_8-2-3-3/page/21/mode/1up) displaying these symbols. Is it possible, that while researching which symbols to include to CP437, David Bradley or another IBM developer looked at Blissymbolics and incorporated the house symbol, either deliberately or unconsciously?

I presented this idea to VileR, and I have to agree with his assessment. This theory, while intriguing, is probably a long shot. However, VileR points out that there is something both Blissymbolics and tiny character cell designs have in common: both are very economical in detail, by using as few strokes as possible for the sake of clarity, and have the glyphs conform to a grid (albeit for different reasons). So, while a roof overhang would instinctively make sense, it isn't *strictly* necessary, in neither Bliss's symbols nor in bitmap fonts. 

::: wrap note
Sidenote: There's a [recent proposal](https://www.unicode.org/L2/L2020/20271-n5149-blissymbols-kbd.pdf) to add Blissymbolics to Unicode!
:::

#### Theory #4: It's borrowed from System/23 Datamaster
In the Benj Edwards' email interview, David Bradley also mentions that the choice of "serious characters" was based on the immediate ancestor of PC at IBM, the System/23 Datamaster.^[[Edwards, Benj (2015): Origins of the ASCII Smiley Character: An Email Exchange With Dr. David Bradley (2011)](https://www.vintagecomputing.com/index.php/archives/790/the-ibm-smiley-character-turns-30#more-790) 19.3.2025] VileR found the Datamaster [character ROM image](https://forum.vcfed.org/index.php?threads/ibm-system-23-datamaster-display-and-character-generation.1247762/), which confirms that some character sequences *were* copied to CP437 unchanged (üéâäàåçêëèïî). But, there is no house symbol, or anything resembling it.

#### Theory #5: It's borrowed from Wang word processing machines
In a blog post [Weird Tales](https://www.os2museum.com/wp/weird-tales/), Michal Necasek of OS/2 Museum examines claims made by Bill Gates that Microsoft wanted IBM to copy some Wang word processing characters ("smiley faces and boxes and triangles and stuff") into the IBM PC's character set because they were considering creating their own Wang clone. Necasek half-debunks and half-confirms these claims, as none of the Wang character sets have smileys, yet they do share some strikingly similiar characters with CP437, that are unlikely to be a coincidence. These include left/right triangles, a box, a diamond, double exclamation mark, and several arrows.^[Necasek, Michal (2021): [Weird Tales](https://www.os2museum.com/wp/weird-tales/), OS/2 Museum. 19.3.2025] But again, none of the Wang character sets include a house symbol, so IBM couldn't have copied it from there.

#### Theory #6: Botched copy of a dot-stretched Wang delta
Or maybe it does come from Wang? Viler makes an interesting observation: a 1979 Wang character set for the *2236DE terminal* includes a delta symbol ( Δ ) at position 0x9A. At first glance this seemed unrelated to IBM's house symbol at 0x7F. But after viewing the ROM data as a bitmap, VileR discovered that the pixels were spaced-out, implying that the glyphs relied on some sort of dot-stretching effect in the display circuitry. Rendering the bitmap with his [CRT emulator](https://int10h.org/blog/2021/01/simulating-crt-monitors-ffmpeg-pt-1-color/) revealed that Wang's delta didn't actually look like a clean equilateral triangle: the triangle's sides were slightly cropped to fit it into the 7&times;7 pixels-per-character space, and in combination with the CRT effect, makes the delta resemble IBM's blocky house symbol. VileR also notes that even though Wang could have created a less ambiguous delta triangle by making the sides steeper, the designers of early bitmap fonts were often very reluctant to use angles other than 45/90 degrees in their glyphs, because uneven displacements between scanlines produce very obvious "jaggies" on low-res CRTs.

So, if Bill Gates was correct about IBM copying characters from Wang, it's entirely possible that the people at IBM, who were copying glyphs directly from Wang's, misinterpreted the delta as a house, especially considering, as Bradley notes, that the whole process was rushed. This is of course not a definitive proof, but a compelling theory nonetheless!

<figure class="u-image-full-width">
    {% image
        "./src/assets/images/0x7f/wang-rom-crt.png",
        "crisp",
        "Comparison between Wang's character set as raw ROM data and CRT emulated",
        "(min-width: 30em) 50vw, 100vw",
        true
    %}
    <figcaption>Comparison between Wang's character set as raw ROM data and CRT emulated. Is this the origin of IBM PC's house? Compiled from images by VileR.</figcaption>
</figure>

#### Theory #7: It IS delta
But, in another email conversation, Michael Walden speculates that it might not even be a coincidence that the DELete character has DELta as its printable character glyph. Delta as a symbol ( Δ ) originates from the Greek alphabet. CP437 already includes some Greek characters in the 0xEO–0xEB range, notably 0xEB being the symbol for Greek *small* delta ( δ ). These characters were not included to support Greek language, but as math symbols. In mathematics and other sciences, the uppercase delta is often used to denote a "change of any changeable quantity", which might have been a reason to include it in the character set.

#### Theory #8: The delta is from APL
Delta doesn't only appear in Wang's character set, but in many character sets before it. For example, the Array-oriented Programming Language (APL), which originated at IBM in the 1960s, uses delta, and inverted delta ( ∇ ) in its syntax. As an unrelated but curious coincidence, IBM named the inverted delta "DEL".^[Wikipedia article [https://en.wikipedia.org/wiki/Digital_encoding_of_APL_symbols#Character_repertoire](Digital encoding of APL symbols)]. 

The APL symbols, including delta and DEL, appeared on some early IBM APL keyboards, like in the 1971 [IBM 3270](https://geekhack.org/index.php?topic=104046.0). VileR also notes that IBM's first desktop machines from the mid 1970s, the [5100/5110/5120](https://voidstar.blog/the-ibm-5100-5110-mame-emulators-how-to/), were intended for APL from the get go, but there's no evidence that they ever influenced the development of IBM PC in any way. Furthermore, IBM's APL character sets, like the [Code Page 909](https://web.archive.org/web/20130121103608/http://www-03.ibm.com/systems/resources/systems_i_software_globalization_pdf_cp00909z.pdf), sometimes include both delta *and* the house symbol. As such, it doesn't seem like there's any connection between the house and APL.

#### Theory #9: It IS delta?

Hold up—how can we be absolutely certain that IBM meant it to represent a house? I mean, it loooks like a house. Wikipedia says it's a house. 

Surely, we can confirm that by looking at the original 1981 [*Technical Reference*](https://www.minuszerodegrees.net/manuals/IBM_5150_Technical_Reference_6025005_AUG81.pdf) manual for IBM PC... but there's no mention of a house. There's not even symbol representing a house. The character listed at 0x7F is a different symbol entirely: it's **delta** ( Δ )!

<figure class="u-image-full-width">
    {% image
        "./src/assets/images/0x7f/ibmpc-technicalreference.png",
        "crisp",
        "0x7F is displayed as delta",
        "(min-width: 30em) 50vw, 100vw",
        true
    %}
    <figcaption>1981 IBM PC Technical Reference</figcaption>
</figure>

But... the 1982 edition of [*IBM BASIC Manual*](https://archive.org/details/IBMBASICAV1.10Manual/page/n483/mode/2up) displays 0x7F definitely as a **house**! What is going on?

<figure class="u-image-full-width">
    {% image
        "./src/assets/images/0x7f/ibm-basic.png",
        "crisp",
        "IBM BASIC Manual displays 0x7F as house",
        "(min-width: 30em) 50vw, 100vw",
        true
    %}
    <figcaption>1982 IBM BASIC Manual</figcaption>
</figure>

Maybe the 1981 Technical Reference was printed in error, and corrected later? Nope—the [1983 PC/XT](https://erikarn.github.io/pcxt/PC-XT.pdf), the [1984 PC](https://archive.org/details/IBMPCIBM5150TechnicalReference6322507APR84/page/n246/mode/1up), and the [1986 PC/AT](https://bitsavers.org/pdf/ibm/pc/at/6183355_PC_AT_Technical_Reference_Mar86.pdf) *Technical References* display 0x7F as **delta** in the character set tables. 

<figure class="u-image-full-width">
    {% image
        "./src/assets/images/0x7f/IBM_5150_Technical_Reference_6322507_APR84_0246.png",
        "crisp",
        "0x7F is displayed as delta",
        "(min-width: 30em) 50vw, 100vw",
        true
    %}
    <figcaption>1984 IBM PC Technical Reference</figcaption>
</figure>

Maybe they just didn't have a proper font to display the house symbol? Nope again—it's even *labeled* as **delta** in the System BIOS character generator routines listed in the *Technical References*.

At the same time, the actual [IBM PC System BIOS fonts](https://int10h.org/oldschool-pc-fonts/fontlist/font?ibm_bios) clearly renders it as a **house**. But the rendering isn't consistent either: for example, the 1986 *IBM PC Convertible* system font renders it as **delta**. 

So, it's actually a delta? Nope yet again—in 1984, IBM's own authoritative registry of glyph names ([GCGID](https://public.dhe.ibm.com/software/globalization/gcoc/attachments/CP00437.txt)) for CP437 officially names 0x7F as **"small house"**, contradicting the System BIOS label.

It seems the only thing we know for certain, is that even IBM was confused (or just didn't care) whether 0x7F should be a delta or a house.

### What DO we know?

*How* the house character looks like is, after all, just a matter of interpretation. The character at code point 0x7F in the 1981 IBM PC's System BIOS font might *look like* a **house**, but we can't definitely claim that it was *intended* to look like a house. The *only* thing we can say for sure, is that IBM PC's System BIOS has *labeled* 0x7F as **delta** since 1981, while IBM's official registry named it **small house** in 1984.

What does this tell us? The consistent *inconsistencies* in IBM's technical documentations, fonts, and registries, sounds like a classic case of miscommunication between the different departments of IBM. Did the font's designers intend 0x7F to represent a house, but the engineers interpreted it as a delta? Or did the designers intend it to be delta, but the scuffed rendering made it look like a house, and publications like the *IBM BASIC Manual* perpetuated the wrong interpretation of it as house, until IBM decided to make it official in the registry? Or what? There is no satisfying conclusion.

Whether IBM meant 0x7F to be a delta, or a house, remains a mystery. But it doesn't really matter. It sounds lame, but in the end, the legacy of CP437 is not defined by IBM's intentions, but by all the different ways designers, programmers, ASCII artists and other users adopted it. It *is* delta *and* house, but *also* rocket, players ammo, gun, spike, energizer, or whatever else we want it to be. As IBM engineer Charles E. Mackenzie observes in *Coded Character Sets, History and Development*: 

> "There is an aspect of human nature which surfaces in data processing. Experience has shown that if graphics are provided on a computing system, they will be used in one way or another by customers, even if they have no intrinsic meaning."

This is probably best exemplified by how the house character was used in PC ASCII art. In the hands of ASCII artists, the character itself has no meaning, it's just an abstract shape. And *that* is the beauty of written language. Character shapes are just that: shapes. Shapes themselves don't mean anything, until we give them meaning.

To see all the ways <span class="cp437-inline">⌂</span> was used in PC ASCII art, I wrote a script that scanned the [16colo.rs](https://16colo.rs/) archive for any use of 0x7F. Here are some of my favourites:

<figure class="u-image-full-width">
    {% image "./src/assets/images/0x7f/0x7f-pcascii/1997_clit-63.zip_dy1-pen.ans.png", "crisp", "", "(min-width: 30em) 50vw, 100vw", true %}
    <figcaption>1997_clit-63.zip_dy1-pen.ans</figcaption>
</figure>

---

<figure class="u-image-full-width">
    {% image "./src/assets/images/0x7f/0x7f-pcascii/1997_labia314.zip_dy1-bed.ans.png", "crisp", "", "(min-width: 30em) 50vw, 100vw", true %}
    <figcaption>1997_labia314.zip_dy1-bed.ans</figcaption>
</figure>

--- 

<figure class="u-image-full-width">
    {% image "./src/assets/images/0x7f/0x7f-pcascii/1999_bj-creep.zip_bjasc147.ans.png", "crisp", "", "(min-width: 30em) 50vw, 100vw", true %}
    <figcaption>1999_bj-creep.zip_bjasc147.ans</figcaption>
</figure>

---

<figure class="u-image-full-width">
    {% image "./src/assets/images/0x7f/0x7f-pcascii/1999_mimic11.zip_ess#0002.ans.png", "crisp", "", "(min-width: 30em) 50vw, 100vw", true %}
    <figcaption>1999_mimic11.zip_ess#0002.ans</figcaption>
</figure>

---

<figure class="u-image-full-width">
    {% image "./src/assets/images/0x7f/0x7f-pcascii/1999_mimic15.zip_dy-blue.ans.png", "crisp", "", "(min-width: 30em) 50vw, 100vw", true %}
    <figcaption>1999_mimic15.zip_dy-blue.ans</figcaption>
</figure>

---

<figure class="u-image-full-width">
    {% image "./src/assets/images/0x7f/0x7f-pcascii/1999_mimic16.zip_bjasc159.ans.png", "crisp", "", "(min-width: 30em) 50vw, 100vw", true %}
    <figcaption>1999_mimic16.zip_bjasc159.ans</figcaption>
</figure>

---

<figure class="u-image-full-width">
    {% image "./src/assets/images/0x7f/0x7f-pcascii/1999_mimic17.zip_bjasc168.ans.png", "crisp", "", "(min-width: 30em) 50vw, 100vw", true %}
    <figcaption>1999_mimic17.zip_bjasc168.ans</figcaption>
</figure>

---

<figure class="u-image-full-width">
    {% image "./src/assets/images/0x7f/0x7f-pcascii/1999_rmrs-29.zip_tum-egun.ans.png", "crisp", "", "(min-width: 30em) 50vw, 100vw", true %}
    <figcaption>1999_rmrs-29.zip_tum-egun.ans</figcaption>
</figure>

---

<figure class="u-image-full-width">
    {% image "./src/assets/images/0x7f/0x7f-pcascii/1999_rmrs-29.zip_tum-jule.ans.png", "crisp", "", "(min-width: 30em) 50vw, 100vw", true %}
    <figcaption>1999_rmrs-29.zip_tum-jule.ans</figcaption>
</figure>

---

<figure class="u-image-full-width">
    {% image "./src/assets/images/0x7f/0x7f-pcascii/2000_mimic25.zip_us-bj189.ans.png", "crisp", "", "(min-width: 30em) 50vw, 100vw", true %}
    <figcaption>2000_mimic25.zip_us-bj189.ans</figcaption>
</figure>

---

<figure class="u-image-full-width">
    {% image "./src/assets/images/0x7f/0x7f-pcascii/2000_mimic27.zip_dr-mmc27.ans.png", "crisp", "", "(min-width: 30em) 50vw, 100vw", true %}
    <figcaption>2000_mimic27.zip_dr-mmc27.ans</figcaption>
</figure>

---

<figure class="u-image-full-width">
    {% image "./src/assets/images/0x7f/0x7f-pcascii/2000_mimic30.zip_tb-epic.ans.png", "crisp", "", "(min-width: 30em) 50vw, 100vw", true %}
    <figcaption>2000_mimic30.zip_tb-epic.ans</figcaption>
</figure>

---

<figure class="u-image-full-width">
    {% image "./src/assets/images/0x7f/0x7f-pcascii/2000_mimic30.zip_us-tw.ans.png", "crisp", "", "(min-width: 30em) 50vw, 100vw", true %}
    <figcaption>2000_mimic30.zip_us-tw.ans</figcaption>
</figure>

---

<figure class="u-image-full-width">
    {% image "./src/assets/images/0x7f/0x7f-pcascii/2001_bommc01.zip_mmc10-12.ans.png", "crisp", "", "(min-width: 30em) 50vw, 100vw", true %}
    <figcaption>2001_bommc01.zip_mmc10-12.ans</figcaption>
</figure>

---

<figure class="u-image-full-width">
    {% image "./src/assets/images/0x7f/0x7f-pcascii/2001_mimic33.zip_ko-cats.ans.png", "crisp", "", "(min-width: 30em) 50vw, 100vw", true %}
    <figcaption>2001_mimic33.zip_ko-cats.ans</figcaption>
</figure>

---

<figure class="u-image-full-width">
    {% image "./src/assets/images/0x7f/0x7f-pcascii/2001_mimic34.zip_h4-soap.ans.png", "crisp", "", "(min-width: 30em) 50vw, 100vw", true %}
    <figcaption>2001_mimic34.zip_h4-soap.ans</figcaption>
</figure>

---

<figure class="u-image-full-width">
    {% image "./src/assets/images/0x7f/0x7f-pcascii/2002_mimic44.zip_h4-tune.ans.png", "crisp", "", "(min-width: 30em) 50vw, 100vw", true %}
    <figcaption>2002_mimic44.zip_h4-tune.ans</figcaption>
</figure>

---

<figure class="u-image-full-width">
    {% image "./src/assets/images/0x7f/0x7f-pcascii/2003_buzina6.zip_crs-hmes.ans.png", "crisp", "", "(min-width: 30em) 50vw, 100vw", true %}
    <figcaption>2003_buzina6.zip_crs-hmes.ans</figcaption>
</figure>

---

<figure class="u-image-full-width">
    {% image "./src/assets/images/0x7f/0x7f-pcascii/2003_galza-18.zip_shd-sx09.ans.png", "crisp", "", "(min-width: 30em) 50vw, 100vw", true %}
    <figcaption>2003_galza-18.zip_shd-sx09.ans</figcaption>
</figure>

---

<figure class="u-image-full-width">
    {% image "./src/assets/images/0x7f/0x7f-pcascii/2003_mimic57.zip_ko-taima.ans.png", "crisp", "", "(min-width: 30em) 50vw, 100vw", true %}
    <figcaption>2003_mimic57.zip_ko-taima.ans</figcaption>
</figure>

---

<figure class="u-image-full-width">
    {% image "./src/assets/images/0x7f/0x7f-pcascii/2003_mimic61.zip_us-m.ans.png", "crisp", "", "(min-width: 30em) 50vw, 100vw", true %}
    <figcaption>2003_mimic61.zip_us-m.ans</figcaption>
</figure>

---

<figure class="u-image-full-width">
    {% image "./src/assets/images/0x7f/0x7f-pcascii/2003_mimic66.zip_jf-fukk.ans.png", "crisp", "", "(min-width: 30em) 50vw, 100vw", true %}
    <figcaption>2003_mimic66.zip_jf-fukk.ans</figcaption>
</figure>

---

<figure class="u-image-full-width">
    {% image "./src/assets/images/0x7f/0x7f-pcascii/2003_mimic66.zip_jf-inn2.ans.png", "crisp", "", "(min-width: 30em) 50vw, 100vw", true %}
    <figcaption>2003_mimic66.zip_jf-inn2.ans</figcaption>
</figure>

---

<figure class="u-image-full-width">
    {% image "./src/assets/images/0x7f/0x7f-pcascii/2004_mimic69.zip_us-nons.ans.png", "crisp", "", "(min-width: 30em) 50vw, 100vw", true %}
    <figcaption>2004_mimic69.zip_us-nons.ans</figcaption>
</figure>

---

<figure class="u-image-full-width">
    {% image "./src/assets/images/0x7f/0x7f-pcascii/2004_mimic73.zip_drj-mmc.ans.png", "crisp", "", "(min-width: 30em) 50vw, 100vw", true %}
    <figcaption>2004_mimic73.zip_drj-mmc.ans</figcaption>
</figure>

---

<figure class="u-image-full-width">
    {% image "./src/assets/images/0x7f/0x7f-pcascii/2004_mimic77.zip_je-eul.ans.png", "crisp", "", "(min-width: 30em) 50vw, 100vw", true %}
    <figcaption>2004_mimic77.zip_je-eul.ans</figcaption>
</figure>

---

<figure class="u-image-full-width">
    {% image "./src/assets/images/0x7f/0x7f-pcascii/2018_impure69.zip_arl-radio_final.ans.png", "crisp", "", "(min-width: 30em) 50vw, 100vw", true %}
    <figcaption>2018_impure69.zip_arl-radio_final.ans</figcaption>
</figure>