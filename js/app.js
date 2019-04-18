lightbox.option({
    'resizeDuration': 200,
    'wrapAround': true,
    'showImageNumberLabel': false,
    'maxWidth': 700,
  })


  // Declare variables
var myInput, filter, img, alt, a;
input = document.getElementById('myInput');
image = document.getElementsByTagName('img');
alt = document.querySelectorAll('[alt]');

console.log(image);

// Loop through all list items, and hide those who don't match the search query
input.addEventListener('input', () => {

    for (i = 0; i < image.length; i++) {
        if(image[i].alt.toUpperCase() === input.value.toUpperCase()){
            image[i].style.display = "block";
            console.log("Shown -->", image[i])
        } else if(input.value == ""){
            for (i = 0; i < image.length; i++) {
                image[i].style.display = "block";
            }
        } else{
            image[i].style.display = "none";
            console.log("Hidden -->", image[i])
        }
}});






// Declare variables
// var myInput, filter, img, alt, a;
// input = document.getElementById('myInput');
// image = document.getElementsByTagName('img');
// alt = document.querySelectorAll('[alt]');
// a = document.getElementsByTagName('a.attributes');

// Loop through all list items, and hide those who don't match the search query
// input.addEventListener('input', () => {

//     for (i = 0; i < a.length; i++) {
//         if(title[i].includes(input.value)){
//             console.log(image);
//             a[i].style.display = "block";
//         } else if(input.value == ""){
//             for (i = 0; i < image.length; i++) {
//                 image[i].style.display = "block";
//             }
//         } else{
//             image[i].style.display = "none";
//             console.log("Hidden -->", image[i])
//         }
// }});
