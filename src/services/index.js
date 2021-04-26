import React from 'react';
// Get Unique Brands from Json Data
export const getBrands = (products) => {
    var uniqueBrands = [];
    products.map((product, index) => {
        if (product.tags) {
            product.tags.map((tag) => {
                if (uniqueBrands.indexOf(tag) === -1) {
                    uniqueBrands.push(tag);
                }
            })
        }
    })
    //console.log(uniqueBrands)
    return uniqueBrands;
}

// Get Unique Colors from Json Data
export const getColors = (products) => {
    var uniqueColors = [];
    products.map((product, index) => {
        console.log(product)
        if(product.color) {
            product.color.map((col) => {
                if (uniqueColors.indexOf(col) === -1) {
                    uniqueColors.push(col);
                }
            })
        }
    })
    console.log(uniqueColors)
    return uniqueColors;
}

// Get Minimum and Maximum Prices from Json Data
export const getMinMaxPrice = (products) => {
    let min = 0, max = 100000;
    products.map((product, index) => {
        let v = parseInt(product.price);
        min = (v < min) ? v : min;
        max = (v > max) ? v : max;
       
    })
    return {'min':min, 'max':max};
}
export const getVisibleStores = (data,{city,sortBy,vendorId}) =>{
    return data.filter(store => {
        let vendorStore;
        if(vendorId == "all"){
            vendorStore = store;
        }else{
            if(store.owner._id == vendorId){
                vendorStore = store;
            }
        }
        let cityStore ;
        if(city == "all"){
            cityStore = store;
        }else{
            if(store.location == city){
                cityStore = store;
            }
        }
        return cityStore && vendorStore;

    }).sort((store1, store2) => {
        if (sortBy === 'HighToLow') {
            return store2.gold_24 < store1.gold_24 ? -1 : 1;
        } else if (sortBy === 'LowToHigh') {
            return store2.gold_24 > store1.gold_24 ? -1 : 1;
        } else if (sortBy === 'lowToHigh') {
            return store2.gold_24 > store1.gold_24 ? -1 : 1;
        } else if (sortBy === 'highToLow') {
            return store2.gold_24 < store1.gold_24 ? -1 : 1;
        }else{
            return store2.id > store1.id ? -1 : 1;
        }
    });
}
export const getVisibleproducts = (data, { brand, color, value, sortBy,storeId,category,nextDay,city,type,charge}) => {
    return data.products.filter(product => {
        let chargeProduct;

        if(charge === "all"){
            chargeProduct = product;
        }else{
            if(product.offers == charge){
                chargeProduct = product;
            }
        }

        let approveMatch;
        if(product.approved){
            approveMatch=product;
        }
        let typeProduct
        if(type === "all"){
            typeProduct = product;
        }else{
            if(product.type == type){
                typeProduct = product;
            }
        }
        let cityProduct;
        if(city === "all"){
            cityProduct = product;
        }else{
            if(product.storeId.location == city){
                cityProduct = product;
            }
        }
        let nextProduct;
        if(nextDay === "true"){
            if(product.nextDay ){
                nextProduct = product;
            }
        }else{
            nextProduct = product;
        }
        let categoryProducts;
        if(category === "all"){
            categoryProducts = product;
        }else{
            if(product.category == category){
                categoryProducts = product;
            }
        }
        let storeProducts;
        if(storeId === "all"){
            storeProducts = product;
        }else{
            if(product.storeId._id == storeId){
                storeProducts = product;
            }
        }
      //  brand = getBrands(data.products)
        let brandMatch;
        if(brand.length > 1){
            brandMatch = product.tags.some(tag => brand.includes(tag))
        }            
        else
            brandMatch = true;

        let colorMatch;
        if(color && product.color) {
            colorMatch = product.color.includes(color)
        }else{
            colorMatch = true;
        }
 
        
        const startPriceMatch = typeof value.min !== 'number' || value.min <= product.price;
        const endPriceMatch = typeof value.max !== 'number' || product.price <= value.max;

        return brandMatch && approveMatch && colorMatch && startPriceMatch && endPriceMatch && storeProducts && categoryProducts&& nextProduct && cityProduct && typeProduct && chargeProduct;
    }).sort((product1, product2) => {
        if (sortBy === 'HighToLow') {
            return product2.price < product1.price ? -1 : 1;
        } else if (sortBy === 'LowToHigh') {
            return product2.price > product1.price ? -1 : 1;
        } else if (sortBy === 'Newest') {
            return product2.id < product1.id ? -1 : 1;
        } else if (sortBy === 'AscOrder') {
            return product1.name.localeCompare(product2.name);
        } else if (sortBy === 'DescOrder') {
            return product2.name.localeCompare(product1.name);
        } else{
            return product2.id > product1.id ? -1 : 1;
        }
    });
}
export const getCityList=(stores)=>{
    console.log(stores)
    var cityList = [];
    stores.map((store, index) => {
        if (store.location) {
                if (cityList.indexOf(store.location) === -1) {
                    cityList.push(store.location);
                }

        }
    })
    //console.log(uniqueBrands)
    return cityList;

}
export const getPriceRangeList=()=>{
    var cityList = [
        {name:"Below 10,000",min:0,max:10000},
        {name:"Between 10k - 20k",min:10000,max:20000},
        {name:"Between 20k - 30k",min:20000,max:30000},
        {name:"Between 30k - 50k",min:30000,max:50000},
        {name:"50,000 And Above",min:50000,max:100000}
    ];

    //console.log(uniqueBrands)
    return cityList;

}
export const getMakingChargeList = () =>{
    var makingChargeList = [
        {name:"0% Making Charge",charge:"0%"},
        {name:"20% Making Charge",charge:"20%"},
        {name:"50% Making Charge",charge:"50%"}
    ]
    return makingChargeList;
}

export const getVisiblecoins = (data, { value, sortBy,coinType}) => {
    return data.coins.filter(product => {
        // const startPriceMatch = typeof value.min !== 'number' || value.min <= product.price;
        // const endPriceMatch = typeof value.max !== 'number' || product.price <= value.max;
        let Typecoin;
        if(coinType == "all"){
            Typecoin = product;
        }else{
            if(product.type == coinType){
                Typecoin = product;
            }
        }
        return Typecoin ;
    }).sort((product1, product2) => {
        if (sortBy === 'HighToLow') {
            return product2.price < product1.price ? -1 : 1;
        } else if (sortBy === 'LowToHigh') {
            return product2.price > product1.price ? -1 : 1;
        } else if (sortBy === 'Newest') {
            return product2.id < product1.id ? -1 : 1;
        } else if (sortBy === 'AscOrder') {
            return product1.name.localeCompare(product2.name);
        } else if (sortBy === 'DescOrder') {
            return product2.name.localeCompare(product1.name);
        } else{
            return product2.id > product1.id ? -1 : 1;
        }
    });
}

export const getCartTotal = cartItems => {
    var total = 0;
    for(var i=0; i<cartItems.length; i++){
        total += parseInt(cartItems[i].qty, 10)*parseInt((cartItems[i].price), 10);
    }
    return total;
}

// Get Trending Tag wise Collection
export const getTrendingTagCollection = (products, type, tag) => {
    const items = products.filter(product => {
        return product.category === type && product.tags.includes(tag);
    })
    return items.slice(0,8)
}

// Get Trending Collection
export const getTrendingCollection = (products, type) => {
    const items = products.filter(product => {
        return product.category === type;
    })
    return items.slice(0,8)
}

// Get Special 5 Collection
export const getSpecialCollection = (products, type) => {
    const items = products.filter(product => {
        return product.discount === "1";
    })
    return items.slice(0,5)
}

// Get TOP Collection
export const getTopCollection = products => {
    const items = products.filter(product => {
        return product.rating > 4;
    })
    return items.slice(0,8)
}

// Get New Products
export const getNewProducts = (products, type) => {
    const items = products.filter(product => {
        return product.new === true && product.category === type;
    })

    return items.slice(0,8)
}

// Get Related Items
export const getRelatedItems = (products, type) => {
    const items = products.filter(product => {
        return product.category === type;
    })

    return items.slice(0,4)

}

// Get Best Seller Furniture
export const getBestSellerProducts = (products, type) => {
    const items = products.filter(product => {
        return product.sale === true && product.category === type;
    })

    return items.slice(0,8)
}

// Get Best Seller
export const getBestSeller = products => {
    const items = products.filter(product => {
        return product.sale === true;
    })

    return items.slice(0,8)
}

// Get Mens Wear
export const getMensWear = products => {
    const items = products.filter(product => {
        return product.category === 'men';
    })

    return items.slice(0,8)
}

// Get Womens Wear
export const getWomensWear = products => {
    const items = products.filter(product => {
        return product.category === 'women';
    })

    return items.slice(0,8)
}

// Get Single Product
export const getSingleItem = (products, id) => {

    const items = products.find((element) => {
        return element.id === id;
    })
    return items;
}

// Get Feature Products
export const getFeatureImages = (products, type) => {

    const items = products.filter(product => {
        return product.type === type;
    })
    return items;
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////



export const getVisibleproduct = (data, { sortBy,category,type},pending,storeId) => {
console.log(data.products)
    return data.products.filter(product => {
        let pendingProducts;
        if(pending == "all"){
            pendingProducts = product;
        }else{
            if(product.approved === false){
                pendingProducts = product;
            }
        }
        let typeProduct;
        // if(type == "all"){
        //     typeProduct = product;
        // }else{
        //     if(product.type === type){
        //         typeProduct = product;
        //     }
        // }
        let categoryProducts;
        // if(category == "all"){
        //     categoryProducts = product;
        // }else{
        //     if(product.category === category){
        //         categoryProducts = product;
        //     }
        // }
        let storeProducts;
        if(product.storeId._id === storeId){
            storeProducts = product;
        }

        
        // const startPriceMatch = typeof value.min !== 'number' || value.min <= product.price;
        // const endPriceMatch = typeof value.max !== 'number' || product.price <= value.max;

        return     storeProducts && pendingProducts
    }).sort((product1, product2) => {
        if (sortBy === 'HighToLow') {
            return product2.price < product1.price ? -1 : 1;
        } else if (sortBy === 'LowToHigh') {
            return product2.price > product1.price ? -1 : 1;
        } else if (sortBy === 'Newest') {
            return product2.id < product1.id ? -1 : 1;
        } else if (sortBy === 'AscOrder') {
            return product1.name.localeCompare(product2.name);
        } else if (sortBy === 'DescOrder') {
            return product2.name.localeCompare(product1.name);
        } else{
            return product2.id > product1.id ? -1 : 1;
        }
    });
}

export const makeProductData = (datas, { brand, color, sortBy,category,type},pending,storeId) => {
    var products = [];
    var data = [];
    products= getVisibleproduct(datas, { brand, color, sortBy,category,type},pending,storeId);
    console.log(products)
    for(let i = 0 ; i < products.length; i++){

        data[i] = {
            id : products[i]._id,
            image: <img src={products[i].variants[0].images} style={{width:70,height:70}}/>,
            Name:products[i].name,
            Category:products[i].category,
            Metal:products[i].metal.type,
            Stone:products[i].type,
            Weight:products[i].weight + " gram",
            Height:products[i].height + " mm",
            Width:products[i].width  + " mm",
            SKU:products[i].productCode,
            status: products[i].approved?<span className="badge badge-secondary">{"approved"}</span>: <span className="badge badge-primary">{"Not approved"}</span>,

            Collection:products[i].collections
            
        }
    }
    return data;
}

export const makeCategory = ( data ) => {
    var category = [];
    for(let i = 0 ; i < data.length; i++){

        category[i] = {
            id : data[i]._id,
            Name:data[i].name,
            Category:data[i].description,
            status: data[i].status?<span className="badge badge-secondary">{"approved"}</span>: <span className="badge badge-primary">{"Not approved"}</span>,
           
        }
    }
    return category;
}










