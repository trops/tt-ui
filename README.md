# tedtalks-ui

_This project was generated with [create-instantsearch-app](https://github.com/algolia/create-instantsearch-app) by [Algolia](https://algolia.com)._

## Purpose

This project was created to display the TedTalks playlist user interface using the Algolia search engine technology. InstantSearch components were also used and customized in order to make the interface for the project

See [Demo Interface](https://trops.github.io/tt-ui/)

## Goals

### Logical Searchable Attributes

In order to make the search experience better, I created custom attributes using Algolia such that the searchable attributes were name, description, speakers, and tags. The user may not know the name of the talk but may know the speaker and vice versa. 

### Filters

The talks are all able to be filtered on the tags associated with them as well. This will give the user the ability to quickly search a "topic" to find the talks they wish to view.

### Ranking

In order to show the most popular content, I chose to rank the content hits based on date and the popularity score of the talk. The most recent + popular talks should appear first in the list of talks.

### Feedback

When using the instantSearch components, I had trouble understanding the RefinementList and how to get this list to appear in my page. I realized that the refinement is tied to the filters of the index, and therefore needed to add "tags" to the facets section. In the documentation of RefinementList, it would have been helpful to know what the list comprised of, and how to setup the attribute properly. (Unless I missed something!)

All in all, the process was very smooth and integration with React was nice as well.
