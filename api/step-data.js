export default async function handler(request, res) {

    const directories = [
        {
            "tag": "Professor Giacobe",
            "unitIcon": 'av:play-circle-outline',
            "information": "CYBER 100",
            "duration": "1.0 hours"
        },
        {
            "tag": "Professor Giacobe",
            "unitIcon": 'av:play-circle-outline',
            "information": "IST 220",
            "duration": "1.0 hours"
        },
        {
            "tag": "Professor Giacobe",
            "unitIcon": 'av:play-circle-outline',
            "information": "CYBER 440",
            "duration": "2.0 hours"
        },
        {
            "tag": "Professor Ollendyke",
            "unitIcon": 'av:play-circle-outline',
            "information": "IST 256",
            "duration": "1.0 hours"
        },
        {
            "tag": "Professor Ollendyke",
            "unitIcon": 'av:play-circle-outline',
            "information": "IST 402",
            "duration": "2.0 hours"
        },
        {
            "tag": "Professor Fusco",
            "unitIcon": 'build',
            "information": "CYBER 100",
            "duration": "1.0 hours"
        },
        {
            "tag": "Professor Fusco",
            "unitIcon": 'build',
            "information": "ETI 300W",
            "duration": "1.0 hours"
        },
        {
            "tag": "Professor Fusco",
            "unitIcon": 'build',
            "information": "CYBER 440",
            "duration": "2.0 hours"
        },
        {
            "tag": "Professor Welch",
            "unitIcon": 'build',
            "information": "IST 110",
            "duration": "1.0 hours"
        },
        {
            "tag": "Professor Welch",
            "unitIcon": 'build',
            "information": "IST 140",
            "duration": "1.0 hours"
        },
        {
            "tag": "Professor Welch",
            "unitIcon": 'build',
            "information": "IST 242",
            "duration": "1.0 hours"
        },
        {
            "tag": "Professor Sylvester",
            "unitIcon": 'build',
            "information": "IST 110",
            "duration": "1.0 hours"
        },
        {
            "tag": "Professor Sylvester",
            "unitIcon": 'build',
            "information": "IST 230",
            "duration": "1.0 hours"
        },
        {
            "tag": "Professor Ocker",
            "unitIcon": 'build',
            "information": "SRA 365",
            "duration": "1.0 hours"
        },
        {
            "tag": "Professor Ocker",
            "unitIcon": 'build',
            "information": "IST 210",
            "duration": "1.0 hours"
        },
        {
            "tag": "Professor Ocker",
            "unitIcon": 'build',
            "information": "IST 301",
            "duration": "1.0 hours"
        },
        {
            "tag": "Professor Hodgson",
            "unitIcon": 'build',
            "information": "SRA 111",
            "duration": "1.0 hours"
        },
        {
            "tag": "Professor Hodgson",
            "unitIcon": 'build',
            "information": "SRA 231",
            "duration": "1.0 hours"
        },
        {
            "tag": "Professor Hodgson",
            "unitIcon": 'build',
            "information": "SRA 311W",
            "duration": "1.0 hours"
        },
        {
            "tag": "Docker the Dockening",
            "unitIcon": 'build',
            "information": "docker-compose a smile",
            "duration": "1.0 hours"
        },
        {
            "tag": "React: Hi",
            "unitIcon": 'build',
            "information": "Absorb Life Essence",
            "duration": "2.5 hours"
        },
        {
            "tag": "React: Hi",
            "unitIcon": 'build',
            "information": "Virtual Realitize Your DOMs",
            "duration": "2.5 hours"
        },
        {
            "tag": "Coolest Painter Around",
            "unitIcon": 'build',
            "information": "Never Gonna Give You Up",
            "duration": "1.0 hours"
        },
        {
            "tag": "Coolest Painter Around",
            "unitIcon": 'build',
            "information": "Never Gonna Let You Down",
            "duration": "1.0 hours"
        },
        {
            "tag": "Kentucky Fried Chicken",
            "unitIcon": 'build',
            "information": "Complete Game Playthrough",
            "duration": "7.0 hours"
        },
        {
            "tag": "Linus Torvalds",
            "unitIcon": 'build',
            "information": "sudo apt-get some sleep",
            "duration": "2.0 hours"
        },
        {
            "tag": "Linus Torvalds",
            "unitIcon": 'build',
            "information": "Free and open source your software (FOSS)",
            "duration": "3.0 hours"
        },
        {
            "tag": "How to Play Sabacc",
            "unitIcon": 'build',
            "information": "Fight in the Sarlacc Pit",
            "duration": "4.0 hours"
        }
    ];
    res.setHeader('Cache-Control', 'max-age=0, s-maxage=1800');
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS,PATCH,DELETE,POST,PUT");
    res.setHeader("Access-Control-Allow-Headers", "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version");
    res.json(directories);
}