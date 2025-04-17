---
title: Why is there a "small house" in IBM's Code page 437?
date: 2025-01-06
description: "There's a small house in the moddle of IBM's Code Page 437. Why?"
cover: './src/assets/images/cp437house.png'
permalink: '/{{ title | slugify }}/'
tags:
    - Essay
    - ASCII Art
    - Fonts
    - History
webcomponents: 
    - character-viewer-cp437
    - character-editor
---

::: wrap note
#### Note: 
This post is a companion piece to my article [The origins of DEL (0x7F) and its Legacy in Amiga ASCII art](../the-origins-of-del-0x7f-and-its-legacy-in-amiga-ascii-art/). That article is all about the character DEL, what it is, how it was used, and why it even has a visual representation, but with a focus on Commodore's Amiga computers. Whereas AmigaOS's Topaz font renders DEL with diagonal lines, IBM's PC renders it... as a house. This bonus article is about that.

This article wouldn't have happened without the great help and insights of [Michael Walden](https://mw.rat.bz/) and [VileR](https://int10h.org/blog/), thank you!

If you want to comment on something (minor or major), please send me an email at **hlotvonen@gmail.com**. I would greatly appreciate it, and if something needs fixing I would gladly update the article with proper credit.
:::

---

::: wrap initial

# a-b-c-d-x-y-z...HOUSE?

There's a small house ( <span class="cp437-inline">⌂</span> ) in the middle of IBM's infamous character set Code Page 437. **"Small house"**—that's the official IBM name given to the glyph at code position 0x7F, where a control character for "Delete" (DEL) should logically exist. It's cute, but a little strange. I wonder, how did it get there? Why did IBM represent DEL as a *house*, of all things?

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

## The rise of Code Page 437

Released in 1981, the *IBM Personal Computer* (PC) launched IBM's first microcomputer model line. Alongside it, they introduced an 8-bit character set, which later became known as *Code Page 437* (CP437). Unlike earlier IBM machines, the PC was built using off-the-shelf components instead of proprietary IBM technology, which spawned a wave of third-party clones marketed as "IBM-compatible" systems. IBM PC architecture quickly became the dominant global computing standard. By the end of the '80s, 84% of all sold microcomputers were either IBM PC's or its clones.^[Reimer, Jeremy (2005): [Total Share: 30 Years of Computer Market Share Figures](http://arstechnica.com/old/content/2005/12/total-share.ars/), *Ars Technica*. 20.3.2025] 

The rise of PC also meant the widespread adoption of CP437, making it one of the most copied and recognizable character sets ever. VileR's [Ultimate Oldschool PC Font Pack](https://int10h.org/oldschool-pc-fonts/) lists over 200 fonts based on CP437 from various IBM PC models and their clones.

CP437 was based on *American Standard Code for Information Interchange* (ASCII), which defines the first 127 characters. This was a big change for IBM who had previously used the fundamentally different EBCDIC standard. But as ASCII covers only 96 *printable* characters of the total 256 available in 8-bit code, IBM had to figure out what to do with the rest of them. Instead of basing their choices on any predefined standards extending ASCII, or copying others, they decided (yet again) to do their own thing. 

## A set of "not serious" characters

The extended bits (characters 128–255) of CP437 contain mainly a mishmash of international text characters, box drawing shapes and mathematical symbols. But for the undefined control characters they did something wildly different. Dr. David J. Bradley, one of the creators of the IBM PC, recounts the [*origins of the ASCII smiley character*](https://www.vintagecomputing.com/index.php/archives/790/the-ibm-smiley-character-turns-30) in an email conversation with Benj Edwards of vintagecomputing.com:

> "Now, what to do about the first 32 characters (x00-x1F)? ASCII defines them as control codes, carriage return, line feed, tab… These characters originated with teletype transmission. But we could display them on the character based screens. So we added a set of “not serious” characters. They were intended as display only characters, not for transmission or storage. Their most probable use would be in [text] character based games."^[Edwards, Benj (2015): [Origins of the ASCII Smiley Character: An Email Exchange With Dr. David Bradley (2011)](https://www.vintagecomputing.com/index.php/archives/790/the-ibm-smiley-character-turns-30#more-790), *vintagecomputing.com*. 19.3.2025]

The first 32 characters (x00-x1F) of CP437 mentioned by Bradley include smileys, playing card suits, musical notes, a solar symbol, gender symbols and arrows. What Bradley doesn't explicitly mention is the character at 0x7F, which is also a (sort-of) control character used in teletype transmission. It's assigned to the Delete character, which was used to obliterate undesirable characters on paper tape by punching it full of holes. The all-holes pattern in ASCII is at the 127th code point, represented by 0x7F in hexadecimal. This character is like all the other 32 control characters in that it doesn't have a defined visual representation, nor any particular use in digital computers like the IBM PC. So, even though Bradley doesn't explicitly mention 0x7F, it's represented in CP437 as a tiny pixel-house ( <span class="cp437-inline">⌂</span> ), suggesting it also belongs to the "not serious" group of characters.

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

What is this something? IBM could have followed an existing standard and taken the graphics for control characters from ANSI X3.32-1973—but they are ambiguous and hard-to-use (see part 2 of [The origins of DEL (0x7F) and its Legacy in Amiga ASCII art](../the-origins-of-del-0x7f-and-its-legacy-in-amiga-ascii-art/#part-2)). Instead, going with these "not serious" characters was arguably a better choice, especially as a business decision. Characters like the smiley face at 0x01 became iconic, precisely because they offered a simple way to represent player characters in text-based games like [Rogue](https://en.wikipedia.org/wiki/Rogue_(video_game)) and [ZZT](https://en.wikipedia.org/wiki/ZZT).

IBM was by no means the first to include "not serious" characters. For example, Commodore's PETSCII character set from 1977 is known for its graphical shapes which also include card suites.^[Reunanen, Markku; Heikkinen, Tero; Carlsson, Anders (2019): [*PETSCII – A Character Set and a Creative Platform*](https://acris.aalto.fi/ws/portalfiles/portal/39040680/PETSCII_A_Character_Set_and_a_Creative_Platform.pdf)] 

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

But, why add these quirky characters, when arguably more useful characters, like extending support for additional languages or writing systems, could be added? Bob Bemer ("The Father of ASCII") defends their inclusion in an article for the *Interface Age* in July 1978:

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

<figure class="u-image-full-width">
    {% image
        "./src/assets/images/0x7f/zzt.gif",
        "crisp",
        "Screenshot from ZZT. In this game, the house symbols represent energizers.",
        "(min-width: 30em) 50vw, 100vw",
        true
    %}
    <figcaption>Screenshot from ZZT, made by Tim Sweeney (the CEO of Epic Games!) in 1991. In this game, the house symbols represent energizers (on the right edge of the game view).</figcaption>
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

When combined with other characters that are just slightly larger or smaller creates an illusion of a continuous shape: <span class="cp437-inline">·∙•↔*⌂S§¼╣$♫b%⌂≈←·</span>. 

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


## Theories on the origins of CP437's house

But what about IBM? Why did IBM decide to include a symbol representing a house in their character set? It's a strange glyph; adding a smiley is readily arguable, and playing card suits have existed in prior character sets, but a house—as far as I can tell—didn't exist as a glyph anywhere before IBM's Code Page 437. It seems to come out of thin air. To my knowledge, there are no (surviving) documents on the design process of the character set. The little bit we know comes from a few interviews, like the one with David J. Bradley, and from meticulous research done by people like [VileR](https://int10h.org/blog/2024/10/missing-ibm-pc-localization-disks-roms/). So, the only thing I can do is speculate. Here are my thoughts:

::: wrap note
#### Acknowledgements
Most of these theories are based on my conversations with VileR and Michael Walden, credit goes to them!
:::

#### Theory #1: House as a symbol for home computers
My first thought was that maybe the house was included as a symbol for IBM's new line of personal **home** computers? Before IBM PC's launch in 1981, IBM had largely been known for their business computers. So, it makes sense that, as IBM was entering the growing market of personal computers, they wanted to signal to the home users that their PC had something *fun* to offer—hence the "not serious" glyphs, like the smiley, which were added with text-based games in mind. So maybe they added the house glyph for the same reason? Surely the smileys must have a house to live in! It's compelling to think this might be true, but to be clear, this is pure speculation, and there's nothing to support this claim.

#### Theory #2: It's related to backspace
Another "hunch" was suggested by VileR. He entertained the idea that the house character itself was associated with the action of deleting text, or related to the backspace symbol ⌫ (U+232B). If you rotate ⌫ 90˚ clockwise, you do get a house ⌂ (with an &times; in it). It's an interesting idea, but there doesn't seem to be anything to support this claim either.

#### Theory #3: It's borrowed from System/23 Datamaster
In the Benj Edwards' email interview, David Bradley also mentions that the choice of "serious characters" was based on the immediate ancestor of PC at IBM, the System/23 Datamaster.^[Edwards, Benj (2015): [Origins of the ASCII Smiley Character: An Email Exchange With Dr. David Bradley (2011)](https://www.vintagecomputing.com/index.php/archives/790/the-ibm-smiley-character-turns-30#more-790), *vintagecomputing.com*. 19.3.2025] VileR found the Datamaster [character ROM image](https://forum.vcfed.org/index.php?threads/ibm-system-23-datamaster-display-and-character-generation.1247762/), which confirms that some character sequences *were* copied to CP437 unchanged (üéâäàåçêëèïî). But, there is no house symbol, or anything resembling it.

#### Theory #4: It's borrowed from Wang word processing machines
In a blog post [Weird Tales](https://www.os2museum.com/wp/weird-tales/), Michal Necasek of OS/2 Museum examines claims made by Bill Gates that Microsoft wanted IBM to copy some Wang word processing characters ("smiley faces and boxes and triangles and stuff") into the IBM PC's character set because they were considering creating their own Wang clone. Necasek half-debunks and half-confirms these claims, as none of the Wang character sets have smileys, yet they do share some strikingly similiar characters with CP437, that are unlikely to be a coincidence. These include left/right triangles, a box, a diamond, double exclamation mark, and several arrows.^[Necasek, Michal (2021): [Weird Tales](https://www.os2museum.com/wp/weird-tales/), *OS/2 Museum*. 19.3.2025] But again, none of the Wang character sets include a house symbol, so IBM couldn't have copied it from there.

#### Theory #5: It comes from Blissymbolics

So, IBM didn't get the house glyph by copying it from other character sets. But it's unlikely that IBM's team designed the house symbol in a vacuum. If it's not from another computer system, then maybe they found it by looking at books for existing symbol systems and iconography?

<figure class="u-image-float-right-inline">
    {% image
        "./src/assets/images/0x7f/hotel.jpg",
        "",
        "An icon for a hotel resembles CP437's house glyph",
        "(min-width: 30em) 50vw, 100vw",
        true
    %}
</figure>

For example, a hotel icon used by the <abbr title="International Civil Aviation Organization">ICAO</abbr> in the 1970s is quite similar in shape to CP437's house.^[Dreyfuss, Henry (1972): [*Symbol sourcebook : an authoritative guide to international graphic symbols*](https://archive.org/details/symbolsourcebook0000henr/page/n9/mode/2up)]

<figure class="u-image-float-right-inline">
    {% image
        "./src/assets/images/0x7f/house.jpg",
        "",
        "A house symbol from blissymbolics",
        "(min-width: 30em) 50vw, 100vw",
        true
    %}
</figure>

Another possibile influence is Blissymbolics. It was originally developed in 1949, but gained some renewed popularity in the 1970s and 1980s.^[Radiolab (2012): [Mr.Bliss](https://radiolab.org/podcast/257194-man-became-bliss)] The Blissymbolics house glyph is striking similar to IBM's character at 0x7F.^[Blissymbolics Communication Institute (1980): [*Teaching and Using Blissymbolics*](https://archive.org/details/OTUED_8-2-3-3/page/21/mode/1up)] If IBM was looking at symbol books, searching for inspiration for their new character set, it's possible they would have come upon Blissymbolics. The timeline fits: a book *Teaching and Using Blissymbolics* was published in 1980, at the time when IBM was developing CP437.

::: wrap note
##### Sidenote
There's a [recent proposal](https://www.unicode.org/L2/L2020/20271-n5149-blissymbols-kbd.pdf) to add Blissymbolics to Unicode!
:::

#### Theory #6: Botched copy of a dot-stretched Wang delta
Or maybe it *does* come from Wang? Viler makes an interesting observation: a 1979 Wang character set for the *2236DE terminal* includes a delta symbol ( Δ ) at position 0x9A. At first glance this seemed unrelated to IBM's house symbol at 0x7F. But after viewing the ROM data as a bitmap, VileR discovered two interesting things. First, Wang's delta wasn't a clean equilateral triangle (angles at 60°, 60°, 60°); to avoid uneven displacements between scanlines, which could produce very obvious "jaggies" on low-res CRTs, the delta was instead rendered as a right triangle (angles 45°, 90°, 45°). However, because of this, the triangle's side-corners had to be chopped off, to fit it into its 7&times;7 pixels-per-character space. Secondly, VileR discovered that the bitmap's pixels were spaced-out, implying that the glyphs relied on some sort of dot-stretching effect in the display circuitry. After these realizations, rendering the bitmap with his [CRT emulator](https://int10h.org/blog/2021/01/simulating-crt-monitors-ffmpeg-pt-1-color/) revealed that Wang's delta actually resembles IBM's blocky house symbol.

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

So, if Bill Gates was correct about IBM copying characters from Wang, it's entirely possible that the people at IBM, who were copying glyphs directly from a Wang terminal screen, misinterpreted the delta as a house, especially considering, as Bradley notes, that the whole process was rushed. This is not a definitive proof, but a compelling theory nonetheless!

#### Theory #7: Is it delta?
But, in an email conversation, Michael Walden speculates that it might not even be a coincidence that the DELete character has DELta as its printable character glyph. 

Delta as a symbol ( Δ ) originates from the Greek alphabet. CP437 already includes some Greek characters in the 0xEO–0xEB range, notably 0xEB being the symbol for Greek *small* delta ( δ ). These characters were not included to support Greek language, but as math symbols. In mathematics and other sciences, the uppercase delta is often used to denote a "change of any changeable quantity", which might have been a reason to include it in the character set.

Delta doesn't only appear in Wang's character set, but in many character sets before it. For example, the Array-oriented Programming Language (APL), which originated at IBM in the 1960s, includes delta ( Δ ), and inverted delta ( ∇ ) in its syntax. As a curious but unrelated coincidence, the IBM name for the inverted delta is DEL—the same as the control character DEL (Delete) at 0x7F.^[Wikipedia article [Digital encoding of APL symbols](https://en.wikipedia.org/wiki/Digital_encoding_of_APL_symbols#Character_repertoire) 3.4.2025]

The APL symbols appeared on some early IBM APL keyboards, like in the 1971 [IBM 3270](https://geekhack.org/index.php?topic=104046.0). VileR also notes that IBM's first desktop machines from the mid 1970s, the [5100/5110/5120](https://voidstar.blog/the-ibm-5100-5110-mame-emulators-how-to/), were intended for APL from the get go, but there's no evidence that they ever influenced the development of IBM PC in any way, even if they are in the same model numbering system (IBM PC is 5150). It's also worth noting that IBM's APL character sets, like the [Code Page 909](https://web.archive.org/web/20130121103608/http://www-03.ibm.com/systems/resources/systems_i_software_globalization_pdf_cp00909z.pdf), sometimes include both delta *and* the house symbol. As such, it doesn't seem like there's a strong connection between the house and APL's delta.

#### Theory #8: It IS delta?!

Hold on... let's examine our basic assumptions. How can we be *absolutely certain* that IBM even intended for the glyph <span class="cp437-inline">⌂</span> at 0x7F to represent a house? What if the whole premise is wrong?

When I browsed through the original 1981 [*Technical Reference*](https://www.minuszerodegrees.net/manuals/IBM_5150_Technical_Reference_6025005_AUG81.pdf) manual for IBM PC, I realized that there's no mention of a "house" anywhere. In fact, the character explicitly listed at position 0x7F isn't a house at all—it's a delta ( Δ )!
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

Was it intended to be delta all along?

But of course it's not so simple. The 1982 edition of [*IBM BASIC Manual*](https://archive.org/details/IBMBASICAV1.10Manual/page/n483/mode/2up) displays the code point 0x7F quite unambiguously as a **house**!

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

What is going on? Was the 1981 Technical Reference printed in error, and corrected later? It doesn't seem like it: the 1984 revised edition of the [IBM PC *Technical Reference*](https://archive.org/details/IBMPCIBM5150TechnicalReference6322507APR84/page/n246/mode/1up) still display 0x7F as **delta**. There's no mistake, even the **text label** of 0x7F is "delta", as listed in the printed System BIOS character generator routines.

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

<figure class="u-image-full-width">
    {% image
        "./src/assets/images/0x7f/systembios.png",
        "crisp",
        "0x7F is labeled as delta",
        "(min-width: 30em) 50vw, 100vw",
        true
    %}
    <figcaption>All IBM PC Technical References since 1981 label 0x7F as delta in the system BIOS character generator routines.</figcaption>
</figure>

Still, the original 1981 [IBM PC System BIOS](https://int10h.org/oldschool-pc-fonts/fontlist/font?ibm_bios) *font* clearly renders it as a **house**: <span class="cp437-inline">⌂</span>. It seems very unlikely that anybody would actually associate the shape of it with the delta character—let alone use the house character *as* delta in any scientific syntax.

Maybe it's just some careless disparity between printed material and the actual font rendering? It isn't so either: 0x7F isn't consistently rendered as a house in every CP437 font, as can be seen from the following chart, which display the 0x7F character from various [CP437-compatible VGA fonts](https://github.com/viler-int10h/vga-text-mode-fonts/releases/tag/2020-11-25): 

<div class="u-image-full-width">
  <character-viewer-cp437></character-viewer-cp437>
</div>

While most of the fonts render 0x7F as a house, some of them are quite undeniably deltas (listed near the bottom of the chart). 

To make matters more confusing (or maybe in an attempt to prevent further confusion?), in 1984, IBM's own authoritative registry of glyph names ([GCGID](https://public.dhe.ibm.com/software/globalization/gcoc/attachments/CP00437.txt)) officially names 0x7F in CP437 as **"small house"**. In fact, as Michael Walden pointed out to me, originally *the whole character set had no name*, until this registration. Code Page 437 was not born as a real code page at all—it was merely a bunch of graphical glyphs, stored in the Read-Only Memory (ROM) of the System BIOS, available for the computer to use immediately on booting. Because the characters were implemented in the hardware, the font, and its derivatives, were often just called "OEM fonts", where OEM stands for "Original Equipment Manufacturer". All "official" IBM names, for the character set and its glyphs, were given retroactively in 1984.

But even officially naming the Code Page 437, and its glyphs, was not enough to correct their rendering. In 1986, the [*IBM PC Convertible*](https://int10h.org/oldschool-pc-fonts/fontlist/font?ibm_conv) system font renders 0x7F as delta, and the 1986 [IBM PC/AT *Technical Reference*](https://bitsavers.org/pdf/ibm/pc/at/6183355_PC_AT_Technical_Reference_Mar86.pdf) still lists and labels 0x7F as delta. Even in 1989, the Olivetti [*MS-DOS Software Installation Guide*](https://www.minuszerodegrees.net/manuals/Olivetti/Olivetti%20-%20MS-DOS%203.30%20-%20Software%20Installation%20Guide.pdf) renders the 0x7F as delta.

#### Theory #9: It MUST be a delta because even the GREEK delta looks like a house!

As I was taking another look at VileR's oldschool PC fonts page on the original [IBM BIOS font](https://int10h.org/oldschool-pc-fonts/fontlist/font?ibm_bios), something caught my eye. Because the IBM PC was sold in many non-English speaking countries, the original character set had language specific variants. The Greek language IBM PC of course added support for additional greek characters—including the actual Greek uppercase delta. And—this came to me as a complete surprise—its glyph looks *even more* like a house, than the actual house character!

<figure class="u-image-full-width">
    {% image
        "./src/assets/images/0x7f/Codepage-737.png",
        "crisp",
        "The greek delta is displayed as a house!",
        "(min-width: 30em) 50vw, 100vw",
        true
    %}
    <figcaption>The Greek variant of IBM PC's font (Code Page 737) renders the greek delta as a house!</figcaption>
</figure>

That can't be a mistake, can it? If even the actual Greek uppercase delta is, quite unmistakenly, rendered as a house, then the theory that DEL is just a badly formed uppercase Greek delta character with the bottom corners cut off (due to a lack of horizontal pixels) starts to seem more and more convincing.

#### Theory #10: It's no mistake

And then, a [commenter on hackernews](https://news.ycombinator.com/item?id=43669273) pointed out that nearly all characters that have steep diagonal lines are rendered the same. The Greek capital letter lambda (Λ) is similarly drawn as the house character: <span class="ibmpcbios-inline">Λ</span>. The increment symbol, represented by delta (∆), also looks like the house: <span class="ibmpcbios-inline">∆</span>. And the same angular diagonal is present in letters <span class="ibmpcbios-inline">A, V, N, 7</span> and <span class="ibmpcbios-inline">Æ</span>. All characters with diagonals at any other angle than 45˚ are *forced* to 45˚ angles by extending them with straight lines, perhaps to avoid "jaggies" on low-res CRTs, as mentioned by VileR. Because the same design feature appears in so many characters, it starts to look less like a mistake, and more like a deliberate decision. But what works for <span class="ibmpcbios-inline">A</span> and <span class="ibmpcbios-inline">V</span>, which still are clearly read as A and V, doesn't work so well for letters that are not so common, like <span class="ibmpcbios-inline">∆</span> and <span class="ibmpcbios-inline">Λ</span>. So, maybe DEL was supposed to be DELta, but it wasn't *mistakenly* rendered like a "small house"—it was just a *bad decision* to draw all diagonals dogmatically at 45˚. As a consequence, nobody associated the delta shape with a delta, and thought it looked more like a house, and because by 1984 that association had already stuck, IBM decided to retroactively name it a "small house". After all, the character set already had "not serious" characters like the smiley.

(Some diagonals were later adjusted for the 1987 IBM VGA version of the font: the Greek letters <span class="cp437-inline">Δ, Λ </span> are more pronounced, while the increment-delta stays the same <span class="cp437-inline">∆</span>) 

::: wrap note
##### Reader's theories: It represents a tab stop, or a similar part
After I published the article, many people commented that the house reminded them of some *physical* part of earlier typewriters and word processors. 

Dru Nelson suggested it be related to the cursor indicator from the original IBM selectric typewriter. Indeed, it does look like it! 

<figure class="u-image-full-width">
    {% image
        "./src/assets/images/0x7f/selectric.jpg",
        "",
        "IBM Selectric typewriter has a cursor which looks like the house symbol.",
        "(min-width: 30em) 50vw, 100vw",
        true
    %}
    <figcaption>IBM selectric typewriter from 1961 (Image ©: <a href="https://www.pressebox.com/pressrelease/ibm-deutschland-gmbh-bblingen/IBM-Celebrates-50th-Anniversary-of-Selectric-Typewriter/boxid/437871" target="_blank">IBM Deutschland GmbH</a>)</figcaption>
</figure>

But, I'm not quite convinced. Firstly, if the house was meant as a cursor (shown underneath the character position), then why wasn't it positioned touching the top edge of the character cell? The house seems to always be positioned in the middle of the character cell instead. Secondly, the character was named "delta" in the System BIOS, so if it was meant to be a cursor, wouldn't they have named it so? Thirdly, the CP437 character set already includes an upwards triangle <span class="ibmpcbios-inline">▲</span> and <span class="ibmpcbios-inline">^</span>, both of which could work as cursor indicators already. Fourthly, IBM PC indicates its cursor position with a blinking underline—the same as Wang terminals—so there was no need for a separate "cursor" symbol.

Robert Kersbergen also suggested to me in an email that the house resembles the "scope" of some typewriters (used to position the typeball or type hammer), but this theory is also shaky for the same reasons as above.

Many people commented that it looks like a tab or margin stop, but so far no-one has managed to name or provide any pictures of such use *before* IBM PCs launch in 1981. Maybe people remember it from word processors that came *after* 1981?

<figure class="u-image-full-width">
    {% image
        "./src/assets/images/0x7f/msword.jpg",
        "",
        "Margin stops in MS Word.",
        "(min-width: 30em) 50vw, 100vw",
        true
    %}
    <figcaption>The margin stops in MS Word after version 6.x</figcaption>
</figure>

Sure, the margin stops in MS Word do resemble the house character quite a bit. But, this is a relatively recent development. The house-resembling-markers were added to Word in 1993 for version 6. Before that, MS Word indicated tab and margin stops with simple triangles, numbers, and square brackets. 

Another popular word processor, [WordPerfect](https://youtu.be/ML_GoEUhs4A?t=358), indicated tab stops with <span class="ibmpcbios-inline">▲</span>, and [WordStar](https://youtu.be/5kYfsP_WKLY?t=365) used the exclamation point (<span class="ibmpcbios-inline">!</span>). 

There is, however, IBM's [DisplayWrite](https://www.dosdays.co.uk/topics/Software/ibm_displaywrite.php), which *did* use the house symbol to indicate the *center line*, but it came out in 1984, three years after the launch of IBM PC. It seems unlikely that IBM would have anticipated its use for this minor purpose, especially considering that IBM's earlier computer, the DisplayWrite**r** from 1980, indicated the center line, not with a house, but [with a triangle](https://www.youtube.com/watch?v=YnU_woucebE&t=169s).

<figure class="u-image-full-width">
    {% image
        "./src/assets/images/0x7f/displaywrite_1.png",
        "",
        "Tab markers in MS Word.",
        "(min-width: 30em) 50vw, 100vw",
        true
    %}
    <figcaption>IBM's DisplayWrite for DOS from 1984 uses the house symbol to indicate the center line.</figcaption>
</figure>

All in all, while people might nowadays associate the house symbol with a tab marker, quite likely based on their memories of MS Word, there doesn't seem to be any concrete evidence of its use for this purpose before 1981. (For further evidence, send me an email: hlotvonen@gmail.com)

:::

#### Delta theory doubt

There is just one thing I cant't quite comprehend. Let's assume for a second that DEL was supposed to be delta. Did IBM seriously *not* try different ways of drawing a delta, before settling on the house glyph? With a little bit of effort, it is completely possible to draw a convincing delta, even in 8&times;8 pixel space. Here's a chart to compare. The first three are IBM's renditions of the "delta", the rest are my own attempts I threw together in 10 minutes. I think that any of the versions I drew could have been more clearly understood as deltas. So, if IBM *did* go through some versions of the delta, they would have likely landed on the same, or very similar shapes to mine—yet they *still* chose the house-looking glyph to represent it. Why would they do that?

Click on the patterns to change the view. You can also edit/draw on the canvas, see if you can come up with something better:

<character-editor></character-editor>

### What DO we know?

It seems the only thing we know for certain is that even IBM was confused, or just didn't care, whether 0x7F should be a delta, or a house. The fact is, that while the character at code point 0x7F in the 1981 IBM PC's System BIOS font might look like a house, we can't definitely claim that it was *intended* to look like a house. The *only* thing we can say for sure, is that 0x7F has been labeled as "delta" in the IBM PC's System BIOS since 1981, and that the IBM's official registry named it "small house" in 1984.

What does this tell us? The consistent *inconsistencies* in IBM's technical documentations, fonts, and registries, sounds like a classic case of miscommunication between the different departments of IBM. Did the font's designers intend 0x7F to be a house, but the engineers interpreted it as a delta, mislabeling it in the System BIOS? Or did the designers intend it to be delta, but the botched rendering made it look like a house, and publications like the *IBM BASIC Manual* perpetuated the wrong interpretation until IBM decided to make it official in the registry? Or what? There is no clear answer.

::: wrap note

##### Sidenote
The house symbol ( ⌂ ) was added to Unicode in [version 1.1.0](https://www.unicode.org/versions/Unicode1.1.0/appI.pdf) in 1993. It was given the Unicode value [U+2302](https://graphemica.com/%E2%8C%82).

:::

Whether IBM meant 0x7F to be a delta, or a house, remains a mystery. But it doesn't really matter. *What* the house character looks like, is, after all, just a matter of interpretation. The legacy of CP437 is not defined by IBM's intentions, but by all the different ways designers, programmers, ASCII artists and other users adopted it. It is delta *and* house, but *also* rocket, players ammo, gun, spike, energizer, or whatever else we want it to be. As IBM engineer Charles E. Mackenzie observes in *Coded Character Sets, History and Development*: 

> "There is an aspect of human nature which surfaces in data processing. Experience has shown that if graphics are provided on a computing system, they will be used in one way or another by customers, even if they have no intrinsic meaning."^[Mackenzie, Charles E. (1980): [*Coded Character Sets, History and Development*](https://archive.org/details/mackenzie-coded-char-sets/page/99/mode/1up)]

This is probably best exemplified by how the house character is used in PC ASCII art. In the hands of ASCII artists, the character goes *beyond* meaning and returns to pure form, demonstrating that there is no shape that has an "intrinsic" meaning, until we give them meaning.

To see how <span class="cp437-inline">⌂</span> was used in PC ASCII art, I wrote a script that scanned the [16colo.rs](https://16colo.rs/) archive for any artwork containing 0x7F. Here are some of my favourites:

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

---

If you enjoyed this read, you might also want to check out the "main" article which digs deeper into the history of DEL character, and how it was represented and used in the Amiga computers: [The origins of DEL (0x7F) and its Legacy in Amiga ASCII art](../the-origins-of-del-0x7f-and-its-legacy-in-amiga-ascii-art/)