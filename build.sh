echo 'Generating build 📦📦📦📦📦📦📦'
yarn build;

echo 'Uploading to s3 ☁️☁️☁️☁️☁️☁️☁️☁️☁️☁️☁️☁️☁️'
aws s3 sync ./out/ s3://www.covid19boards.com --delete;

echo 'Invalidating Cloudfront'
aws cloudfront create-invalidation \
    --distribution-id ECYNBUOOV3EEI \
    --paths "/index.html" "/australia/index.html" "/usa/index.html" "/uk/index.html"  "/canada/index.html" "/france/index.html"

echo 'Deloly Successful. Have a cup of coffee!☕☕☕☕☕☕'
