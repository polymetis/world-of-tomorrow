---
layout: text
title: "Welcome to the World of Tomorrow"
lead: "I said, as I held curled my hands around my lab coat. Okay not really, I took an arts degree so there were no lab coats despite one of my majors having the word science in it, but I think that most of my, presumed, audience should have that image floating about their memory banks."
image: "/assets/article-image/terry.png"
slug: welcome-to-the-world-of-tomorrow
date: 2011-05-01 21:00 
tags:
---

I said, as I held curled my hands around my lab coat.![terry](/assets/article-images/terry.png "Stop that Terry"){:id: .floatright } Okay not really, I took an arts degree so there were no lab coats despite one of my majors having the word science in it, but I think that most of my, presumed, audience should have that image floating about their memory banks.

I grant that I am a huge fan of [*Futurama*](http://www.imdb.com/title/tt0149460/ "Really?") but the actual idea of taking on this domain as my mantle has more to do with my love the same particular moment in recent human history that Futurama is riffing on. Although, I lean closer to the the Deco period rather than the '50s with the mild exception that the world was actually in black and white -- I can not forgive the pastels. 

That time period was filled with the optimism that we lost at some point. We were promised a better to tomorrow where we all would be happy and even have flying cars. 

Well [*TomorrowLand*](http://en.wikipedia.org/wiki/Tomorrowland "I was actually unaware of this part of Disneyland until the most recent Mad Men episode") did not turn out that way. So thanks to [Scott McNulty](http://twitter.com/#!/blankbaby) reminding me the [Avery Brooks IBM ad](http://www.youtube.com/watch?v=vzm6pvHPSGo "Made out of a great deal of awesome") I began to question the type of software I was trying to use for my ruminations on living in the future. A different kind of software indeed.  

###Step One: Reinvent the Axle

[Wordpress](http://wordpress.org/) was not doing it for me on both a technical level and a design level. I don't want much out of my blogging software but of things that I do want always seem to be hidden in some dark corner of php obfuscation. 

Luckily for me there was [a](http://inessential.com/2011/03/16/a_plea_for_baked_weblogs) [perfect](http://daringfireball.net/linked/2011/03/18/brent-baked) [storm](http://5by5.tv/buildanalyze/18) at the time surrounding the whole fireballing problem and a great many people were thinking about the problem and trying to find the best alternative to the standard wordpress install. 

My requirements, at the time, were that it had to be in some format that I could read, meaning essentially php or [ruby](http://www.ruby-lang.org/) (with the preference leaning on ruby since I do not like php for obvious reasons), and could work with [Marsedit](http://www.red-sweater.com/marsedit/). I came [across four options](http://inessential.com/2011/03/17/more_on_baked_blogs) and ended up choosing Jekyll because I managed to find [an article](http://dodgydev.net/2011/03/23/is_this_thing_on.html) that told me how to use marsedit with Jekyll. 

That article was written by [Jesse Read](http://twitter.com/#!/jessereadd) and his [very public coding](https://github.com/jessereadd/jessereadd.github.com) was most helpful to me. In fact, this site is an unofficial fork of his. 

If I start altering things on the ruby code level I will probably make a github page and account but for right now all may changes are visible through the .css sheet and just the general code that is publicly visible. Despite them both being rather messy at the moment. 

The other major difference is that I had to abandon Marsedit.

I did not do this lightly. I used Jesse Reads solution for importing all my tumblr posts and all my wordpress posts, from the previous site, but after a while I started to get annoyed because Marsedit is not supposed to be a text editor and I started using it more and more as lacklustre text editor. I wasted about a week fiddling with scripts until I figured out the solution. 

Use [BBedit](http://barebones.com/products/bbedit/). 

Seriously. I was using [Markdown](http://daringfireball.net/projects/markdown/) to write my posts sure and having that preview option in Marsedit is great but BBedit has more or less the same function - standard mapping is cmd-ctrl p. Furthermore, BBedit has syntax highlighting for markdown so I can normally see a typo in the formatting without even previewing. 

###Step Two : ?

Why the question mark? Well because this is kind of a beta release of what the site shall look like, in capable browsers, but it is taking me a while to make all the design decisions so I am just releasing now so I can get on with writing content. 

For the most part this the HTML5 release and most of the ideas I am borrowing from [Andy Clarke's](http://twitter.com/#!/malarkey) most ingenious book [Hardboiled Webdesign](http://hardboiledwebdesign.com/).

I think the site downgrades gracefully but I will be directing IE6 to a customized version of the [universal ie6 style sheet](http://code.google.com/p/universal-ie6-css/). 

On my side of things I have cobbled together some automator services to do some things but I should probably get around to learning [appscript](http://appscript.sourceforge.net/rb-appscript/index.html) to handle more complicated actions. I also need to write plugins to tie better into both Tumblr and Twitter and something else I have planned but that will be a surprise -- if I ever get it working.

Other than that I am mercurial man so look out for updates. 

###Step Three: Profit .... ?

Well I changed domains -- the old one was difficult to type and the joke was lost on most people -- so now that my site has a better design and probably a more comprehensible title. Hopefully now I can focus on writing and stopped being annoyed with the software problems. 
 
Now, how do I add a feature request to get [kramdown](http://kramdown.rubyforge.org/) to add figure and figure caption to their superset?
