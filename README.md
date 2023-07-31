# The Kilburn Mill at Clark's Cove
The following explains the use and maintenance of the Kilburn Mill website.
The languages used to create this website are **Javascript, CSS, and HTML**. **Javascript** is responsible for the functionality of the website, such as handling the submitted emails and page sizing to make the content fit different screen sizes. Every page and component is available in the "client/src/Pages" and "client/src/Components" directories. **CSS** is responsible for the styling of the page and each component- how each of the elements on the page look and are oriented. Every individual page has its own stylesheet/CSS file, which is available in the "client/src/Styles" directory. Additionally, every image is located in the "Assets" folder. 

## 1. The Homepage
To edit the content on the homepage of the website, navigate to the "home.jsx" file in the "client/src/Pages" directory. To edit the styling of the homepage, navigate to the "client/src/Styles/Home.css" file. 

 #### The Hero Image 
The hero image is the largest and top-most image on the home page. In order to change the hero image, navigate to the Home.css file and find the ".hero" section. In this section, the background-image attribute is defined by the following image url: '../Assets/HeroImage.jpg'. The images are located in the Assets folder. In order to change the image, add a new picture to the 'Assets' folder and change the 'HeroImage.jpg' part of the background-image url and save the file.

 #### The Event Carousel
The event carousel is positioned below the hero image. Each event is written in the code as a card component. The following shows the code:
```javascript
<Card
    image={Image_Name}
    description="This is Card 1."
    date="July 10, 2023"
/>
```

In order to set an image to an event, it must be imported at the top of the file from the Assets folder. For example: 
```javascript
import Image_Name from "../Assets/HeroImage.jpg"
```

The "Image_Name" can be called whatever the user prefers; however, it must match what is put in the {Image_Name} section of the card. Additionally, the description and date of each individual card can be changed. In order to add more cards to the carousel, copy and paste the following code template and update it as needed:
```javascript
<Card
    image={Image_Name}
    description="This is Card 1."
    date="July 10, 2023"
/>
```
