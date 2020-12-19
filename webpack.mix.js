// webpack.mix.js
let mix = require('laravel-mix');
let tailwindcss=require('tailwindcss');
mix.setPublicPath("public");

mix.postCss("src/style.css", "public/css", [
    require("tailwindcss"),
]);

mix

