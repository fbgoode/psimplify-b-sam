// PostConfirmation PLUG FOR AWS COGNITO

import registerUser from '../../../';

exports.handler = (event, context) => {
    console.log(event,context);
    
    const response = await adapter(request);
}