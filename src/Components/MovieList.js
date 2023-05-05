import React from 'react';
import Movie from './Movie';

function MovieList(props) {
  const movies = props.movies || [ {title: "Black Panther: Wakanda Forever",
  imageUrl:
    "https://amc-theatres-res.cloudinary.com/v1673700256/amc-cdn/production/2/movies/56500/56467/Poster/Primary_BoxCover_HD_800_1200.jpg",
  synopsis:
    "Queen Ramonda, Shuri, M'Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T'Challa's death. As the Wakandans strive to embrace their next chapter, the heroes must band together with Nakia and Everett Ross to forge a new path for their beloved kingdom",
  rating: 3.5
},
{
  title: "Everything Everywhere All at Once",
  imageUrl:
    "https://upload.wikimedia.org/wikipedia/en/1/1e/Everything_Everywhere_All_at_Once.jpg",
  synopsis:
    "When an interdimensional rupture unravels reality, an unlikely hero must channel her newfound powers to fight bizarre and bewildering dangers from the multiverse as the fate of the world hangs in the balance.",
  rating: 4
},
{
  title: "Crazy Rich Asians",
  imageUrl:
    "https://m.media-amazon.com/images/M/MV5BMTYxNDMyOTAxN15BMl5BanBnXkFtZTgwMDg1ODYzNTM@._V1_.jpg",
  synopsis:
    "Rachel Chu is happy to accompany her longtime boyfriend, Nick, to his best friend's wedding in Singapore. She's also surprised to learn that Nick's family is extremely wealthy and he's considered one of the country's most eligible bachelors. Thrust into the spotlight, Rachel must now contend with jealous socialites, quirky relatives and something far, far worse -- Nick's disapproving mother.",
  rating: 4.9
},
{
    title: "Avatar: The Way of Water",
    imageUrl:
      "https://lumiere-a.akamaihd.net/v1/images/p_20cs_avatarwayofwater_1710_4025feea.jpeg?region=0%2C0%2C540%2C810",
    synopsis:
      "Jake Sully and Ney'tiri have formed a family and are doing everything to stay together. However, they must leave their home and explore the regions of Pandora. When an ancient threat resurfaces, Jake must fight a difficult war against the humans.",
    rating: 4.9 
  },
  {
    title: "Smile",
    imageUrl:
      "https://play-lh.googleusercontent.com/NLd3erPoZmSi0oczSzNqq_MF0q-2sGR2PRLD9_RrgAGHjLjRWI5zbs4LrI8NGa-k0zcfQvV6B6hcii4zIRg",
    synopsis:
      "After witnessing a bizarre, traumatic incident involving a patient, Dr. Rose Cotter starts experiencing frightening occurrences that she can't explain. As an overwhelming terror begins taking over her life, Rose must confront her troubling past in order to survive and escape her horrifying new reality.",
    rating: 3.5
  },
  {
    title: "Minari",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE07E7-jBey2WbJJCcYgNJ561-nIoPuL1fZKZCQFFYcw&usqp=CAU&ec=48665698",
    synopsis:
      "A Korean American family moves to an Arkansas farm in search of its own American dream. Amidst the challenges of this new life in the strange and rugged Ozarks, they discover the undeniable resilience of family and what really makes a home.",
    rating: 4.4
  }
];

  return (  
    <div className="container">
      <div className='card m-3' id='pageTitle'><h1><i>~Movie List~</i></h1></div>
      {movies.map((movie, index) => (
        <Movie key={index} movie={movie} />
      ))}
    </div>
  );
}

export default MovieList;
