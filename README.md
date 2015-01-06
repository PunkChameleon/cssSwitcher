css-switcher
===================

Drop-in solution for dynamic adding/removing of stylesheets.

## Dependency
1. You need jQuery.
2. That's it.

## To Use:
1. Include jquery.cssSwitcher.js in your project
2. After the DOM is ready, you will see a global variable called `$cssSwitcher` declared.

## Methods
1. `add` -- function that takes a `cssUrl` parameter and adds it to the DOM.
2. `replace` -- function that takes `oldUrl` and `newUrl`, and replaces the old reference with the new.
3. `remove` -- function that takes `cssUrl` and removes it from the DOM.
