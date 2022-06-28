# Build Dynamic Favicon with JavaScript

A favicon is a small image displayed next to the page title in the browser tab. It creates a visual representation of your website and saves time by allowing users to easily identify your brand with it. Establishing brand recognition through favicons is important for Search Engine Optimization. You may have noticed that modern web applications have dynamic favicons that change over time. 

In this article we are going to explore how we can build dynamic favicon with JavaScript. 


## Github

Check out the complete source code in this  [GitHub Repository](https://github.com/874bowen/Dynamic-Favicons.git).

## Pre-requisites
To effectively follow along through this article you are required to have: 
- Basic HTML5 skills
- Basic knowledge of JavaScript

## Introduction
In this demo we are going to create favicons that change after a specific time, say after one second. Later we are going to add a notification badge to our favicon by using HTML canvas to draw on it. Most of the favicons have a common name `favicon.ico`

> HTML canvas is an element that can be used to draw graphics on a web page via scripting (usually JavaScript)
> 

A favicon is a square image with sizes of `16*16` and supports a variety of file formats including **.ico**, **.png**, **.gif**, **.jpeg** and **.svg** In this article we are going to use `.png` files.
Sounds interesting, right? 

## Project Setup 
Open an empty folder in your favorite text editor and create a folder we are going to store our at least two favicon images. Then create an `index.html` inside the parent folder and paste the following. 

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dynamic Favicons</title>
    <link id="favicon" rel="icon" href="favicons/0.png" type="image/png" sizes="16*16">
</head>
<body>
    <h1 style="text-align: center; color: crimson;">Welcome to Cloudinary</h1>
    <p style="text-align: center; margin: auto; width: 60%;">Transform images and videos to load faster with no visual degradation, automatically generate image and video variants, and deliver high quality responsive experiences to increase conversions.</p>

    <script src="script.js"></script>
</body>
</html>
```

Right-click the `index.html` file and open it in your browser. You should be able to see a page and besides the title **Dynamic Favicons** a favicon of your choice. It should look like this. We can then look at this in more details.

![img.png](img.png)

## Add Favicon to your Web Page
To add a favicon for your page add a `<link>` element just after the `title` element. Ensure that you have the favicon image saved in your root directory of your project or inside a folder for this case the `favicons` folder. You can visit [this link](https://www.favicon.cc) to create your own favicon.

```html
<link id="favicon" rel="icon" href="favicons/0.png" type="image/png" sizes="16*16">
```

You may also notice that here we are naming the favicons with numbers, this is to make iterating through the favicons easier, you'll see this in the next steps.

You can specify the size using the `sizes` attribute to ensure that they are of the right size i.e., 16*16.

## Handle the Favicon element 
Create an `script.js` file in your root folder because we are going to use JavaScript to handle the favicon.

```javascript
window.onload = function () {
    var favicon = document.getElementById('favicon');
}
```
We can create an animation effect to our favicon by changing it after every one second. It is also clear here as to why we used ascending numbers to name our favicons. We will increment the `faviconIndex` after every second and this will change the URL of the link.
```javascript
window.onload = function () {

    var faviconIndex = 0;
    var favicon = document.getElementById('favicon');

    setInterval(function() {
        favicon.href = "favicons/"+faviconIndex + ".png";
        faviconIndex++;
        faviconIndex %= 3; // number of favicons (3)
    }, 1000);
};
```
If you refresh your browser after saving the changes you will see the favicon changing after every one second. You can do this to grab people's attention.

## Add Notification badge to your Favicon