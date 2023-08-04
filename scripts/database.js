const database = {
    fish: [
        {
      id: 1,
      species: 'Rainbow Guppy',
      image: 'https://www.thesprucepets.com/thmb/_yqn-8PfrWQkDEtekhdU3oinBg8=/6479x0/filters:no_upscale():strip_icc()/guppy-fish-species-profile-5078901-hero-9095fa292246421b820d32d4731c991b.jpg',
      size: 3,
      name: 'Rainbow',
      location: 'Freshwater Streams',
      diet: 'Omnivore',
    },
    {
      id: 2,
      species: 'Golden Seahorse',
      image: 'https://i.pinimg.com/originals/ea/59/86/ea5986f8e6cac67651b8a3638b8f58af.png',
      size: 25,
      name: 'Goldie',
      location: 'Coral Reefs',
      diet: 'Carnivore',
    },
    {
      id: 3,
      species: 'Silver Shark',
      image: 'https://aquadiction.world/img/profile/bala-shark1.webp',
      size: 6,
      name: 'Silvy',
      location: 'Tropical Seas',
      diet: 'Carnivore',
    },
    {
      id: 4,
      species: 'Pink Pufferfish',
      image: 'https://i.insider.com/6428446037a96d00192f4a6c?width=1136&format=jpeg',
      size: 20,
      name: 'Pinky',
      location: 'Coastal Waters',
      diet: 'Omnivore',
    },
    {
      id: 5,
      species: 'Blue Fin',
      image: 'https://www.floridamuseum.ufl.edu/wp-content/uploads/sites/66/2018/08/Mark-Conlin-NMFS-photo-500x333.jpg',
      size: 37,
      name: 'Bluey',
      location: 'Open Ocean',
      diet: 'Carnivore',
    },
  ],
  qoutes: [
    {
        id: 1,
        saying: ""
    },
    {
        id: 2,
        saying: ""
    },
    {
        id: 3,
        saying: ""
    },
   ],
//    locations: [
//     {
//         id: 1,
//         place: ""
//     },
//     {
//         id: 2,
//         place: ""
//     },
//     {
//         id: 3,
//         place: ""
//     },
//     {
//         id: 4,
//         place: ""
//     },
//     {
//         id: 5,
//         place: ""
//     },
//     {
//         id: 6,
//         place: ""
//     },
//    ]
}

export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}