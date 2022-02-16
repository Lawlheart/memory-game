# Eureka Project - MemoryGame

Card Memory Game implementation in Angular

Description:
Create a memory game where you match cards by revealing and matching images underneath

User Stories

    * User can see a grid of 12 or more cards with hidden symbols.
    * All the cards are faced down initially
    * User can click on any card to flip to reveal it's hidden symbol
    * The image will be displayed until the user clicks on a 2nd card

When the User clicks on the 2nd card:
    * If there is a match, the 2 cards will be eliminated from the game (either hide/remove them or leave them in the visible state)
    * If there isn’t a match, the 2 cards will flip back to their original state
    * When all the matches have been found, the User can see a message or overlay showing a Congratulations message