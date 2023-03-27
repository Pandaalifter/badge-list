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
        },
        {
            "title": "Signing up for AWS Web Services",
            "icon": "https://badgesapp.psu.edu/uploads/badge/image/620/amazon-web-services_vxmp.png",
            "description": "Learn how to create a root account with AWS Cloud Services and manage your AWS Console.",
            "documentLink": "",
            "authorIcon": "https://badgesapp.psu.edu/uploads/user/image/23804/small_image_Joshua_pittsburgh2021.png",
            "author": "Joshua Hantman",
            "time": "2.0 hours"
        },
        {
            "title": "AWS- LAMBDA Phase 1",
            "icon": "https://badgesapp.psu.edu/uploads/badge/image/619/1-yaTKFg6K8tTPXJtBUZ0_lw.png",
            "description": "AWS Lambda is an event-driven, serverless computing platform provided by Amazon as a part of Amazon Web Services. It is a computing service that runs code in response to events and automatically manages the computing resources required by that code.",
            "documentLink": "https://aws.amazon.com/lambda",
            "authorIcon": "https://badgesapp.psu.edu/uploads/user/image/23804/small_image_Joshua_pittsburgh2021.png",
            "author": "Joshua Hantman",
            "time": "4.0 hours"
        },
        {
            "title": "Amazon S3 Phase 1",
            "icon": "https://badgesapp.psu.edu/uploads/badge/image/621/1_B9CIOrxdROHvtdmouQA1_A.png",
            "description": "Amazon S3 is all about storage. Learning how to use it and add some static files to it are all part of this badge. S3 stands for Amazon Simple Storage Service. Getting started look through this page",
            "documentLink": "https://docs.aws.amazon.com/s3/?id=docs_gateway",
            "authorIcon": "https://badgesapp.psu.edu/uploads/user/image/23804/small_image_Joshua_pittsburgh2021.png",
            "author": "Joshua Hantman",
            "time": "5.0 hours"
        }
    ];
    res.setHeader('Cache-Control', 'max-age=0, s-maxage=1800');
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS,PATCH,DELETE,POST,PUT");
    res.setHeader("Access-Control-Allow-Headers", "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version");
    res.json(directories);
}