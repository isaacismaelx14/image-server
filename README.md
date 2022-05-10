# Upload Image Server
Upload and compress images to your express server.

## First Steps

1. `npm install`
2. `npm start` 
3. You can test the server running the `test.html` file in your browser.

## Usage

`POST /publish` Send a form with the image. The name should be `image` example: 
``` 
const form = document.getElementById("form");
const image = form.image;
formData.append("image", image);
```
Then send the file to the server.

**Example using fetch:**
```
fetch('http://localhost:4000/publish', {
    method: 'POST',
    body: formData
});
``` 
This request will return the path based on the image. **Example:**
```
{
    link: "uploads/1652198664218-test.png.webp"
}
```
To get the image make a `GET Request` to the host adding the path. Example: `"https://localhost:4000/" + res.link`
