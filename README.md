# Nudge

More white space control.

## Responsive Margin, Padding & Font Size Classes

Extensive collection of CSS (less & sass) classes. This works quite nicely alongside [Twitter Bootstrap](http://getbootstrap.com/) or [Foundation](http://foundation.zurb.com/) but you can use it in any environment.

## Installation

```
bower install nudge --save
```

## CSS Class Construction Table

Nudge margin and padding CSS classes are composed of a minimum of two variables (and a maximum of five).

| nudge prefix* | css attribute* | position       |  size  | responsive |
|---------------|----------------|----------------|--------|------------|
| nudge-        | m (margin)     | x (horizontal) | -zero  | --xs       |
|               | p (padding)    | y (vertical)   | -sm    | --sm       |
|               |                | t (top)        | -lg    | --md       |
|               |                | b (bottom)     | -hg    | --lg       |
|               |                | l (left)       |        |            |
|               |                | r (right)      |        |            |

Nudge font size CSS classes are composed in a similar way.

| nudge prefix* | css attribute* | size   | responsive |
|---------------|----------------|--------|------------|
| nudge-        | t (text)       | -sm    | --xs       |
|               |                | -sm-lg | --sm       |
|               |                | -sm-hg | --md       |
|               |                | -md-xs | --lg       |
|               |                | -md-sm |            |
|               |                | -md    |            |
|               |                | -md-lg |            |
|               |                | -md-hg |            |
|               |                | ...    |            |

_\* Mandatory_

These variables can be edited to be as short or verbose as you wish.

## Example

```
<p class="nudge-my">White space above and below here.<p>
<p class="nudge-mt">White space above here.<p>
<p class="nudge-mb">White space under here.<p>

<p class="nudge-mt-sm">A bit of white space above here.<p>
<p class="nudge-mr-sm">A bit of white space to the right of here.<p>
```

And the responsive classes...

```
<p class="nudge-mt--xm">White space above here (on mobile only).</p>
<p class="nudge-mt--sm">White space above here (on tablet only).</p>
<p class="nudge-mt--md">White space above here (on laptop only).</p>
<p class="nudge-mt--lg">White space above here (on desktop only).</p>
```

Replace the word _margin_ for _padding_ in the css classes and it will work exactly as you imagine.

```
<p class="nudge-t-sm">11.2px text</p>
<p class="nudge-t-md-hg">19.84px text</p>
<p class="nudge-t-hg-hg">56.32px text</p>
```

## Recompile the CSS using Grunt

The less files will be converted to sass and recompiled to CSS using the default grunt command.

```
grunt
```

## Contributors

- David Apple <davidapple@protonmail.com> - Initial implementation

## License

Copyright (c) 2016 David Apple <davidapple@protonmail.com>, MIT License