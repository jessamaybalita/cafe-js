    import cafeImageSrc from "./assets/images/pexels-mathew-jackson-1102300-2094758.jpg";

    


const contactPage = () => {
    const contactTitle = document.createElement('h1');
    contactTitle.classList.add('contact-title');
    contactTitle.textContent = 'Contact Us';

    const contactContainer = document.createElement('div');
    contactContainer.classList.add('contact-container');

    const contactInfo = document.createElement('div');
    contactInfo.classList.add('contact-info');
    contactContainer.append(contactInfo);

    // const locationText = document.createElement('p');
    // const locationspan = document.createElement('span');
    // locationText.append(locationspan);
    // const locationIcon = document.createElement('i');
    // span.append(locationIcon);
    // locationText.textContent = '123 Sandwich St, Flavor City, Philippines';
    // locationIcon.classList.add('fa-solid', 'fa-location-dot');
    // locationText.prepend(locationIcon);
    // contactInfo.append(locationText);
    const createContact = (contactTextElement, contactText, contactSpan, contactIcon, iconPack, iconClass) => {
        contactTextElement = document.createElement('p');
        contactSpan = document.createElement('span');
        contactTextElement.append(contactSpan);
        contactIcon = document.createElement('i');
        contactSpan.append(contactIcon);
        contactTextElement.innerText = contactText;
        contactIcon.classList.add(iconPack, iconClass);
        contactTextElement.prepend(contactIcon);
        contactInfo.append(contactTextElement);

        return [contactTextElement, contactSpan, contactIcon];
    }

    createContact('locationText', '123 Sandwich St, Flavor City, Philippines', 'locationspan', 'locationIcon', 'fa-solid', 'fa-location-dot');
    createContact('locationText', 'Sandwiriffic Cafe', 'instagramspan', 'instagramIcon', 'fa-brands', 'fa-instagram');
    createContact('locationText', 'Sandwiriffic Cafe', 'facebookspan', 'facebookIcon', 'fa-brands', 'fa-facebook');
    createContact('phoneText', '(123) 456-7890', 'phonespan', 'phoneIcon', 'fa-solid', 'fa-phone');
    createContact('emailText', 'contact@flavorcafe.com', 'emailspan', 'emailIcon', 'fa-solid', 'fa-envelope');
    createContact('openingHoursText', 'Monday - Sunday: 8:00 AM - 10:00 PM', 'openingHoursspan', 'openingHoursIcon', 'fa-solid', 'fa-clock');


    
    


    // CAFE IMAGE
    const cafeImageContainer = document.createElement('div');
    cafeImageContainer.classList.add("cafe-img");
    const cafeImg = document.createElement("img");
    cafeImg.src = cafeImageSrc;
    cafeImg.alt = "Photo by Mathew Jackson: https://www.pexels.com/photo/man-standing-on-a-staircase-outside-house-2094758/";
    cafeImageContainer.appendChild(cafeImg);
    contactContainer.append(cafeImageContainer);
    

   



    return [contactTitle, contactContainer];
}

export default contactPage;