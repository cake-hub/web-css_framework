# Versioning

## Semantic Versioning

For transparency into our release cycle and in striving to maintain backward compatibility, CAKE is maintained under [the Semantic Versioning guidelines](https://semver.org/).

Given a version number _MAJOR_._MINOR_._PATCH_, we increment the:

* **MAJOR** version when we make incompatible API changes,
* **MINOR** version when we add functionality in a backwards-compatible manner, and
* **PATCH** version when we make backwards-compatible bug fixes.

## Nightly

To get insights into the very latest featurs and fixes you can visit our [nightly build](https://nightly.cake.schwarz/). As the name suggests, every night we publish the latest version of our framework. This version reflects the current state of our source code checked into the current **develop branch**.

> ### The nature of nightly builds
>
> Only tested changes are merged into the develop branch and therefore the nightly should work all the time. **But it can never be considered as stable and there could be situations that the nightly does not work at all!**

## Changelog

To follow the best practices of writing changelogs and make it easier for consumers to read, we use the [keep a changelog](https://keepachangelog.com/en/1.0.0/) convention, extended by a highlight section with the most interesting changes for each release.

### Types of changes

All changes in CAKE are grouped into the following types.

* `Added` for new features.
* `Changed` for changes in existing functionality.
* `Deprecated` for soon-to-be removed features.
* `Removed` for now removed features.
* `Fixed` for any bug fixes.
* `Security` in case of vulnerabilities.
