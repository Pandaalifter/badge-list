export default async function handler(request, res) {

    const directories = [
        {
            "title": "Amazon Cognito",
            "icon": "https://badgesapp.psu.edu/uploads/badge/image/623/Cognito.png",
            "description": "Learn the basics of how Amazon Cognito works, and how you can use it to create User Sign In, Sign In, Access Control, User Pools, and Identity Pools",
            "documentLink": "https://docs.aws.amazon.com/cognito/latest/developerguide/tutorials.html",
            "authorIcon": "https://badgesapp.psu.edu/uploads/user/image/23804/small_image_Joshua_pittsburgh2021.png",
            "author": "Joshua Hantman",
            "time": "4.0 hours"
        },
        {
            "title": "Amazon I AM",
            "icon": "https://badgesapp.psu.edu/uploads/badge/image/618/AWS-IAM-Exploitation.png.png",
            "description": "Create a I AM account with MFA enabled and Admin permissions",
            "documentLink": "",
            "authorIcon": "https://badgesapp.psu.edu/uploads/user/image/23804/small_image_Joshua_pittsburgh2021.png",
            "author": "Joshua Hantman",
            "time": "2.0 hours"
        }
    ];
    res.setHeader('Cache-Control', 'max-age=0, s-maxage=1800');
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS,PATCH,DELETE,POST,PUT");
    res.setHeader("Access-Control-Allow-Headers", "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version");
    res.json(directories);
}