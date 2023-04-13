export default async function handler(req, res) {

    const search = req.query.search || '';

    //Function takes in and cleans search input to the API. This allows for order to not matter and for any result 
    //with any matching element to be presented.
    function searchFilter(value = '') {
        let tempArray = [];
        let contents = value;
        for (let i = 0; i < contents.length; i++) {
            //If whitespace or punctuation
            if (/\s|[\p{P}]/u.test(contents[i])) { 
                //If the character before isn't whitespace or puntctuation
                if (i > 0 && !(/\s|[\p{P}]/u.test(contents[i-1]))) { 
                    //Replace non-alphanumeric with nullspace
                    let formatContents = contents.slice(0, i).replace(/[^\w]/g, '').toLowerCase();
                    tempArray.push(formatContents); 
                }
                contents = contents.slice(i + 1);
                i = -1; //Resets position after reattaching/deleting character
            } 
            //If the last character
            else if (i === contents.length - 1) { 
                //Replace non-alphanumeric with nullspace
                let formatContents = contents.slice(0, i + 1).replace(/[^\w]/g, '').toLowerCase();
                tempArray.push(formatContents);
            }
        }

        return tempArray;
    }
    
    var directories = [
        {
            "title": "Professor Giacobe",
            "icon": "https://ist.psu.edu/sites/default/files/directory/Giacobe-Nicklaus.jpg",
            "description": "Chadest Chad of Chadtopia. Professor Giacobe may look like a simple man but perceptions can be misleading. Underneath the facade of a simple college of IST professor lies the holiness of an IST GOD!",
            "document": "The Secret Sanctum",
            "documentLink": "https://ist.psu.edu/directory/nxg13",
            "authorIcon": "https://d26oc3sg82pgk3.cloudfront.net/files/media/edit/image/35615/square_thumb%402x.png",
            "author": "Kevin Hantman",
            "time": "4.0 hours"
        },
        {
            "title": "Professor Ollendyke",
            "icon": "https://ist.psu.edu/sites/default/files/directory/Ollendyke-Bryan.jpg",
            "description": "Penn State costs in-state students $71.84 per day and out-of-state students $123.28 per day. This is all to learn React. btoh no!",
            "document": "Planning for Chaos",
            "documentLink": "https://ist.psu.edu/directory/bto108",
            "authorIcon": "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71LZOuZA47L._CR0,204,1224,1224_UX256.jpg",
            "author": "Joseph Joestar",
            "time": "3.0 hours"
        },
        {
            "title": "Professor Fusco",
            "icon": "https://ist.psu.edu/sites/default/files/directory/Fusco-David.jpg",
            "description": "Cloud computatering the world, one step at a time. Chadical radical, lorem ipsum dolor amet norm.",
            "document": "Maker of Ideas",
            "documentLink": "https://ist.psu.edu/directory/djf3",
            "authorIcon": "https://c-cl.cdn.smule.com/rs-s35/arr/c4/02/93d33eb2-0215-4939-a788-6362b837c51c.jpg",
            "author": "Joshua Hantman",
            "time": "4.0 hours"
        },
        {
            "title": "Professor Welch",
            "icon": "https://ist.psu.edu/sites/default/files/directory/Welch-Dan.jpg",
            "description": "Coder man with coder plan. Java beans all day everyday. Constant student emails and office hours. Java pipeline.",
            "document": "IST 311 when?",
            "documentLink": "https://ist.psu.edu/directory/dtw5246",
            "authorIcon": "https://styles.redditmedia.com/t5_1yzzoo/styles/profileIcon_0xl3sfn3txe61.png?width=256&height=256&frame=1&auto=webp&crop=256:256,smart&s=ee538a93f99652f4c2b8b36b49a9ece2f53a3f48",
            "author": "Gorbachev the Gorber",
            "time": "3.0 hours"
        },
        {
            "title": "Professor Sylvester",
            "icon": "https://ist.psu.edu/sites/default/files/directory/Sylvester-Kevin.jpg",
            "description": "RSA, Divides By, Math Words, Multiplicative, Graph Trees, BGP, Proof by induction, proof by contradiction, proof by contrapositive, proof by exhaustion, proof by I forget the rest.",
            "document": "Hulk Learns Booleans",
            "documentLink": "https://ist.psu.edu/directory/kxs456",
            "authorIcon": "https://www.squatties.com/images/avatars/avatar-the-joker-256.png",
            "author": "Bruce Banner",
            "time": "3.0 hours"
        },
        {
            "title": "Professor Ocker",
            "icon": "https://ist.psu.edu/sites/default/files/directory/Ocker-Rosalie_0.jpg",
            "description": "Spider-Man, Spider-Man Does whatever a spider can Spins a web, any size Catches thieves just like flies Look out Here comes the Spider-Man Is he strong? Listen bud He's got radioactive blood Can he swing from a thread? Take a look overhead Hey, there There goes the Spider-Man",
            "document": "Spider-Man's Greatest Enemy",
            "documentLink": "https://ist.psu.edu/directory/rxo4",
            "authorIcon": "https://cdn-img.fimfiction.net/user/20ki-1672799778-358288-256",
            "author": "Peter Parker",
            "time": "2.0 hours"
        },
        {
            "title": "Professor Hodgson",
            "icon": "https://cdn.discordapp.com/attachments/434857360155213827/1094818732670468196/image.png",
            "description": "I still don't remember the joke that Joe wanted to say. Cool professor with cool classes though. Security Risking of the Riskers of Analysizing Analysis.",
            "document": "SRA Expert",
            "documentLink": "https://ist.psu.edu/directory/jgh161",
            "authorIcon": "https://i.pinimg.com/474x/7a/39/a1/7a39a1ec37175355cec83259a68e1190.jpg",
            "author": "Joker",
            "time": "2.0 hours"
        },
        {
            "title": "Docker the Dockening",
            "icon": "https://www.docker.com/wp-content/uploads/2022/03/vertical-logo-monochromatic.png",
            "description": "He docks. I got tired of thinking of things to write about people. Docker do be pretty cool for people who like virtual machines. Linooxing linooxers too.",
            "document": "Enter the Gateway",
            "documentLink": "https://www.docker.com/",
            "authorIcon": "https://at-cdn-s03.audiotool.com/2022/09/18/documents/fkvx69o1/0/cover256x256-1f2da3f1e2264fe7a11e32db4385734d.jpg",
            "author": "Jeff Jeffington",
            "time": "1.0 hours"
        },
        {
            "title": "React: Hi",
            "icon": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
            "description": "Pretty sad. The metaverse be metaversing. React be reactering. The Mojave desert because I don't know why. The Zuck buys the t-shirts. I'm typing random stuff.",
            "document": "The Zumbling",
            "documentLink": "https://www.facebook.com/markzuckerbergmemes/",
            "authorIcon": "https://cdn.discordapp.com/attachments/434857360155213827/1094895184493416458/0x0.png",
            "author": "Mark Zuckerberg",
            "time": "5.0 hours"
        },
        {
            "title": "Coolest Painter Around",
            "icon": "https://dynaimage.cdn.cnn.com/cnn/q_auto,w_412,c_fill,g_auto,h_412,ar_1:1/http%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F160523192458-10-netflix-amazon-hulu-itunes-june.jpg",
            "description": "He paints. He paints good. They had some long Twitch streams about him. Everyone misses the main man. He had some nice hair. And a nice beard too.",
            "document": "Everyone Should Watch This TBH",
            "documentLink": "https://www.youtube.com/channel/UCxcnsr1R5Ge_fbTu5ajt8DQ",
            "authorIcon": "https://b.thumbs.redditmedia.com/JHAdqgeHHh8P1hgo34guwWoAsPhFbW3t-TLFyTK8keM.png",
            "author": "Bob Ross",
            "time": "2.0 hours"
        },
        {
            "title": "Kentucky Fried Chicken",
            "icon": "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1500w,f_auto,q_auto:best/msnbc/Components/Photos/061113/061113_kfc_logo_vmed5p.jpg",
            "description": "Did you know that KFC made a fully funded Colonel Sanders dating game that was released for free on Steam? Well now you know. ",
            "document": "Has The Best Tweets",
            "documentLink": "https://twitter.com/KFC_ES?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor",
            "authorIcon": "https://styles.redditmedia.com/t5_25d1j0/styles/communityIcon_hrnqkp6rvdo31.PNG",
            "author": "Colonel Harland Sanders",
            "time": "7.0 hours"
        },
        {
            "title": "Linus Torvalds",
            "icon": "https://upload.wikimedia.org/wikipedia/commons/8/85/Solo-a-star-wars-story-tall-A_%28cropped%29.png",
            "description": "idk. Guy who made the Linoox. I had : A Stars Wars Story for no reason earlier, but then I removed it again for no reason. Linux is pretty ehpik though. Also the guy below made a really funny song about open-source.",
            "document": "Best Linux Distro",
            "documentLink": "https://hannahmontana.sourceforge.net/",
            "authorIcon": "https://upload.wikimedia.org/wikipedia/commons/4/46/Richard_Stallman_2005_%28chrys%29.jpg",
            "author": "Richard Stallman",
            "time": "5.0 hours"
        },
        {
            "title": "How to Play Sabacc",
            "icon": "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71a-kgu4yHL._AC_UF894,1000_QL80_.jpg",
            "description": "just putting random test badges in tbh. Sabacc is a card game from Star Wars. It was playable in a bunch of games, but I never bothered learning to play it. Probably based on a real game, but I don't know which.",
            "document": "Wookie Cookies Are Canon According To The Holiday Special",
            "documentLink": "https://starwars.fandom.com/wiki/Sabacc",
            "authorIcon": "https://pbs.twimg.com/profile_images/699784627427418112/DMQKNJXp_400x400.jpg",
            "author": "Jabba the Hutt",
            "time": "4.0 hours"
        }
    ];

    //Search API Filter
    let filteredSearch = searchFilter(search);

    if(filteredSearch.length === 0){ 
        directories = directories;
    }
    else{
        directories = directories.filter((item) => {
            return filteredSearch.some(input => {
              return item.title.toLowerCase().includes(input);
            }) || filteredSearch.some(input => {
              return item.author.toLowerCase().includes(input);
            }) || filteredSearch.some(input => {
              return item.description.toLowerCase().includes(input);
            }) || filteredSearch.some(input => {
              return item.document.toLowerCase().includes(input);
            }) || filteredSearch.some(input => {
              return item.time.toLowerCase().includes(input);
            })
          })
        };

    res.setHeader('Cache-Control', 'max-age=0, s-maxage=1800');
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS,PATCH,DELETE,POST,PUT");
    res.setHeader("Access-Control-Allow-Headers", "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version");
    res.json(directories);
}