const onlineShop = document.getElementById('onlineShop')
const links = onlineShop.querySelectorAll('a')
const products = document.querySelectorAll('.products')
let selectedCategory = null
let selectedCategoryType = null
let selectedCategoryColor = null

links.forEach((link) => {
    link.addEventListener('click', function (event) {
        const category = link.getAttribute('data-category')
        selectedCategory = category
        filterProductsByAmount()
    })
})

const productList = [
    {
        "type": "daisy",
        "color": "orange",
        "category": "gift",
        "amount": "2599",
        "img": "./images/FL.jpg",
        "name": "Moonlight Serenade",
        "title": "-月光小夜曲-",
        "price": "NT$ 2,599"
    },
    {
        "type": "cotton",
        "color": "white",
        "category": "indoor",
        "amount": "2399",
        "img": "./images/FL2.svg",
        "name": "Forest Whispers",
        "title": "-森林密語-",
        "price": "NT$ 2,399"
    },
    {
        "type": "rose",
        "color": "white",
        "category": "wedding",
        "amount": "2299",
        "img": "./images/FL3.jpg",
        "name": "Morning Dew",
        "title": "-晨露-",
        "price": "NT$ 2,299"
    },
    {
        "type": "rose",
        "color": "red",
        "category": "gift",
        "amount": "2799",
        "img": "./images/FL4.jpg",
        "name": "Golden Harvest",
        "title": "-金色豐收-",
        "price": "NT$ 2,799"
    },
    {
        "type": "rose",
        "color": "red",
        "category": "wedding",
        "amount": "1399",
        "img": "./images/FL5.jpg",
        "name": "Tropical Paradise",
        "title": "-熱帶天堂-",
        "price": "NT$ 1,399"
    },
    {
        "type": "daisy",
        "color": "white",
        "category": "gift",
        "amount": "1299",
        "img": "./images/FL6_BG.jpg",
        "name": "Spring Fling",
        "title": "-春日之舞-",
        "price": "NT$ 1,299"
    },
    {
        "type": "rose",
        "color": "white",
        "category": "wedding",
        "amount": "1599",
        "img": "./images/FL7.jpg",
        "name": "Dreams of Herbs",
        "title": "-香草夢境-",
        "price": "NT$ 1,599"
    },
    {
        "type": "daisy",
        "color": "white",
        "category": "indoor",
        "amount": "2399",
        "img": "./images/FL8.jpg",
        "name": "Rustic Romance",
        "title": "-鄉村浪漫-",
        "price": "NT$ 2,399"
    },
    {
        "type": "rose",
        "color": "red",
        "category": "indoor",
        "amount": "2299",
        "img": "./images/FL9.jpg",
        "name": "Pure Elegance",
        "title": "-純淨優雅-",
        "price": "NT$ 2,299"
    },
    {
        "type": "daisy",
        "color": "red",
        "category": "gift",
        "amount": "2699",
        "img": "./images/FL10.jpg",
        "name": "Relaxing and Joyful",
        "title": "-心曠神怡-",
        "price": "NT$ 2,699"
    },
    {
        "type": "cotton",
        "color": "orange",
        "category": "wedding",
        "amount": "2688",
        "img": "./images/FL11.jpg",
        "name": "Fairy Tale Ending",
        "title": "-童話結局-",
        "price": "NT$ 2,688"
    },
    {
        "type": "daisy",
        "color": "yellow",
        "category": "gift",
        "amount": "3499",
        "img": "./images/FL12.jpg",
        "name": "Forest Whispers",
        "title": "-森林密語-",
        "price": "NT$ 3,499"
    },
    {
        "type": "rose",
        "color": "red",
        "category": "indoor",
        "amount": "3299",
        "img": "./images/FL13.jpg",
        "name": "Rose Garden",
        "title": "-玫瑰園-",
        "price": "NT$ 3,299"
    },
    {
        "type": "rose",
        "color": "red",
        "category": "gift",
        "amount": "1299",
        "img": "./images/FL14.jpg",
        "name": "Butterfly Kisses",
        "title": "-蝴蝶之吻-",
        "price": "NT$ 1,299"
    },
    {
        "type": "rose",
        "color": "white",
        "category": "indoor",
        "amount": "1299",
        "img": "./images/FL15.jpg",
        "name": "Pure White Angels",
        "title": "-純白天使-",
        "price": "NT$ 1,299"
    },
    {
        "type": "daisy",
        "color": "red",
        "category": "gift",
        "amount": "2520",
        "img": "./images/FL16.jpg",
        "name": "Sweetheart Bouquet",
        "title": "-甜心花束-",
        "price": "NT$ 2,520"
    },
    {
        "type": "rose",
        "color": "red",
        "category": "wedding",
        "amount": "3699",
        "img": "./images/FL17.jpg",
        "name": "Sweet Serenity",
        "title": "-甜蜜寧靜-",
        "price": "NT$ 3,699"
    },
    {
        "type": "rose",
        "color": "yellow",
        "category": "wedding",
        "amount": "3299",
        "img": "./images/FL18.jpg",
        "name": "A Touch of Class",
        "title": "-高雅品味-",
        "price": "NT$ 3,299"
    },
    {
        "type": "cotton",
        "color": "red",
        "category": "gift",
        "amount": "2299",
        "img": "./images/FL19.jpg",
        "name": "Dancing Flowers of Youth",
        "title": "-青春花舞-",
        "price": "NT$ 2,299"
    },
    {
        "type": "cotton",
        "color": "yellow",
        "category": "wedding",
        "amount": "2899",
        "img": "./images/FL20.jpg",
        "name": "Flower of Happiness",
        "title": "-幸福之花-",
        "price": "NT$ 2,899"
    },
    {
        "type": "rose",
        "color": "red",
        "category": "gift",
        "amount": "1299",
        "img": "./images/FL21.jpg",
        "name": "Pink Perfection",
        "title": "-粉紅完美-",
        "price": "NT$ 1,299"
    },
    {
        "type": "daisy",
        "color": "white",
        "category": "gift",
        "amount": "1299",
        "img": "./images/FL22.jpg",
        "name": "Garden of Dreams",
        "title": "- 夢幻花園-",
        "price": "NT$ 1,299"
    },
    {
        "type": "rose",
        "color": "orange",
        "category": "wedding",
        "amount": "2688",
        "img": "./images/FL23.jpg",
        "name": "Oath of the Rose",
        "title": "-瑰麗誓約-",
        "price": "NT$ 2,688"
    },
    {
        "type": "rose",
        "color": "red",
        "category": "wedding",
        "amount": "2599",
        "img": "./images/FL24.jpg",
        "name": "Vibrant Colors",
        "title": "-萬紫千紅-",
        "price": "NT$ 2,599"
    }
];

const itemsPerPage = 12;
let filterList = [];
let isFilter = false; 


function displayItems(pageNumber) {
    const startIndex = (pageNumber - 1) * itemsPerPage; 
    const endIndex = startIndex + itemsPerPage - 1; 

    let items;
    if (isFilter) {
        items = filterList;
    } else {
        items = productList
    }

   
    const displayedItems = items.slice(startIndex, endIndex + 1);

  
    console.log('顯示的項目：', displayedItems);
    renderProductList(displayedItems);
}

displayItems(1); 


function calculateTotalPages(items) {
    const totalItems = items.length;
    const currentPage = Math.ceil(totalItems / itemsPerPage); 
    console.log('目前的頁數：', currentPage);

    let pages = [];
    for (let i = 0; i < currentPage; i++) {
        let html = `
        <li>
          <a href="#" onclick="displayItems(${i + 1})">
           ${i + 1}
          </a>
        </li>`;

        pages.push(html);
    }
    document.querySelector('.pagination ul').innerHTML = pages.join('');
};

calculateTotalPages(productList); 

function renderProductList(items) {
    let productDom = [];
    for (let i = 0; i < items.length; i++) {
        const item = items[i];

        let html = `
        <article class="products" data-color="${item.color}" data-type="${item.type}" data-category="${item.category}" data-amount="${item.amount}">
            <figure>
              <a href="products.html"><img src="${item.img}" alt=""/></a>
            </figure>
            <h3>${item.name}</h3>
            <h4>${item.title}</h4>
            <p>${item.price}</p>
          </article>
        `;

        productDom.push(html);
    }
    document.querySelector('#products').innerHTML = productDom.join('');
}


console.log('productList', productList);

const searchButton = document.getElementById('searchButton')

// 篩選列表
searchButton.addEventListener('click', () => {
    let color;
    let flower;


    const selectedColor = document.querySelector('input[name="color"]:checked');
    const selectedFlower = document.querySelector('input[name="flower"]:checked');

    if (selectedColor) {
        color = selectedColor.value;
        console.log('已選取的顏色：', color);
    }

    if (selectedFlower) {
        flower = selectedFlower.value;
        console.log('已選取的花種：', flower);
    }

    filterList = productList.filter((product) => {
        if (color && flower) {
            return product.color === color && product.type === flower;
        } else if (color) {
            return product.color === color;
        } else if (flower) {
            return product.type === flower;
        }
    });

    isFilter = true;
    displayItems(1);
    calculateTotalPages(filterList);

    console.log('篩選結果', filterList);
})



//滑動
var lowerSlider = document.querySelector('#lower')
var upperSlider = document.querySelector('#upper')

document.querySelector('#two').value = upperSlider.value
document.querySelector('#one').value = lowerSlider.value

var lowerVal = parseInt(lowerSlider.value)
var upperVal = parseInt(upperSlider.value)

upperSlider.oninput = function () {
    lowerVal = parseInt(lowerSlider.value)
    upperVal = parseInt(upperSlider.value)

    if (upperVal < lowerVal + 4) {
        lowerSlider.value = upperVal - 4
        if (lowerVal == lowerSlider.min) {
            upperSlider.value = 4
        }
    }
    document.querySelector('#two').value = this.value
    filterProductsByAmount()
}

lowerSlider.oninput = function () {
    lowerVal = parseInt(lowerSlider.value)
    upperVal = parseInt(upperSlider.value)
    if (lowerVal > upperVal - 4) {
        upperSlider.value = lowerVal + 4
        if (upperVal == upperSlider.max) {
            lowerSlider.value = parseInt(upperSlider.max) - 4
        }
    }
    document.getElementById('lower').value

    document.querySelector('#one').value = this.value
    filterProductsByAmount()
}
//end滑動

//分類
function filterProductsByAmount() {
    const minAmount = document.getElementById('lower').value
    const maxAmount = document.getElementById('upper').value
    const productsContainer = document.getElementById('products');

    Array.from(productsContainer.children).forEach((product) => {
        console.log('product',product);
        const amount = parseInt(product.getAttribute('data-amount'))
        const productCategory = product.getAttribute('data-category')
        const color = product.getAttribute('data-color')
        const type = product.getAttribute('data-type')
        if (
            (selectedCategoryType === null || type === selectedCategoryType) &&
            (selectedCategoryColor === null || color === selectedCategoryColor) &&
            (selectedCategory === null || productCategory === selectedCategory) &&
            amount >= minAmount &&
            amount <= maxAmount
        ) {
            product.style.display = 'block'
        } else {
            product.style.display = 'none'
        }
    })
}


const highToLowButton = document.querySelector('.high-to-low')
const lowToHighButton = document.querySelector('.low-to-high')

highToLowButton.addEventListener('click', function () {
    sortProductsByAmount('high-to-low')
})

lowToHighButton.addEventListener('click', function () {
    sortProductsByAmount('low-to-high')
})

function sortProductsByAmount(sortType) {
    const products = document.querySelectorAll('.products')
    const sortedProducts = Array.from(products).sort((a, b) => {
        const amountA = parseInt(a.getAttribute('data-amount'))
        const amountB = parseInt(b.getAttribute('data-amount'))
        console.log(amountA)
        if (sortType === 'high-to-low') {
            return amountB - amountA
        } else if (sortType === 'low-to-high') {
            return amountA - amountB
        }
    })

    const container = document.getElementById('products')
    sortedProducts.forEach((product) => {
        container.appendChild(product)
    })
}

