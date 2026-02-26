# New application architechture

## Hooks - useSortAndFilterUI

### function useSortFilter
This universal sorting/fitler hook designed to be a reusable state manager for filtering any
component object data like strings, numbers etc. In this case we're sorting/filtering song genres and displaying song links. Unlike the filterSongGenre service this is completely a non business logic system as it can be used else where.

The logic behind the the useSortAndFilterUI was to store a selectedItem and updated that item with a user controlled UI interaction. This encapsulation can be easily used in different components for more added features than the ones I currently have like sorting by only spotify links as an example. 


Currently it is used in the songLinks.tsx and GenreFilter.tsx files within the songs folder.

File path:


src\components\common\songs\song-filter\GenreFilter.tsx


src\components\common\songs\song-links\SongLinks.tsx

## Services - SongListService, SongItemService

### SongItemService - function filterSongGenre
This SongItem Service is simply a service of filtering genres. Unlike the useSortFilter hook the filterSongGenre takes in data(songs and genres) and returns the processed data out; completely business rule orientated.

The logic here is that I reused the components of the function from my SongItem component and remove it to be used as my service function definition. So now I remove most of the working components of that function out of the SongItem.tsx file so that it can be more inline with just presenting the logic and data; business -> presenting.

Currently its being used in the SongItem.tsx file within the songs folder.

File path:


src\components\services\SongItemService.ts

### SongListService - function validateList
This SongListService function validates the creation of a list. It takes the user input name and length list and determine if it can be created. If not it returns error messages.

The logic behind this is confirm that the user can easily see their list(like it's name or song) and it doesnt overload or break the list component by rapid creation of empty lists.

Currently in CreateSongListForm.tsx

File path: 


src\components\common\create-song-list-form\CreateSongListForm.tsx

### SongListService - function addSong
This SongListService function create a song list. It adds a song if it doesnt exist so it checks for any equally between its creation and the set array. If it doesnt pass the check it returns the list with no changes.If it does pass, it returns a new updated list with the new song list.

Currently in CreateSongListForm.tsx


File path: 


src\components\common\create-song-list-form\CreateSongListForm.tsx

### SongListService - function removeSong
This SongListService function deletes song list by using it id. It then returns the updated array list of song lists afterwards.The logic behind it is to take the selected song list and take the id and takes it out of the array.



Currently in CreateSongListForm.tsx


File path: 


src\components\common\create-song-list-form\CreateSongListForm.tsx

## Repositories - SongItemRepo

### SongItemRepo - function fetchAllSongs
This SongItem repository created for songItem file only; to create, update and fetch id number(currently as of sprint 3.) Currently theres only ten songs in our database with IDs going up numerically so we can easily test how the CURD operations works while we begin to add our back-end systems. For now this repository is for only testing purposes and will have more functions like fetechByGenre and etc. 

The logic behind the SongItemRepo is to handle data operations rather than business logic. It was designed to be a place holder for back-end APIs with having to change the UI components and their logic.

Currently the fetchAllSongs function is being used in the songItem.tsx within the songs folder


File path:


src\components\common\songs\song-items\SongItem.tsx


### SongItemRepo - function fetchSongById
This SongItem repository created for songItem file only; to fetch song item by only using its id number(or string later on) to display in another page. It returns a single song object from the database array. If the input song item ID doesnt exists then it will throw an error

The logic behind this function is to display a just a singular song item by itself without any other song items filling the background. This is useful for users who want more information about a particular song item.

Currently its not being used.

### SongItemRepo - function updateSongItem
This SongItem repository created for songItem file only; to updateSongItem by first taking the song item ID for it to be modified. After retrieving the song item ID we then check if the song item exists. If it passes then it can be modified then return back into the song item list array/database.

The logic behind this function is to update any changes to the song item if any information gets added or outdated on about the song item.


Currently its not being used.

### SongItemRepo - function deleteSongItem
This SongItem repository created for songItem file only; to deleteSongItem by first taking the song item ID for it to be deleted. After retrieving the song item ID we then check if the song item exists. If it passes then it can be modified then removed from the song item database

The logic behind this function is to delete any song item for any reason or to make changes that require its deletion.


Currently its not being used.