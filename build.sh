yarn build;
aws s3 sync ./out/ s3://covid-19-global --delete;
