---
title: The origins of DEL (0x7F) and its Legacy in Amiga ASCII art
date: 2025-01-06
description: "A micro-history of the character DEL (0x7F) as it appears in Amiga's Topaz font, and explorations on its use in Amiga ASCII art."
cover: './src/assets/images/topaz-thumb.png'
permalink: '/{{ title | slugify }}/'
tags:
    - Essay
    - ASCII Art
    - Fonts
    - History
webcomponents: 
    - ascii-viewer-127
    - ascii-viewer
    - paper-tape
    - ansi-viewer
    - textarea-nobs
    - character-viewer
---

## Brief Summary

tl;dr: This article is a detailed (but not exhaustive) micro-history on the character DEL (0x7F) as it appears in Amiga's Topaz font (<span class="amiga-inline"> ⌂ </span>), and how it was used in Amiga ASCII art between 1993–2005.

In [part 1](#part-1), **"What is DEL"**, I try to form a comprehensive understanding of how DEL(ETE) originated as a way to obliterate errors on punched tape, and how it found use as a timing control for mechanical printers.

In [part 2](#part-2), **"The graphics of DEL"**, I take a closer look at how normally non-printing characters, like DEL, were given a standardized visual representation through ECMA-17 in 1968, and how DEL was *actually* represented in various early bitmap fonts between 1970s–1990s.

[Part 3](#part-3), **"DEL in Amiga ASCII art"**, is about the particular shape and design of Topaz's <span class="amiga-inline">⌂</span>. I analyze over 3000 Amiga ASCII artworks made between 1993–2005 to see how DEL was used, and showcase some of them.

I also wrote an bonus article focusing specifically on IBM PC's DEL: [Why is there a "small house" in IBM's Code page 437?](https://blog.glyphdrawing.club/why-is-there-a-small-house-in-ibm-s-code-page-437/).

**Keywords**: DELETE character, Amiga ASCII art, textmode, bitmap fonts, character sets, control characters, ASCII, ECMA-17, punched tape, telegraph, ITA2

::: wrap note
If you find any errors, incorrect understandings, or if you think I've simplified some things too much, or if you have some information that you think would be valuable to add, or have any comments or thoughts at all, please send me an email at **hlotvonen@gmail.com**. I greatly appreaciate all contacts, and if something needs fixing I would gladly update the article with proper credit.

I would like to sincerely thank [Michael Walden](https://mw.rat.bz/), who made me aware of the weirdness of DEL and **greatly** helped me with this research, and [VileR](https://int10h.org/blog/), whose insights on bitmap fonts and DEL were invaluable.
:::
---

# PART 1
# What is DEL (0x7F)?

<ansi-viewer content="[0m                                                                                [0m
                                                                                [0m
                                                                                [0m
                                                                                [0m
                                                                                [0m
                                                                                [0m
                                                                                [0m
                                                                                [0m
                       [38;2;15m___[38;2;7m_      ____      ____     [38;2;15m_[38;2;7m____                       [0m
[38;2;7m                     [38;2;15m/[38;2;0m[48;2;15m»   [38;2;7m¼[38;2;0m[48;2;7m»[48;2;8m7[38;2;7m[49m  [38;2;15m/[38;2;0m[48;2;15m» [38;2;15m[48;2;7m▐[38;2;0m  [48;2;8m»7[38;2;7m[49m  /[38;2;0m[48;2;15m» [48;2;7m  [38;2;8m¼[38;2;0m[48;2;8m»[38;2;8m[49mb[38;2;7m  /[48;2;15m¼⌂[38;2;0m[48;2;7m  [38;2;8m⌂[38;2;0m[48;2;8m»[38;2;8m[49mb[38;2;7m                     [0m
[38;2;7m[49m                    [38;2;15m/[38;2;0m[48;2;15m _   _[48;2;7m [48;2;8m|[38;2;7m[49m [38;2;15m/[38;2;0m[48;2;15m__ [48;2;7m __[48;2;8m_|[38;2;7m[49m /[38;2;0m[48;2;15m _[48;2;7m   _[48;2;8m [38;2;8m[49m⌂[38;2;7m /[38;2;0m[48;2;15m _[38;2;15m[48;2;7m:[38;2;0m  _[48;2;8m ⌂[38;2;7m[49m                     [0m
[38;2;7m[49m                    [38;2;15m7[38;2;7m[48;2;15m [38;2;0m░//[48;2;7m ░ [48;2;8m|[38;2;7m[49m [38;2;15m7[38;2;0m[48;2;15m`░//[48;2;8m`░'|[38;2;7m[49m 7[38;2;0m[48;2;7m»[48;2;15m¼/[38;2;15m[48;2;8m/[38;2;0m'¼»[38;2;8m[49m⌂[38;2;7m 7[48;2;15m¼[38;2;0m¬/[48;2;7m/[48;2;8m ¬ ⌂[38;2;7m[49m                     [0m
[38;2;7m[49m                    [38;2;15m|[38;2;0m[48;2;15m (⌂[48;2;7m)   [48;2;8m|[38;2;7m[49m [38;2;15m|[38;2;0m[48;2;15m (⌂[48;2;8m)[48;2;7m [38;2;8m¼[38;2;0m[48;2;8m |[38;2;7m[49m [38;2;15m|[38;2;0m[48;2;15m (⌂[48;2;8m)[38;2;15m[48;2;7m [38;2;8m¼[38;2;0m[48;2;8m [38;2;8m[49m⌂[38;2;7m ª[38;2;0m[48;2;15m ([48;2;7m⌂[48;2;8m)   ⌂[38;2;7m[49m                     [0m
[38;2;7m[49m                    [38;2;15m|[38;2;0m[48;2;15m  _ [38;2;7m¼[38;2;0m[48;2;7m' [48;2;8m|[38;2;7m[49m [38;2;15m|[38;2;0m[48;2;15m  _[38;2;8m[48;2;7m¼[38;2;0m [38;2;8m¼[38;2;0m[48;2;8m |[38;2;7m[49m [38;2;15m|[38;2;0m[48;2;15m _[48;2;7m_[38;2;8m¼[38;2;0m [38;2;8m'[38;2;0m[48;2;8m [38;2;8m[49m⌂[38;2;7m |[38;2;0m[48;2;15m [38;2;15m[48;2;7m⌂[38;2;8m_  [38;2;0m[48;2;8m' ⌂[38;2;7m[49m                     [0m
[38;2;7m[49m                    [38;2;15m|[38;2;0m[48;2;15m »-¼[38;2;7m [38;2;15m[48;2;7m [38;2;0m [48;2;8m|[38;2;7m[49m [38;2;15m|[38;2;0m[48;2;15m »=[48;2;7m¼  [48;2;8m |[38;2;7m[49m [38;2;15m|[38;2;0m[48;2;15m [38;2;15m[48;2;7m¼¿[38;2;0m¼  [48;2;8m [38;2;8m[49m⌂[38;2;7m |[38;2;0m[48;2;15m [48;2;7m»-[48;2;8m¼[38;2;8m[48;2;7m [38;2;7m[48;2;8m⌂[38;2;0m ⌂[38;2;7m[49m                     [0m
[38;2;7m[49m                    [38;2;15m|[38;2;0m[48;2;15m` [38;2;7m [38;2;0m  [48;2;7m ,[48;2;8m|[38;2;7m[49m [38;2;15m|[38;2;0m[48;2;15m`  [48;2;7m   [48;2;8m,|[38;2;7m[49m ª[38;2;8m[48;2;15m [48;2;7m [38;2;0m   [38;2;8m¼[38;2;0m[48;2;8m,[38;2;8m[49m⌂[38;2;7m ª[38;2;0m[48;2;15m`[38;2;15m[48;2;7m⌂[38;2;0m  [38;2;8m⌂[38;2;0m[48;2;8m ,⌂[38;2;7m[49m                     [0m
[38;2;7m[49m              [38;2;8m_,[38;2;7m [38;2;8m. d[38;2;15m|[38;2;0m[48;2;15m     [48;2;7m  [48;2;8mª[38;2;8m[49m.[38;2;7mª[38;2;0m[48;2;15m   [48;2;7m   [48;2;8m ª[38;2;8m[49m:[38;2;15m|[38;2;0m[48;2;15m [48;2;7m     [48;2;8m [38;2;8m[49m⌂,[38;2;7m|[38;2;0m[48;2;15m [38;2;15m[48;2;7m⌂[38;2;0m  [38;2;8m⌂[38;2;0m[48;2;8m  ⌂[38;2;8m[49m.░_.[38;2;7m [38;2;8m_[38;2;7m               [0m
[38;2;7m[49m                                                                                [0m
                                                                                [0m"></ansi-viewer>

## Introduction

One day I received an unexpected email from Michael Walden.

He had read my BA thesis on [Amiga ASCII art](https://blog.glyphdrawing.club/amiga-ascii-art/) and wanted to point out something curious that I had missed. The character set used in AmigaOS is identical to the  <abbr title="Latin alphabet No. 1">ISO/IEC 8859-1</abbr> character encoding standard^[[ISO/IEC 8859-1](https://en.wikipedia.org/wiki/ISO/IEC_8859-1#History) is probably better known nowdays as Latin Alphabet No.1 or just Latin-1, and when Commodore adopted it, it was known as ECMA-94.], *except* for one character: the character at code point 0x7F. 

This observation might seem trivial, but I was intrigued. This character has always been somewhat of a mystery to me. Let me explain&hellip;

### Diagonals in Amiga ASCII Art

The default font of Amiga, Topaz, is really good for making ASCII art in "outline" style because many of its characters "touch" the edges of the 8&times;16 pixels-per-character cell. Slashes placed diagonally form a continuous slanting line, and rows of underscores form straight horizontal lines. Combined in a textmode grid, these characters can be assembled into an endless variety of shapes, forming the basis for the majority of Amiga ASCII art. The seamless connectivity of the glyphs, as a result of their systematic familiarity, is what makes the unique aesthetic of Amiga ASCII art:

<pre class="amiga" onclick="this.classList.toggle('highlight')">
                                                                               
        _____  _______  _________  _____     _____  _____  _____  ________     
       _\__  \/       \/___/     \_\__  \   _\__  \/     \/     \/___/___/     
      / _ /  /  /  /  /   / __\__/ _ /  /  / _ /  /__ \__/   /__/   /   /__    
   /\/  /   /  /  /  /   /  \   /  /   //\/  /   /  /   /   /  /   /   //_/\   
,/\\/\_____/\_/\_/\_/\__/\_____/\_____/ \/\_____/\_____/\_____/\__/\__/ \_\/&lt;>,
                                                                               
</pre>

Besides the slashes and underscores, there's a total of 256 characters to play with. Every diagonal in every character of Topaz follows the same basic rule: two pixels up, **one** to either side (e.g <span class="amiga-inline">{% asciiart %}< > / \ % X Y Z K ^ 2 4{% endasciiart %}</span>)^[There are a few Topaz versions that slighly differ from each other, but the 8&times;16 Topaz+ fonts, and its variants, are the de facto font for Amiga ASCII art]. All, *except* for one character: the character at code point 0x7F. 

<figure class="u-image-float-right-inline">
    {% image
        "./src/assets/images/0x7f/del-vs-slash.png",
        "crisp",
        "Angle comparison between DEL and slash characters",
        "(min-width: 30em) 50vw, 100vw",
        true
    %}
</figure>

Topaz represents 0x7F as two diagonal lines (&thinsp;<span class="amiga-inline">⌂</span>&thinsp;)^[Different Kickstart ROM versions shipped with slightly different versions of the Topaz font, but all of them have checker pattern or diagonal lines at 0x7F. Check the comparisons at [Heckmeck's blog post on Amiga Topaz](https://heckmeck.de/blog/amiga-topaz-1.4/)], which makes it very distinct compared to all the other characters because of its unusual angle: <span class="amiga-inline">⌂</span> is the only glyph where the diagonals go two pixels up and **two** pixels to the right. Because 0x7F doesn't follow Topaz's inherent geometric "rules", it doesn't tile well, which makes it tricky to use in Amiga ASCII art. It's like a puzzle piece that belongs to a different set, yet finding uses for it is an interesting challenge (I'll come back to this in [part-3](#part-3)).

<pre class="amiga" onclick="this.classList.toggle('highlight')">
                                          
   /      ⌂⌂ ⌂⌂⌂⌂⌂ ///// /\/\/ ⌂\⌂\⌂ ⌂\⌂/⌂ 
  /     ⌂⌂   ⌂⌂⌂⌂⌂ ///// \/\/\ ⌂\⌂\⌂ /⌂\⌂\ 
 /    ⌂⌂     ⌂⌂⌂⌂⌂ ///// /\/\/ ⌂\⌂\⌂ ⌂/⌂\⌂ 
/   ⌂⌂       ⌂⌂⌂⌂⌂ ///// \/\/\ ⌂\⌂\⌂ \⌂/⌂/ 
                                          
</pre>

Is it a coincidence that the *same* character that deviates from the standards, is also the character that deviates visually from all the other characters? Or is there something more to it?

### The Contradiction of a Non-Printable Glyph
As I was taking a closer look at the <abbr title="Latin alphabet No. 1">ISO/IEC 8859-1</abbr> standard, I realized that 0x7F is the code point for the control character DELETE (DEL), which is a **non-printable** character! According to DEL's definition, it's a character that "is supposed to do nothing"^[Definitions of DEL: [Wikipedia](https://en.wikipedia.org/wiki/Delete_character) and [Aivosto](https://www.aivosto.com/articles/control-characters.html#DEL)], so its visual representation is *supposed* to be empty and undefined. 

But... if DEL is supposed to do nothing, and look like nothing, then **why does Topaz have a glyph for it?** I would assume that if a character has a visual representation, then it must have *some* meaning or function, right? But if so: what is it? What reasons did Topaz's designers have that justified diverging from the standards, and give DEL a distinct visual representation? Why not follow the standards and just leave it empty?

Even though I had used <span class="amiga-inline">⌂</span> quite a bit in ASCII art, I had never realized that *everything* about this strange glyph—from its design to its mere existence—seemed to be in contradiction. Maybe Walden is onto something.

<figure class="u-image-full-width">
    {% image
        "./src/assets/images/0x7f/VERSUS3.png",
        "crisp",
        "Comparison between ASCII and Amiga TOPAZ",
        "(min-width: 30em) 50vw, 100vw",
        true
    %}
    <figcaption>Comparison between ASCII (standard) and Amiga TOPAZ (font) </figcaption>
</figure>

These questions kept bugging me, so I wanted to get to the bottom of understanding the reasons for <span class="amiga-inline">⌂</span> existance in Amiga's Topaz at the code point 0x7F. I wanted to know: **what is 0x7F, and why does it look like it does?** Because I'm mainly interested in the typographic and artistic application of Topaz in making Amiga ASCII art, I also wanted to know: **what is the creative potential of <span class="amiga-inline">⌂</span> in Amiga ASCII art**? 

## What is DEL?

What even is DEL? Why does it exist? What is its purpose? 

Aivosto's comprehensive article on [Control characters in ASCII and Unicode](https://www.aivosto.com/articles/control-characters.html#DEL) defines it as follows:

> "Outdated. An ignorable character originally intended for erasing an erroneous or unwanted character in punched tape. In this standard use, DEL wouldn't affect the information content of data, even though it may have affected the information layout and the control of equipment. Standards also allowed DEL to be used as media-fill or time-fill (even though a NUL may be more appropriate)."

I roughly know what punched tape is, but I was born too late to truly understand how it was used, so this definition raises more questions than it answers. What does it mean it's outdated? What does it mean that it's ignorable? What does it mean that it "doesn't affect content, but may affect layout"? What is "control of equipment"? What are media-fill and time-fill? What is NUL and why would it be more appropriate? Wikipedia doesn't help much. The entry on [Delete character](https://en.wikipedia.org/wiki/Delete_character) states that "it is supposed to do nothing", while the 1987 *C programmer's guide to serial communications*^[Campbell, Joe (1987): [C programmer's guide to serial communications](https://archive.org/details/cprogrammersguid00camp/page/22/mode/2up), p.22] says that DEL is like NUL in almost everything, but NUL is **not** interchangeable with the word "null", which **is** a synonym for "nothing". There's a lot of very confusing terms and concepts here.

To understand all this, and work my way up to answering the question of "why is DEL represented as <span class="amiga-inline">{% asciiart %}⌂{% endasciiart %}</span> in AmigaOS", I needed to ask more basic questions: How did early telecommunication systems develop, and what effect did they have on the design of modern digital communications?

### The Evolution of Character Encodings

It all starts in the early 1800s when scientists discovered that electric current could transmit signals nearly instantaneously over long distances, which lead to the idea of using it for sending messages. There was a problem though: how do you *encode* the alphabet into a format that could be sent over a wire, and reliably *decoded* and reconstructed on the other end?

There were multiple experiments, Morse code being the most successful at first. But, a more lasting and practical solution came in the form of character encoding systems developed during the mid 1800s. The grand idea was simple but ingenious: each character (a letter, number, or other typographic symbol) could be represented as a **fixed-length sequence of binary digits (bits)**.

::: wrap note 
##### What's a bit?
Bits can be represented with any mechanism capable of being in two mutually exclusive states. In written format, they are most often represented with numbers 0 and 1. Transmitted, it could be implemented as electric current switching between on-and-off states, or as distinct frequency shifts in telephone or radio transmission. On paper tape, a bit sequence can be represented as a combination of holes and spaces. In this article I will use ⓪-bit to represent an unpunched space (0), and a ❶ to represent a hole punched through paper (1).
:::

#### The 5-bit Code of ITA2

In the 1870s a french telegraph engineer, Émile Baudot, develops the Baudot code, and in 1901 Donald Murray refines it into what became known as *ITA2* (International Telegraph Alphabet No. 2). ITA2 is a 5-bit code, which means that each character is assigned to a specific sequence of five bits. 

On its own, five bits can represent only 32 elements (2<sup>5</sup> = 32 code points), which is not quite enough to handle all letters, numerals and punctuation needed for basic communication in English. To alleviate the limited space available in five bits, ITA2 employs a "locking shift scheme" to switch between two modes: in **letter** mode bit sequences represent letters from the Roman alphabet, and in **figure** mode the same bit sequences represent numerals and various punctuation marks. This effectively doubles the amount of printable characters to 56 (some are reserved for special characters). The two shifts resemble the modern day use of the SHIFT key to access lowercase and uppercase characters.

<figure class="u-image-full-width">
    {% image
        "./src/assets/images/0x7f/ITA2.png",
        "crisp",
        "ITA2 Code",
        "(min-width: 30em) 50vw, 100vw",
        true
    %}
    <figcaption>ITA2 character encoding table. The binary sequences (the red dots) represent letters in letter mode (shown in cyan), and numbers, punctuation and other miscellaneous characters in figure mode (shown in yellow).</figcaption>
</figure>

ITA2 code was mostly used in special telegraph machines equipped with keyboards that were connected to tape perforators, typewriter-like printers, or both. A blank tape can be considered to contain only NUL characters, which are represented by five unpunched spaces (⓪⓪⓪⓪⓪). When an operator strikes a key, the tape perforator punches holes corresponding to the character, into the tape, *overpunching* the NUL characters. The pattern of five punched holes (❶❶❶❶❶) activates the letter mode and ❶❶⓪❶❶ activates the figure mode. Any binary sequence following a mode shift prints the character in that mode. For example, ⓪⓪⓪❶❶ prints *A* if letter mode is activated, or *-* (dash) if figure mode is activated instead.

<figure class="u-image-full-width">
    {% image
        "./src/assets/images/0x7f/Model_14_Typing_and_Nontyping_Reperforators.jpg",
        "crisp",
        "A paper reperforator would also print the characters on the tape, which was quite useful!",
        "(min-width: 30em) 50vw, 100vw",
        true
    %}
    <figcaption>A paper reperforator would also print the characters on the tape, which must have been quite useful! From the 1947 <a href="https://archive.org/details/nrf_Model_14_Typing_and_Nontyping_Reperforators_TM_11-2223_1947/page/14/mode/1up" target="_blank">Model 14 Typing and Nontyping Reperforators</a> technical manual.</figcaption>
</figure>

#### Correction of Errors on Punched Tape

Writing messages like this is slow and error-prone. There is no "undo" on punching a hole through paper. A teleprinter manual from 1958 estimates that "in manually-prepared unchecked tape one error may be expected to occur in every 300 to 2000 characters."^[Creed & Company Limited (1958): [*An introduction to Creed teleprinters and punched tape equipment*](http://www.samhallas.co.uk/repository/telegraph/introduction_teleprinters_1958.pdf) p.42], which seems like a lot, but is likely far fewer than what a typical person would make today. 

Write the previous paragraph in the textbox below to see how few you errors make while typing (I've disabled the <kbd>Backspace</kbd> key):

<textarea-nobs placeholder="Type something, like the paragraph above"></textarea-nobs>

If you made no mistake, congratulations! But more likely, you made at least one typo. Not being able to simply erase errors feels *weird*. Nowdays, with ubiquitous spell-checking and auto-correct, we take text deletion and editing for granted.

Obviously, even back in the day, operators needed *some* way to correct typing errors. With the original Baudot code, errors had to be literally cut out of the tape, and corrections pasted back^[Herbert, Thomas Ernest (1920): *Telegraphy; a detailed exposition of the telegraph system of the British post office* Scan by [Internet Archive / Google](https://archive.org/details/TelegraphyADetailedExposition/page/481/mode/2up) p.482]. A simpler, and more common, practice was to follow an error with a recognisable character sequence e.g. EEE or XXX, although it caused uncertainty on "how far back" should be ignored^[Ross, Hugh McGregor (1962): Letter 441/HMcGR/DB. Included in the "Source documents on the history of character codes, 1963-02", compiled by Eric Fischer, [on Internet Archive](https://archive.org/details/enf-ascii-1963-02/page/n39/mode/2up)].

::: wrap note
##### Sidenote
The manual tape-cutting process was also known as "rub-out" (a skeumorphic word that stems from rubbing out pencil marks with an eraser), and is the reason why the physical delete key was sometimes labelled as "rub-out".
:::

The improved ITA2 solved the problem with a clever trick: precisely *because* there is no "undo" on punching holes, all the operator has to do, is punch any erroneous part *full* of holes. This is done by reeling back the tape by pressing a lever, backtracking to the typo, and striking the letter-shift key (❶❶❶❶❶) over it. Conveniently, this action works on **any** character as they're all the same length in bits, and each includes at least one unpunched ⓪-bit.

What makes this solution so clever is how it exploits the fundamental way the telegraph system works. In normal operation, telegraph machines are kept idle in a "marking" state, with electrical current flowing continuously, producing a steady stream of ones (❶❶❶❶❶❶❶❶❶❶...). In this state, the machine doesn't advance the paper tape or cause any printing action; it does *nothing*. Only when the machine receives a zero bit (❶❶❶❶❶❶❶❶❶❶**⓪**...), it knows that a message is incoming.

So when the receiving machine encounters an all-ones pattern (❶❶❶❶❶) within a message, it either idles (just like in marking state) or, if it was in figure mode, shifts to letter mode. But if the machine is *already* in letter mode, shifting to letter mode again does nothing; the machine simply ignores those bits and continues from the next character. As a result, no trace of the deleted typo, not even a blank space, appears in the final printed message.^[Herbert, T. E. (1920). [Telegraphy: A detailed exposition of the telegraph system of the British Post Office](https://archive.org/details/TelegraphyADetailedExposition/page/481/mode/2up?q=%22rub%20out%22) (p.482)]

Here's a simplified ITA2 tape perforator simulator to demonstrate this. Try writing something. Press *Reset* to start a new message. **⨂** shifts to figure mode, and **⨀** shifts to letter mode. To correct a typo, *Reel* to the unwanted character, and press the letter mode symbol **⨀** on it.

<paper-tape></paper-tape>

#### The Usefulness of Wasting Time

Besides removing typing errors and shifting to letter mode, DEL is used as a "time-waster" character. Telegraph machines and teletypewriters typically process data at fixed timing intervals (like a metronome), rather than waiting for each operation to finish before starting the next one. This creates a timing problem: different operations take different amounts of time to complete. The DEL character solves this with its ability to tell the receiving machine to idle.

An operation that often needs such timing accommodations is when the printer carriage (= the mechanism that holds the paper) moves back to the left margin to start a new line, triggered by a combination of CR (carriage return) and LF (line feed). Because the **horizontal movement** of the carriage takes **longer** than the time it takes to process subsequent characters, the following character could be printed mid-movement, resulting in misaligned text (e.g., overlapping characters or text appearing at the wrong horizontal position). By inserting a DEL character right after CR and LF, the machine is instructed to idle for a brief moment, as the carriage completes its movement, before continuing printing. The processing delay caused by DEL characters, used to "synchronize" the data stream with the printer's physical capabilities, is why DEL is referred to as a "time-waster" or "time-fill" character.^[ANSI X3.4-1977: American National Standards Institute. ASCII Format for Information Interchange. [Adopted in FIPS PUB 1-2 by NIST, 1977.](https://nvlpubs.nist.gov/nistpubs/Legacy/FIPS/fipspub1-2-1977.pdf)]

For this reason, the ASCII standards also state that the "addition or removal of [DEL] characters may affect the information layout or the control of equipment, or both"^[ANSI X3.4-1977: American National Standards Institute. ASCII Format for Information Interchange. [Adopted in FIPS PUB 1-2 by NIST, 1977.](https://nvlpubs.nist.gov/nistpubs/Legacy/FIPS/fipspub1-2-1977.pdf), p.11], meaning that DEL characters could have a very important role in determining *where and when* text is printed, and should not be removed from the data.

Understanding how DEL actually functions in telegraphy clears up the confusion I had about statements that DEL is "ignorable" and "supposed to do nothing". Because initially I was interpreting these terms through everyday language, I thought that "nothing" meant "unimportant", and "ignorable" to mean it could be deliberately disregarded. But in the context of paper tape, mechanical devices, and character encodings, these terms just describe how DEL should be processed. When DEL is called "ignorable", it's not worthless—it's a specific instruction for the machine to "skip the character without action". When it "does nothing", it's not useless—it's actively preventing other operations from occuring. DEL's usefulness comes precisely from its ability to exist in a data stream *while* causing no processing action—making it not an absence of function, but a function *in itself*.

::: wrap note
##### Sidenote #1: DEL as line-fill
The practice of using DEL to instruct the machine to idle is sometimes referred to as "line-fill", because it fills the line (circuit), indicating that the line is active, but not sending information.^[Jennings, Tom (2023): [An annotated history of some character codes](https://www.sensitiveresearch.com/Archive/CharCodeHist/index.html#DEL) 19.02.2025] 

##### Sidenote #2: DEL as media-fill
DEL as "media-fill" refers to punching a series of DELs to create an easily noticeable visual mark on paper tape. This practice is commonly used to mark the end of a message to make it easy to tell which way the tape should be inserted into a tape-reader.^[https://archive.org/details/bitsavers_ferrantipemingMan1962_40324310/page/n135/mode/2up] It is also used as a "padding" to extend the tape.

##### Sidenote #3: Is DEL a control character?
The status of DEL as a control character is debatable. Some sources label DEL as a control character, others explicitly reject this categorization, and some just give up and call it a "special" character, or simply refer to it as "DEL" without taking a stance one way or another. According to the ASCII-1968 standard, "in the strict sense, DEL is not a control character", probably referring to the fact that it is not part of the control characters group (code points 0–31, also known as the C0 set) in the ASCII table, and doesn't directly control any device operations. But it's not a printable character either, so it's not to be put into a category with the rest of the graphic characters. The SPACE character is also not a graphic character, but it does have an important function in written language, unlike DEL. NUL, which is quite similiar to DEL, is part of the control characters group, but it's similarly debatable if NUL is an *actual* control character or not. But, NUL and DEL do have a significant and practical influence on the *timing* of operations. The processing of NUL and DEL characters takes time, which is **not** nothing.^[Campbell, J. (1987). C Programmer’s Guide to Serial Communications (p.21). [Internet Archive](https://archive.org/details/cprogrammersguid00camp/mode/1up)] For this reason, the way I see it, DEL *is* a control character—it controls time. For practical reasons it is not part of the C0 set, but that shouldn't affect its status as a control character.
:::

### ASCII immortalizes DEL

While ITA2 remained in use in telegraphy, the limited range of characters possible with 5-bit encoding was insufficient for the needs of emerging data processing technologies. By 1960, over 25 different character codes were used in computers and other systems in the US alone—most of them incompatible with each other. This created two pressing problems: individuals struggled to learn multiple, slightly different codes, while large organizations faced inefficiencies from maintaining incompatible systems that couldn't directly exchange data.^[Ross, Hugh McGregor (1961): Considerations in Choosing a Character Code for Computers and Punched Tapes. Included in the "Source documents on the history of character codes, 1960-1961", compiled by Eric Fischer, [on Internet Archive](https://archive.org/details/enf-ascii-1960-1961/page/n5/mode/2up)] A new unifying character set was urgently needed: one that would establish a standard for mapping bit combinations to characters. And so, in August 1960, this task was taken on by the American Standards Association (ASA), forming the *X3.2 subcommittee on Coded Character Sets and Data Format*.

The result was the *American Standard Code for Information Interchange*, a 7-bit (2<sup>7</sup> = 128 code points) character encoding system better known by its acronym ASCII. In the 1960s, computers relied primarily on physical media like punch cards, paper tape, and teletypewriters, so ASCII dedicated 33 of the 128 code points for managing these devices. ASCII preserved the earlier convention from ITA2 in assigning the final code point (127, where all seven bits are ❶) to *DEL*, maintaining its function as a physical obliteration of an undesirable punching on paper tape. 

Although ASCII only requires 7 bits, its values are commonly represented using two hexadecimal digits (equivalent to 8 bits). DEL's all-holes-punched pattern ❶❶❶❶❶❶❶ is thus padded with an extra ⓪-bit to become ⓪❶❶❶❶❶❶❶. In hexadecimal notation this pattern is written as **0x7F**, where *7* represents the first four bits (⓪❶❶❶) and *F* the last four bits (❶❶❶❶). The prefix *0x* is a convention from programming languages to denote hexadecimal numbers—without it, a value like 10 could be interpreted either as 10 (decimals) or 16 (hexadecimals).

<figure class="u-medium-width">
    <ascii-viewer-127></ascii-viewer-127>
    <figcaption>ASCII table laid out in four rows, combined with "paper tape" representation of the binary sequences, makes its system more understandable—even <a href="https://danq.me/2024/07/21/ascii/" target="_blank">elegant</a>. The first two bits (first two rows) vary, and the last five bits are static. This means that all control characters (par DEL) can be identified by two leading ⓪-bits, and that all uppercase and lowercase characters are identical, except uppercase characters start with ❶⓪ and lowercase characters with ❶❶. It's also the reason why in <a href="https://en.wikipedia.org/wiki/Caret_notation" target="_blank">caret notation</a> ESC is ^[, and DEL is ^?</figcaption>
</figure>

ASCII became immensely popular in facilitating the transfer of textual information across various systems and devices. Almost all of computer and character encoding systems developed after 1960s are based on ASCII (or are mostly ASCII compatible, IBM's [EBCDIC](https://en.wikipedia.org/wiki/EBCDIC) being a notable exception) for the first 127 code positions.^[*Control characters in ASCII and Unicode*, [Aivosto](https://www.aivosto.com/articles/control-characters.html) 19.2.2025] ASCII remained the most commonly used character set on the Internet until 2007 when it was overtaken by UTF-8^[Dubost, Karl (2008): UTF-8 Growth On The Web. W3C Blog. World Wide Web Consortium. [http://www.w3.org/blog/2008/05/utf8-web-growth/](http://www.w3.org/blog/2008/05/utf8-web-growth/) 19.2.2025.]. Even though ASCII itself is not widely used anymore, Unicode inherits the ASCII code points, thus cementing DEL to the 0x7F position in perpetuity.

But, neither ASCII nor Unicode defines the graphical representation of DEL, because it's a *non-printable* character. So the question remains: why does Amiga represent DEL with a diagonally striped glyph?

---

# PART 2 
# The Graphics of DEL

<ansi-viewer content="[0m                                                                                [0m
                                                                                [0m
                                                                                [0m
                                                                                [0m
                                                                                [0m
                                                                                [0m
                             [38;2;8m            [38;2;7m_______________                        [0m
[38;2;7m                                         |[38;2;0m[48;2;7m        [48;2;8m|[38;2;7m     [49m                        [0m
[38;2;7m[49m                                         |[38;2;0m[48;2;7m        [48;2;8m|[38;2;7m     [49m                        [0m
[38;2;7m[49m                                         |[38;2;0m[48;2;7m      _[48;2;15m⌂[48;2;8m|[38;2;7m     [49m                        [0m
[38;2;7m[49m                                         |[38;2;0m[48;2;7m    _[48;2;15m⌂»»[48;2;8m|[38;2;7m     [49m                        [0m
[38;2;7m[49m                                         |[38;2;0m[48;2;7m  _[48;2;15m⌂»»»»[48;2;8m|[38;2;7m     [49m                        [0m
[38;2;7m[49m                                         ª[38;2;0m[48;2;7m_[48;2;15m⌂»»»»»»[48;2;8m|[38;2;7m     [49m                        [0m
[38;2;7m[49m                                       [38;2;8m [38;2;15m_⌂[38;2;0m[48;2;15m»»»»»»⌂[48;2;8m»»[38;2;7m     [49m                        [0m
[38;2;7m[49m                                     [38;2;8m [38;2;15m_⌂[38;2;0m[48;2;15m»»»»»»⌂[48;2;8m»»[38;2;7m       [49m                        [0m
[38;2;7m[49m                                    [38;2;15m_⌂[38;2;0m[48;2;15m»»»»»»⌂[48;2;8m»»[38;2;7m    [38;2;0m [38;2;7m    [49m                        [0m
[38;2;7m[49m                                  [38;2;15m_⌂[38;2;0m[48;2;15m»»»»»»⌂[48;2;8m»»  [38;2;7m    [38;2;0m____[38;2;7m [49m                        [0m
[38;2;7m[49m                        [38;2;15m⌡>[38;2;7m      [38;2;15m_⌂[38;2;0m[48;2;15m»»»»»»⌂[48;2;8m»» [38;2;7m       [38;2;0m[48;2;15m|»»|[38;2;7m[48;2;8m [49m                        [0m
[38;2;7m[49m                       [38;2;15m<[38;2;8m[48;2;15m⌂[38;2;15m[49m [38;2;7m  [38;2;15m  _⌂[38;2;0m[48;2;15m»»»»»»⌂[48;2;8m»»   [38;2;7m       [38;2;0m[48;2;15m| ░|[38;2;7m[48;2;8m [49m                        [0m
[38;2;7m[49m                        [38;2;15mH[38;2;8m  [38;2;15m _⌂[38;2;0m[48;2;15m»»»»»»⌂[48;2;8m»»     [38;2;7m       [38;2;0m[48;2;15m|  |[38;2;7m[48;2;8m [49m                        [0m
[38;2;7m[49m                                                                                [0m
                                                                                [0m
                                                                                [0m
"></ansi-viewer>

## DEL as a tool for debugging

With the rise of digital data processing and computer programming in the 1960s, managing errors became essential. While typos in everyday documents are inconvenient, in programming, even a single mistake could lead to system crashes, mission-critical failures, or incorrect outputs. Most typing errors are noticed and corrected immediately. But what if the error is caused by an invisible control character like the DEL? 

In a letter to the director of production development at the Teletype Corporation in 1962, British computer pioneer Hugh McGregor Ross suggests a solution to the problem: the normally non-printing DEL should have graphic representation, as a way to highlight errors in print:

> "Experience shows that when these errors are being corrected it is all too easy to make further mistakes. It is considered most important that at all stages the occurence of any error, together with its correction, should be **highlighted** in some way to permit a third overall scrutiny and check. [...] To accord with the computer principle that all errors be highlighted, **a printing symbol needs to be associated with the Delete character**."^[Ross, Hugh McGregor (1962): Letter 441/HMcGR/DB. Included in the "Source documents on the history of character codes, 1963-02", compiled by Eric Fischer, [on Internet Archive](https://archive.org/details/enf-ascii-1963-02/page/n39/mode/2up)]

But which symbol? A 1960 *Survey of Coded Character Representation* by Bob Bemer ("the father of ASCII"), reveals that almost none of the roughly 70 machines at the time had a clearly defined printing symbol for DEL.^[Bemer, R. W. (1960): Survey of coded character representation. Communications of the ACM Volume 3, Issue 12 (Dec. 1960), 639–642. [https://doi.org/10.1145/367487.367493](https://doi.org/10.1145/367487.367493)] An exception was the 1958 Ferranti Pegasus computer, which used a heavy asterisk (🞷) to represent obliteration.^[Felton, G.E. (1962): [*The Pegasus Programming Manual*](https://archive.org/details/bitsavers_ferrantipemingMan1962_40324310/page/n127/mode/2up?q=erase) Ferranti Ltd] However, Ross, who worked at Ferranti, opposed this choice. Though he doesn't explicitly state his reasons, he may have worried that the asterisk could be misinterpreted, as it already had multiple different meanings and uses, but none that were strongly associated with deleting.

### ECMA-17 and the symbol of shading

To replace the heavy asterisk, Ross proposed a "symbol of shading" to visually represent ERASE (aka DELETE). While working at Ferranti in 1961, he implemented this symbol for their 7-track flexowriters (= devices that combined a typewriter, printer, and paper tape puncher) used with the Orion and Atlas computer systems.^[Ross, Hugh McGregor (1961): Considerations in Choosing a Character Code for Computers and Punched Tapes. Included in the "Source documents on the history of character codes, 1960-1961", compiled by Eric Fischer, [on Internet Archive](https://archive.org/details/enf-ascii-1960-1961/page/n5/mode/2up)] The symbol also appears in his 1961 document *Punched tape codes*, where he proposed standardized encodings for paper tape. In his hand drawn designs, the symbol of shading for ERASE is represented by evenly spaced 45˚ diagonal lines—a design strikingly similar to Amiga's DEL at the same all-holes-punched position.^[Ross, Hugh McGregor (1961): Punched tape codes. Available online at [chilton-computing.org.uk](https://www.chilton-computing.org.uk/acl/literature/chapman/p015.htm) 06.03.2025] (Whether Ross invented the design or adapted it from somewhere, is unclear.)

<figure class="u-image-full-width">
    {% image
        "./src/assets/images/0x7f/ross_proposal.jpg",
        "",
        "",
        "(min-width: 30em) 50vw, 100vw",
        true
    %}
    <figcaption>Proposal for the 7-track tape code standard by Hugh McGregor Ross in 1961 includes the "symbol of shading" for ERASE (aka DELETE).</figcaption>
</figure>

Ross was active in promoting his ideas for character codes, so he joined the *Technical Committee 1* (TC-1) committee at *The European Computer Manufacturers Association* (ECMA). TC-1's task was to define common character sets and their coded representations for input/output media and data transmission. In 1963, the committee officially decided that DEL should have a a printed representation^[ECMA (1963): Ecma philosophy on codes. Included in the "Source documents on the history of character codes, 1963-02", compiled by Eric Fischer, [on Internet Archive](https://archive.org/details/enf-ascii-1963-02/page/n21/mode/1up)], and started working on assigning graphical symbols for all non-printing control characters. This allowed control characters to be analysed, troubleshot and documented visually. Their work culminated in 1968 with the **ECMA-17** standard, which introduced graphical symbols for control characters—including DEL and space. With this standard, Ross's design of evenly spaced 45˚ diagonal lines became the official representation for DEL. ^[ECMA (1968): ECMA Standard for the Graphic Representation of Control Characters of the ECMA 7 bit Coded Character Set for Information Interchange. [Online scan](https://ecma-international.org/wp-content/uploads/ECMA-17_1st_edition_november_1968.pdf) 07.03.2025] The ECMA-17 standard was adopted into both US and international standards with minimal changes, becoming **ANSI X3.32-1973** in the United States in 1973, and **ISO 2047** internationally in 1975.^[Wikipedia: [ISO 2047](https://en.wikipedia.org/wiki/ISO_2047) 07.03.2025]

<figure class="u-image-full-width">
    {% image
        "./src/assets/images/0x7f/ecma17-del.jpg",
        "",
        "",
        "(min-width: 30em) 50vw, 100vw",
        true
    %}
    <figcaption>Excerpt from the ECMA-17 document.</figcaption>
</figure>

<figure class="u-image-full-width">
    {% image
        "./src/assets/images/0x7f/US_ASCII_Control_Character_Symbols.png",
        "",
        "",
        "(min-width: 30em) 50vw, 100vw",
        true
    %}
    <figcaption>Symbols assigned to the 32 control characters, space and delete characters. <a href="https://www.google.de/books/edition/Military_Standard/um2cRERx4S4C?gbpv=0" target="_blank">(ISO 2047, MIL-STD-188-100, 1972)</a></figcaption>
</figure>

::: wrap note
Side note: Bizarrely, in 1969, the US Department of Defense suggested the heart ( ♡ ) as a general symbol to indicate all control characters in print^[[MIL-STD-I88C](https://archive.org/details/enf-ascii-1969-1982/page/n49/mode/1up)].
:::

#### The adoption of ECMA-17

In 1975, Motorola incorporated the ECMA-17 control character symbols into their *MCM6570* character generator chip (= a dedicated component that converted ASCII codes into bitmapped text for computer screens)^[[MCM6570 Datasheet, ROM, Motorola](https://datasheetspdf.com/datasheet/MCM6570.html)]. In 1977, its successor, the *MCM6674*, was used in the *TRS-80 Model I*, one of the earliest mass-produced retail home computers.^[Hoard of Bitmap fonts repository has [bitmap dumps of the TRS-80 Model I, Model III, Model 4 character sets](https://github.com/robhagemans/hoard-of-bitfonts/tree/master/trs-80)] 

<figure class="u-image-full-width">
    {% image
        "./src/assets/images/0x7f/mcm6674.jpg",
        "",
        "",
        "(min-width: 30em) 50vw, 100vw",
        true
    %}
    <figcaption>The character patterns generated by Motorola's MCM6674 chip.</figcaption>
</figure>

Despite TRS-80's decent commercial success, it failed to make the ECMA-17 symbols known to a wider audience. Even though the ECMA-17 symbols were present inside the MM6674 character generator chip, the TRS-80 wasn't capable of displaying them (and lowercase letters) without hardware modifications.^[Matthew Reed's TRS-80.org: [Why was the Model I uppercase only?](http://www.trs-80.org/why-was-the-model-i-uppercase-only/)]. But even when modified (mainly to enable lowercase letters), the purpose of the ECMA-17 symbols were not understood very well. Even Motorola itself mistakenly advertised them as "math symbols"^[Electronic Design V26 N10 (1978) [Scan on Internet Archive](https://archive.org/details/bitsavers_ElectronicignV26N1019780510_129741478/page/12/mode/1up?q=mcm6674) p. 12. 07.03.2025]. This lack of awareness of the ECMA-17 symbols continues to this day: a recent [TRS-80 cloning project](https://www.glensstuff.com/trs80/docco/trs80model1clone.pdf) calls them "hieroglyph-like"; the TRS-80 expert RetroStack calls them ["odd symbols"](https://github.com/RetroStack/chargen/blob/main/src/chargen/TRS80/Model1.ts); and ["the most complete TRS-80 text font"](https://www.kreativekorp.com/software/fonts/trs80/) by KreativeKorp misclassifies them as mathematical, technical or geometric shapes. The confusion likely stems from being stripped of their original context. The symbols were designed for electromechanical systems (e.g. ⍾ symbolizing an electric bell) and paper tape workflows, not digital displays. As TRS-80 was squarely a digital computer, the ECMA-17 symbols became cryptic artifacts, hidden in the TRS-80's character set.

Beyond appearing in the 1984 Amstrad CPC^[CPC wiki on [Amstrad CPC Character Set ROMs](https://www.cpcwiki.eu/index.php?title=Keyboard_Versions#Character_Set_ROMs)], the ECMA-17 standard largely faded into obscurity. However, one of its 34 characters managed to endure: DEL. Even though graphical symbols for control characters 0–31 were not widely adopted, many systems and software included the diagonal lines symbol (or a similar representation) at the 0x7F position.

Because the designs of early bitmap fonts were constrained by small cell sizes, sometimes as small as 5 &times; 7 pixels, the diagonal lines were rendered as a symbol looking more like a checkerboard pattern ( ▒ ). This pattern can be found in character sets for *Apple II* (1977), *Exidy Sorcerer* (1978), various systems that used the *TMS9918* video display controller by Texas Instruments (1979)^[[TMS9918 datasheet](https://web.archive.org/web/20180717212934/https://emu-docs.org/VDP%20TMS9918/Datasheets/TMS9918.pdf)], *Elektuur Junior* (1980), *Kaypro II* (1982), in many "RAMfonts" bundled with the *Hercules Plus* graphics card (1986), and in some software, like SEI Soft's *FontEdit II* (1994). HP had specifically designed "symbol sets" for printers, and many of them included the checkerboard pattern at 0x7F, first appearing in 1978 in the *HP Roman* encoding.^[HP Roman on [Wikipedia](https://en.wikipedia.org/wiki/HP_Roman)] Various Teletext character sets^[Wikipedia, [Teletext character sets](https://en.wikipedia.org/wiki/Teletext_character_set) 07.03.2025], *Mattel Aquarius*, *Robotron Z9001*, *Otrona Attache* chargen fonts, the morse set of *RM Nimbus PC-186* and *Canon AS-100 (CP/M)* among many display DEL as a full block ( █ ) instead. *FM-Towns* and the *DEC VT220* terminal displays DEL as "DL". The word processor *Wang Professional* renders 0x7F as ¢, for some reason. And last but not least, IBM PC's infamous *Code Page 437* has a glyph representing a "house" ( ⌂ ) at 0x7F.

::: wrap note

##### A companion article
IBM PC's "house" glyph 0x7F is a mystery in itself, so I wrote a companion article on it: [Why is there a "small house" in IBM's Code page 437?](https://blog.glyphdrawing.club/why-is-there-a-small-house-in-ibm-s-code-page-437/).

:::

The following chart displays the visual representation of 0x7F from 1259 character sets, compiled from Rob Hagemans' [*hoard of bitfonts*](https://github.com/robhagemans/hoard-of-bitfonts) and from VileR's [*VGA textmode fonts*](https://github.com/viler-int10h/vga-text-mode-fonts/releases/tag/2020-11-25). It's ordered purely based on the visual properties of the characters. Click on the glyps to display more information about them. (Note that some characters might have extra whitespace around them which might not appear in real hardware.)

<div class="u-image-full-width">
  <character-viewer></character-viewer>
</div>

The overwhelming amount of ⌂ characters skews the chart, but if we disregard those and compare the remaining sets, it seems the standard choice for visually representing DEL was either as a symbol of shading in the form of diagonal lines <span class="amiga-inline">( ⌂ )</span>, checkerboard ( ▒ ), full block ( █ ), or as a symbol combining the letters *DT*, *DL* or *7F*. In this context, AmigaOS's choice for representing DEL as diagonal lines glyph <span class="amiga-inline">⌂</span> doesn't seem like an outlier after all. Instead, they were following a popular convention, based (partly) on the official ECMA-17 standard, with roots set decades earlier by Hugh McGregor Ross at Ferranti. 

This research originated from Michael Walden's claim that the AmigaOS character set is identical to the <abbr title="Latin alphabet No. 1">ISO/IEC 8859-1</abbr> standard, except for the DEL character. So, does AmigaOS follow the <abbr title="Latin alphabet No. 1">ISO/IEC 8859-1</abbr> standard or not? Or perhaps a more accurate question is: if a character code standard like <abbr title="Latin alphabet No. 1">ISO/IEC 8859-1</abbr> doesn't explicitly define a graphical representation for a character (like DEL), but a system like Amiga implements its own graphical representation (based on another standard, like ECMA-17), is it compliant with the standard or not? **There answer might simply be a matter of perspective.** Keeping in mind that character code standards are primarily concerned with the binary values attached to characters and their semantic meaning or function and not their exact rendering, and that by definition DEL's visual representation is *undefined*, and that DEL was also largely obsolete by 1980s yet still an inseparable piece of the ASCII standard, then representing DEL visually might not be not strictly compliant with ISO/IEC 8859-1, but *also* not contradicting it. Personally, I think that AmigaOS **does** follow the <abbr title="Latin alphabet No. 1">ISO/IEC 8859-1</abbr> standard, just *extending* it in a compatible and useful way by visually representing DEL with the diagonal lines from ECMA-17 (or ISO 2047 / ANSI X3.32-1973), like many of its contemporaries.

::: wrap note
Sidenote: The symbol set HP Gothic-1 (code page 1053)^[[HP PCL 5 Comparison Guide (2003)](http://www.hp.com/ctg/Manual/bpl13206.pdf#page=234)] is identical to AmigaOS character set^[[Code Page 01053](https://web.archive.org/web/20130121104245/http://www-03.ibm.com/systems/resources/systems_i_software_globalization_pdf_cp01053z.pdf)], including the exception at code point 0x7F, but HP adopted ISO-8859-1 later than the Amiga.
:::

## What does the Delete key do?

At this point I had still one straggling question in mind regarding the DEL character. How does one actually input DEL? My Windows keyboard has a key for <kbd>Delete</kbd>, <kbd>Del</kbd> and <kbd>Backspace</kbd>, and my Mac keyboard has a <kbd>Delete</kbd> key where <kbd>Backspace</kbd> usually is. On the Windows keyboard, when I press the <kbd>Backspace</kbd> key, the character to the left is deleted, and when I press <kbd>Delete</kbd>, the character to the right is deleted. On Mac it's the opposite, pressing <kbd>Delete</kbd> removes the character to the left, but I can do <kbd>Fn</kbd>+<kbd>Delete</kbd> to forward delete. I can also press <kbd>Ctrl</kbd>+<kbd>H</kbd> to delete backwards, or <kbd>Ctrl</kbd>+<kbd>D</kbd> to delete forwards. On Windows, the Numpad <kbd>Del</kbd> does a forward delete if <kbd>Numlock</kbd> is off. But how are they related to the DEL character? If I have a font with a visual representation for DEL, how can I type it?

#### BS and DEL

The answer is rather complicated and confusing, and starts with understanding how DEL was used in conjunction with backspace. To recap, a common way to backwards delete on paper tape was to move the tape back by pressing a backspacing lever and then overpunch with the all-holes Delete. Initially the backspacing lever itself didn't punch anything, it would just move the tape, but later on it became its own character (BS at 0x08). This was necessary to achive overprinting on initial punchout and any subsequent print-outs. Overpunching was useful feature for multiple reasons, most commonly to achieve diacritics. As an example, *u BS ^* would produce *û*, and *u BS _* underlined <u>u</u>.

BS was also combined with DEL to produce backwards delete. But this posed a difficulty on how computers should interpret DEL during tape editing and subsequent print-outs. When the tape is first created, the simultaneous print shows the original erroneous character, then the DEL character **on top** of that. But any subsequent print-out shows **only** the DEL character, because the original incorrect character didn't exist anymore—it was physically and permanently transformed into a DEL character. A technique called "line reconstruction" was developed to overcome this, based on a few simple rules: never manually move the carriage, and all print-outs should match what's on the tape. With these rules in mind, the computer could be programmed to read the data to a buffer (without immediately printing them), then processing it sequentially, so that BS moves backwards in the buffer, and DEL overwrites the position. After the buffer process is completed, the line is printed, ignoring any DEL characters.^[Ross, Hugh McGregor (1962): Letter 441/HMcGR/DB. Included in the "Source documents on the history of character codes, 1963-02", compiled by Eric Fischer, [on Internet Archive](https://archive.org/details/enf-ascii-1963-02/page/n39/mode/2up)] 

<pre class="amiga">
E.g. STANDARDS INSTITUTION may be punched

as STR BS ⌂ ANDARDS SP INSTITUTION

or STRANDARDS BS BS BS BS BS BS BS BS ⌂ SP SP SP SP SP SP SP SP INSTITUTION

where ⌂ = DEL character, BS = Backspace character and SP = Space character.
</pre>

#### DEL vs Backspace

The differing interpretations on how to deal with DEL in various media had lasting effects. What worked on paper-based media proved problematic for the digital screen-based text input and output. Ultimately, the question on *how* exactly to use and interpret DEL was (and still is) context dependant, lacking a clear consensus. This ambiguity has lead to much confusion, as illustrated by the following examples. The 1978 video terminal VT100 worked similarly to the "line reconstruction" example, but many UNIX systems behaved differently. In UNIX, by default the <kbd>Backspace</kbd> key would send the actual DEL character (0x7F), but many terminal drivers and applications were configured to interpret it as "move the cursor back one position *and* delete the character at the cursor position". On the other hand, the <kbd>Delete</kbd> key would behave *like* DEL (forward delete), but actually generate an escape code ESC[3~, which is a command to the terminal to perform a "forward delete". Confusingly, there were also terminal emulators (like xterm) based on the completely different VT100 behaviour: <kbd>Backspace</kbd> key would send the BS character and <kbd>Delete</kbd> key would send DEL (0x7F). This discrepancy caused problems on how these characters should be interpreted. Should <kbd>Backspace</kbd> be interpreted as forward or as backward delete? What about DEL then? These confusions lead to situations where the sender's screen might show deletions correctly while the receiver's might not, or vice versa. On top of that, some Unix-like systems, like HP-UX interpreted DEL as a "interrupt process" (similiar to modern CTRL+C)^[A relevant discussion on ["What is DEL for?"](https://unicode.org/mail-arch/unicode-ml/Archives-Old/UML025/1090.html)]. Many guides have been written on how to deal with the issue of Backspace and Delete keys doing unexpected things.^[See Sebastiano Vigna's [Linux Backspace/Delete mini-HOWTO](https://tldp.org/HOWTO/BackspaceDelete/index.html), Anne Baretta's [Consistent BackSpace and Delete Configuration](https://web.archive.org/web/20181022000151/http://ibb.net/%7Eanne/keyboard.html) and Kermit FAQ's [My Backspace Key doesn't work!](http://www.columbia.edu/kermit/backspace.html)]. 

This is all to say: the many varied and contradicting functions, interpretations and implementations of DEL is a total mess. So, when I press the <kbd>Delete</kbd> key on my keyboard, the keyboard sends a scan code for the <kbd>Delete</kbd> key, the operating system translates this to virtual key code based on the currently active keyboard layout, and this virtual key code is interpreted differently based on the application—and this could be literally anything from printing the DEL character to deleting a file. The physical key has nothing to do with the ASCII DEL character, other than having a shared history and name. 

::: wrap note 
##### Sidenote: DEL in the 1979 EasyWriter for Apple II
I did find one example where DEL printed the glyph! In EasyWriter, released in 1979 as the first word processor for the Apple II, pressing <kbd>Delete</kbd> inserts a checkerboard pattern ( ▒ ). To actually delete a character, I need to move the cursor over a character and then hit <kbd>Control</kbd>+<kbd>D</kbd>.

<figure class="u-image-full-width">
    {% image
        "./src/assets/images/0x7f/easywriter-appleii.png",
        "crisp",
        "Screenshot displaying the character DEL as seen in EasyWriter from Apple II.",
        "(min-width: 30em) 50vw, 100vw",
        true
    %}
    <figcaption>Screenshot from <a href="https://archive.org/details/EasyWriter_Capn_Software_John_Draper_1979_Formatted_Disk" target="_blank">Apple II emulator running EasyWriter</a>.</figcaption>
</figure>

:::

#### DEL in AmigaOS

But what about Amiga then? When the <kbd>Delete</kbd> key is pressed on an Amiga system, the raw keycode is translated by the system into the <span class="amiga-inline">{% asciiart %}⌂{% endasciiart %}</span> character OR action based on the current keymap and console device handling. To my knowledge, by default it invokes a CSI escape sequence that deletes the character at its current position. The raw keycode can be captured though, as noted in the Amiga 500 user manual: "Keys can be program-controlled-that is, their use can be defined by the software being used".^[Commodore Amiga 500 User Manual. [Scan online](https://www.manualslib.com/manual/932575/Commodore-Amiga-500.html?page=238#manual) p.238] One could program a software to find any non-printable character and return 0x7F, displaying the <span class="amiga-inline">{% asciiart %}⌂{% endasciiart %}</span> character. This is the case for example in the *RAWKEY keymapping example* on AmigaOS wiki^[AmigaOS Wiki: [Intuition keyboard](https://wiki.amigaos.net/wiki/Intuition_Keyboard)] which is a program that converts raw keycodes to ASCII, and replaces any unprintable or control characters with <span class="amiga-inline">{% asciiart %}⌂{% endasciiart %}</span>. In this program, printing the DEL key as a visually highly distinct character is more informative than printing nothing, a space, or a string of escape sequences from directly outputting control characters. On the other hand, Amiga Workbench 3.1 has a menu option to "Insert ASCII" by providing the index (0-255) of the character's code point. If I wanted to insert 0x7F, I would write 127 in the prompt. But when I draw Amiga ASCII art on macOS using contemporary specialized ASCII editors (like Moebius), all the characters are simply listed in a table which can be mapped to function keys F1–F12. 

## Displaying Amiga ASCII art on the web

Nowdays to *actually* type the character at code point 0x7F requires the use of "alt codes". On Windows, this can be done by holding down the <kbd>Alt</kbd> key, then typing the decimal number of DEL <kbd>1</kbd><kbd>2</kbd><kbd>7</kbd> using the keyboard's numeric keypad, and then releasing <kbd>Alt</kbd>. On Mac this is not possible by default, but can be done by enabling *Unicode Hex Input* as text input source ([instructions](https://poynton.ca/notes/misc/mac-unicode-hex-input.html)), then holding down the <kbd>Option</kbd> key, then typing the Unicode hexadecimal of DEL <kbd>0</kbd><kbd>0</kbd><kbd>7</kbd><kbd>f</kbd>, and then releasing <kbd>Option</kbd>. These will produce the code 0x7F.

However, as I mentioned in the introduction, displaying the glyph at 0x7F is not always possible—it's wholly dependant on the application. For example, here's DEL (0x7F) using the Topaz font: <span class="amiga-inline"></span>. If you view this on Chrome, you will see the glyph. However, if you view this on Firefox, it will not display, because it's blocked at the browser level (for what reason I don't exactly know). On the web, it's more common to display Unicode characters using HTML entities like <code>\&#x7F;</code> or <code>\&#127;</code>, but these methods produce the generic symbol for "unrepresentable character", even on Chrome: <span class="amiga-inline">&#x007F; &#127;</span>. Using a Javascript snippet <code>document.write(String.fromCharCode(0x7F));</code> displays the glyph correctly on Chrome, but not on Firefox: <span class="amiga-inline"><script>document.write(String.fromCharCode(0x7F));</script></span>. 

This is of course a big problem for displaying Amiga ASCII art containing DEL characters on the web. Even asciiarena.se, THE website dedicated to archiving, sharing and displaying Amiga ASCII art, haven't been able (or aren't bothered) to solve this issue. Artworks containing DEL characters simply don't display them. For example, the rendering for [SNAFUALV.TXT](https://www.asciiarena.se/release/SNAFUALV.TXT) by sNAFu from 1995 is completely broken on the site. (However, the artworks on asciiarena.se *could* be shown correctly at least on Chrome, but the DEL glyph is not even assigned to *any* code point in the Topaz font they use.)

<figure class="u-image-full-width">
    {% image
        "./src/assets/images/0x7f/asciiarena-vs-moebius.png",
        "",
        "",
        "(min-width: 30em) 50vw, 100vw",
        true
    %}
    <figcaption>Displaying the same ASCII art on asciiarena.se website (left), and in a dedicated ASCII art tool Moebius (right) shows the effect missing DEL characters can have.</figcaption>
</figure>

The other option, as employed by the site 16colo.rs, is to render ASCII art as images (see for example [h7-impure.txt](https://16colo.rs/pack/impure80/h7-impure.txt) by h7 from 2021). This preserves all formatting and special characters like DELs, but it's slightly disappointing that ASCII art, which is supposed to be just text, is displayed as images. 

### ASCII to Unicode

Is there really no way to display ASCII art, including DEL characters, reliably as text on the web? 

The answer is no, if we want to use the original code points. But a way to preserve ASCII art as text, while being able to display DEL and other control characters, is to convert the troublesome characters to their Unicode equivalents or best-fit approximations. A similar glyph to <span class="amiga-inline">⌂</span> could be ▨ (U+25A8), 🮙 (U+1FB99), ␥ (U+2425), ▒ (U+2592), 🮕 (U+1FB95) or maybe it could even be mapped to ␡ (U+2421). In 2022 the Terminals Working Group at Unicode made a *Proposal to add further characters from legacy computers and teletext to the UCS*^[Bettencourt, Rebecca; Ewell, Doug; Bánffy, Ricardo; Everson, Michael; Hietaniemi, Jarkko; Silva, Eduardo Marín; Mårtenson, Elias; Shoulson, Mark; Steele, Shawn; Turner, Rebecca (2021-12-20): [Proposal to add further characters from legacy computers and teletext to the UCS](https://www.unicode.org/L2/L2021/21235-terminals-supplement.pdf)], adding hundreds of new graphic characters to provide compatibility with a wide range of home computers manufactured from the mid-1970s to the mid-1980s. Even though Amiga was not among them, three new specific symbols for delete were added: symbol for delete in the Apple II character set ␧ (U+2427), in the TRS-80 character set ␨ (U+2428), and in the Amstrad CPC character set ␩ (U+2429). These were accepted to Unicode version 16.0 which was officialy released just last year in 2024. In my opinion, the closest graphic approximation for Topaz's DEL would be 🮙 (U+1FB99), but its name is a generic "upper right to lower left fill", while semantically better fit would be the new ␩ (U+2429), which is a "symbol for delete medium shade form". 

Converting ASCII to Unicode is not trivial though. There needs to be some program or process to do it, and the font needs to map the right unicodes to the corresponding glyphs. 

For this site I ended up using a much simpler, although improper, method. My preferred ASCII art tool Moebius, which is predominantly programmed for creating PC ANSI art, already has an ASCII to Unicode conversion feature. I can either save the file as "Unicode ANSI", or simply copy-paste from the program to another text editor, and it will convert any control characters to unicode. However, PC ASCII uses IBM's code page 437, so the conversion is specific to it. For example, 0x7F gets automatically converted to the unicode equivalent of code page 437's symbol for DEL ( ⌂ ) at [U+2302](https://graphemica.com/%E2%8C%82), rather than to any of the aforementioned symbols that would better fit Amiga's DEL symbol. The ease of use is too great for me to care though, especially because semantic correctness for control characters is not a priority (for me) in Amiga ASCII art.

To then display ASCII art on the site, I made a font of Topaz glyphs, and mapped the <span class="amiga-inline">⌂</span> glyph to U+2302. This way I can make Amiga ASCII art with Moebius, then simply copy paste it to my code editor, wrap it with a <code>\<pre class="amiga"></code> element, give it two lines of CSS, and it just works:

    .amiga {
      font-family: 'Topaz_Plus_a1200_CP437';
      line-height: 1;
    }

(Additionally, I made a web component that uses regular expressions to find escape sequences and transforms them to <code>\<span class="fgX bgX"></code> elements to display ANSI colored Amiga ASCII.)

---

# PART 3

# DEL in Amiga ASCII art

<pre class="amiga">
                                                                              
                                                                              
                                                                              
                                                                              
                                                                              
                                  ____                                        
                                __T |á_________                               
                               /╜⌂| |á/⌂╛╛⌂╛╜⌂X\                              
                              /   |_|á⌂╛╛⌂╛╛⌂/_\\                             
                             /╜⌂%/⌂╛/⌂╛╛⌂╛╛⌂/╞b_\\                            
                            /╛⌂/%⌂/╛⌂╛╛⌂╛╛⌂/╞ááb_\\                           
                           /%⌂╜/⌂╛╛⌂╛/⌂╛╛⌂/╞á[]áb_\\                          
                          /╜⌂/╜⌂╛╛⌂╛/⌂╛╛⌂/╞ááááááb_\\                         
                          »¼C»»»»»»»»O»Y»╪ááááááááL╪»                         
                            C»»l»»l»»O»Y»╪áá|⌂⌂|ááL╪                          
                            C»»l__l»»O»Y»╪áá|⌂D|ááL╪                          
                           ,C»»»»»»»»O»Y»╪áá|⌂⌂|ááL╪                          
                          »»»»»»»»»»»»»»»»»»»»»»»»»»»»                        
                                                                              
                                                                              
                                                                              
</pre>

## Scanning the archive for DEL 

Inspired by this whole research, I downloaded an [archive of Amiga ASCII art](https://github.com/textmodes/archive-amiga) containing 3153 works made between 1992 to 2015, and wrote a script scanning them for the DEL character. The script found DEL used on 15617 lines of text in 410 different files, which is a lot more than I expected. But on a closer look, the actual number of files with *unique* uses is probably closer to a few hundred because many files contained repeated uses of the same few ASCII logos, adverts or images. (The complete results can be found [here](https://docs.google.com/spreadsheets/d/1LbEUB24ZohpAKdr9TIegIRDufR8BETMtLWj-N53G7MA/edit?gid=0#gid=0))

The earliest file containing DEL is from 93, although the character is actually used in a BBS advert added in 1995. Therefore, the earliest deliberate use as part of ASCII art seems to be from 1994. The files are not properly dated, so it's impossible to say who used it first, but an ASCII artist called "xClUZiWe" or "xcz" was the among the first to use it frequently and with purpose. The use of DEL in Amiga ASCII art properly took off in 1995, continuing strong all the way to 1999. From 2000 onwards, it's seen less and less as the whole ASCII scene started fading. Since around 2015 Amiga ASCII art has experienced a slight resurgence, as has the use of DEL, but I wanted to focus on the historic use of DEL, so I didn't include art made after 2010s in my search. 

Below I have curated a selection of artworks that incorporate DEL in one way or another. The files are grouped by year. The individual artworks are usually part of larger collections ("collys"), some of which have a unified layout or theme. Crudely copy-pasting them here inevitablty removes them from their original contexts, so I recommend viewing them in full using a dedicated ASCII software. For this the Windows only ASCII art editor / viewer [PabloDraw](https://picoe.ca/products/pablodraw/) is best, as it includes a browsable folder view.

If trying to spot the <span class="amiga-inline">⌂</span> characters is too time consuming, **clicking on the ASCII art highlights the DEL characters!** Other than that, I will let the art speak for itself. Enjoy!

## 1994

#### 1994/dss_xcz!.txt

<pre class="amiga" onclick="this.classList.toggle('highlight')">
                                                                                
                                                                                
                                                                                
                                                                                
                                µ_     ╕_                                       
    ____________________________░0µ___ ╞V_________________________________      
    T        ___                __"4µ__╪┤                   _  ,_______  T      
    |    _  d@^ó#_  ╕__    _  ,╪**M ¼½╪╪             _°µ°_  ╪  ¼░░░░░╪░  |      
    |  ,╞@╪_╪1  ¼╪  ╪'`#_ ╞╪µ ╞W__╪╣  ╪'    __   __  ╪┤  V# ╪      ╕╪~   |      
    |  ╪F  `╪Q   ╪╣═╪  (╪ ╪╣V&¼V╪~»  ,╪    d@0._╞'4# ╪   ╠M ╪╣_╪│  ╪P    |      
    |  ░#_  ¼"   0Q 0m_.╪ ╪  ╪╕ ░M__ ╪F    ╪  ╢╪F σ# `╪╪╪╪' ╪µ╪»  J╪     |      
    |   ¼4µ_     (W  "^^  #  ╪1  ¼░░J╪     #L  ░  ╪f╖╪   ¼# ╪╪L  ,╪_     |      
    |     ¿4µ_   `╗          ╪1    ,╪┤     ¼╪     ╪  #._ _╪ ╪╣#L ¼╪V&_   |      
    |       ¼½Q_                   ╪"            ,╪   ░0╪⌂~ V╣ ╪    ¼░░  |      
    |         ¼"                   »             ¼▓                      |      
    |        _     __                 ____   _____  µ    ,_              |      
    |        ╪    _╪╪.               µ@ñó0µ_ ╪"~░4µ ╪╣   ¼╪              |      
    |        V╣   ╪' ╪_           ° ß╪    ░╪ ╪____╪ ╪╣    ╪              |      
    |     _╞╪╞╪  ╞╪°µ╪╪    ╪_  ╕  ╪ ╪┤     ╪ ╪╪@░░  ╪╣ .µµ╪1             |      
    |    ╞P  ¿0≥`*    #L   ░╪ ╪W╕°╪ ╪,    J╪ ╪P4µ   ╪1╠╪  ÑW             |      
    |    ╪L___╞╪      |W    ¼#@`M╪░ ╢#___d╪┤ ╪  `#_ ╪1¼╪__╞╪             |      
    |    ¼ó**░¿░       ½╣       ░░   ░ñ*ñ░   ñ   ░░ ó╣ ¼░░¿"             |      
    |                                          __              _         |      
    |                                       ╪, `#          _  ╢╪╪╨       |      
    |              ╕µ#µ__    ╕µ       ╕___  #╠  ╪          ╪, `╪╪        |      
    |         __   ╪░ ¼░0.  .╪░ ╕  __ ╪'"0b 0t  ╪╣,_╕__    0Q  ╪P        |      
    |       ,⌂@#µ,l╪    j╪      ╪&╪⌂│φ╪   ╪1╢#  ╪╣l╪╪ñ╪, g╪╪╪  ╪         |      
    |       #Q__J« #L__.╪'      0V    ╪.__╪┤ ╪_.╪ `╪╣ 0Q ╪_j╪ _          |      
    |    (#  ░**4╪  ░░░░        ¼┤    "½*│    ░░   *  ¼╪ ░#╪╪ ╪╣         |      
    |     óN.___J╪                                     ░                 |      
    |      ¼^***ñ'                                                   xCz |      
    l____________________________________________________________________j--.   
      |                                                                     |   
      | sO dONt b sHy tO sENd mE sUM niCE cASh, iNStEAd oF aLL tHEm oRdErs! |   
      | aLSo aSC1+╣ aRtiStS gOtTA eAT, yA kNOW... 8^)                       |   
      `------------------------------------------------------------------≈--'   
                                                                                
                                                                                
                                                                                
                                                                                
</pre>

#### 1994/pss_rw.txt

<pre class="amiga" onclick="this.classList.toggle('highlight')">
                                                                                
                                                                                
                                                                                
                                                                                
              _________                                                         
   _____     /\░░░░░░░░\    IF YER LEVEL IS 50+ THE BBS WILL CALL YOU BACK !!!  
  (fr 94)   /░/       ··\   ==================================================  
           /░/          /_______      ______     ______          │││││          
          /░/     ____≈//\░░░░░░\    /\░░░░░\   /\░░░░░\        / º º \  Sysop  
         /░/     /     /░/     ··\  /░/    ··\ /░/    ··\      (   ⌂   ) /___   
        /░/     /░\   /░/   /\   / /░/  ____≈//░/  ____≈/       │ \__ │  \      
       /░/       ··\ /░/   /\/  / /░/  /░\   /░/  /░\            \___/          
      /░/     ____≈//░/         >/░/    ··\ /░/    ··\   /===================\  
     /░/     /     /░/    /    //░/   ___≈//░/   ___≈/   # n0dE 1 : 16k8 DS  #  
    /░/     /     /░/    /    //░/   /░\  /░/   /░\      # 0w04889eLiTe!,,,r #  
    \/     /      \/    /    / \/     ··\ \/     ··\     )-------------------(  
     \___≈/        \__≈/\__≈/   \______≈/  \______≈/     # n0dE 2 : 28k8     #  
                               ,ms                       # 0w04889FuTuRe,,,r #  
  SeVerAl        ,_            ]@@i                      \===================/  
  ReAsoNs        @@[            @@b    ,ms             ,___.                    
  TO CaLL...     M@@            Y@@    !@A         _mm_@@@@@W.   ████ █  █      
                 ]@@.           !@@[           gm@@@@A@@@fV@@W      █ █  █      
  ⌂ aga/cd32     '@@[            @@b _. i@W   d@@A@@@ M@@  ]@@W  ████ ████ █    
    faSteSt       @@W           ,8@@@@@ ]@@[  @@P 'M@i]@@[  Y@@[ █       █ ███  
  ⌂ niCe SySie    ]@@mmmmmm_  i@@@@@A*f  @@[  @@[  @@[ @@W   @@[ ████    █ █ █  
  ⌂ cOOl usErs _gm@@@@@@@@@@b '**f@@@    @@@  @@@sg@@[ ]@@   '~  wEEkeNd cLOSE  
             ,W@@@@M@@    V@@W    ]@@.   ]@@i 'M@@@@A   ~`                      
           ,W@@@f~ ]@@.  gW@@@i   !@@b    @@[   V**f       SySOp: Ufok / MsT    
           @@@@mm. !@@[ ]@A~V@@    Y@@    @@[                                   
           M@@@@@@. @@[ ]@b ,@@Ws  ]@@    '~               CoGuY: H▓O  / dDS    
               d@@[ @@@ ]@@@@A@@A   ~`                            ---- / ---    
            @@@@@@! !@A  V**f                                     ---- / ---    
            8**@K`                                                              
                                                                                
                                                                                
                                                                                
                                                                                
                                                                                
</pre>

#### 1994/xcz-phq.txt

<pre class="amiga" onclick="this.classList.toggle('highlight')">
                                                                                
                                                                                
                                                                                
                                                                                
                          _          _    _   ______   ___   ___                
                         ╛╛╛.      .╛╛╛ .╛╛╛.╛╛╛╛╛╛╛╛ ╛╛╛╛╛ ╛╛╛╛╛.              
       .----_µ╪╪µµ._-----`╛╛╛-.╛╛-.╛╛╛'.╛╛,╛╛.-»`╛╛'--╛╛_-- ╛╛'`╛╛ -----.       
       |   ,╪╪╪╪╪╪╪╪N__   `╛╛╛╛╛╛╛╛╛╛'.╛╛╛╛╛╛╛.  ╛╛   ╛╛~   ╛╛╛╛'       |       
       |   ¼╪╪╪╪╪╪╪╪╪╪╪«__ `╛╛╛'`╛╛╛'.╛╛'   `╛╛. ╛╛   ╛╛╛╛╛ ╛╛'`╛╛.     |       
       |    ¼░ó#╪╪╪╪╪╪╪╪╪╪>  »    »   »       »  »»    »»»_  »   »      |       
       |     __  ¿^╪╪╪╪╪╪╪╪N_                            ⌂╪«_ _.µ.__    ª       
       |    ╪╪╪N    ░4╪╪╪╪╪╪╪_          _               l╪╪╪╪ ╪╪╪╪╪╪.__ ª       
       |    ╪╪╪╪      ░╪╪╪╪╪╪╪╕     __°╪╪╪m      __µµ_  |╪╪╪╪ ¼^*╪╪╪╪╪╪.`       
       |    ╪╪╪╪       ¼╪╪╪╪╪╪#    g╪╪╪╪╪╪╪╠   _╪╪╪╪╪╪W |╪╪╪╪     ¼░╪╪╪╪&       
       |    ╪╪╪╪        #╪╪╪╪╪╪  ╕╪╪╪╪╪╪╪╪╪┤ ╕╪╪╪╪╪╪╪╪╪ l╪╪╪╪        ╪╪╪╪,      
       |    ╪╪╪╪        I╪╪╪╪╪╪  ╪╪╪╪╪╪╪░»  ╕╪╪╪╪╪╪╪ñ░  l╪╪╪╪        ╪╪╪╪╣      
       |    ╪╪╪╪        ╪╪╪╪╪╪╪ ß╪╪╪╪╪V     ╪╪╪╪╪╪▐     l╪╪╪╪       ┴╪╪╪╪       
       |    ╪╪╪╪       ╕╪╪╪╪╪╪╪ ╪╪╪╪╪╪µµ__  ╪╪╪╪╪╪___   |╪╪╪╪    __╪╪╪╪╪┤       
       |    ╪╪╪╪       ╪╪╪╪╪╪╪┤ ╪╪╪╪╪╪╪╪╪╪, ╪╪╪╪╪╪╪╪╪µ  |╪╪╪╪ ╕_°╪╪╪╪╪▐ :       
       |    ╪╪╪╪     _╪╪╪╪╪╪╪P  #╪╪╪╪╪╪╪╪╪┤ ╪╪╪╪╪╪╪╪╪╪  |╪╪╪╪ ╪╪╪╪╪╪│   ª       
       |    ╪╪╪╪    _╪╪╪╪╪╪╪P   ¼╪╪╪╪╪╪░¿   ╪╪╪╪╪╪╪*ñ┤  l╪╪╪╪ ░ó*░"     |       
       |    ░╪╪▐  _╪╪╪╪╪╪╪╪│     #╪╪╪╪╪≥    ░╪╪╪╪╪N     l╪╪╪╪           |       
       |       __╪╪╪╪╪╪╪╪╪"       ╪╪╪╪╪╪b    V╪╪╪╪╪&╕   |╪╪╪╪           |       
       |    __⌂╪╪╪╪╪╪╪╪╪░         ¼╪╪╪╪╪╪«_   0╪╪╪╪╪#_  l╪╪╪╪           |       
       |   _╪╪╪╪╪╪╪╪╪╪░             0╪╪╪╪╪╪,   V╪╪╪╪╪╪Q |╪╪╪╪           |       
       ª   0╪╪╪╪╪╪╪▐~                ░╪╪╪╪╪'    ░╪╪╪╪╪╪ |╪╪╪╪       xCz ª       
       `----░╪╪╪▐░---------------------░░░-------¼^4╪ñ"-`╪╪╪▐-----------'       
                                                          ¿»                    
                                                                                
                                                                                
                                                                                
                                                                                
</pre>

## 1995

#### 1995/cor-vns.txt

<pre class="amiga" onclick="this.classList.toggle('highlight')">
                                                                                
                                                                                
                                                                                
                                                                                
                                  µµ,            __╕                            
                    ____     µ╪╪╤╪╪╪╪τ______µµ╪╪╪╪╪╪╪r                          
                   ╤╪╪╪╪╪µ╡╡_╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╢╢""""                           
                  _╕ ╡╡?╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪&_                               
                j╪╪╪╞╪╪╤╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪µµ_                            
                ╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪µ_╕                         
               j╪╪╪╪P⌂╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪"╤╪&╢                         
               ╞╪╪╪P_╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪¼╪╪τ                         
               ╢╪╪╪J╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╤╪╪╪╪╪╪╪╪╪╤Z╪╪F                        
                ¼╢╢╞╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╤╤⌂~ ╪╪╪╪╪╪╪╪╪╪╤╪╪F                        
                 µ╪╪╪╪╪╪╪╪╪╪╪╤╤╤╢╢" _µ¼~  ╞╪╪╪╪╪╪╪╪M╤╪╪╣                        
                 ╪╪╪╪╪╪╪╪╪╪2       /"╪m  m╪╪╪╪╪╪╪@ ¼╤╪╪                         
                ¼╪╪╪╪╪╪╪╪╪╪╪Z╢p-  "      ╪╪╪╪╪╪╪@   J╪╪,                        
                 J╪╪╪"╤╪╪╪╪╪╪╕     _     ╪╪╪╪╪╪",w_ ¼╢╢~                        
                  ¼"~  ¼╢╢╢╪╪╪&_╕»~» ╕  ╞╪╤P╪╢>¼  ╪                             
                           ¼M@╢╢╢µ_z╢~_µF--¼      mL                            
                          ╡P       """"        _╕  ¼╤╕                          
                          ╪▐                   ¼╪ __j*                          
                          ╪ñ Y          ⌐Mt/dS!_╪r╢╢F                           
                          ╪FmF                 "╪F  ╪                           
                          J╪╞~                  ╪F  ¼&                          
                          j╤F                   ñ╪   ╢τ                         
                          MP                     ╤µ╡  ╢τ                        
                         µ"                      J╪]╤, "╡                       
                       ."      _______ _________  ╢╣╢╢  ¼___,                   
                ______________(______/|        /_________\     .                
           |----\           |        \|       /        ___\    |                
           `----/\__________|---------\______/-----------------'⌐Mt             
                          _ _____  _________,                                   
 _____________________________  /_|        /  _____________:------_________     
 \      ____      /      _______  |       /---'  ___       ª_________      |    
  ╖     \--------'----------------\______/-----\__/________|`--------------'    
                                                                                
                                                                                
                                                                                
                                                                                
                                                                                
</pre>

#### 1995/ds!-hopp.txt

<pre class="amiga" onclick="this.classList.toggle('highlight')">
                                                                                
                                                                                
                                                                                
                                                                                
                                __    _,µw,_,a --=g_                       
                         _,w-^""»»"#^░ a_µ@" #τ__w+"                       
                       -******╡#╪&_░░g╞╪╪╤"░╢╪╪&_                          
                             µ╪╪╪╪╪m_╞╪╪╪╪╪#╞╪╪╪╪╪m_                       
                           _╞╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪#m╡_                   
                       ╕µp*╤╤╪╤#M#@╢╢╪╢╢╢╢P░░░#»» ¼#   ╢#_                 
                    __µ@"  ,*    #   ╢   ╢L   ¼# ___&╡╡µ#P                 
                    ¼░░╢@*#gm╡wwm╤mmm*#mmw╪w***P╢╢░╢╪w    __               
                         _╡╪P"                    _,╞╪#_""______           
                     ^^-µ╪@&lt;aa________    __╡╡µÇ╪╪╤#W╪╪╞ZZZ____            
                 -----µ╪╪##@╢╢P░░"»   ____            ¼╢╪#   »»"░~         
              **---;╪╪@"          _░░""_________________Z╪#___             
          _____aw╡╞╪@----^^^^^░"""»»»                 __╡╪╪L»»"""^--&lt;      
      ░░""»»     ╤╪L___                    ___╡╡µ╡µµ╤╤@╢░"                 
                  »░░M╪╪#╤╤╤***********╤╤╤#P╢░░"»*╤µm╡╡╡╡                  
          _╡____╡µ╤#P╢P"                            ╡╞#P"                  
      __µ╞@░░╢#P"                                ,µ╞╞Q_______________      
    w╞#E"                                        ¼░░░░░░░░░░░░░⌂╪╤╤@░      
     ¼░╢╢╤#µmw___      __________╡╡╡╡_                     _╡µ#P"          
             ¼5╪╪#    *╪╪╞░░░░░░░""⌂╪╪╪╪╤Çµµµm╡╡╡╡╡_      µ╪╞___________   
    ,µm___µµ╪@P░»       ╢╪K___╡╡µ╤@░"   ¼░╢╤#µm╞ZZ"░       ¼░░Z5#╪╪╪╪╪╪╤@  
    ╞╪P╢╢P"           µ╤╤@╢╢░"»       .m_       "░╢╤m_      ╢#╪╪#«╡╡╡╡╡╡╡_ 
 _╡╞╪P_________________________________╢╪╡µµ#***╤╤@@╢░_________________W╪#┤
 |                                                                       | 
 |d E V I N E  s T Y L E R S.__________.____________________             | 
 |    ._____________________|__        |  _________________/_______.     | 
 |    |  _____________________/       _|________________________   |     | 
 |[t^]|  |__________________|         \_             `---------'   | (r) | 
 |    |________________________________|___________________________|     | 
 +-----------------------------------------------------------------------+
                                                                                
                                                                                
                                                                                
                                                                                
</pre>

#### 1995/ds!-bob4.txt

<pre class="amiga" onclick="this.classList.toggle('highlight')">
                                                                                
                                                                                
                                                                                
                                                                                
                                                                                
                            ╕a*****w.__                                         
                            ╪         ╪  _w**w,_                                
                         ___`#       _╞*"»     ░m                               
                      ╕pñ"»»»"░#╡   _⌂░         _#                              
                      ╞~        ]#╡╞E__╡µ╡╡µµÇ▒░   t^                           
                      ¼^ma___agµ╤P╤╞_          »¼*τ                             
                          »» µ░     ░╤m,__      _JP                             
                            ¼╢w________# ¼"░░░""»                               
                                                                                
                                                                                
                                                                                
                                                                                
                                                                                
                                                                                
</pre>

#### 1995/cnb-sch.txt

<pre class="amiga" onclick="this.classList.toggle('highlight')">
                                                                                
                                                                                
                                                                                
                                                                                
                                                                                
                                ______________                                  
                              __\_          _/__                                
                              \_              _/                                
            ...................|              |.....                            
  _______   ::  ______________ |         _____|___::______  o          o        
 _)  ___/___::__)  _         /_|_________\        :  _   /__|__________|__      
 \   \)     :      \)               _               (/  _    .________ | (__    
  \             _   ________       (/     /\           /_\___|      /  | ░ /    
   \___________/ \_____\    \      /     /  \_________/ \    |     / ░ |  /     
            ::               \____/___  dto/e^d   ::     \__o|O___/      /      
            ::     ______      \_____/_/      |   ::      \__.______  __/       
            ::    _)    /______|     |_____.  |   ::      /__l_____\  \_        
            ::    \     _            |     | _|___::___- _--»-     |   |        
            ::     \   (/      _     |     |_)   _     .»    / .   |   |        
            ::      \_________/|____ :     |\    \)       .  /     | ░ |        
            ::                 |   \__     ___    ______  _/_._____|   |        
            ::                 |     |_____|  \______\  -»\__l_____/  _j        
            ::                 |              |   ::       /_________(          
            ::..........╛⌂╛⌂╛⌂╛⌂╜ c  e  n  o ╜⌂╛⌂╛⌂╛⌂╛                          
                        ⌂╛⌂╛⌂╛⌂╛⌂ b  i  t  e ⌂╛⌂╛⌂╛⌂╛⌂                          
                               |              |                                 
                              _|              |_                                
                              \___          ___/                                
                                /____________\                                  
                                                                                
                                                                                
                                                                                
                                                                                
                                                                                
                                                                                
</pre>

#### 1995/snafualv.txt

First colly in which the 0x7F is used extensively as the "main" character. It's completely broken on (asciiarena.se)[https://www.asciiarena.se/release/SNAFUALV.TXT]

<pre class="amiga" onclick="this.classList.toggle('highlight')">
                                                                                
                                                                                
                                                                                
                                                                                
_______________ ______________ _____________ ______________ _______ _______     
\_      _     {╖} ______     {╖}     _     {╖}      _     {╖}      Ñ     _/     
 T      T______Ñ  »»»»»7      Ñ _____T_____ Ñ       T______Ñ       |     T      
 |_______»»»»»»|       |      | ___________ |       _______|       |     |      
 ª»»»»»»7      ª       ª      ª »»»»»T»»»»» ª       7»»»»»»ª       ª     ª      
 ª      ª      ª       ª      ª      ª      ª       ª      ª       :     ª      
 :      :      :       :      :      :      :       :      :       ╖     :      
 :      :      :       :      :      :      :       :      :       .     :      
 ╖      ╖      ╖       ╖      ╖      ╖      ╖       ╖      ╖             ╖      
 .      ╖      .       ╖      .      ╖      .       ╖      .             .      
                                                                                
                                                                                
 ⌂                                                                              
                                                                                
                                                                                
 ⌂                                                                              
                                                                                
 ⌂                                                                              
 ⌂ ⌂   ⌂   ⌂   ⌂   ⌂   ⌂   ⌂   ⌂   ⌂   ⌂   ⌂                                    
 ⌂⌂╖⌂╖⌂╖⌂╖⌂╖⌂╖⌂╖⌂╖⌂╖⌂╖⌂╖⌂╖⌂╖⌂╖⌂╖⌂╖⌂╖⌂╖⌂╖⌂╖⌂╖⌂                                   
     ⌂   ⌂   ⌂   ⌂   ⌂   ⌂   ⌂   ⌂   ⌂   ⌂  ⌂  ⌂     ⌂                          
                                            ⌂  ⌂  ⌂  ⌂  ⌂                       
                                            ⌂  ⌂  ⌂  ⌂  ⌂   ⌂⌂⌂⌂⌂⌂⌂             
                                            ⌂               ⌂     ⌂             
                                      ⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂             
      ⌂⌂⌂⌂⌂⌂⌂⌂                        ⌂     ⌂               ⌂                   
      ⌂      ⌂      ⌂                 ⌂⌂⌂⌂⌂⌂⌂  ⌂  ⌂  ⌂  ⌂   ⌂                   
      ⌂      ⌂   ⌂  ⌂                          ⌂  ⌂  ⌂  ⌂   ⌂                   
      ⌂      ⌂   ⌂  ⌂                             ⌂     ⌂   ⌂                   
      ⌂      ⌂                                              ⌂                   
      ⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂         
             ⌂                                              ⌂         ⌂         
             ⌂      ⌂                                       ⌂         ⌂         
             ⌂   ⌂  ⌂                                       ⌂         ⌂         
             ⌂   ⌂      ⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂                          ⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂         
             ⌂          ⌂        ⌂                                              
             ⌂          ⌂        ⌂                                              
             ⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂                                              
                        ⌂                                                       
                        ⌂                                                       
          ⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂                                                       
          ⌂                                                                     
     ⌂⌂⌂⌂ ⌂ ⌂⌂⌂ _____________________ ____________________                      
          ⌂     \           _       {╖}       _          /                      
      ⌂⌂⌂ ⌂ ⌂⌂⌂  \          T        Ñ        T_________/                       
          ⌂       \_        |        |        _________/                        
      ⌂⌂⌂ ⌂ ⌂⌂⌂⌂   ª        ª        ª        7»»»»»»»»                         
          ⌂        ª        ª        ª        ª                                 
    ⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂:        :        :        :⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂               
    ⌂     ⌂        :        :        :        :                 ⌂               
    ⌂⌂⌂⌂⌂⌂⌂        ╖        ╖        ╖        ╖             ⌂⌂⌂ ⌂ ⌂⌂⌂⌂          
                   .        ╖        .        .                 ⌂               
                                                           ⌂⌂⌂⌂ ⌂ ⌂⌂⌂           
                         ⌂⌂⌂⌂⌂                                  ⌂               
                         ⌂   ⌂                                  ⌂               
                         ⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂               
                             ⌂                                                  
                             ⌂                                                  
                             ⌂                                                  
                  ⌂⌂⌂⌂⌂⌂⌂    ⌂                ⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂               
                  ⌂     ⌂    ⌂     ⌂     ⌂    ⌂                 ⌂               
                  ⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂  ⌂  ⌂  ⌂  ⌂  ⌂ ⌂                 ⌂               
                        ⌂       ⌂  ⌂  ⌂  ⌂  ⌂ ⌂                 ⌂               
                        ⌂                     ⌂      .¡⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂           
                        ⌂    ⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂  .¡¡¡' ⌂        ⌂   ⌂           
                        ⌂    ⌂                   `¡¡¡¡¡⌂¡¡¡¡¡.  ⌂⌂⌂⌂⌂           
                        ⌂    ⌂  ⌂  ⌂  ⌂  ⌂  ⌂     .¡¡¡¡⌂¡¡¡¡¡'                  
                        ⌂    ⌂  ⌂  ⌂  ⌂  ⌂  ⌂     `¡¡¡¡⌂¡¡¡¡.                   
                        ⌂⌂⌂⌂⌂⌂  ⌂     ⌂     ⌂      .¡¡¡⌂¡¡¡¡'                   
                                                   `¡¡¡⌂¡¡¡.                    
                                                    .¡¡⌂¡¡¡'                    
                                                    `¡¡⌂¡¡.                     
                                                     .¡⌂¡¡'                     
                                                     `¡⌂¡.                      
                                                      .⌂¡'                      
       .¡. .¡. .¡. .¡. .¡. .¡. .¡. .¡. .¡. .¡. .¡. .¡.`⌂¡.                      
     ⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂ |                      
     ⌂   `¡' `¡' `¡' `¡' `¡' `¡' `¡' `¡' `¡' `¡' `¡' `¡¡¡'                      
                                                       _____                    
     ⌂                                                {_____}                   
   ___________ _________ _________ _________ _________ _____ ___________        
   \_    _   {╖}   _   {╖}____   {╖}   _   {╖}   _   {╖}   {╖}   _    _/        
    T    T____Ñ ___T___ Ñ »»»7    Ñ ___T___ Ñ    T    Ñ     Ñ    T____T         
    |    _____| _______ |    |    | _______ |____|    |     |    |»»»»|         
    ª    7»»»»ª »»»T»»» ª    ª    ª »»»T»»» ª»»»»ª    ª     ª    ª    ª         
    ª    ª    ª    ª    ª    ª    ª    ª    ª    ª    ª     ª    ª    ª         
    ª    ª    ª    ª    ª    ª    ª    ª    ª    ª    ª     ª    ª    ª         
    :    :    :    :    :    :    :    :    :    :    :     :    :    :         
    :    :    :    :    :    :    :    :    :    :    :     :    :    :         
    :    :    :    :    :    :    :    :    :    :    :     :    :    :         
    ╖    ╖    ╖    ╖    ╖    ╖    ╖    ╖    ╖    ╖    ╖     ╖    ╖    ╖         
    .    ╖    .    ╖    .    ╖    .    ╖    .    ╖    .     .    ╖    .         
                                                                                
                                                                                
                                   ⌂⌂⌂⌂⌂                                        
                                  ⌂⌂⌂⌂⌂⌂⌂                                       
                                  ⌂⌂⌂⌂⌂⌂⌂                                       
                                  ⌂⌂⌂⌂⌂⌂⌂                                       
                                  ⌂⌂⌂⌂⌂⌂⌂                                       
                                  ⌂⌂⌂⌂⌂⌂⌂                                       
                                  ⌂⌂⌂⌂⌂⌂⌂                                       
                                  ⌂⌂⌂⌂⌂⌂⌂                                       
                            ⌂⌂⌂⌂⌂ ⌂⌂⌂⌂⌂⌂⌂ ⌂⌂⌂⌂⌂                                 
                             ⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂                                  
                               ⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂                                    
                                ⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂                                     
                                  ⌂⌂⌂⌂⌂⌂⌂                                       
                                   ⌂⌂⌂⌂⌂                                        
                                    ⌂⌂⌂                                         
                                     ⌂                                          
        _________ ___ ___ _________     _________ _______ _________             
        \_   _  {╖}  Ñ  {╖}  _   _/  ⌂  \_   _  {╖}___  {╖}___   _/  ≈S≈        
         T   T   Ñ   ª   Ñ   T___T  ⌂ ⌂  T   T___Ñ »»7   Ñ »»7   T⌂⌂            
         l___|   |   |   |   ____| ⌂ ⌂ ⌂ |   ____|   |   |   |   |⌂⌂⌂⌂⌂         
          »»»ª   ª   _   ª   T»»»ª⌂ ⌂⌂⌂ ⌂ª   T»»»ª   ª   ª   ª   ª⌂⌂            
           ⌂⌂ª   ª   T   ª   ª   ª ⌂ ⌂ ⌂ ª   ª   ª   ª   ª   ª   ª⌂⌂⌂⌂⌂         
        ⌂⌂⌂⌂⌂:   :   ª   :   :   :  ⌂ ⌂  :   :   :   :   :   :   :⌂⌂            
           ⌂⌂:   :   :   :   :   :   ⌂   :   :   :   :   :  _j   :              
             ╖   ╖   ╖   ╖   ╖   ╖       ╖   ╖   ╖   ╖   ╖  »»   ╖              
             .   .   ╖   .   ╖   .       .   ╖   .   ╖   .       .              
                                                                                
                                                                                
                                                                                
                                                                                
                                                                                
</pre>

#### 1995/-t-satc3.txt

<pre class="amiga" onclick="this.classList.toggle('highlight')">
                                                                                
                                                                                
                                                                                
                                                                                
                              ____╡╡╡╡╡╡╡╡╡___                                  
                           _╡╞╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪µ╡_                              
                        _µ╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╤╡_                           
                       µ╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪m_                         
                     _╞╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪K                        
                     ╞╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪&                       
                    J╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪#                      
                    ╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪@╢╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪▐                     
               µm,╡╡╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪  ¼░╤╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪▐_                    
                ░⌂╞╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪       ¼╢@#╪╪╪╪╪╪╪╪╪╪╪╪#___                
              J╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪#"            ¼░╢╢«╪╪╪╪╪╪#╪╪╪╪#                
              ¼╤╪╪╪╪╪╪╪╪╪╪╪╪╤M░╪Q  _       aτ  _  µ╪N╪╪╪╪╪╪╪╪╪@                 
              g╪╪╪╪╪╪╪╪╪╪╪╪╤╤╤╪╪╪#╞Q        #_J╪#⌂"  0╪╪╪╪╪╪╪╪#                 
              ¼╪╪╪╪╪╪╪╪╪╤Q    ╢╪m╞░#L╕     _╞╪M3╡╞   ╪╪╪╪╪╪╪╪#~                 
              ╞╪╪╪╪╪╪╪╪╪#¼m    ░╤╪# ░#    _╪#░#@P"  J╤╪╪╪╪╪╪╪#╕                 
             µ╪╪╪╪╪╪╪╪╪╪╪#Z#_       µ╪Q   ╪╪▐     _°"2╪╪╪╪╪╪╪╪F                 
             ¼╪╪╪╪╪╪╪╪╪╪╪╪╪ ¼*╡____,*"     ¼╢mwww*░ J╪╪╪╪╪╪╪╪#_                 
              ¼╤╪╪╪╪╪╪╪╪╪╪╪#,  ¼░░░~               _╪╪╪╪╪╪╪╪╪╪#m                
               _J╪╪╪╪╪╪╪╪╪╪╪Q_                     ╞╪╪╪╪╪╪╪╪╪╪╪╪▐               
               ╞╪╪╪╪╪╪╪╪╪╪╪╪╪#╡                  _╞╪╪╪╪╪╪╪╪╪╪╪╪╪┤               
              J╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪b_       ____   _w0╪╪╪╪╪╪M╤╪╪╪╪P"                
               ░#╪╪╪╪╪P╢╪╪╪╪╪╪╪#¼╢w_   µ╪╪╤┤__µ"  "╢#╤@"  ⌐Mt/dS!               
     __          ¼""»    »»  _____ "╢*mwwwm*░»   __    .......................  
_____\_\_____________  ______\____\______________\_\___:__________       __  :  
\______  _____    \__\_\_   \     _\  _____/_______  ____\  ___/ /--. ___\/_ :  
     \     \ \___________\   \____\_______      /\     \________/    \\% /\/ :  
      \_____\           \_____\      /___/_____/  \_____\  \__________\\/-tre!  
                                                       :          ______     :  
                                                       :   _______\_____\__  :  
                  t ╖ W ╖ i ╖ S ╖ T ╖ E ╖ D            :   \     __________\(!  
                                                       :    \____\________\  :  
                                                       :.....................:  
------------------------------------------------------------------------------- 
   ⌐   ╣  9  9  5   t  W  i  S  T  E  D   p  R  O  d  U  C  T  i  O  N  S       
------------------------------------------------------------------------------- 
                                                                                
                                                                                
                                                                                
                                                                                
</pre>

#### 1995/e^d-name.txt

<pre class="amiga" onclick="this.classList.toggle('highlight')">
                                                                                
                                                                                
                                                                                
                                                                                
                                                                                
 .----- -  -   -  - --------------------------------------------------------.   
 |                                                                          |   
 |                                   ⌂⌂⌂⌂                             .---. |   
 |           ⌂⌂⌂⌂        ⌂⌂⌂⌂⌂⌂⌂⌂⌂   ⌂⌂⌂⌂⌂⌂⌂     ⌂⌂  ⌂⌂⌂⌂⌂⌂⌂⌂         | .-|-'   
 |          ⌂⌂⌂⌂⌂       ⌂⌂⌂⌂⌂ ⌂⌂⌂⌂⌂ ⌂⌂⌂⌂⌂       ⌂⌂  ⌂⌂⌂⌂⌂             ª | |     
 |          ⌂⌂⌂⌂⌂ ⌂⌂⌂⌂⌂ ⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂ ⌂⌂⌂⌂⌂ ⌂⌂⌂⌂⌂      ⌂⌂⌂⌂⌂⌂⌂⌂⌂        : `-'     
 |          ⌂⌂⌂⌂⌂ ⌂⌂⌂⌂⌂ ⌂⌂⌂⌂⌂       ⌂⌂⌂⌂⌂ ⌂⌂⌂⌂⌂           ⌂⌂⌂⌂⌂       .         
 ª          ⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂ ⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂  ⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂     ⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂        `-----.   
 :                                                                          |   
 .                              ⌂⌂⌂⌂⌂                                       |   
 . .---.                   ⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂  ⌂⌂⌂⌂⌂⌂⌂⌂⌂                            |   
 `-|-. |                  ⌂⌂⌂⌂⌂ ⌂⌂⌂⌂⌂ ⌂⌂⌂⌂⌂ ⌂⌂⌂⌂⌂                           |   
   | | ª                  ⌂⌂⌂⌂⌂ ⌂⌂⌂⌂⌂ ⌂⌂⌂⌂⌂ ⌂⌂⌂⌂⌂                           ª   
   `-' :                  ⌂⌂⌂⌂⌂ ⌂⌂⌂⌂⌂ ⌂⌂⌂⌂⌂ ⌂⌂⌂⌂⌂                           :   
       .                  ⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂ ⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂                           .   
 .-----'                                                                    .   
 |                               ⌂⌂⌂⌂                                           
 |                         ⌂⌂⌂⌂  ⌂⌂⌂⌂⌂⌂⌂     ⌂⌂⌂⌂                           .   
 ª                        ⌂⌂⌂⌂⌂ ⌂⌂⌂⌂⌂       ⌂⌂⌂⌂⌂                           :   
 :                        ⌂⌂⌂⌂⌂ ⌂⌂⌂⌂⌂ ⌂⌂⌂⌂⌂ ⌂⌂⌂⌂⌂                           ª   
 .                        ⌂⌂⌂⌂⌂ ⌂⌂⌂⌂⌂ ⌂⌂⌂⌂⌂                                 |   
 ª                        ⌂⌂⌂⌂⌂  ⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂ ⌂⌂⌂⌂⌂                           |   
 |                                                                          |   
                                                                                
                                                    ..lσtom oss g÷ra vad ?      
 `--------------------------------------------------------------------------'   
                                                                                
                                                                                
                                                                                
                                                                                
</pre>

#### 1995/e^d-blc.txt

<pre class="amiga" onclick="this.classList.toggle('highlight')">
                                                                                
                                                                                
                                                                                
                                                                                
                                                                                
 #################################################                              
 #################░¿»»         »7#################              .               
 ################b             d##################                              
 ##################           ####################              :               
 ###################        _╞####################              ª               
 ####################__   _g######################              |__________.    
 ######################-, ########################                         |    
 #######################Q ########################   .---------------------'    
 ######################## V#######################   |                          
 ######################## ]#######################   |         I look to you    
 ######################## ¼#######################   |      How you carry on    
 ########################╣ #######################   |                          
 ########################t #######################   | When all hope is gone    
 ###########***########»   ¼░4########^░░»»¿░0####   |         Can't you see    
 ########⌂"     ¼4#####       ░#####░          »σ#   |                          
 #######░         ¼^0##╣       ¼#▐~            d##   |  Your optimistic eyes    
 #######_            »¼ó _      ▓            _┴###   |  Seem like paradise..    
 ########_           _      ó╟  ¼"░óµ_______⌂#####   |                          
 ##########m________⌂┤      V╣      ¼#############   |       To someone like    
 ##########X########f       IL       ═############   |                  ..me    
 #####╗~       ¼░½##Q       ###_     ]############   |                          
 ###░              \#s  __╖ π####____#############   |        -dEPECHE mODE!    
 #░                ╖ ¼ ░░*╣ ######################   |                          
 #µ__                   ¼b ,######################   `---------------------.    
 ####µ_________,         # [######################              .__________|    
 ##############[        /#  ######################              |               
 ###############       /## ¼######################              ª               
 ###############µ___µ⌂###Z  ######################              :               
 #########################, ######################              .               
 #################################################                              
                                                                                
                                                                                
                                                                                
                                                                                
</pre>

#### 1995/os!-isbm.txt

The colly includes *"Ping Pong"* and *Pac-Man* in a similar style.

<pre class="amiga" onclick="this.classList.toggle('highlight')">
                                                                                
                                                                                
                                                                                
                                                                                
                                                                                
                      .-----------------------------.                           
                      |╖░ñ░                    │▓╣│╖|                           
                      |      ñáñáñáñáñáñáñáñáñ      |                           
                      |     ºáºáºáºáºáºáºáºáºáº     |                           
                      |      ñáñáñáñáñáñáñáñáñá     |                           
                      |     ░á░á░╖░á░á░á░á░á░á░     |                           
                      |                             |                           
                      |     µ#µ  |  µ#µ     µ#µ     |                           
                      |     #~#     #~#     #~#     |                           
                      |╖        µ#µ                ╖|                           
                      `-----------------------------'                           
                                                                                
                       ⌂⌂⌂⌂⌂ ⌂⌂⌂⌂⌂ ⌂⌂⌂⌂⌂ ⌂⌂⌂⌂⌂ ⌂⌂⌂⌂⌂                            
                       ⌂⌂    ⌂⌂ ⌂⌂ ⌂⌂ ⌂⌂ ⌂⌂    ⌂⌂                               
                       ⌂⌂⌂⌂⌂ ⌂⌂⌂⌂⌂ ⌂⌂⌂⌂⌂ ⌂⌂    ⌂⌂⌂⌂                             
                          ⌂⌂ ⌂⌂    ⌂⌂ ⌂⌂ ⌂⌂    ⌂⌂                               
                       ⌂⌂⌂⌂⌂ ⌂⌂    ⌂⌂ ⌂⌂ ⌂⌂⌂⌂⌂ ⌂⌂⌂⌂⌂                            
                                                                                
               ⌂⌂ ⌂⌂⌂⌂⌂ ⌂⌂ ⌂⌂ ⌂⌂⌂⌂⌂ ⌂⌂⌂⌂  ⌂⌂⌂⌂⌂ ⌂⌂⌂⌂⌂ ⌂⌂⌂⌂⌂                     
               ⌂⌂ ⌂⌂ ⌂⌂ ⌂⌂ ⌂⌂ ⌂⌂ ⌂⌂ ⌂⌂ ⌂⌂ ⌂⌂    ⌂⌂ ⌂⌂ ⌂⌂                        
               ⌂⌂ ⌂⌂ ⌂⌂ ⌂⌂ ⌂⌂ ⌂⌂⌂⌂⌂ ⌂⌂ ⌂⌂ ⌂⌂⌂⌂  ⌂⌂⌂⌂  ⌂⌂⌂⌂⌂                     
               ⌂⌂ ⌂⌂ ⌂⌂ ⌂⌂ ⌂⌂ ⌂⌂ ⌂⌂ ⌂⌂ ⌂⌂ ⌂⌂    ⌂⌂ ⌂⌂    ⌂⌂                     
               ⌂⌂ ⌂⌂ ⌂⌂ ⌂⌂⌂⌂⌂ ⌂⌂ ⌂⌂ ⌂⌂⌂⌂⌂ ⌂⌂⌂⌂⌂ ⌂⌂ ⌂⌂ ⌂⌂⌂⌂⌂                     
                                                                                
           .(. i was the champion of the block on this game! .).                
                                                                                
                                                                                
                                                                                
                                                                                
                                                                                
</pre>

#### 1995/m's-sign.txt

<pre class="amiga" onclick="this.classList.toggle('highlight')">
                                                                                
                                                                                
                                                                                
                                                                                
                                      _°_                                       
                               _     _) (_     _                                
                        _ _ _ /(__ __)╖o╖(__ __)\ _ _ _                         
                          ( ((__╖(_\_     _/_)╖__)) )                           
                               /____o ╖O╖ o____\                                
                            ___ /\_\_     _/_/\ ___                             
                        _.__\ (_) (_/     \_) (_) /__._                         
                        \|_                         _|/                         
                         |      .╛╛╛╛╛╛╛╛╛╛╛╛╛.      |                          
              . .........|     .╛╛╛╛╛╛╛╛╛╛╛╛╛╛╛.     |......... .               
              : ::       |    .╛╛╛╛╛╛╛╛╛╛╛╛╛╛╛╛╛.    |       :: :               
           ___:_::___  __|____╛╛╛╛╛╛╛╛╛╛╛╛╛'╛╛╛╛╛.   |      _::_:___            
   ⌂  ⌂⌂⌂⌂⌂\         \/  :  .╛╛╛╛╛╛╛╛╛╛╛╛╛' `╛╛╛╛╛___|______\____  /⌂⌂⌂⌂⌂  ⌂    
   ⌂  ⌂⌂⌂⌂\          \/    .╛╛╛╛╛╛╛╛╛╛╛╛╛'   `╛╛╛╛╛. :        ______/⌂⌂⌂⌂  ⌂    
   ⌂  ⌂⌂⌂⌂⌂\__________\   .╛╛╛╛╛╛╛╛╛╛╛╛╛'     `╛╛╛╛╛.         \j     /⌂⌂⌂  ⌂    
   ⌂  ⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂/_____╛╛╛╛╛╛╛╛╛╛╛╛╛'       `╛╛╛╛╛_______________/⌂⌂⌂⌂  ⌂    
              : ::      .╛╛╛╛╛╛╛╛╛╛╛╛╛'         `╛╛╛╛╛.      :: :               
              : ::     .╛╛╛╛╛╛╛╛╛╛╛╛╛╛╛╛╛╛╛╛╛╛╛╛╛╛╛╛╛╛╛.     :: :               
              : :: dto.╛╛╛╛╛╛╛╛╛╛╛╛╛'             `╛╛╛╛╛.m's :: :               
              : ::.......|                           |.......:: :               
                         |                           |                          
                -   - ---+--≈m≈--≈^≈--≈a≈--≈^≈--≈z≈--+--- -   -                 
                        _|_                         _|_                         
                        \|___  _               _  ___|/                         
                            /_( ) ___________ ( )_\                             
                                \/           \/                                 





                              _________/\_________                              
                          _.__\   _ ___)(__ _    /__._                          
                          \|           \/           |/                          
                      .    |                        /                           
                 ....::::╖╖|╖                       |                           
        ....:::::::::::╖  _|_                      _|_                          
  .::::::::::╖╖╖ :::::     |/                      \|                           
    ╖::::::     ::::╖______|______       _____      \_      _________________   
      ::::::   :::╖    __        /_______\__ (_     _/     _) __            /   
       ::::::   ╖ |    |/                __   /____ |______\  \/           /    
        ::::::::╖ |    /       /\        \/        \/           __________/     
    ╖::::::::     |____\       \_\__________                /\_____\            
        :::::           \_______/     .     \______\/      dto/m's              
        ::::           __. |     ..:::..           /______/                     
       .::╖          __\_|:::╖╖╖:::╖: :  .:         |                           
        ╖         __/______ \__   .:.:╖ .           ╛                           
                  |           |     . ╖            ,⌂.                          
                  |      .____|          ⌂   ⌂⌂ ⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂ ⌂⌂   ⌂               
                  |      | __ |                    `⌂'                          
                  /      | )_\| - f  r  a  m  e -   ╛                           
                  \      | /_/|                     |_                          
                  |\     |____|    _ __/\___ _   ___|/                          
                  |           |________)(________\                              
                  |___________|        \/                                       
                  :                                                             
                                                                                
                                                                                
                                                                                
                                                                                
                                                                                
                                                                                
                                                                                
                                                                                
      _    _                              .............................         
     `╛╛.,╛╛',╛╛╛╛╛╛x.                    ::                         ::         
       `╛╛',╛╛╛╛╛╛╛╛.╛ |_________________________.   ...........     ::         
        `╛╛╛╛╛╛╛╛╛╛╛╛╛ |                  ..     |   :: ..... ::     ::         
          `╫╛╛╛╛╛╛╛╛╫'                    ::     |   :: :.....::     ::         
                                          ::     |   ::..............::         
                     _____________________::_____|_________                     
                  _:_\                    :      |        /_:_  .               
                  \|                      .      |..:::.    |/.::╖              
                   |           :.               .|:╖ ╖::    .::╖                
                   |          :::╖       .:      |    ::   .::  ..::            
            ..     |         :::╖       :::    ..|:::.::  .:: .::╖::.           
         ..::╖╖    |  .::...::::........:::..::╖╖|  ╖:::  ::|:::  :::           
       .::╖       .|     ╖:::::     ╖╖╖╖::::╖    |   ::: ::╖:::::.:::.          
     .:::╖      .:::      ::::╖      ..:::╖      |   ::: :: :::.╖╖╖╖╖  .        
     ╖:::.   ..:::::.   .:::::     .:::╖::       | ..::.::: |╖:::::::::╖╖       
       ╖╖:::::╖╖  ╖:::::╖╖.::    .::╖   ╖   ....:|:╖╖:╖ ::dto/m's               
                   |        ╖    ╖:::::::::::╖╖╖╖|      ::  |                   
                   |                             |      ::  |                   
     ⌂ ⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂|⌂⌂⌂⌂⌂⌂::⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂ ⌂     
                  _|                             |      :╖  |_                  
                  \|__                    ╖      |        __|/                  
                   : /____________________:______|________\ :                   
                       ...............    ::     |                              
                       ::    ...... ::    ::     |                              
                       ::    ::.....::    ::     |                              
                       ::.................::     |                              
                                                 |                              
                                         _._______________.                     
                                         \|               |                     
                                          |  w h a l e !  |_                    
                                          |_______________|/                    
                                                 .                              
                                                 |                              
                                                 |                              
                                                »»»                             
                                                                                
                                                                                
                                                                                
                                                                                
</pre>

## 1996

#### 1996/os!-eotw.txt

<pre class="amiga" onclick="this.classList.toggle('highlight')">
                                                                                
                                                                                
                                                                                
                                                                                
                                                                                
      ______                                                                    
     .\  __/_____ ______                                                        
     |_______    \\    /_______            ______                               
   oS|________    \     ______/ ___________\    /_______      ________          
     :      /______\_____/    \/     __    \     ______/______\      /          
     :                  /______\____________\______    \      __  __/           
     :                                           /______\______/    \           
     :                          ⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂                    /______\sCf       
     :                          ⌂⌂⌂⌂                                 :          
     :..........................⌂⌂⌂⌂ ⌂⌂⌂⌂⌂ ..........................:          
                                ⌂⌂⌂⌂  ⌂⌂⌂⌂                                      
                                ⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂                                      
                                                                                
                                                                                
                                                                                
                                                                                
                                                                                
</pre>

#### 1996/ed_fc.txt

<pre class="amiga" onclick="this.classList.toggle('highlight')">
                                                                                
                                                                                
                                                                                
                                                                                
                                                                          
        ╖                                                         ╖       
 [⌂⌂⌂][ ≈ ][⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂][ ≈ ][⌂⌂⌂]
        ╖                                                         ╖       
                                                                          
                                   ╖ A ╖                                  
                                                                          
                       ╖ T ≈ R ≈ I ≈ B ≈ U ≈ T ≈ E ╖                      
                                                                          
                                 ╖ T ≈ O ╖                                
                                                                          
         ╖ T ≈ H ≈ E  ╖  A ≈ S ≈ C ≈ I ≈ I  ╖  S ≈ C ≈ E ≈ N ≈ E ╖        
                                                                          
                                                                          
        ╖                                                         ╖       
 [⌂⌂⌂][ ≈ ][⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂][ ≈ ][⌂⌂⌂]
        ╖                                                         ╖       
                                                                          
                                                                                
                                                                                
                                                                                
                                                                                
</pre>

#### 1996/-t-ap3e.txt

<pre class="amiga" onclick="this.classList.toggle('highlight')">
                                                                                
                                                                                
                                                                                
                                                                                
                                                                                
                                                           ________             
                                                      _a╡╡µM@#M╢╢╤╪╪╪K          
                                                     ╞P░"_µ╞"     ¼#╪╪▐         
                                                 ____   ╡╪@        ]╪╪L         
                                      _/     _╡*"¼╢╪#  J╪╪         ß╪╪          
                                     ╞╪_╡m  J╪F   J╪@  ]╪╪_       ,╪╪╣          
                        _,     _ _µM╪"»    ╪F  _µ╪&*@  #╪#_    _µ╪@             
                        a░  _w^░##  J╪     J╪■-ñ"»   ,   ╢#╪#m-^░»              
                    ,µ_ ó╪  ╪L  __  ]╪      ##_    _╞┤-rLF/-T!                  
               , µ  "░╪_ ╪L ╢╪*P╢╪L J╪L   a ¼╢╪╤▐^░"»                           
         #_.=⌂F  ╪▐   ╢Q ╢Q  _   ╪F  ╢╪▐=^░                                     
       ╖╢F   ╪   ╪L   ╞F J# ╢╪w,µP                                              
        JL   #   ╪#__╡P   ░┤             ╖ hOTWIRE  rELiEF  dEVíSTATOR ╖        
        ¼K   ╞╡,ñ"¼P"             ╖ tANGO  pRiDE  sAL-1  sCARFACE ╖             
         ╢▐ñ                                                                    
                                     ⌐ gROOVY pEOPLE pRODUCTiONS ╣996           
                                                                                
                                                                                
                                                                                
                                                                                
                                                                                
                                                                                
</pre>

#### 1996/beuty.txt

<pre class="amiga" onclick="this.classList.toggle('highlight')">
                                                                                
                                                                                
                                                                                
                                                                                
                                                                                
                                                                                
            ....:...:╖╖╖╖╖╖╖╖╖╖:....                       ____     _           
         ...:                      :......          ......|:╖ ¼|   |¼|          
        ..:    we are about to          :......     : .  :|   _|__ |_|          
     ....:      take a look at the          :.....  :    :|,_    ¼| __          
    ....:        very short but probobly       :..  :....:|_/     |/_/'         
      .:.         interesting enough,..         :..        /______|             
       .:....       ____ _                                                      
          ..:..... /___///'                .____     __     ____                
                   .__  ____________. _____|___/_ __|__\____\___\________       
            .___ __|:╖||:╖         ¼||:╖ _______/ ____,        /'\:╖  __/'      
            | _/`\ |  ||            ||    ¼'  |///____________/_       ¼\       
            | |   \   ||,_          ||        ||:╖ ¼'     \  /╖    \_____\      
         ___| |___ \__|l_/          |l________|l___________\/_______\!CE ¼      
         \\\\⌂⌂⌂⌂┤  ¼~~~/           |~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~¼           
          \\\⌂⌂⌂┤      /            |                                           
           \\⌂⌂┤      /             |                                           
            \⌂┤      /______________|                                           
             ┤       Y             ¼'                                           
                     ╖                                                          
                                                                                
                                                                                
                                                                                
                                                                                
                                                                                
</pre>

#### 1996/hos-dts!.txt

<pre class="amiga" onclick="this.classList.toggle('highlight')">
                                                                                
                                                                                
                                                                                
                                                                                
                                                                                
 ____    _    _______  _   ____ ____      _________                             
|║   \  ///_ |║     ////_ |║  _\   //_  _\\___    ║| .                          
|:   \\/    \|:          \|:   \\_    \/  _  //   :| :⌂                         
l_____\      \____________\_____\      \___________l |    ⌂  .                  
       \______\                  \______\            ⌂__⌂______ ___  _          
         _  ___ _____   ___  rDm     _________      _________    _________      
                ⌂   ⌂| |║ //_______ |║  _ _  //_  _\\     ___| _\\     ___|     
             .     ⌂ : |:          \|: //___/   \/   \_      |/   \_      |     
                    ⌂. l____________\____________\___________l____________l     
                                                                                
                                                                                
                                                                                
                                                                                
                                                                                
                                                                                
</pre>

#### 1996/-t-loved.txt

<pre class="amiga" onclick="this.classList.toggle('highlight')">
                                                                                
                                                                                
                                                                                
                                                                                
                                     _,,, __                                    
                                  .-⌂⌂_╡«ñM■▓µ._                                
                                µ░ⁿ°M╢,] »"╨,»»Mm_                              
                              .2▐⌂V`═ ┤N_7 F *J_`N╫_                            
                            _⌂m#_ ╣ hC.,WK ▐,^#v.`A@_                           
                           J»d4▐"gw⌂J▐"JU¼uK J¿ (/ΓE0_                          
                          /╙⌂ I /7w4Q] fI ╞╕\╞ 4▌MW_wM                          
                         /µ/- ╞┤╕4¼I[\w #/J`JM  L└ E╞«t                         
                        d&FL /I╫_I ú▐-úaN.J/╪ \Fα_w4 MM                         
                       J_FF1/,╢m`4╖FK VN@ 7u7,⌂wM▌9W/L@L                        
           _____       «K ▐⌂mLIL7╤τL▐FFIPLAú@L┤EJ I/M4▐╢                        
        ._ \╖  / _____┴@\ M,\ 7X  ╛&L`_B_αJ7Mß/d*.┴J&lt;╢L╞▐_____________.         
      ._| _\\ (      j4▐ g▐  ╕J¼`/LK#┤╤ KI«MM╤YWJKd▌ j#JL        __   |_.       
   .._| |   _\/___ ╖ M╤»»4M=z]J╕[ &FI▌U▌MQ0N╤π_J╪~4IxI¿N4_ __ __/\_\  | |_..    
   ||_|_|___\/\  //_J7&' FE. FVMg/Jh]/#╛LMJ@W#/4▐╕╞4╕0╖╢W   //_/\/_/__|_|_||    
    -rLF:-T!   \/___ú╤7&lt;/ j W_¿Ljbs▐╢/╞\╞├╤N╪#^╞╖»#┤\«w╪W___ \_\/\_\  :         
                    ╪J],MK¿ [╟"0_]/⌂╢«W░»   0«ME\µW-/▐╢⌐╪       \/_//___ _      
                   J┤═J╣J `╛F (JYKwE╡░ s   i╪╤╤/CY /JL╞«#                       
                   ╞⌐╞7»╬╕=╞M@=«W_▐╪" U»  i ╪KN_3╪m-#╪-╪F                       
                   ╪╡1FTM-g_L¼_@A#╛┤ r o c JAMLDdjL_MjJA▐                       
                   EII /J '/VK_#α#F o t S»_╢#\╢L▐¼#Z_#F0                        
                   «QJ/ j╡┤ J)&╤C╤ t»  a _Φ╞MN╜@\,b _0_╞                        
        .an.       #_«L»J#- ╣╢"⌐╤#      ,«Q╪tt╞Q╖-M» #/┤     .na.               
    .interresting. # Qt ┴¿\Z ╚Mµ╤&_  _,qE╤╤,#XLJ.╞ ▐JKj .gnitserretng.          
        .way.      ╪ FVJJ-7\_*⌂dM╪╤╤#5@JdEM¼╞/└¼W╞╖MYSF     .yaw.               
         .▓.       IL▐>#j [>⌂K-jWÑQº╢⌂#╢m╢\K╛▐╕╜U~τ«-╪       .▓.                
       .start.     I]F E&&lt;╕'0 /#b╪@«WLTF¼QCX l/░▐ /#2┤     .trats.              
___________________J-#»L╠πQ_╪dC2 M╤E╤¼«QKJ┤J╤K_'&/╛QK___________________________
                                                                                
                                                                                
                                                                                
                                                                                
                                                                                
</pre>

#### 1996/-t-tatf2.txt

<pre class="amiga" onclick="this.classList.toggle('highlight')">
                                                                                
                                                                                
                                                                                
                                                                                
                               ___________                                      
                               \_________/                                      
                               ___________                                      
                              _)         (_                                     
                              |          _|                                     
                              l_      ___\                                      
                               /_____(                                          
       _________         __╡╡╡__                           __________           
      _)       /________µM"»»»¼# __╡╡╡_  ________ .________)     ___/__         
      |       (_        ╪      ╪╞@░»»¼╢m_)       \|      (|     ______(_____.   
      |                _╪     @╪" .╖.  ¼╪         \_      |     \          _|   
      l_      _________\╪▐    ╪" : ° : _╪          \)    _l_      _________\    
       /_____((rLf)     0K   ╖    ╖.╖_µ@┤_      _________\ /_____(-T!           
                        ¼╪_      __µ⌂@»  /_____(                                
                         ¼#w__╡╡╤P""                                            
                           ╢@░»                                                 
                                                                                
                                                                                
                                                                                
                                                                                
                                                                                
</pre>

#### 1996/-t-tatf3.txt

<pre class="amiga" onclick="this.classList.toggle('highlight')">
                                                                                
                                                                                
                                                                                
                                                                                
                                             ___:_                              
                                       ___ __\  |                               
                                      |   \)    |                               
                                      |         |                               
                                                   ⌂   .                        
                ⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂:::|:╖>                     
       .        ⌂⌂  _.             ._              ⌂   ╖                        
    &lt;╖:|⌂ ⌂⌂ ⌂⌂⌂⌂⌂  )[ t r e a z h ]( _         |.                              
       ╖        ⌂⌂                    |         |ª                              
                ⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂           |         |ª                              
       .____.            ⌂⌂ ._____.   |     _____.                   __.        
       |    |    ._____  ⌂⌂ |   __l____ ____\__  l_      ______  ____\ |____    
   ____|    |____|   _/_____|  _\     (_\   __/   (______\_   /__\     .   (_   
   \____    ____/    \|   (________   _________   __    _______________|   __\  
    -T!/____\ /__   __:_____\     /___\       /___\/__  \ \-rLF        l___\    
                /___\                           _    /_____\                    
                         ⌂⌂           |         |.                              
                         ⌂⌂           |         |ª                              
                         ⌂⌂         ⌂ ...       |ª                              
                         ⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂ :::       |ª                              
                                    ⌂ .         |ª                              
                                      |         |ª                              
                                      |   __ ___|╖                              
                                     _|___\(/                                   
                                      :                                         
                                                                                
                                                                                
                                                                                
                                                                                
                                                                                
</pre>


#### 1996/e^d-t0!7.txt

<pre class="amiga" onclick="this.classList.toggle('highlight')">
                                                                                
                                                                                
                                                                                
                                                                                
         .....  .....                                        ...                
   ___ _ : ..:..:   : .... :. _ ___________ _   _   .   . ...:.:   _   _ ____   
  í      :.:.:      :.:  :..                    _            :               í  
  |.  /\___:_ .  /\_____ . :/\_     .  __ .  /\_⌂___ .  __ . :/\_____  ╖t0!╖ |  
  |_\(_ _   (__\(_ _   (__\(_ (__   _\(_(__\(_ _   (__\(_(__\(_ _   (_       |  
  /   __/    /     /    /    ___/__/     /     /____/     /   __/ .  /\_____ |  
_/_   \    _/_    /   _/_   _/   _/_   _/_   _/   _/_   _/_   \____\(_ _   (_|  
\/____/____\/____/____\/_________\/____\/_________\/____\/____/  /   __/    /|  
  |        :               :                    ⌂            : _/_   \     / |  
  |.  /\___:_ .  /\_____   : .  /\_     .  /\_  ⌂  .  /\____ : \/_. _/\___/  |  
  |_\(_ _   (__\(_ _   (_  : _\(_ (__   _\(_ (__⌂_ _\(_ ___/ :    _\(_ (__   |  
  /     /    /    _/____/  :/    ___/__/    _    (/    ___)__:   /    ___/__ |  
 /    _/   _/_   ___/     _/_   _/   _/_    /   _/_   _/    /: _/_   _/ .  /_|  
 \_________\/____/        \/_________\/____/____\/_________/ . \/________\(_(|  
  |        :      .....  ..:..                  ⌂                      /     /  
 .╛╛╛╛╛╛,  :....  :   :..:.: :   _/\____   __.  ⌂    _/\____ .       _/_    /|  
 ╛╛╛  ╛╛╛      :..:      :...: ._) ____/ ._)¼|__⌂__ _) ____/       . \/\___/_|  
  |   ╛╛╛                      |   ___)__|   |    ¼Y   ___)__.     _\(_ _   (|  
  | ╛╛╛╛, ╛╛╛╛╛╛╛, ╛╛╛╛╛╛╛,    |.  |    ¼|.  |     |.  |    ¼|    /     /    /  
  |   ╛╛╛ ╛╛╛  ╛╛╛ ╛╛╛  ╛╛╛    ||  |     ||  |     ||  |     |   /    _/    /|  
 ╛╛╛  ╛╛╛ ╛╛╛  ╛╛╛ ╛╛╛  ╛╛╛    ||  |     |ª  |     ||  |     |   \___. _/\_/_|_ 
 ╛╛╛  ╛╛╛ ╛╛╛╛╛╛╛, ╛╛╛  ╛╛╛    |ª  |     |:  |     |ª  |     |       _\(_ _   (_
 ╛╛╛  ╛╛╛ ╛╛╛  ╛╛╛ ╛╛╛  ╛╛╛    |:  |     |.  l_ _  |:  |     |      /     /    /
 ╛╛╛  ╛╛╛ ╛╛╛  ╛╛╛ ╛╛╛  ╛╛╛    |.  l_ _  l____///  |.  l_ _  |    _/_    /    / 
 `╛╛╛╛╛╛' ╛╛╛  ╛╛╛ ╛╛╛╛╛╛╛'    l____///  |   |     l____///  |    \/____/____/  
  |                                `-----'   `--⌂--'   `-----'               |  
  |                                           __⌂__                          |  
  | ╖e^D╖                                    _\   /_                         |  
  !_____________________________ _   _   _ __)\\ //(__ _   _   _ ____________!  
                                                Y                               
                                                                                
                                                                                
                                                                                
                                                                                
</pre>


#### 1996/e^d-barc.txt

<pre class="amiga" onclick="this.classList.toggle('highlight')">
                                                                                
                                                                                
                                                                                
                                                                                
            ╪╪L ╪╪ 7╪╪╪F ╪╪  ╪#   ╪╪╪╪ J╪# 7╪╪╪L    #  7L  ╪╪╪╪ 7╪╪             
            ╪╪L ╪╪ 7╪╪╪F ╪╪  ╪#   ╪╪╪╪ J╪# 7╪╪╪L    #  7L  ╪╪╪╪ 7╪╪             
            ╪╪L ╪╪ 7╪╪╪F ╪╪  ╪#   ╪╪╪╪ J╪# 7╪╪╪L    #  7L  ╪╪╪╪ 7╪╪             
            ╪╪L ╪╪ 7╪╪╪F ╪╪  ╪#   ╪╪╪╪ J╪# 7╪╪╪L    #  7L  ╪╪╪╪ 7╪╪             
            ╪╪L ╪╪ 7╪╪╪F ╪╪  ╪#   ╪╪╪╪ J╪# 7╪╪╪L    #  7L  ╪╪╪╪ 7╪╪             
 ╕____      ╪╪  ╪╕_ ╪╪╪       #   ╪╪╪ __   7╪╪╪  ___   7L╕╡╡__   ╪╪  ╡╡╡╡╡µµp   
 ["3╤╤╤#m_  ╪╪   ¼"▐ ╪╪ j╢9╤▐╡_   ╪╪ ╢M"╢w  ╪ ,µ╪#╢╢╤m_  [ a╢╢╢*w ╪    ╢╢"""    
 [,      "Q ╪╪  )  [ ╪╪ ]     "*╕ ╪ ┤'   ]s ╪  P      ╢w [J      "_   ▐         
 [I       J▐ ╪  ┤/ ] ╪╪ ]J      ╢  (f    ]]  ╣F        0 ╣I       ╢L  ▐         
 [I      ,╟▐ ╪ ,,   τ ╪ ]J      jF J      j  W         ]  I           ▐         
 [I    _/a~ ╪╪ ┤╣   / ╪ ]═      ⌂ ][      ░  #            I       )   ▐         
 ╣`_╡µñ~/   ╪ )/    (s  ]I    _╕' 0▐         #            I       ╣'   µµ╞╪╤▐   
 ],╢╢╢^mww  ╪ ⌂   ╕_ ¼  ]I  _/a"  0▐         4         )╕ I      //   ¼""~      
 JF      ¼@  ) g╞╪W#m╕t ] µ°      JL         0        ,, ,I    ╕(/   J          
 JL       ¼   ¼"      ¼╕] ¼"╢ó╞╡╕  #╕     _µP¼#      x_' [I   µ■" ╪  ¼╕__       
  _w╡╡╡µµ╤" ('  ╪╪  ╪ (j I     "* ╪ ╢w╡╡pP"  ╪ ╢g╡╡µW*~  [ aµ#"  ╪╪  ╕_"W╪╤╪#   
   """""    ╪╪  ╪╪  ╪╪¼~¼^   ╪    ╪╪        ╪╪╪  ""      ¼╢"    7╪╪  ¼""        
            ╪╪L ╪╪ 7╪╪╪F ╪╪  ╪#   ╪╪╪╪ J╪# 7╪╪╪L    #  7L  ╪╪╪╪ 7╪╪             
            ╪╪L ╪╪ 7╪╪╪F ╪╪  ╪#   ╪╪╪╪ J╪# 7╪╪╪L    #  7L  ╪╪╪╪ 7╪╪             
            ╪╪L ╪╪ 7╪╪╪F ╪╪  ╪#   ╪╪╪╪ J╪# 7╪╪╪L    #  7L  ╪╪╪╪ 7╪╪             
            ╪╪L ╪╪ 7╪╪╪F ╪╪  ╪#   ╪╪╪╪ J╪# 7╪╪╪L    #  7L  ╪╪╪╪ 7╪╪             
            ╪╪L ╪╪ 7╪╪╪F ╪╪  ╪#   ╪╪╪╪ J╪# 7╪╪╪L    #  7L  ╪╪╪╪ 7╪╪             
            ╪╪L ╪╪ 7╪╪╪F ╪╪  ╪#   ╪╪╪╪ J╪# 7╪╪╪L    #  7L  ╪╪╪╪ 7╪╪             
                                                                                
                                                                                
                                                                                
                                                                                
</pre>

## 1997

#### 1997/u'r-bomb.txt

<pre class="amiga" onclick="this.classList.toggle('highlight')">
                                                                                
                                                                                
                                                                                
                                                                                
               -  a s c i i   a r t   c a l l e d   b y   h i m  -              
                                                                                
                                                                                
                          j_ #               / &                                
                           ╪_σb            _' ╝╪                                
                           1`d╪■      jL  _'  ╞╪             _        _╡ _╡     
         _                 ¼ ░╪╪≡  ┼  ╪# ,F  j╪╪        _, _°F     _ ╓╦µ╪P      
       Γ_¼¡w__              , ░╪╪≡j \╞╪╪w    ╪╪╪╦í _°r_-jLg╪F   ╕ '_╞╪╪P        
        ░#-.░#p╡_      ░b╡__]  ░╪╪F ¼╪╪@    j╪╪P j╪╪╪P  ╪╪╪P ╕ ' _╞╪╪P          
          ¼-_"¼╪╪╪╡__ + ⌂╪╪╪ML  π╪   ╢P     #╢   ¼╪P   ╞╪╪╪ '  _d╪╪P            
            »¡. ¼░*╪╪g╡≡»░╢╪╪#                        µ╪@░   _╞╪╪P"             
               ^._  ¼░#╪6   ¼░   - A T O M I C -      ░    _°╪╪╪"               
                 -._ ____                         .____   °╪╪╪                  
     ._ ______         _/____. _______   ___  ___ |  _/_____ _   _______ _.     
     | \\              \_    |/   _   \./   \/   \|  \_                // |     
     |  \\              '    |    /    |    \/    |   '               //  |     
     |___\\____ _ ___________|_________|____/     |___________ _   __//___|     
                                           /______|tF!/u'R!                     
           !░»µ┌.-g╪╪╪╪"   _-                          _  ¼N╪╪╪╪╪╪b_            
            *P"  µ╪╪╪@  _°╪P          Γ           _    ╪g╡_ σ░░P@╪╪╪╪╡_         
               _╞#░╕'.-σ╪╪@    j┬   _╞╪     jp    Ip_  ¼╪╪╪b╡░,                 
               "   P┤ j╪╪╪   _ñ╪╪  ,╪╪╪╬   _╪╪b   ]╪╪╡  ¼@╪╪b¼¡k                
                     j╪╪P   ^╪╪P ╬- σ╪╪╪  ,^╪╪╪╪_ ]░╪╪#╡_`,¼░9┐                 
                    j╪╪P  "  ó"      ╪╪PL_╣ ¼╞╪╪Psj  ░╪╪╦{¼L                    
                   _╪@#,^            πP αf    π╪# M╬  ¼9╪╬`QL                   
                   ╞»jF              `         ░#       ¼╪, ░                   
                                                                                
                                                                                
     -  a n   a n o t h e r   u ' r a c e   p r o d u c t i o n   1 9 9 7  -    
                                                                                
                                                                                
                                                                                
                                                                                
                                                                                
                                                                                
</pre>

#### 1997/se-atrip.txt

<pre class="amiga" onclick="this.classList.toggle('highlight')">
                                                                                
                                                                                
                                                                                
                                                                                
                                                                                
 _ ______                    ______              ______                         
///     /      ___________  /     /____  _______/     /__________  _____________
 /     _/_____/     _     \/     _     \/     _      /_\____     \/     _______/
/     //           /______/     //           //           _/     /\_____     \  
\___________/\_________________//_____/\___________/\________________________/  
                                                                                
                           ___╡╡µµµ╞╪╪╪╪╪╪╪╪#µµµw╡____                          
                     _╡╡µ╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪µmw__                    
                  _µ╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪#w_                 
                ╡╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╤╤╢╢╢╢╢╢╢╤╤╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪W_               
          bHm  µ╪╪╪╪╪╪╪╪╪╪╪╪╪╪#"                ¼╢╪╪╪╪╪╪╪╪╪╪╪╪╪╪Q  sE!          
               ╢╪╪╪╪╪╪╪╪╪╪╪╪╪╪W_        ~       __╪╪╪╪╪╪╪╪╪╪╪╪╪╪#               
                ╢╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪µm╡╡_______╡╡µ╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪#~               
                 "╢╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪@"                 
                _µ╪#⌂#M«╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╤@⌂&µ╪#w                
               µ╪╪╪╪╪╪╪╪╪µ⌂W#╞MM«««╤╪╪╪╪╪╪╪╪╪«««@MM#«&µ╞╪╪╪╪╪╪╪╪Q               
               ╤╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪#               
                ╢╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪┤               
                 "╤╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪#P                 
                    "╢╤╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╤P░"                   
                         ""░╢╢╤╤╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╤╤P╢░░"                         
                                                                                
  l    e    t    d    a    r    e    c    o    r    d    s    p    i    n    n  
                                                                                
                                                                                
                                                                                
                                                                                
                                                                                
</pre>


#### 1997/se-pain.txt

<pre class="amiga" onclick="this.classList.toggle('highlight')">
                                                                                
                                                                                
                                                                                
                                                                                
                                                                                
                        ⌂⌂ ⌂ ⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂ ⌂ ⌂⌂                             
                                                                                
                        ⌂⌂                       ⌂⌂                             
   _ __  _____ _ _______   _ ______       _ ___.      _ _________ _ ________.   
 ._\\\ \/    /_\\\  _   ⌂⌂_\\\    /_______\\\__|_⌂⌂__\\\_      /_\\\__     |    
 |    _/   _/       /    ⌂       _      /        ⌂      /     /     _/     |    
 |    \     \      /     ⌂       /     /         ⌂     /     /      \_     |    
 |_____\_____\__________⌂⌂______/     / _ _______⌂⌂__ /     / _ _____|_____|    
                        ⌂⌂     /______\          ⌂⌂  /______\tG°                
                        ⌂⌂                       ⌂⌂                             
                                                                                
                        ⌂⌂                       ⌂⌂                             
                                                                                
                        ⌂⌂ ⌂ ⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂ ⌂ ⌂⌂                             
                                                                                
                                                                                
                                                                                
                                                                                
                                                                                
</pre>

#### 1997/p^d-ambb.txt

<pre class="amiga" onclick="this.classList.toggle('highlight')">
                                                                                
                                                                                
                                                                                
                                                                                
                                                                                
                                 _╡m**µw_                                       
                               µ@"      "╢w                                     
                             ,╪"          ¼#_                                   
                            ╡F              ╢w                                  
                           J"                ╢_                                 
                           F                  ╢                                 
                          ╞                    Q                                
                         J▐                    ]                                
                         ß                      K                               
                         #                      0                               
    f.u.L.L a.t.t.e.n.t.i.o.n b.e.c.a.u.s.e t.h.i.s c.o.L.L.e.c.t.i.o.n         
      m.i.g.h.t j.u.s.t b.e o.n.e o.f t.h.e s.m.o.o.t.h.e.s.t o.n.e.s           
  m.a.d.e b.y t.h.e h.a.l.f.s.k.o.o.L.e.r c.r.L p.i.o.n.e.e.r d.e.s.i.g.n       
                         ╢                      F                               
                         ¼L                    J                                
                          0                    #                                
                          ¼L                  ╪                                 
                           ¼L                J┤                                 
                            ░╡              µ"                                  
                             ¼b_          _⌂┤                                   
                               ╢µ__    __°░                                     
                                 "╢M**@P"                                       
                                                                                
                                                                                
                                                                                
                                                                                
                                                                                
                                                                                
</pre>

## 1998

#### 1998/la!-mia.txt 

<pre class="amiga" onclick="this.classList.toggle('highlight')">
                                                                                
                                                                                
                                                                                
                                                                                
                                                                                
                                                    _awΓ_                       
                                                  µ"   ¼#_                      
                             ____      __µm.wΓ_ ,F yñ░╢_ ╢_                     
             .              J@ »¼ñw__aó"     ¼░ñ╞q╞_   ╢  ╢_                    
-------------╖-½-          ßñ _ ,,mK»           »░»Σπ°  ╢, ╢                    
             ª             F_╔  _╧='  ,q╕  a░░τ      ^g  J  1                   
             ª            ╞ ╪  g#    J▐_╢  F╡ #      ¼# a4 _F                   
             ª            FJ▐  ¼╪    J_P╪  └,J"       ╢░__µ"                    
  --[ ----]--╖-------|-/  L¼L   ▐     ░░_,aaΓ          M"»                      
             ╖            #_¼maJ▐     _J»    #*w,_    JL                        
                           ¼ñ*.╞#   _p" h__,/    "L  J░  ????... .              
                                ╢_  #     JL    _ #_*'                          
                                 ¼*w#░w_  J~w__w╣J&P^m,_         _              
                            _    _µ░π*_Z┌Z___,,µñ J    ¼*w      _\---------     
                    --]-----(--_*" _Fa┤ »»¼J▐ ##  F      ¼╢,----)               
                             _µ░   ╪ F     d J 7 ,╣        ¼b                   
                            _#    J┤╞      0 ╪ `╧            4                  
                           y"     ╞_1      #_╦  ¼K            b                 
                    ______J┤      ╪N▐      ╤W«▐  `╡_          ]                 
                  ╡╢M░░^«2@q╡δ*a._╢╪-* aaΓwP⌂W█╢╧╤Z╢τ         J                 
                 µ"J ¼w7¼\&  »"*_¼╢╣    ╕F_ # ╢qm0Wñúñm._____,▓                 
                 ╡MN&_JM, ¼K    ╢w      ß╞¼╬╢_╞d ¼▐≡¼≡  »¼"»»#                  
                 K╬ ╢»»__^^¿≡    ¼▐     0# ╢ " ╢.J┤J▐¼L      ¼k                 
                 ¼@^ñ P»»"& ¼╬    ╬     7░-",*^^q_  Q ╦       ╪ -----╖---[-     
                  ░, J▐   J▐ ╢╕   0     ¼τ  #    Q  # 0      µ┤      ª          
                   ¼w ░w__J  J▐  _F  ____&  ╢_   #  F #    añ        ª          
                     ░w ¼"   ╞_,╞5+r░"_»»»≡  ░=*░  p µ~_w*"  _       ª          
                      ¼*w___╪ñ"     )╖\--- ñw_   _µw°#░»-----(-------╖-         
                          »                  """""                   ╖          
                                                                                
                                                                                
                                                                                
                                                                                
                                                                                
</pre>

#### 1998/l124-iso.txt

<pre class="amiga" onclick="this.classList.toggle('highlight')">
                                                                                
                                                                                
                                                                                
                                                                                
                       ⌂⌂⌂⌂⌂                                                    
    ⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂ ⌂   ⌂                                                    
    ⌂           _      ⌂⌂⌂⌂⌂                       ⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂          
    ⌂       ___|_|                                 ⌂                 ⌂          
    ⌂  ____|_ .|          ⌂                        ⌂                 ⌂          
    ⌂ |     .|_|          ⌂                        ⌂                 ⌂          
    _____.   |   ._____   ⌂  ._____     _____.     ._______      _____.         
  _|____ |___|___|___  |_ ___|___  |_._|____ |___._| ___  /___ _|     |___      
 | .  ____   |     ______|     ______| .  ____   |    ___/    Y .    ___  |     
 |___________|___________|___________|___________|----|_______|___________|     
      .      |___.__                                                            
    ⌂ |______|     .|  _  ⌂ a(id/L124.             ⌂                 ⌂          
    ⌂        |   . .|_|_| ⌂               ⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂                 ⌂          
    ⌂        |______| |   ⌂  ⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂  ⌂                          ⌂          
                  |___|   ⌂  ⌂         ⌂  ⌂         ⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂          
  ⌂⌂⌂⌂⌂                   ⌂  ⌂  ⌂⌂⌂⌂⌂⌂ ⌂  ⌂         ⌂                           
  ⌂   ⌂ ⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂  ⌂  ⌂      ⌂  ⌂         ⌂  ⌂⌂⌂⌂⌂⌂⌂ ⌂⌂⌂ ⌂⌂⌂          
  ⌂   ⌂                      ⌂  ⌂ ⌂⌂⌂⌂ ⌂  ⌂         ⌂  ⌂     ⌂ ⌂⌂⌂              
  ⌂   ⌂             ⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂  ⌂ ⌂⌂⌂⌂ ⌂  ⌂         ⌂  ⌂     ⌂ ⌂⌂⌂ ⌂⌂⌂          
  ⌂⌂⌂⌂⌂ ⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂ ⌂                  ⌂  ⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂  ⌂⌂⌂⌂⌂⌂⌂ ⌂⌂⌂ ⌂⌂⌂          
           ____   ⌂ ⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂                                        
     ._   | .  |  ⌂    ______.      ______.      __ ___.   .__ _                
     |_|__|   _|______|  .   |___._|_____ |___ _|  |   |___|  \/_____           
       |  |__| .    .    |___| . | .   ____   Y   /~\      | +    _ /⌂⌂         
    ⌂⌂ | .   |______|------|_____|____________|--/_________|______\/_ ⌂         
    ⌂⌂ | . .    |                                      ⌂              ⌂         
    ⌂⌂ |________| ⌂ a(id/L124. ⌂⌂⌂⌂⌂⌂ ⌂⌂⌂⌂⌂⌂ ⌂⌂⌂⌂⌂⌂ ⌂  ⌂   ⌂⌂⌂⌂⌂⌂⌂    ⌂         
    ⌂             ⌂                                    ⌂   ⌂     ⌂    ⌂         
    ⌂⌂⌂  ⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂  ⌂⌂⌂⌂⌂⌂⌂ ⌂⌂⌂⌂⌂⌂⌂⌂     ⌂⌂⌂⌂⌂⌂ ⌂⌂⌂   ⌂   ⌂⌂⌂⌂⌂⌂⌂    ⌂         
       ⌂⌂                  ⌂ ⌂        ⌂ ⌂      ⌂ ⌂   ⌂ ⌂         ⌂    ⌂         
    ⌂    ⌂⌂ ⌂⌂⌂⌂ ⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂ ⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂ ⌂⌂⌂⌂⌂⌂⌂⌂ ⌂⌂⌂⌂⌂ ⌂   ⌂⌂⌂⌂⌂⌂⌂    ⌂         
    ⌂       ⌂  ⌂                   _____.              ⌂              ⌂         
    ⌂       ⌂⌂⌂⌂ ⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂ ._|   . |___. ⌂⌂⌂⌂⌂⌂⌂⌂ ⌂              ⌂         
    ⌂            ⌂              |     | | . |          ⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂         
    ⌂         ⌂⌂⌂⌂     _____.   |-----|_____|  _____.                           
    ⌂         ⌂      _|____ |___|           |_|____ |___     ⌂        ⌂         
    ⌂       ⌂⌂⌂     |    ____   |           |    ____   |    ⌂        ⌂         
    ⌂       ⌂       |___________|  _     _  |___________| ._____      ⌂         
    ⌂     .-----------.           |_|___|_|            _|_|____ \_    ⌂         
    ⌂     |  anadune  |             |  .|             |      `/   |   ⌂         
    ⌂     `-----------'_____.      _|___|_     ___ _. |___________|   ⌂         
    ⌂         ⌂     |_| ___ |___. |_|   |_|  _|   | |___|             ⌂         
              ⌂     |  _____|   |           |     |     |    ⌂        ⌂         
    ⌂⌂⌂⌂⌂⌂⌂⌂⌂ ⌂     |___________|  _____.   |___________|    ⌂ a(id   ⌂         
    ⌂         ⌂                 |_|   . |___|             ⌂⌂⌂⌂ L124   ⌂         
    ⌂ ⌂⌂⌂⌂⌂   ⌂   ⌂⌂⌂⌂⌂⌂        |     | | . |             ⌂           ⌂         
    ⌂ ⌂   ⌂   ⌂⌂⌂ ⌂    ⌂ ⌂⌂⌂⌂⌂  |-----|_____| ⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂ ⌂⌂⌂⌂      ⌂         
    ⌂ ⌂⌂⌂⌂⌂       ⌂    ⌂             ⌂                      ⌂  ⌂      ⌂         
    ⌂         ⌂⌂⌂ ⌂    ⌂ ⌂           ⌂         ⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂ ⌂⌂⌂⌂ ⌂⌂   ⌂         
    ⌂ ⌂⌂⌂⌂⌂   ⌂   ⌂⌂⌂⌂⌂⌂ ⌂      _____⌂____     ⌂                      ⌂         
    ⌂     ⌂   ⌂          ⌂ ⌂⌂⌂⌂_\ _      /-|   ⌂              ⌂       ⌂         
    ⌂     ⌂   ⌂          ⌂     | \/        | a(id/L124.       ⌂       ⌂         
    ⌂         ⌂          ⌂    _|_______ ___|   ⌂              ⌂                 
    ⌂ ⌂       ⌂          ⌂   |       . Y .  |  ⌂              ⌂      ⌂⌂         
    ⌂ ⌂       ⌂          ⌂   |_________|____|  ⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂     ⌂  ⌂        
    ⌂ ⌂⌂⌂⌂⌂   ⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂  ___|_       __ |___                  ⌂⌂⌂    ⌂⌂⌂     
    ⌂                      |    /__________|  .|  ⌂⌂⌂⌂⌂ ⌂⌂⌂⌂⌂⌂⌂⌂ ⌂⌂⌂    ⌂⌂⌂     
    ⌂              ⌂       |                   |    ⌂⌂⌂ ⌂      ⌂    ⌂  ⌂        
    ⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂     _ |   ⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂   | _    ⌂ ⌂      ⌂     ⌂⌂         
    ⌂                   |__|   ⌂           ⌂   |__|     ⌂⌂⌂⌂⌂⌂⌂⌂                
    ⌂                          ⌂           ⌂                   ___              
      _       ____.     .__ _  ⌂  ______.  ⌂   ___ __      ___|_  |__           
     |_|_____| .  |_____|  \/__ _|    . |___._|   | /_____|__  .|_|  |          
       | ___      |     | +    Y      | | . | .   _/        .|__|   .|          
    ⌂  |_\ /____________|______|------|_____|-----|__________| |_____|_         
    ⌂     \/                __     __ __   ____                      |_|        
    ⌂                     _|_/ ____ //__| |___//__|__                           
    ⌂                    /_|  |___//____      //__|                   ⌂         
    ⌂                                      ⌂                          ⌂         
                               ⌂           ⌂                          ⌂         
  ⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂                                                    ⌂         
  ⌂              ⌂         l i n k e d   u p . . .              ⌂⌂⌂⌂⌂⌂⌂         
  ⌂              ⌂                                              ⌂               
  ⌂              ⌂             ⌂           ⌂                    ⌂ ⌂⌂⌂⌂⌂         
  ⌂ klubbheadzz! ⌂ ⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂ ⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂  ⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂ ⌂⌂⌂⌂⌂         
  ⌂              ⌂                                                              
  ⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂ ⌂⌂⌂ ⌂⌂ ⌂  ⌂ ooooooooooooooooooooootekniq nonstopooooo        
                                                                                
                                                                                
                                                                                
                                                                                
                                                                                
                                                                                
</pre>

#### 1998/l124-m98.txt

<pre class="amiga" onclick="this.classList.toggle('highlight')">
                                                                                
                                                                                
                                                                                
                                                                                
                                                                                
                                             ⌂⌂⌂⌂⌂                              
                                             ⌂   ⌂ ⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂                   
         ⌂⌂⌂⌂⌂⌂⌂⌂⌂                           ⌂⌂⌂⌂⌂ ⌂        ⌂                   
         ⌂       ⌂                                          ⌂                   
         ⌂ ⌂⌂⌂⌂⌂ ⌂ ⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂    ⌂ ⌂⌂⌂⌂⌂             
         ⌂ ⌂     ⌂       ⌂                             ⌂ ⌂⌂⌂⌂ ⌂   ⌂             
         ⌂ ⌂⌂⌂⌂⌂⌂⌂       ⌂  . a    m    i    g    a .  ⌂      ⌂⌂⌂⌂⌂ a(id        
⌂ ⌂⌂⌂⌂⌂⌂⌂⌂  ______.      ______.    __ _     ______.   ⌂  ______.   L124.       
   ________|_____ |___._|      |___|  \/__ _|   ___|___ _|_____ |_________      
  | . . .      ____   |    |___|   |     .|    |____   | .   ____   . . . |     
  |___________________|------|_____|______|____________|__________________|     
                         ⌂                                                      
               ⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂                             ⌂                        
⌂ ⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂                                       ⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂ ⌂   
                                                                                
                                                                                
                                                                                
                                                                                
                                                                                
                                                                                
</pre>

#### 1998/la!-tdh.txt 

<pre class="amiga" onclick="this.classList.toggle('highlight')">
                                                                                
                                                                                
                                                                                
                                                                                
   ª                                                                            
   `--½---------.                                                               
                ª                                                               
         ^Γ⌂⌂S«&ª╦Z░╢#╪&_¼#╪& #╪L¼╪N ╢╧¼#L3#╢K╢K#¼K0╪╤" ╞F #] #╞J¼,             
         ⌂@@░░¿"ª╢╪╪╤_╢╪╪ ]╪╪ 2╪# ╪╪  ╪Q¼╪r0▐0_╢/Q╢⌂╬_╡╪K ╞╣╪ F╞j ¼             
         µ╞╪#╪╪╪ª_ ╪╪#J╪╪ ╞╪«_░╢▐*╪#_g╪# ╪LJ#J#JQ╢ Q╢M░~ µFJFqL#JJ&             
         ___  ¼0ª╪ ╞╪F╞╪' _______   ~*╪_J╪┤ß#J# #]L#]L_╡╪Fg@ ╞J▐FL0             
         ╪╪╪╧_ ¼ª╪ ╞#j╪" |  ___  |                F╪JP░"_µ# d_#g #¼             
       .------╗-'#J╪\╪┤╞ | |  _| |    -] ascii [-  #ßµ╤╪P`_⌂"╪j╣L#L             
       ª ╧τ 0╪ J╪┤╪F╪┤╞M | |_____|           _______        #,"óK╢Q             
       ª ╪╪ ╢╪    _____  | ______     ____.  \  __ /   ____  "╚JQ]╪             
       ª ╢╪L╢╪ .__\___ \_|_\  __/__._/ ___|__.\  //_._(_  (_  F7#¼╪             
       `-------|   __(   |  \____  |   \     | \/   |       | F7╪ ╪             
         L╢#J# |___\|____|_________|_________|______|_______|---------.         
         # ╪ #           |                                     7╪#_   ª         
         ╪L0L╪ #\  Bd!   |   L╣24 ╢_¼q_╢w¼╢w_π╪P5╞K_╞Fµ@ ╞╪ ╪╪ ¼╪╪╤   ª         
         ╢&JQ╢wK╞_  ___  |        m¼m_¼*,░gµ╪░Γ╞P Γ╪"µ# J╪# ╪╪K »░@   ª         
         τ0L#J#d ╪ |  _| | J╦J#J╪q_░mZ9m_╪╪K_╞#┤_╞╪ µ╪F ╞╪╦ #╪╪╧m╡╡   ª         
         ╢¼#`«▐FJ╣ |_____| _#*╪J#wZñw_░*╪╪┤j╪╪  ╪╪'J╪╪ .--½-----------'         
          ╢╞╬╢J▐╪    ,     Q╢L╢K╢╡Zñm┐░^#╪ 0╪Q  ╪╪╕¼╪╪Kª ~╢#╪╪##╤@P             
           \╢WJ K F _╪" __╞/K╢_╢w0Z░*mZZ╢╪K¼#╧_ ╢╪╧_¼╢#ªm╡____ΓΓµµ0             
            \╢M▐▐JF ╪F J╪@^╢«K╢╤╤K╢Kñ=*aZZ╪#_╢#m_¼░╤MµwªZ┌Z╢5Z«╡°ñ,             
                                                       ª                        
                                                       `--------------╗-.       
                                                                        ª       
                                                                                
                                                                                
                                                                                
                                                                                
                                                                                
</pre>

#### 1998/dzn-pac.txt

<pre class="amiga" onclick="this.classList.toggle('highlight')">
                                                                                
                                                                                
                                                                                
                                                                                
                                                                                
                                                                                
                                                                                
           ⌂⌂    ⌂⌂                                                             
            ⌂⌂  ⌂⌂______ ______ ______ ______ _____ ______ __ ___               
             ⌂⌂⌂⌂_\_  _/_\    /_\    /_\   _/_\__ /_\    /_\ \  /               
              ⌂⌂ \_  ___/     »\_ __ »\_  ___/    »\_    »\_  \ »\_             
             ⌂⌂⌂⌂ /    \    ╣   / _/   /    \       /  ╣   / \    /             
            ⌂⌂  ⌂⌂_____________/__/___/____________/______/___\__/              
           ⌂⌂    ⌂⌂:::::::::::::::::::::::::::::::::::::::::::twr!              
                                                                                
                                                                                
                                                                                
                                                                                
                                                                                
                                                                                
</pre>

#### 1998/blz-devs.txt

<pre class="amiga" onclick="this.classList.toggle('highlight')">
                                                                                
                                                                                
                                                                                
                                                                                
                                                                                
         ⌂ ---------------------------------------------------------- ⌂         
         ⌂ ::  ::  ::  ::  ::  ::  ::  ::  ::  ::  ::  ::  ::  ::  :: ⌂         
         ⌂:  ::  ::  ::  ::  ::  ::  ::  ::  ::  ::  ::  ::  ::  ::  :⌂         
         ⌂ ::  ::  ::  ::  ::  ::  ::  ::  ::  ::  ::  ::  ::  ::  :: ⌂         
         ⌂:  ::  ::  :: ______ . :: . ____ . :: . ______ ::  ::  ::  :⌂         
         ⌂ ::  ::  ::   T.    \|    |/    \|    |/    .T              ⌂         
            ____ ::   __|   __ |____|  __  |____| ____ |___ a(id/k0re.⌂         
       _  |/  .T_____ T   _____| .T.    T    .T.    \|    T _______ . ⌂         
      |_|_|    |      |   |       |     |     |      |    |        \|  _        
       _| |____|      |___________|-----|_____|___________|       . |_|_|       
      | |__||      ______ .    ______ .    . _____   . ______     |/  |__       
      |__|_ |      T.    \|    T.    \|    |/   .T   |/    .T     |___|  |      
         |_||    __|____  |____|   __ |____|     |___|      |___    ||___|_     
            |    T    _______T   _____| .T.|____/| T          .T    |    |_|    
         ⌂: |___ |    |     .|   |       |         |      _____| ___| ⌂         
         ⌂       |___________|___________|_________|________|         ⌂         
         ⌂ ::  ::                                              ::  :: ⌂         
         ⌂:  ::  ::  ::  ::  ::  ::  ::  ::  ::  ::  ::  ::  ::  ::  :⌂         
         ⌂ ::  ::  ::  ::  ::  ::  ::  ::  ::  ::  ::  ::  ::  ::  :: ⌂         
         ⌂:  ::  ::  ::  ::  ::  ::  ::  ::  ::  ::  ::  ::  ::  ::  :⌂         
         ⌂ ---------------------------------------------------------- ⌂         
                                                                                
                                                                                
                                                                                
                                                                                
                                                                                
                                                                                
</pre>

#### 1998/cp!-hom.txt

<pre class="amiga" onclick="this.classList.toggle('highlight')">
                                                                                
                                                                                
                                                                                
                                                                                
                                                                                
                                                                                
                                 __,,-_-_,_                                     
                              ,g*^~»    »░░4__                                  
                            _⌂░  _,gµ**µµ__ ¼░m_                                
                 .______.  _▐  ,⌂│~      ¼░╨_  ╢,          .______.             
    ___________  |     _|_,P___P __-≡ññ≡,___\\ _V╕_________|      |___          
   |    ______/__|     \_     \./     _      |/     _      |      ___/___.      
   |\________    |      |      |      |      |      |      |      |      |      
   |_____________|______|______|_____________|_____________|_____________lsn    
                          ¼b  ¼■  ¼^*µµ*^   J│  ╞┤                              
                           ░m  `4,__     _-@" ╕d~                               
                            »V,_ ¼░╣½***ñ░» _-P┤                                
                              ¼╣≡_,______,-°│»                                  
                                 »~░░^░░░¿                                      
                                                                                
                                                                                
                                                                                

                                                                                
                                                                                
                                                                                
                                                                                
</pre>

## 1999

#### 1999/k0-st8wa.txt

<pre class="amiga" onclick="this.classList.toggle('highlight')">
                                                                                
                                                                                
                                                                                
                                                                                
                                                                                
                                                                                
                                 ⌂⌂⌂⌂⌂⌂                                         
                                 ⌂    ⌂                                         
                                 ⌂ ⌂⌂ ⌂                                         
                                 ⌂  ⌂ ⌂                                         
                                 ⌂⌂⌂⌂ ⌂⌂⌂⌂⌂⌂                                    
                                      ⌂    ⌂                                    
                                  ⌂⌂⌂⌂⌂ ⌂⌂ ⌂                                    
                                  ⌂   ⌂ ⌂  ⌂                                    
            .  n  o  r  m  a  n   ⌂⌂⌂ ⌂ ⌂⌂⌂⌂   a  n  a  d  u  n  e              
    _______     _______      _______  ⌂   __  ___     _______       _______     
___(      /_ __(      /__ __(___   /__⌂__(  \/  /__ __\_____ )__ __(      /___  
\    ___    \   _______  \    |/__/   ⌂        _   \   _____    \    ____    /  
&lt;     |/     _   \|       _   __      ⌂_____  /     _     |/     _    |/     >  
/-----/_____/_____\______/-----7______⌂-----\/_____/______/.____/-----/______\  
                                      ⌂                             a(id/k0re.  
                                ⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂                                   
                                 ⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂                                    
                                    ⌂⌂⌂⌂⌂                                       
                           ⌂ ⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂ ⌂                              
                                                                                
                            the fountain of ideas                               
                                                                                
                                                                                
                                                                                
                                                                                
                                                                                
                                                                                
</pre>

#### 1999/sea-erre.txt

<pre class="amiga" onclick="this.classList.toggle('highlight')">
                                                                                
                                                                                
                                                                                
                                                                                
********************  ╜signed by tommy[AZZARO]sative mea╜  ******************** 
!proudly presents an  ╜                                 ╜  !proudly presents an 
ascii colly entitled  ╜ .  .  .  .  .  .  .  .  .  .  . ╜  ascii colly entitled 
********************  ╜                                 ╜  ******************** 
*rewind.erase&rewind.erase.erase&rewind.rewind.erase&rewind.erase.erase&rewind* 
*erase.erase&rewind.rewind.erase&rewind.erase.erase&rewind.rewind.erase&rewind* 
*   _______     ______╜     _____            ____   ____╜              ____   * 
*  | _____/_____\  ___/___ _\   _/\____.  __/ __/___\    \_____________\  /.  * 
*  | \_\   ___      _____/_|   /   \   |__\__/    __   _  \_     ___       |  * 
*  |_____     \______      _____/     ___     ____\/____\     __ \_\_______|  * 
***-----\______\----\______|---/______\-/____|-----------\____\/______\-----*** 
                      ╜                                 ╜                       
***                   ╜ .  .  .  jµ╡╡  .  .  .  .  .  . ╜                   *** 
*                     ╜         j#QQ⌂____               ╜                     * 
*                 _   ╜ .  . _╡╡╪╪@MV»»»"░┌s*¬__.  .  . ╜                     * 
*               Q╪M■     _,*«»µ╪M#╟        ¿» ¡»!¡      ╜                     * 
                !MB⌐Uk4_*░í¼ .4╪╪╦       j44╡,   `    . ╜                       
                  M⌐#⌐#Qy"  ;╪Q⌐B"     )j╞╪╪╪Qp         ╜                       
                   ¼QMQQQ╬__⌐Q╪#'    __4g╪⌐Q⌐Q⌐⌐__╡_   ¡_                       
                   j╣▓┌╪«##Q╧@@     ñ?GMQM╧M#KM#Q#╪⌐_  '}L                      
                  ,F/   ╞«⌐#⌂╪#    jCΓ⌂M┼f   ? #@W╪╪F   `3                      
                  '     ▀╪╞╞╞╪╞L,_µ╪╞╪«N┤     ╞╞NBP╣     ∞Ñ                     
                        π╪⌐╞@▐@M▐g@M╪!7    _ ╞╪╪╧!       J]                     
                        ╞⌐⌐▐I »V─WQW▐L,   _I╪M╪╬       _╡╪╪L                    
                       -g##P     ░░⌐#⌐⌂╧,╡⌐@⌐F╣      ,j⌐╪╪Q¡                    
                  v)  ,*╪▐##,   °f  »5qNgW⌐W~      ,ñ⌐#╪▐P#                     
                  `_,"πM╪⌐╣¡¼ó╡µF,4δ╡_░╢╪QQg___ _╡gQ⌂MF'jVF                     
                   \/í╣##╢    ╞Mu▐┤°+ _ `¼g@⌐b@╡⌐#╪╪╢   \F                      
                    ░jQ╞B    Σ#  ░W╦_H"   » ⌐W@WGW"f  .V╜                       
                     ^#@_    ²   _α¡^╛__ *╡╡Q@NBNW╛╨°≡*                         
                   __ñR`Np       ░    ¼░_┼⌐@F    'P╪@⌐▐=,                       
*                  "╞#░ .  .        __µ▐#WF~ _ _°#^"»J╓Q▐4f._                 * 
*                  ¼»           ú ╡╡╞M╞⌐*__╡┼6M"      » ╢░°#Mpc               * 
*                     ╜ .  .  .  .¼7▐F!"»".  .  .  .  .   »7@¼                * 
***                   ╜                                 ╜                   *** 
                      ╜ .  .  .  .  .  .  .  .  .  .  . ╜                       
***       _______     ╜______         _______ _______   ╜ _______           *** 
*        .\  ___/___ | _____/______________ /_\ ____/___╜_\  ___/___          * 
*        |    _____/_| \_\   ___   ___                        _____/_.        * 
*        |_____      ______     \  \_\________________  _______      |        * 
*********-----\______|----\______\______\--------\______\-----\______|********* 
                                                             az0!/sea           
                                                                                
                                                                                
                                                                                
                                                                                
                                                                                
                                                                                
</pre>

#### 1999/la-cld.txt

<pre class="amiga" onclick="this.classList.toggle('highlight')">
                                                                                
                                                                                
                                                                                
                                                                                
                                                                                
                                                                                
                                              ______       7                    
                                             |  __  |______╞l__________         
                                             | |__| | _    ╪#    Γ     |        
               __________                    |______| ¼b__ ╪F _╡⌂┤     |        
            ___\ ______  |_________              |     ó╪#_0▐,╪╪F      |        
           |  ___\___  | ____      |_________    |  _jw__╢#╞w«╦______  |        
           | |  _  |/  |/ __/____      ____  |___| ¼""╢░░""╪╦»¼░░╢P""  |        
           | | (_) /____ __      |_____\_  |_____         J@@          |        
           | |_______| | \|        _____/  |\ __/____________    ______|        
           |   ___     |__|_______ \|_     |_\______    __  /__  |              
           |  _\  |_    _______  |__|_______      |/    \__/   | |              
           | | ____/____\__   /     _____  |______|___         | |              
           | | \|         / _/______\    \   ____    |_________| |              
         __| |__|_______  \ \__      \    \_/___/____________    |              
        |  |_________  |___\         |\      \|         __  /__  |              
        |      |     |_____ \_______________  |         \__/   | |              
        |______|           \_____________  |__|_______         | |              
                                         |_________  |_________| |              
            [ p h a s e   t r u c e ]          luk!|_____________|la!           
                                                                                
                                                                                
                                                                                
                                                                                
                                                                                
                                                                                
                                                                                
                                                                                
</pre>

#### 1999/c½w-purefeelings.txt 

<pre class="amiga" onclick="this.classList.toggle('highlight')">
                                                                                
                                                                                
                                                                                
                                                                                
                                                                                
                                           j                                    
                                           `               _____________╕       
                                           |               ╪╪╪╪╪╪╪╪╪╪╪╪╪╬    .  
                               ,      -Γ╡#╡°╡╡   _         ╪╪╪╪╪╪╪╪╪╪╪╪╪╬ ┬     
                               ¼___╡µ▐ñ╪╪╪@╪╪╪╧µM╪╧╡__     ╪╪╪╪╪╪╪╪╪╪ZW⌐■^#▓    
               ░╡            _╡*#╪╪╪╪N@╢╢╢╢╢╪╪╪╪╪╪╪╪╪╪╪#╡_j╪╪╪╪╪╪╪╪╪@╝╪«/ σ     
        _________j_ _____  µ#" °╪@_________J╕j╪#╪#"ZN╪╪╪╪╪#___IZ«╪N╦°# #│_______
       ]╪╪╪╪╪╪╪╪╪╪╪W«╪╪@"Γ*░_g╞╪╪╬╞╪╪╪╪╪╪╪╪■0╪L % #╦P╪╪╪╪##╢╪╪N╪╪╪╪╪╪#╡µ/ó#╪╪╪╪╪
       ]╪╪╪╪╪╪╪╪╪╪╪╪╪¿ ╫░_µ╪╪╪╪╪╪╪╪N╪╪╪╪╪╪╪F╞╪╪╬ #¼╪#╪@⌐╪╪#  ░g╞«╪╪░░╢╖ q╪╪╪╪╪╪╪
       j╪╪╪╪╪╪╪╪╪╪╪@   jj╪╪╪╪╪╪╪╪╪╪LN@╢░░"» ¼╞╪╪h  ¼╪╪╪╪L╞#  /"╞NL╞#___ j╪╪╪╪╪╪╪
      /]╪╪╪⌐╪#Z╪╪╪"  _╞╪╪W╪╪╪╪╪╪╪@░_    ___ ¼⌂Z╪╪╬   ╢╪╪╪╪MA╡ ░  ¼╪╪N╪╧ j╪╪╪╪╪╪╪
       ¼π╪4╞@╞╪╪P   g╪╪╪╪╪╪««╪@"Γ*╢"╡_╪╪╪╪╪Fσ╪╪╪╪╪L¼ `# ░  g░      π╪M╪_j╪╪╪╪╪╪╪
       H╪L╞F N╪F   °╪╪╪╪╪╪╪╪@  ╢╕g╞╪╪#j╪╪╪╪▓σ╪╪╪╪╪╪╬       C        `#░#p@╢Z╪╪╪╪
      /]P╞@j╪Np   q╪╪╪╪╪╪╪╪"   µ^╪╪╪╪╪╪╪╪╪╪ σ╪╪╪╪╪╪╪│   _ #╢╡_      _╞╪╪╬°╪╪╪╪╪╪
   j  r]\╪ ╞╪╪ ñ µ╧g╪╪╪╪╪@   Γ╪╪╪╬╞╪╪╪╪╪╪╪╪L╞╪╪╪╪╪@_╞_ _9▐L_╢#  ╕   » 9╪╬¼╪╪╪╪╪╪
   ╣ t `╞F @@╬/C/@@@@@@@╢ ¡,*@@@@@@@@@@@@@@@@@@@@@M@@@*@N@│#M╪▓Z_______@╟ @@@@@@
             ╞ ╞        ╞ j                                #¼#¼╪╪╪╪╪╪╪╪╬  ╬     
             # #        F @                                ╪L0L¼╪╪╪╪╪╪╪#  #     
             # #       j▓jF                                ╪╚╞F ╪╪╪╪╪╪╪╪  # ___ 
             # #       j@╢╬ ╧¡¡¡¡'                         ╪╬  t╪╪╪╪╪╪╪╪  #'`"» 
             σ ╞       jp ╬ ¼║                             ╪Fq╬ß╪╪╪╪╪╪╪#  #     
             ]╡jp       ╬ Ñ╡ ¼╬_Γ                          ╪ ╪▓°╪╪╪╪╪╪╪╬, F     
             ¼╬ ╬       ]╡╞╧╡°╢╦                           @j@j╪╪╪╪╪╪╪╪ ╚j      
              9╕╞_       9F¼╪#,¼b µ▓                        ░ ╞╪╪╪╪╪╪╪Fj«#      
               ╬j╬╡       9_ ó╪╡µ#_*┤      t           , _6  j╪╪╪╪╪╪╪╪ ░U_      
            _╡*N╪N╬        ¼╬_3#╬╞#        j     b     j╪╪#,╞╪╪╪╪╪╪╪╪┤  7 ╖qµ╡╞ 
       _,╖»     ¼╬¼u        ,@L°╢╪╪▐       jr    ¼╬ _g^»g@░«╪╪╪╪╪╪╪@   °╬  p J"_
     *'          ¼╬jq,     /_/"░*╞╪╪#µ.  _ j____Γµ╪#"a°░"  ╪╪╪╪╪╪╪P   µ╪╬ / -"╕F
                   N,σ╡_╡ _ '     ¼╞╪#╡___ π╪╪«╬°╪@N@      ╪╪╪╡F╢   _╞╪╪╬! µ jP 
                    ¼##N╡#"         N╪╪C¿"¼╢F»"»    ░      ╪╪╪@┤   µ╪╪╪«φ_╞ °" ñ
               -   ╞╪╪╪╪╪╪╡__    ┤   ░╪#_  t          _    @░Γ*░j╞╧╡9╪╪╪O" '  ^ 
                 _/"╪@#╪╪╪╪╪╪▐╡____   9╪╪╡ j          9_µ°░╡░_g╪╪╪╪╪╪W⌐╪╬       
                /",░     ¼"░N#╪╪╪╪#µ╡╡╡╪╪╪╡jL    ___g°╪╪╡µ&µ╞╪╪╪╪╪╪╪╪╪╪╪╬       
                 /              ¼"9@N╪╪╪╪╪╪╪╚°╧!@╪«╪╪╪@9#  ╪╪╪╪╪╪╪╪╪╪╪╪╪F       
                                      »"░@╪╪╪_"  ¼~     ¼╡ ╪╪╪╪╪╪╪╪╪╪╪╪╪╬       
                                      ____j╪╪╪#_____ ___ 3M╢╢╢╢╢╢╢╢╢╢╢╢╢'       
                                      ╞╪╪╪╪╪╪╪#J╪╪"bJW"" ╪                      
                                      ó@@@@╪@╢@* @¡ó¡                           
                                           ░                                    
                                                                                
                                                                                
                                                                                
                                                                                
</pre>

#### 1999/c½w-purefeelings.txt 

<pre class="amiga" onclick="this.classList.toggle('highlight')">
                                                                                
                                                                                
                                                                                
                                                                                
                                                             ⌂                  
                                   ⌂                                            
                                                                                
                                    ⌂                       ⌂                   
                                                                                
                                   ⌂                         ⌂                  
                                    ⌂                                           
                                   ⌂                        ⌂                   
                                   ⌂                         ⌂                  
                                    ⌂                       ⌂                   
                                   ⌂                        ⌂⌂                  
                                   ⌂⌂                       ⌂⌂                  
                                   ⌂⌂      _ΓΓ╡g╡gµµµ_      ⌂⌂                  
                                    ______ ░##πF"»»»π@       ___                
                                   _\_,__'-,¼0╞L ╕µ╞@        \  \_ ____         
                                   ' _  /   »_╪L╡╪F ____    ,-\_ / \   \        
                                 .   '-/ _ ¼╢╢╪╪F  _\_,`-,_ \   /---\  /        
                              - -|---,___\\ __0N╬,-'____  ( ,--╕______/         
                                 ╖ ⌂  -FFF-\\ σW#   \--'   Y ⌂                  
                                   ⌂⌂       » ¼#╪____\-----'⌂⌂                  
                                  ⌂⌂⌂          #╪           ⌂⌂                  
                                 ⌂⌂            ¼@           ⌂⌂                  
                                  ⌂⌂⌂                       ⌂⌂⌂                 
                                   ⌂⌂       ________ _________⌂⌂                
                      ⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂   _\_,_ _ /-'       /⌂⌂                
                     ⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂   . '  _/ \\      ,-)/⌂⌂                 
          ________   ⌂⌂⌂⌂          ⌂⌂   -|---,____\ -|-,_| »⌂⌂                  
         /       /\  ⌂⌂⌂⌂                         \\ ╖      ⌂⌂                  
       _/_______/  \_⌂⌂ ____                       »        ⌂⌂                  
   __ /_\__,    \   /\ /   /\                   ⌂⌂⌂       ⌂⌂⌂⌂                  
   '--'    ___   \_/ //___/  \__               ⌂⌂       ⌂⌂                      
  .        \-/_____\/_\   \  / /\ _____          ⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂                   
 -|----,____\/      _\  _  \/_/ //    /\                   ⌂⌂⌂                  
                        '--'  \//____/ /-,_                 ⌂⌂                  
                .             / \    \/   /\    ______      ⌂⌂                  
               -|----,_______/---\ ,_/-,_/ /___/     /,     ⌂⌂                  
                  ⌂⌂⌂⌂           _\      \/   /_____/ |   ____                  
                  ⌂⌂⌂⌂      .            /____\     | |  /   /\                 
                  ⌂⌂⌂⌂     -|---,_______/    ┤_\    | |-/___/ /_     ___        
                  ⌂⌂⌂⌂                .       \/    | | \_  \/ /\   /  /\__     
                  ⌂⌂⌂⌂               -|----,________|/---' _/_/  \-/__/ / /     
                   ⌂⌂⌂⌂                           .     _ -'  \  /-\_ \/_/\     
                    ⌂⌂⌂⌂                     -FFF-|-----\______\/  _ ___/ /     
                  ⌂⌂⌂⌂                                       .     `-'  \/      
                ⌂⌂⌂⌂         ⌂⌂⌂⌂⌂              ⌂⌂⌂         -|----,___,-'       
                ⌂⌂⌂⌂        ⌂⌂⌂ ⌂⌂⌂             ⌂⌂⌂         ⌂⌂                  
                ⌂⌂⌂⌂             ⌂⌂⌂⌂  ⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂     ⌂⌂                  
                 ⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂  ⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂   ⌂⌂                  
                  ⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂              ⌂⌂⌂       ⌂⌂                   
                                                 ⌂⌂⌂       ⌂⌂                   
                                                            ⌂⌂                  
                                           ⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂       ⌂⌂                  
             ___                  ⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂  ____⌂⌂       ⌂⌂                  
     O o  _╕-' /  _     ____      ⌂⌂  _______,-)  /⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂          
      ░   \_. /---'\ _,-)  /    _____/      /  __/ _       ___      ⌂⌂⌂         
     .  ó    /_    / \ ,__/ _ _/    \    __/    >--'\  __,-) /      ⌂⌂⌂         
  - -|---,____\\ ____    >--'\\_   .     |____       . \__  /_    ⌂⌂⌂⌂⌂⌂⌂       
     ╖          \\  /___      .   -|--.__| ,_/-------' '-'_/  \_                
                 »  ,__/------'-,__|           -FFF-|-----\____/  ⌂⌂⌂⌂⌂⌂⌂       
        ⌂⌂⌂⌂⌂ ⌂          ⌂⌂⌂⌂⌂      ⌂ ⌂⌂⌂⌂⌂⌂        ╖               ⌂⌂⌂         
       ⌂⌂  fAte tO:                        ⌂⌂  ⌂⌂⌂ ⌂  ⌂             ⌂⌂⌂         
        ⌂⌂⌂⌂⌂⌂⌂ ⌂   ⌂   ⌂ ⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂-DZ.MIES-ROKK-⌂⌂⌂⌂⌂⌂⌂⌂j         
                                              ⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂⌂                 
                                                                                
                                                                                
                                                                                
                                                                                
                                                                                
                                                                                
</pre>

#### 1999/c½w-klam.txt

<pre class="amiga" onclick="this.classList.toggle('highlight')">
                                                                                
                                                                                
                                                                                
                                                                                
                                                                                
                                                                                
                                                                                
                         _____      _ _  __             _                       
             ______      \    \  ___\\\\_)/  _______  ,⌂⌂⌂      _____           
  __ __ __/\_\    /___ __\\    \/   /   _/ _ \___  /  ⌂⌂⌂'     /    /_          
  \_\\_\\     ___   _/ \__\__           >--'\---' /_⌂⌂⌂⌂⌂⌂⌂⌂___\ ,_/  \ __      
        /_  __\ /   '----' _/    /          /  __/  \⌂⌂⌂⌂      _\     // /__    
          \/   /______       _  /________  ____\_____\⌂⌂' ___________//_//_/,_  
                     /______/ \ /___ __  \/          ⌂⌂⌂_ ⌂⌂⌂ -FFF-             
                               X&lt;__//_/,_            `⌂⌂⌂⌂⌂⌂'                   
                                                       »»»»                     
                                                                                
                                                                                
                                                                                
                                                                                
                                                                                
</pre>

## 2000

#### 2000/lot-rave.txt

<pre class="amiga" onclick="this.classList.toggle('highlight')">
                                                                                
                                                                                
                                                                                
                                                                                
                                                                                
                                                                                
                         Sometimes It Has To Become...                          
                                                                                
                                                                                
              p░--+.___                                ___.+--░g                
              ╢      »»"░^-^_"__...a___ ___a..__"_^-^░"»»      ú                
               ╢   __.w-__▒ZEZΣxx===+--=--+===z!oZZ2Mz_w.__   +                 
               .+τ⌂7*-░"»»                           »»"░ñ╢╤╩╡+.                
               ,ñ"                                            ░τ                
               F                                               ¼▐               
               \                                               J                
                \                                             j┤                
     _______ ______ ______ ________  ____________ _____     _x┤  __________     
   _|       |_     |     /     ___/  \       ___/      \_______ _\        /     
   \_       _/           \    __/__   \     __/__    \  \     /   \___   /      
    /       \      |______\        \   \         \____\       \         /       
    \_______/______|z!o /___________\  /__________\z!o \_______\_______/        
                                                                                
                              ¼u¼q_            ,ñ,░                             
                                ░w░w_        ,ñ,ñ                               
                                  ░w░w_    ,ñ,ñ                                 
                                    ░w"    ,ñ                                   
                                      ñ, ╕/"                                    
                                       ¼*"                                      
                                                                                
                                                                                
                                                                                
                                                                                
                                                                                
                                                                                
                                                                                
</pre>

#### 2000/lot-noco.txt

<pre class="amiga" onclick="this.classList.toggle('highlight')">
                                                                                
                                                                                
                                                                                
                                                                                
                                                                                
           | ___  ___ _   \   __| |  __                        ___________|_    
           |_\-/  \ //_\\_|\//_/|_|_/_/                                   |     
      _xµµ_        /         \      \                                     |     
    µñ»   »L_                        a░Mc                                 |     
   J     ._ #             µ^^*w_ ___  ""      _µ=m_    ___       __             
  J       ¼L# ___  µ=m,  ¼u_  µ╣J"»¼°░╢░  a*^*E__ ¼___*"""b   a*░""▐            
  0         añ»  ░⌂_  ¼_╡*m░m__ #      º ßa░ _╞»   F"0*_ »   JNQ_a*             
  ╢         F__   #/L  K  _3 »░w#   a, J #¼░░"    J  ¼q1   wwJ_        ,*^q     
  ¼L       J▐╪╢     7 ,┤ ╢ZJ   ]¼w_ _▐ J▐¼w_ ╡▐ _µ    _Mñw___▐\,       ¼*╣J     
   ¼ñw_     E_J    _╞ó"_a*░ñmwwP _"░»  J   ░░»  » __wñ     »»  ¼░*m*waaw*ñ      
      ¼░****=^*w***"  /»_        #____W          a░__ z!o                       
                     ╞ P"░L       """»           1_"5                           
  |                  ¼*aµ*                        ¼░"                           
  |                                - t ec h no l og y is h un t in g us ! -     
 _|_______________                                                              
  |                                                                             
                                                                                
                                                                                
                                                                                
                                                                                
</pre>

## 2001

#### 2001/1oo-apoc.txt

<pre class="amiga" onclick="this.classList.toggle('highlight')">
                                                                                
                                                                                
                                                                                
                                                                                
                                                                                
                     /\                                                         
       ________ ____/__\___ ______ _________ ________           q*░░╢w          
      _\_____  \ ._____   /______ \  ______/_\_____  \ _____         ¼b         
     /  ______  \ \  \/  /   \  / /  \/   |/  ______  \\    \\        JL        
    /   \/   /. /  \____/    .\/ /       .|   \/   /. //____//        JF        
    \__________/     |\_________/|________|__________/                ╞         
            z!o|_____|      \  /      \                            _a⌂          
              / _____        \/        \                          ¼░░*m_        
             / |     |     ___\ ____ ___\_______ ________ ___________  ░w       
 ╜╜╛╛╛╛╛╛╛╛╛╛╛╛╛╛╛___|___ _\__\| __/_ ._____   /  ______/__  .______/   ¼&      
  ╜╜╜╜╜╜╜╜╜╜╜╜╜╜╛ \_____ \     |_    \ \  \/  /   \/       \   ___|_     ¼K     
   \____   ____/     .\/  \   .|/    /  \____/\_______.    /   \/   |     0     
   |    |_|    |__________/    _____/     | \   \_________/_________|     ╢     
   |____| |____|          \____|z!o\|_____|  \                       /\   ß     
     _\ __, /_                      \         \            0        /  \  ╪     
    |  \___/  |                      \         \           ¼K      /    \J╣     
    | |     | |  aPocaLyPsE Is nEaR!  \         \           ░K    /     ,P      
    |_|  _  |_|                        \         \           ¼m_ /    _µK \     
   /__|__|__|___________________________\_________\____________░#µw╡µ╞░____\    
                                                                                
                                                                                
                                                                                
                                                                                
</pre>

## Further readings

There's a lot more to say about DEL, especially about the technical aspects of character codes. I left most of that out on purpose to center my attention on the *visual* aspects of the glyph. However, if you are interested, there are many well written and extremely detailed articles on the minute details of telegraph machines, character code standards, control characters, early computing history and so on. 

On coded character sets and ASCII, there's the massive 535 page [*Coded Character Sets, History and Development*](https://archive.org/details/mackenzie-coded-char-sets/page/n6/mode/1up?q=delete) by Charles E. Mackenzie (1980), the slighly more approachable [*An annotated history of some character codes*](https://www.sensitiveresearch.com/Archive/CharCodeHist/index.html) by Tom Jennings (1999, last update 2023) and [*The Evolution of Character Codes, 1874-1968*](https://archive.org/details/enf-ascii/mode/2up) by Eric Fischer (2000). Aivosto's [*Control characters in ASCII and Unicode*](https://www.aivosto.com/articles/control-characters.html) (2011, last update 2022) is an excellent and in-depth look focused on control characters. David M. MacMillan's [*Codes that Don't Count*](https://www.circuitousroot.com/artifice/telegraphy/tty/codes/) is more about the telegraph codes with a particular attention on teletypsetters. The most invaluable source of material has been [*Source documents on the history of character codes*](https://archive.org/search?query=creator%3A%22Compiled+by+Eric+Fischer%22) compiled by Eric Fischer and shared gratuitously on the Internet Archive. But if I were to recommend something more "enjoyable" and thought-provoking to read, it would be [*The machine in the ghost: digitality and its consequences*](https://archive.org/details/machineinghostdi0000boas/) by Robin Boast (2017), which takes a more social and human approach to the developments of digital communication. 

For texts on ASCII, there's not much unfortunately. On text art, there's [WiderScreen's](https://widerscreen.fi/widerscreen-1-2-2017-tekstitaide-text-art/) 2017 issue on text art as both an object of study and artistic work, and the book [*From ASCII Art to Comic Sans: Typography and Popular Culture in the Digital Age*](https://direct.mit.edu/books/oa-monograph/5649/From-ASCII-Art-to-Comic-SansTypography-and-Popular) by Karin Wagner (2023). VileR has a great article on [*Game Font Forensics*](https://int10h.org/blog/2024/02/game-font-forensics/) (2024) which has a somewhat similar theme investigating old bitmap fonts. On Amiga ASCII art specifically, there's my own BA thesis on [*Amiga ASCII art*](https://blog.glyphdrawing.club/amiga-ascii-art/) from 2015, which I translated to English an published here on my blog in 2023. 