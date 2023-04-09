export default async function handler(request, res) {

    const directories = [
        {
            "tag": "Amazon Cognito",
            "unitIcon": 'av:play-circle-outline',
            "information": "Create a User Pool in Amazon Cognito",
            "duration": "4.0 hours"
        },
        {
            "tag": "AWS- LAMBDA Phase 1",
            "unitIcon": 'av:play-circle-outline',
            "information": "Amazon Incognito",
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