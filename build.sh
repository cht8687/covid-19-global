echo 'Generating build 📦📦📦📦📦📦📦'
yarn build;

echo 'Uploading to s3 ☁️☁️☁️☁️☁️☁️☁️☁️☁️☁️☁️☁️☁️'
aws s3 sync ./out/ s3://covid19boards.com --delete;

echo 'Invalidating Cloudfront'
aws cloudfront create-invalidation \
    --distribution-id ECYNBUOOV3EEI \
    --paths "/index.html" "/*/index.html" "/*/index.html"

echo 'Deloly Successful. Have a cup of coffee!☕☕☕☕☕☕'
