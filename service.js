// 1/addproduct
// 2/removeproduct
// 3/updateproduct
// 4/getproducts
// 5/sortproduct


const getproducts = (products) => {
  console.log( products); //[]
};

// module.exports.getproductById = (index, products) => {
//   if (index < 0 || index >= products.length) {
//     throw new Error("index is not valid");
//   }
//   console.log("getproductById ", products[index]); //[]
// };

 const addproduct = (product, products) => {
  //addproduct
  products.push(product);
  //   console.log("added product");
};

// module.exports.updateproduct = (index, product, products) => {
//   try {
//     if (index < 0 || index >= products.length) {
//       throw new Error("index is not valid");
//     }
//     products[index] = product;
//     console.log("updated product",products);
// //    return products;
//   } catch (err) {
//     console.log("test", err);
//   }
// };

// const updateproductV2 = (index, products) => {
//   try {
//     if (index < 0 || index >= products.length) {
//       throw new Error("index is not valid");
//     }

//     let product = { libelle: "t", prix: 5, quantite: 50 };

//     products[index] = product;
//     console.log("updated product");
//   } catch (err) {
//     console.log("test", err);
//   }
// };

//const deleteProduct = (libelle, products) => {
// const deleteProduct = (libelle, products) => {
//   const result = products.filter((el) => {
//     if (el.libelle !== libelle) {
//       return true;
//     }
//   });
//   //     console.log("deleteProduct",result);
//   return result;
// };

const sortProductPrix = (products) => {
    return products.sort((a, b) => {
        return a.prix - b.prix;
      });
}

const sortProductQuantite = (products) => {
    return products.sort((productA,productB) =>
    {
        return productA.quantite - productB.quantite;
    })
}

 module.exports = {
   getproducts,
   addproduct,
   sortProductPrix,
   sortProductQuantite
 };