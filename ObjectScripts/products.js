"use strict";
let product = [
    {
    car :"2024 Chevrolet Corvette",
    price :69995
    },
    {
        car :"2024 Porsche 718 Boxster",
        price :70000
    },
    {
        car : "2024 Toyota GR Supra",
        price : 60000
    }

]
//product one parameter
function products(x) {
    console.log(x.price);
    
};
// calling argument 
products(product[2]);
products(product[0]);
//////////
let book = {
    title: "Eat that Frog",
    price: 19.95,
    displayInformation: function() {
        return `Title: ${this.title} and price ${this.price}`
    }
}

console.log(book.displayInformation());



/*function DisplayProduct(_product) {
    console.log(`${_product.title} by ${_product.artist} costs $${_product.price}.`)
};
DisplayProduct(products[2]);

    <div class="card">
    <div class="card-image car-1"></div>
      <h2>2024 Chevrolet Corvette</h2>
      <p> With thrilling performance, an affordable price tag, and flashy styling, the 2024 Chevy Corvette honors the nameplate's legacy of being America's supercar</p>
      <p class="price">USD $69,995</p>
      <button><a href="/checkout.html">Add to card</a></button>
    </div>
    <div class="card">
      <div class="card-image car-2"></div>
        <h2>2024 Porsche 718 Boxster</h2>
        <p>The 2024 718 Boxster is Porsche's entry-level car, but its brilliant handling and powerful engines make it anything but a diluted version of the hallowed 911</p>
        <p class="price">USD $70,000</p>
      <button><a href="">Add to card</a></button>
      </div>
      <div class="card">
        <div class="card-image car-3"></div>
          <h2>2024 Toyota GR Supra</h2>
          <p>Toyota's halo sports car, the 2024 GR Supra, delivers enough excitement, style, and drama to make up for the brand's more sedate offerings.</p>
          <p class="price">USD $90,000</p>
      <button><a href="">Add to card</a></button>
        </div>
        <div class="card">
          <div class="card-image car-4"></div>
            <h2>2025 BMW Z4</h2>
            <p>As the fun-loving drop-top companion to the Toyota Supra, the 2025 BMW Z4 brings similar performance but with a sun-worshipping twist.</p>
            <p class="price">USD $60,000</p>

}*/