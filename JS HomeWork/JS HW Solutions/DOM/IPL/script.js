var btn = document.querySelector('button');
var tName = document.querySelector('.box-up h1');
var img = document.querySelector('img');
var captian = document.querySelector('.box-mid h2');
var trophies = document.querySelector('.trophy h4');
var box = document.querySelector('#box');
var main = document.querySelector('#main');

const iplTeams = [
  {
    name: "Mumbai Indians",
    captain: "Hardik Pandya",
    primaryColor: "Blue",
    secondaryColor: "Gold",
    trophiesWon: 5,
    img:"https://cricketcupworld.com/wp-content/uploads/2024/11/MITeamIPL2025-696x404.webp"
  },
  {
    name: "CSK",
    captain: "Ruturaj Gaikwad",
    primaryColor: "Yellow",
    secondaryColor: "Blue",
    trophiesWon: 5,
    img:"https://chase-your-sport-images.s3.amazonaws.com/blogImage/880x600/1732968066912-85222.webp"
  },
  {
    name: "Kolkata Knight Riders",
    captain: "Shreyas Iyer",
    primaryColor: "Purple",
    secondaryColor: "Black",
    trophiesWon: 3,
    img:"https://tse1.mm.bing.net/th/id/OIP.FyQCE7iYF83utJenHGMcUAHaEK?cb=ucfimg2ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    name: "SRH",
    captain: "Pat Cummins",
    primaryColor: "Orange",
    secondaryColor: "Royal Blue",
    trophiesWon: 1,
    img:"https://i.ytimg.com/vi/acxWcKAUmt0/maxresdefault.jpg"

  },
  {
    name: "Rajasthan Royals",
    captain: "Sanju Samson",
    primaryColor: "Pink",
    secondaryColor: "Crimson",
    trophiesWon: 1,
    img:"https://i.ytimg.com/vi/FUafpXbDN6Q/maxresdefault.jpg"
  },
  {
    name: "RCB",
    captain: "Faf du Plessis",
    primaryColor: "crimson",
    secondaryColor: "Silver",
    trophiesWon: 0,
    img:"https://tse2.mm.bing.net/th/id/OIP.OcGT-5x5ODna64gaJ9m6vwHaE8?cb=ucfimg2ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    name: "Delhi Capitals",
    captain: "Rishabh Pant",
    primaryColor: "Gray",
    secondaryColor: "Orange",
    trophiesWon: 0,
    img:"https://i.ytimg.com/vi/TdSKeynkmbI/maxresdefault.jpg"
  },
  {
    name: "Punjab Kings",
    captain: "Shikhar Dhawan",
    primaryColor: "Red",
    secondaryColor: "Teal",
    trophiesWon: 0,
    img:"https://i.ytimg.com/vi/kX_OavWGVeI/maxresdefault.jpg"
  },
  {
    name: "Gujarat Titans",
    captain: "Shubman Gill",
    primaryColor: "Navy Blue",
    secondaryColor: "Maroon",
    trophiesWon: 1,
    img:"https://www.gujarattitansipl.com/static-assets/waf-images/5b/c4/f8/16-9/2uWNbX06jK.png"
  },
  {
    name: "LSG",
    captain: "KL Rahul",
    primaryColor: "Light Blue",
    secondaryColor: "gray",
    trophiesWon: 0,
    img:"https://fantasykhiladi.com/wp-content/uploads/2024/03/Lucknow-SuperGiants-2024.webp"
  }
];


btn.addEventListener('click', function(){
    var teams = iplTeams[Math.floor(Math.random()*iplTeams.length)]
    tName.innerText = `${teams.name}`;
    img.src = `${teams.img}`;
    captian.innerText = `${teams.captain}`;
    trophies.innerText = `${teams.trophiesWon}`;
    box.style.backgroundColor = `${teams.secondaryColor}`
    main.style.backgroundColor = `${teams.primaryColor}`
});
