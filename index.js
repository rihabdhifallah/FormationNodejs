
// const { addproduct, updateproduct , getproducts ,getproductById , deleteProduct , sortProductPrix , sortProductQuantite } = require("./services");
const { addproduct,  getproducts ,sortProductPrix , sortProductQuantite } = require("./services");

let products = [];

// let product = {
//     libelle : "ballon",
//     prix : 500,
//     quantite: 5
// }
addproduct(
  {
    libelle: "ballon",
    prix: 500,
    quantite: 5,
  },
  products
);
//...
addproduct(
    {
      libelle: "avion",
      prix: 5000,
      quantite: 1,
    },
    products
  );

addproduct(
    {
      libelle: "voiture",
      prix: 100,
      quantite: 50,
    },
    products
  );

  addproduct(
    {
      libelle: "ballon",
      prix: 500,
      quantite: 5,
    },
    products
  );

  addproduct(    
    {
      libelle: "pc",
      prix: 15,
      quantite: 5,
    },
    products
  );
  console.log("original")
getproducts(products);
// getproductById(2,products)

// products = deleteProduct("ballon",products) // liste 

// let p = { libelle: "t", prix: 5, quantite: 50 };


 //updateproduct(0,p,products);


// getproducts(products);

products = sortProductPrix(products) // liste 

// products = sortProduct("prix",products) // liste 

// products = sortProduct("libelle",products) // liste 


getproducts("ba3ed",products);

products = sortProductQuantite(products) // liste 

getproducts("ba3ed",products);

/*
console.log("sortProductPrix",sortProductPrix(products)) 
console.log("sortProductQuantite",sortProductQuantite(products))  */
