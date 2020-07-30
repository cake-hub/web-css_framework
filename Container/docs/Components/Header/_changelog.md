# Change log

## [3.11.0](https://www.secrz.de/bitbucket/projects/CAKE/repos/phoenix/browse?at=refs%2Ftags%2Fv3.11.0) - 2020-04-09

### Changed

* `SCSS`: "Header" | Changed background opacity of `$header-mobile-overlay-color` to 72%


## [3.8.0](https://www.secrz.de/bitbucket/projects/CAKE/repos/phoenix/browse?at=refs%2Ftags%2Fv3.8.0) - 2019-11-07

### Added

* `HTML`, `CSS`, `Doc`: "Header" | Added `<abbr>` tags and `aria-label` text to the language selection in header for better accessibility
* `HTML`, `CSS`, `Doc`: "Header" | Added `sr-only` text to the user navigation badges in header for better accessibility

### Changed

* `SCSS`: "Header" | Use mixins for border radius and transition
* `CSS`: "Header" | Moved some CSS parts inside the file to reduce selectors

### Fixed

* `SCSS`: "Header" | Added `!default` to `$header-usernavigation-link-width`, `$header-usernavigation-link-width-md`, `$header-usernavigation-link-width-lg`, `$header-mobile-overlay-width-percentpoints`, `$header-mobile-overlay-width` in `_variables.scss` file.


## [3.7.1](https://www.secrz.de/bitbucket/projects/CAKE/repos/phoenix/browse?at=refs%2Ftags%2Fv3.7.1) - 2019-10-01

### Fixed

* `Doc`: "Change log" | Added missing change log entries of the header in v3.7.0


## [3.7.0](https://www.secrz.de/bitbucket/projects/CAKE/repos/phoenix/browse?at=refs%2Ftags%2Fv3.7.0) - 2019-09-30

### Added

* `HTML`, `JS`, `CSS`: "Header" | Added slider functionality to the header component
* `Doc`: "Header" | Added text to explain the possibility to enlarge the usernavigation width to fit long words in title.

### Changed

* `CSS`: "Header" | Using fixed width instead of paddings for header usernavigation. The width is customizable to the word length in your project.
* `CSS`: "Header" | Usernavigation title can have two lines.

### Deprecated

* `CSS`: "Header" | `$header-usernavigation-link-padding-y`. The padding applies now to the top. So we renamed the variable to `$header-usernavigation-link-padding-top`. For backward compatibility the old variable is maped to the new one.

### Fixed

* `CSS`: "Header" | Fixed wrong `margin` and `line-height` of `.header-navigation-link` and `.header-subnavigation-link` resulting in a wrong height of these elements.
* `CSS`: "Header" | `margin-right: 0.0625rem` in language list items applied only to itself. Not to the other list items in header any more.
* `CSS`: "Header" | Usernavigation title has `line-height: 1.2` instead of inherited `1.4`
* `CSS`: "Header" | Added `0.125rem` space between usernavigation icon and title


## [3.6.0](https://www.secrz.de/bitbucket/projects/CAKE/repos/phoenix/browse?at=refs%2Ftags%2Fv3.6.0) - 2019-08-15

### Added

* `CSS`, `HTML`: "Header" | add badge (pill) to usernavigation as an indicator
* `JS`: "Header" | add "open" event to header element, when burger-menu toggles
* `JS`, `CSS`, `HTML`: "Header" | add multiple subnavigations with sliding effect on mobile


## [3.5.0](https://www.secrz.de/bitbucket/projects/CAKE/repos/phoenix/browse?at=refs%2Ftags%2Fv3.5.0) - 2019-07-18

### Added

* `CSS`, `HTML`: "Header" | subnavigation has been added in breakpoints MD-LG


## [3.1.0](https://www.secrz.de/bitbucket/projects/CAKE/repos/phoenix/browse?at=refs%2Ftags%2Fv3.1.0) - 2019-05-24

### Changed

* `CSS`, `Assets`: "Header" | component get the Logo from the theme

### Fixed

* `CSS`: "Header" | Changed color of `$header-navigation-back-bg-color` in variables.scss to "gray lighter"
* `CSS`: "Header" | Changed width calculation for mobile menu in component "Header" (`.header-navigation`)
