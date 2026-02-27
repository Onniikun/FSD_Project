# New application architechture

## Hooks - useSortAndFilterUI
This universal sorting/fitler hook designed to be a reusable state manager for filtering any
component object data like strings, numbers etc. In this case we're sorting/filtering song genres and displaying song links.

The logic behind the the useSortAndFilterUI was to store a selectedItem and updated that item with a user controlled UI interaction. This encapsulation can be easily used in different components for more added features than the ones I currently have like sorting by only spotify links as an example. 


Currently it is used in the songLinks.tsx and GenreFilter.tsx files within the songs folder.

File Path:


src\components\common\songs\song-filter\GenreFilter.tsx


src\components\common\songs\song-links\SongLinks.tsx

## Services - SongListService

## Repositories - SongItemRepo 
This SongItem repository created for songItem file only; to create, update and fetch id number(currently as of sprint 3.) Currently theres only ten songs in our database with IDs going up numerically so we can easily test how the CURD operations works while we begin to add our back-end systems. For now this repository is for only testing purposes and will have more functions like fetechByGenre and etc. 

The logic behind the SongItemRepo is to handle data operations rather than business logic. It was designed to be a place holder for back-end APIs with having to change the UI components and their logic.

Currently it is used in the songItem.tsx within the songs folder


File Path:


src\components\common\songs\song-items\SongItem.tsx