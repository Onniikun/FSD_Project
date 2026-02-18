# New application architechture

## Hooks - useSortAndFilterUI

### function useSortFilter
This universal sorting/fitler hook designed to be a reusable state manager for filtering any
component object data like strings, numbers etc. In this case we're sorting/filtering song genres and displaying song links. Unlike the filterSongGenre service this is completely a non business logic system as it can be used else where.

The logic behind the the useSortAndFilterUI was to store a selectedItem and updated that item with a user controlled UI interaction. This encapsulation can be easily used in different components for more added features than the ones I currently have like sorting by only spotify links as an example. 


Currently it is used in the songLinks.tsx and GenreFilter.tsx files within the songs folder.

File Path:


src\components\common\songs\song-filter\GenreFilter.tsx


src\components\common\songs\song-links\SongLinks.tsx

## Services - SongListService, SongItemService

### SongItemService - function filterSongGenre
This SongItem Service is simply a service of filtering genres. Unlike the useSortFilter hook the filterSongGenre takes in data(songs and genres) and returns the processed data out; completely business rule orientated.

The logic here is that I reused the components of the function from my SongItem component and remove it to be used as my service function definition. So now I remove most of the working components of that function out of the SongItem.tsx file so that it can be more inline with just presenting the logic and data; business -> presenting.

Currently its being used in the SongItem.tsx file within the songs folder.

File Path:

src\components\services\SongItemService.ts

### SongListService - function

## Repositories - SongItemRepo

### function fetchAllSongs
This SongItem repository created for songItem file only; to create, update and fetch id number(currently as of sprint 3.) Currently theres only ten songs in our database with IDs going up numerically so we can easily test how the CURD operations works while we begin to add our back-end systems. For now this repository is for only testing purposes and will have more functions like fetechByGenre and etc. 

The logic behind the SongItemRepo is to handle data operations rather than business logic. It was designed to be a place holder for back-end APIs with having to change the UI components and their logic.

Currently the fetchAllSongs function is being used in the songItem.tsx within the songs folder


File Path:


src\components\common\songs\song-items\SongItem.tsx