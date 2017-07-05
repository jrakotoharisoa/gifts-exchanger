[![Build Status](https://travis-ci.org/travis-ci/travis-web.svg?branch=master)](https://travis-ci.org/travis-ci/travis-web)
# Gifts-exchange

Little app that generates gifts exchanges from a list of participants.

### [Demo](https://jrakotoharisoa.github.io/gifts-exchanger/)

## Constraints:
A person can't offer a gift to:


- himself
- participant of same "family"
- participant of type "Uncle/Aunt' if it's type is "Related"
- participant of type "Related" if it's type is "Uncle/Aunt"
