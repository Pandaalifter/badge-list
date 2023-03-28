export default async function handler(request, res) {

    const directories = [
        {
            "title": "Amazon Cognito",
            "stepIcon": 'https://public.lionpath.psu.edu/cs/CSPRD/cache/PE_LP_LOGO_WHITE_MD_PNG_1.PNG',
            "stepDescription": "Create a User Pool in Amazon Cognito",
            "stepTime": "4.0 hours"
        },
        {
            "title": "AWS- LAMBDA Phase 1",
            "stepIcon": 'https://public.lionpath.psu.edu/cs/CSPRD/cache/PE_LP_LOGO_WHITE_MD_PNG_1.PNG',
            "stepDescription": "Create a User Pool in Amazon Cognito",
            "stepTime": "4.0 hours"
        },
        {
            "title": "AWS- LAMBDA Phase 1",
            "stepIcon": 'https://public.lionpath.psu.edu/cs/CSPRD/cache/PE_LP_LOGO_WHITE_MD_PNG_1.PNG',
            "stepDescription": "Create a User Pool in Amazon Cognito",
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