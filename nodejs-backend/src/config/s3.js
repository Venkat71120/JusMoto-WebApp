const { S3Client, PutObjectCommand, DeleteObjectCommand } = require('@aws-sdk/client-s3');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

const s3Client = new S3Client({
  region: process.env.AWS_REGION || 'ap-south-1',
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
  }
});

const BUCKET = process.env.AWS_S3_BUCKET || 'jusmoto-uploads';
const REGION = process.env.AWS_REGION || 'ap-south-1';

function getS3Url(key) {
  return `https://${BUCKET}.s3.${REGION}.amazonaws.com/${key}`;
}

async function uploadToS3(buffer, key, contentType) {
  await s3Client.send(new PutObjectCommand({
    Bucket: BUCKET,
    Key: key,
    Body: buffer,
    ContentType: contentType
  }));
  return getS3Url(key);
}

async function deleteFromS3(key) {
  try {
    await s3Client.send(new DeleteObjectCommand({
      Bucket: BUCKET,
      Key: key
    }));
  } catch (e) {
    console.error('S3 delete error:', e.message);
  }
}

function generateS3Key(folder, originalName) {
  const ext = path.extname(originalName);
  return `${folder}/${uuidv4()}${ext}`;
}

module.exports = { s3Client, uploadToS3, deleteFromS3, generateS3Key, getS3Url, BUCKET, REGION };
