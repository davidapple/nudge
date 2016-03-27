# Nudge

## Responsive Margin & Padding Classes

Extensive collection of CSS classes. This works quite nicely alongside [Twitter Bootstrap](http://getbootstrap.com/) or [Foundation](http://foundation.zurb.com/) but you can use it in any environment.

## Installation

```
bower install margin-and-padding --save-dev
```

## CSS Class Construction Table

Nudge CSS classes are composed of a minimum of two variables (and a maximum of five).

| nudge prefix* | css attribute* | position       | size | responsive |
|---------------|----------------|----------------|------|------------|
| nudge-        | m (margin)     | x (horizontal) | -sm  | --xs       |
|               | p (padding)    | y (vertical)   | -lg  | --sm       |
|               |                | t (top)        |      | --md       |
|               |                | b (bottom)     |      | --lg       |
|               |                | l (left)       |      |            |
|               |                | r (right)      |      |            |

_\* Mandatory_

These variables can be edited to be as short or verbose as you wish.

## Example

```
<p class="nudge-my">White space above and below here.<p>
<p class="nudge-mt">White space above here.<p>
<p class="nudge-mb">White space under here.<p>

<p class="nudge-mt-sm">A bit of white space above here.<p>
<p class="nudge-mr-sm">A tiny bit of white space to the right of here.<p>
```

And the responsive classes...

```
<p class="nudge-mt--xm">White space above here (on mobile only).</p>
<p class="nudge-mt--sm">White space above here (on tablet only).</p>
<p class="nudge-mt--md">White space above here (on laptop only).</p>
<p class="nudge-mt--lg">White space above here (on desktop only).</p>
```

Replace the word _margin_ for _padding_ in the css classes and it will work exactly as you imagine.

## Recompile the CSS using Grunt

The less files will be recompiled to CSS using the default grunt command.

```
grunt
```

## Contributors

- David Apple <davidapple@protonmail.com> - Initial implementation

## License

Copyright (c) 2016 David Apple <davidapple@protonmail.com>, MIT License