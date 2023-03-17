const Access_key="***";
	
const Secret_access_key="***";
const S3 = require("@aws-sdk/client-s3");

const s3 = new S3({
accessKeyId: "ENTER YOUR accessKeyId",
secretAccessKey: "ENTER YOUR secretAccessKey",
});

const BUCKET = 'shazambot';

const getSignUrlForFile = (key) => {
    return new Promise((resolve, reject) => {
    try {
    const path = require('path');
    const fileName = path.basename(key);
    
    var params = {
    Bucket: BUCKET,
    Key: key,
    Expires: 30 * 60
    };
    
    const signedUrl = s3.getSignedUrl('getObject', params);
    
    if (signedUrl) {
    return resolve({
    signedUrl,
    fileName,
    });
    } else {
    return reject("Cannot create signed URL");
    }
    } catch (err) {
    return reject("Cannot create signed URL!");
    }
    });
    }
    
    getSignUrlForFile('s3://shazambot/Sample.opus');
