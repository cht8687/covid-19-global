yarn build;
aws s3 sync ./out/ s3://covid19boards.com --delete;
