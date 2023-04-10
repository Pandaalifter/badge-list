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
            "unitIcon": 'communication:business',
            "information": "IST 220",
            "duration": "1.0 hours"
        },
        {
            "tag": "Professor Giacobe",
            "unitIcon": 'device:access-alarm',
            "information": "CYBER 440",
            "duration": "2.0 hours"
        },
        {
            "tag": "Professor Ollendyke",
            "unitIcon": 'build',
            "information": "IST 256",
            "duration": "1.0 hours"
        },
        {
            "tag": "Professor Ollendyke",
            "unitIcon": 'accessibility',
            "information": "IST 402",
            "duration": "2.0 hours"
        },
        {
            "tag": "Professor Fusco",
            "unitIcon": 'device:sd-storage',
            "information": "CYBER 100",
            "duration": "1.0 hours"
        },
        {
            "tag": "Professor Fusco",
            "unitIcon": 'device:network-wifi',
            "information": "ETI 300W",
            "duration": "1.0 hours"
        },
        {
            "tag": "Professor Fusco",
            "unitIcon": 'fingerprint',
            "information": "CYBER 440",
            "duration": "2.0 hours"
        },
        {
            "tag": "Professor Welch",
            "unitIcon": 'send',
            "information": "IST 110",
            "duration": "1.0 hours"
        },
        {
            "tag": "Professor Welch",
            "unitIcon": 'maps:local-dining',
            "information": "IST 140",
            "duration": "1.0 hours"
        },
        {
            "tag": "Professor Welch",
            "unitIcon": 'notification:adb',
            "information": "IST 242",
            "duration": "1.0 hours"
        },
        {
            "tag": "Professor Sylvester",
            "unitIcon": 'social:cake',
            "information": "IST 110",
            "duration": "1.0 hours"
        },
        {
            "tag": "Professor Sylvester",
            "unitIcon": 'social:school',
            "information": "IST 230",
            "duration": "1.0 hours"
        },
        {
            "tag": "Professor Sylvester",
            "unitIcon": 'places:pool',
            "information": "SRA 365",
            "duration": "1.0 hours"
        },
        {
            "tag": "Professor Ocker",
            "unitIcon": 'notification:folder-special',
            "information": "IST 210",
            "duration": "1.0 hours"
        },
        {
            "tag": "Professor Ocker",
            "unitIcon": 'notification:ondemand-video',
            "information": "IST 301",
            "duration": "1.0 hours"
        },
        {
            "tag": "Professor Hodgson",
            "unitIcon": 'lock-outline',
            "information": "SRA 111",
            "duration": "1.0 hours"
        },
        {
            "tag": "Professor Hodgson",
            "unitIcon": 'maps:satellite',
            "information": "SRA 231",
            "duration": "1.0 hours"
        },
        {
            "tag": "Professor Hodgson",
            "unitIcon": 'language',
            "information": "SRA 311W",
            "duration": "1.0 hours"
        },
        {
            "tag": "Docker the Dockening",
            "unitIcon": 'donut-small',
            "information": "docker-compose a smile",
            "duration": "1.0 hours"
        },
        {
            "tag": "React: Hi",
            "unitIcon": 'editor:format-paint',
            "information": "Absorb Life Essence",
            "duration": "2.5 hours"
        },
        {
            "tag": "React: Hi",
            "unitIcon": 'device:wifi-tethering',
            "information": "Virtual Realitize Your DOMs",
            "duration": "2.5 hours"
        },
        {
            "tag": "Coolest Painter Around",
            "unitIcon": 'image:brush',
            "information": "Never Gonna Give You Up",
            "duration": "1.0 hours"
        },
        {
            "tag": "Coolest Painter Around",
            "unitIcon": 'image:edit',
            "information": "Never Gonna Let You Down",
            "duration": "1.0 hours"
        },
        {
            "tag": "Kentucky Fried Chicken",
            "unitIcon": 'image:timelapse',
            "information": "Complete Game Playthrough",
            "duration": "7.0 hours"
        },
        {
            "tag": "Linus Torvalds",
            "unitIcon": 'image:tag-faces',
            "information": "sudo apt-get some sleep",
            "duration": "2.0 hours"
        },
        {
            "tag": "Linus Torvalds",
            "unitIcon": 'maps:directions-car',
            "information": "Free and open source your software (FOSS)",
            "duration": "3.0 hours"
        },
        {
            "tag": "How to Play Sabacc",
            "unitIcon": 'maps:local-florist',
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