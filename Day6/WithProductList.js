import React from 'react';


export const WithProductList=(WrappedComponent,Productlist)=>{
    return()=> <WrappedComponent Productlist={productslist}/>
}