# Distracted Typist
Fixes “fingers on wrong keys” errors when touch-typing. 

## What’s it do?
If you touch type, you’ve doubtless had the frustrating experience of transcribing text or looking away from the screen while typing only to look back and find that instead of typing what you meant to, you typed a paragraph (or worse, a whole page) of gibberish. This tool can take that gibberish and fix it. 

Tell it what keys your fingers were on, instead of ASDF and JKL: and it will do its best to reverse the accident. There are occasions where it is unable to determine what key was pressed instead, but these should be few and far between.

**[Demo here](http://rawgit.com/kimslawson/distractedtypist/master/index.html)**

## Whodunit?
This tool was built by [Kim Slawson](http://slawson.org/). Development involved building lots of javascript arrays by hand, thinking about where fingers should (and shouldn't) go on the keyboard, and coffee ☕️. Kim can be reached [@OxC0FFEE](http://twitter.com/OxC0FFEE) on twitter.

## How can you help?
1. **Test it!** I've used it on my phone (iPhone 5S) and my desktop computer in Chrome, but I’d love to hear how it works for you.
2. **PLEASE, send me your accidental gibberish** to feed into it, and ()if you know it) which keys your fingers were on instead of the standard ASDF/JKL:. The more data I have to work with, the better this tool will get!

## Changelog:
###2016-07-20 Alpha release:
* Works acceptably on my phone and my desktop computer but needs testing on more devices and platforms (see above; please help!)

##TODO:
* test on mobile devices
* add description text and attribution
* modifier GNDN. keep it or lose it?
* test it! capital? symbols? unicode? emoji? SQL drop table statements?
* change key description to tokens rather than CAPS and SHIFT
* intelligent lower/uppercase handling if possible
* meta/description
* analytics when hosted for real
* host it on the web