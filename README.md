# Team name: React Muna

## Group members:

Nathan Natoza, Edraque Maglaque, Phoenixx Ordonez

## Project Theme: Music Sharing App

## User Stories:

1. As an avid music listener, I want to share my songs links across different applications, so that I can share them easily with people who use different music platforms.

2. As a user, I want to see a navigation bar, so that I can find and switch between pages with ease.

3. As a self-proclaimed music critic, I want to be able to view and submit reviews for music, so that I can freely share my opinions and see feedback from other users before deciding what to listen to.


# Project Documentation

Currently this full-stack project is separate into two different project files called 'frontend' and 'backend'

# Local Setup Instructions
Step 0 Download prerequisites: Download VScode and docker. These are the applications we use to create our project. 

Note: This is a react vite project which acts a little differently from a normal html project. This simple setup instructions will help provide you with the necessary information to test and use our project locally.

Step 0.5: Download unzip the project files and open that in VScode.
Now that you are in the root file of the project in VScode you'll see on the right hand side of your project files/folders; it should look something like this:
```
├── 📁 apps
│   ├── 📁 backend
│   └── 📁 frontend
├── 📁 docs
│   ├── 📝 architecture-nn.md
│   └── 📝 architecture-po.md
├── 📁 shared
│   └── 📁 types
│       ├── 📄 SongItemSchema.ts
│       └── 📄 songListTypes.ts
├── ⚙️ .gitignore
├── 📝 README.md
├── 📝 STYLEGUIDE.MD
├── ⚙️ docker-compose.yml
├── ⚙️ package-lock.json
├── ⚙️ package.json
├── ⚙️ tsconfig.base.json
└── ⚙️ tsconfig.json
```

### Step 1: Front-end setup

Now that you have seen our project files we want to access the VScode terminal use the command ctrl+j or Command (⌘) + J if you're on mac.

it should look like this: ```PS C:\Users\domin\Desktop\FSD_Project> ```

use the ```cd apps/frontend``` command to get into the frontend directory.

it should look like this: ```PS C:\Users\domin\Desktop\FSD_Project\apps\frontend>```

Then use the ```npm install``` command. This should download our frontend dependencies on which project relies on. You will know that it worked when you opened the frontend you will see the huge file called ```node_modules```

After installing you need to create a .env file within the frontend directory. This is where we keep our environment variables; make sure you create it that follows the same path to prevent issues.
```apps\frontend\.env``` 

After creating that you need two different environment variable keys in order for our application to work correctly. 

For the first env variable we need an VITE API URL to host the application; in our project we have it called: ```VITE_API_BASE_URL```\
In the .env you created. Copy that and paste it into your .env file: ```VITE_API_BASE_URL=http://localhost:3000```

For the second environment variable, you need to create a Clerk application to work with the frontend. [Link Here](https://dashboard.clerk.com/sign-up)

Once you have completed creating your account, setup a clerk application. Note that you need to select 'react' when creating the application; you don't need to follow the setup that clerk provides but you do need the clerk API, it should look something like this ```VITE_CLERK_PUBLISHABLE_KEY=pk_test_ABC...```

Copy that and paste it into your .env file. Your .env should have these elements. 
```
VITE_API_BASE_URL=http://localhost:3000
VITE_CLERK_PUBLISHABLE_KEY=pk_test_ABC...
```

Now go back to your VScode terminal and run this command ```npm run dev```.
This will open the local host link and should look something like this: ```Local:   http://localhost:5173/```

And Thats the frontend setup!

### Step 2: Back-end/Project setup

Now that you have setup the frontend and were able to see the our application pages you probably noticed theres no data to interact with.

First get back to the main project root, it should look like this ```PS C:\Users\domin\Desktop\FSD_Project> ```

You now want to create another .env file for our backend. This serves nearly the same function as the other .env file you created previously. Once there you want to begin adding some environment variables again.

First add the same clerk API key as the one from our frontend but this time remove the ```VITE_``` from the start of the variable. Now it should look like this: ```CLERK_PUBLISHABLE_KEY=pk_test_NAT...```

Second our Clerk secret key; this is found in the your clerk application settings under API keys. Note its easiest to pull from the quick copy menu under Next.js. This key should look like this:```CLERK_SECRET_KEY=sk_test_PHO...```

Third our database url; this connects our database to the project. 
It should look something like this ```DATABASE_URL=<>```

Lastly our Frontend url; this connects the backend to the frontend. This is very easy to get; when running the frontend you should've seen a url something like this ```http://<urladdress>:<numbers>/```. To retrieve simply run the frontend again and copy and paste it into the .env file. When adding the variable it should look something like this ```FRONTEND_URL=http://<urladdress>:<numbers>/```

Finally your backend .env file should look something like this. 
```
DATABASE_URL=postgres://<docker>@localhost/<docker>
FRONTEND_URL=http://localhost:5173
CLERK_PUBLISHABLE_KEY=pk_test_ABC...
CLERK_SECRET_KEY=sk_test_XYZ...
```


### Step 3: Docker/prisma database setup + test run.

Finally the last setup. For this you want get back to the main project root, it should look like this ```PS C:\Users\domin\Desktop\FSD_Project> ``` then run this command from step 1: ```npm run dev```. If you completed the steps correctly then you should be able to view the application on local host and interact with the application environments.


## Sprint Review | Completed Kanban Items

### Team Contributions

### Sprint 1

- **Project Initialization** - Phoenixx
- **Set up Project Git Repository** - Nathan
- **Team Vercel Account/Management** - Nathan
- **App Integration** - Edraque
- **Project README.md file** - Everyone; Phoenixx, Nathan, and Edraque
- **App Stylesheet and Style Guide** - Everyone; Phoenixx, Nathan, and Edraque

### Sprint 2

- **Multi-Page Navigation** - Phoenixx
- **Navigation Interface(s)** - Nathan
- **Shared state across pages** - Phoenixx


### Sprint 3

- **useSortAndFilterUI Hook** - Nathan
- **SongListService** - Nathan
- **SongItemService** - Nathan
- **useSearch** - Phoenixx
- **songSearchService** - Phoenixx
- **Discovery Service** - Edraque

### Sprint 4
- **Back-end app initialization** - Nathan
- **Development in a SQL database** - Nathan
- **Prisma Installation and Client Initialization** - Phoenixx
- **Back-end CORS Configuration** - Phoenixx

- **Extra Refactoring: Added application data persistence(Adding Song item to a Song list collection)** - Nathan & Phoenixx

### Sprint 5
- **Clerk Auth Setup** - Nathan
- **Vercel Managment** - Nathan
- **Back-end User Management** - Phoenixx
- **User Login/Registration** - Nathan & Phoenixx
- **Local Setup Instructions** - Nathan & Phoenixx

- **Extra Refactoring: ** - Nathan & Phoenixx

### Individual Contributions

### Sprint 1
- **I.1 Navigation Bar Component** - Phoenixx
- **I.1 Music List + Page** - Nathan
- **I.1 Review Page Component** - Edraque
- **I.2 Styling: Navigation Bar** - Phoenixx
- **I.2 Styling: Music List + Page** - Nathan
- **I.2 Styling; Review Page Component** - Edraque

### Sprint 2
- **I.1 Feature Page (LISTS page)** - Phoenixx
- **I.2 Form Component(Genre filter)** - Nathan
- **I.2 Form Component(Create a List)** - Phoenixx
- **I.3 Element Addition/Removal (Like button/Upvote Downvote feature)** - Nathan
- **I.3 Element Addition/Removal (Add/Remove Song from the List)** - Phoenixx

### Sprint 3

- **I.1 Repository Definition(s) and Integration (Song list)** - Phoenixx
- **I.1 Repository Definition(s) and Integration (Song item repository)** - Nathan
- **I.2 Test Data (Song item)** - Nathan
- **I.2 Test Data (Song list test data)** - Phoenixx
- **I.3 New / Refactored Components (Song Item function/components)** - Nathan
- **I.3 New / Refactored Components (Create Song List Form Components)** - Phoenixx
- **I.4 Architectural Layout Document** - Nathan and Phoenixx
- **Edraque's individual components still WIP**


### Sprint 4

- **I.1: Back-end Resource Endpoint(Song Item)** - Nathan
- **I.2: Resource Dataabse Schema(Song Item)** - Nathan
- **I.3: Front-end Repository sends requests to back-end** - Nathan
- **I.4: Application State Persistence** - Nathan
- **I.1: Back-end Resource Endpoint(Song List)** - Phoenixx
- **I.2: Resource Dataabse Schema(Song List)** - Phoenixx
- **I.3: Front-end Repository sends requests to back-end** - Phoenixx
- **I.4: Application State Persistence** - Phoenixx
