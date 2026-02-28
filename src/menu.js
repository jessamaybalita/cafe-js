
const menuPage = () => {
    const menuTitle = document.createElement('h1');
    menuTitle.classList.add('menu-title');
    menuTitle.textContent = 'Our Menu';

    const menupageContainer = document.createElement('div');
    menupageContainer.classList.add('menupage-container');
    
    const sandwichesContainer = document.createElement('div');
    sandwichesContainer.classList.add('sandwiches-container');
    const sandwichesTitle = document.createElement('h2');
    sandwichesTitle.textContent = 'Sandwiches';
    sandwichesContainer.appendChild(sandwichesTitle);
 
    const beveragesContainer = document.createElement('div');
    beveragesContainer.classList.add('beverages-container');
    const beveragesTitle = document.createElement('h2');
    beveragesTitle.textContent = 'Beverages';
    beveragesContainer.appendChild(beveragesTitle);

    const sandwichesList = document.createElement('ul');
    const sandwiches = ['Egg Sandwich', 'Ham and Cheese Sandwich', 'Chicken Sandwich'];
    const sandwichPrices = ['99', '129', '149'];

    sandwiches.forEach((sandwich, index) => {
        const sandwichItem = document.createElement('li');
        sandwichItem.innerText = `${sandwich} - P${sandwichPrices[index]}`;
        sandwichesList.appendChild(sandwichItem);
    });

    sandwichesContainer.appendChild(sandwichesList);

    const beveragesList = document.createElement('ul');
    const beverages = ['Matcha Latte', 'Iced Tea', 'Iced Americano'];
    const bevPrices = ['129', '79', '109'];

    beverages.forEach((beverage, index) => {
        const beverageItem = document.createElement('li');
        beverageItem.innerText = `${beverage} - P${bevPrices[index]}`;
        beveragesList.appendChild(beverageItem);
    });

    beveragesContainer.appendChild(beveragesList);

    menupageContainer.appendChild(sandwichesContainer);
    menupageContainer.appendChild(beveragesContainer);

 




    return [menuTitle, menupageContainer];
}

export default menuPage;