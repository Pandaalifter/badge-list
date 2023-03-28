export default async function handler(request, res) {

    const directories = [
        {
            "tag": "Amazon Cognito",
            "stepIcon": 'https://public.lionpath.psu.edu/cs/CSPRD/cache/PE_LP_LOGO_WHITE_MD_PNG_1.PNG',
            "stepDescription": "Create a User Pool in Amazon Cognito",
            "stepTime": "4.0 hours"
        },
        {
            "tag": "AWS- LAMBDA Phase 1",
            "stepIcon": 'https://public.lionpath.psu.edu/cs/CSPRD/cache/PE_LP_LOGO_WHITE_MD_PNG_1.PNG',
            "stepDescription": "Amazon Incognito",
            "stepTime": "4.0 hours"
        },
        {
            "tag": "AWS- LAMBDA Phase 1",
            "stepIcon": 'https://imageio.forbes.com/specials-images/imageserve/5c76b7d331358e35dd2773a9/0x0.jpg?format=jpg&crop=4401,4401,x0,y0,safe&height=416&width=416&fit=bounds',
            "stepDescription": "Taco Tyesday",
            "stepTime": "4.0 hours"
        }
    ];
    res.setHeader('Cache-Control', 'max-age=0, s-maxage=1800');
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS,PATCH,DELETE,POST,PUT");
    res.setHeader("Access-Control-Allow-Headers", "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version");
    res.json(directories);
}