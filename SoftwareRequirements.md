# Software Requirements for Sweets
## Authors: Jack Broncato, Chris Jose, Jean-Luc Putter, Jack Narowski, Michael Woelfel)

## Introduction

#### Purpose:
This document is for the web app Sweets, a candy finding app.

#### Document Conventions:
Priorities for higher-level requirements are assumed to be inherited by detailed requirements.

#### Intended Audience and Reading Suggestions:
This document is intended for developers hoping to understand the program well enough to contribute functionality to it.

#### Product Scope:
The product Sweets is a web app meant to connect people and potential candies they may like, using a database 
and tagging system. The objective is to make an app that someone who has a craving for candy can use to state 
it in the most effective way. This app would very obviously boost candy sales of all kinds if successful,
and would hopefully help the lesser known/smaller companies that produce candies get some business.

#### References:
No references at this point in time, but will likely look up styling guide for UI.

#### Overall Description:
(The product Sweets is a web app meant to connect people and potential candies they may like, using a database 
and tagging system. The objective is to make an app that someone who has a craving for candy can use to state 
it in the most effective way. This app would very obviously boost candy sales of all kinds if successful,
and would hopefully help the lesser known/smaller companies that produce candies get some business.)

#### Product Perspective:
This is a new self contained product born from my personal desire to find new candies when I occasionally
feel the want for one.

#### Product Functions:
* A search bar for typing a specific candies name.
* A tagging system for finding candies based on characteristics you already like.
* An allergy option to potentially avoid returning candies a user cannot eat in a search.
* Database holding candies and their tags, as well as link to where they can be ordered.
* User profiles for the purpose of saving preferences/favoriting candies.

#### User Classes and Characteristics:
**Admin:** People who manage the database to maintain accuracy, as well as user info.
**User:** People who use the app in hopes of finding a candy that they would like.

#### Operating Environment:
The Environment will initially be on desktop computers/laptops, then will be developed into a mobile app
if we somehow have time.

#### Design and Implementation Constraints:
Since the concept and app is somewhat simple, there are many available options for development.
However, whatever is used to develop the web app must be able to connect to and use a database, and be able 
to manipulate data received to be displayed to a user.

#### User Documentation:
Software use documentation will be provided for testing instructions with the finished product.

#### Assumptions and Dependencies:
Assumptions include:
* Dilligent teamwork with everyone doing a certain amount of work each week
* Abilitiy to host app with a server machine that will be running consistently
* **VERY IMPORTANT,** Since there is not existing database as far as we are aware concerning candies and
their tastes, we will have to make one with our own knowledge and hope that it is sufficient to at least 
have a basic amount of candies to choose from

#### External Interface Requirements:

### User Interfaces:
Mockups made with AdobeXD will be separate from this document. 

#### Hardware Interfaces:
The Hardware used will be a server machine (most likely a desktop) to host the website, as well as the
computer used to view the web app, as it will initially be PC only.

#### Software Interfaces:
The Software interfaces we will be using will be GraphQL for database entry and retrieval, Apolllo for
GraphQL testing, Node.js for making a web server in JavaScript, and Mongoose/MongoDB for document based
data storage.

#### Communications Interfaces:
This software will use HTTP for requests to the database, as well as connection to the web app.

## System Features

## Search Bar
### Description and Priority
The software should have a search bar to allow users to search for specific candy names. Priority: 8
### Stimulus/Response Sequences
The user should have the option to search for candies presented to them as either a search bar or a separate page accessible from a feature list
### Functional Requirements

## Tagging System
### Description and Priority
The software should have atagging system to allow users to discover new candies based on their preferences. Priority: 4
### Stimulus/Response Sequences
The user should see tags located under the candies to which they are attributed, the users should have the option to search all candies with same tag by clicking on one.
### Functional Requirements

## Allergy
### Description and Priority
The software should have an allergy option to ensure users are able to enforce any dietary restrictions they may have. Priority: 7
### Stimulus/Response Sequences
The user should have a section to either input their dietary restrictions upon sign-up or the user should have an option to toggle certain foods off the search
### Functional Requirements

## Database for Candies
### Description and Priority
Sweets should have a database that holds candies, their tags, as well as links to where they can be ordered. Priority: 9
### Stimulus/Response Sequences
The user should have an option on either all screens or the home screen to access their profile in order to view their history, change their account info, or change dietary restrictions. 
### Functional Requirements

## 
