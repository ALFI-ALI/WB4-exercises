let mymovies =[
    {
     title : "forrest gump ",
     reasonWhy :" story of how success has a way of finding the good and bypassing the evil",
     movieimageUrl:"https://upload.wikimedia.org/wikipedia/en/6/67/Forrest_Gump_poster.jpg"
    },
    {
        title : "the green mile ",
        reasonWhy :" The depth of the cast is extraordinary",
        movieimageUrl:"https://resizing.flixster.com/XIazi8o9PK2-9LfGNejhqTF2mq8=/1100x618/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p24429_i_h8_ad.jpg"
       },
    
       {
        title : " shawshank redemption ",
        reasonWhy :"it's about the friendship",
        movieimageUrl:"https://i5.walmartimages.com/seo/The-Shawshank-Redemption-DVD-Castle-Rock-Drama_e71b2ff8-1060-47df-b836-98608ca60a0a.2d720e36a9bcf80b3039a41a49f4194e.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF"
       }
       
    

    
];

function displayRandomMovie() {
    
    let randomIndex = Math.floor(Math.random() * mymovies.length);
    let randomMovie = mymovies[randomIndex];
    console.log(`You should watch "${randomMovie.title}" because ${randomMovie.reasonWhy}. Movie URL: ${randomMovie.movieimageUrl}`);
}
displayRandomMovie();
