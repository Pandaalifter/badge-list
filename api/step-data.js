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
            "duration": "4.0 hours"
        },
        {
            "tag": "Professor Ollendyke",
            "unitIcon": 'av:play-circle-outline',
            "information": "IST 402",
            "duration": "4.0 hours"
        },
        {
            "tag": "AWS- LAMBDA Phase 1",
            "unitIcon": 'build',
            "information": "Taco Tyesday",
            "duration": "4.0 hours"
        },
        {
            "tag": "AWS- LAMBDA Phase 1",
            "unitIcon": 'build',
            "information": "Taco Tyesday",
            "duration": "4.0 hours"
        },
        {
            "tag": "Amazon I AM",
            "unitIcon": 'build',
            "information": "Taco Tyesday",
            "duration": "4.0 hours"
        },
        {
            "tag": "Signing up for AWS Web Services",
            "unitIcon": 'build',
            "information": "Taco Tyesday",
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