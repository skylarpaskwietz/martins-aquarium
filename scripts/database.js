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
        saying: "Bacon ipsum dolor amet picanha tenderloin tail chuck, spare ribs sausage salami brisket andouille jerky rump meatloaf t-bone drumstick. Brisket sausage chislic pig rump beef swine cow picanha flank venison capicola."
    },
    {
        id: 2,
        saying: "Pork pork chop leberkas beef ribs. Hamburger salami drumstick, chuck venison tri-tip picanha kevin t-bone sirloin buffalo frankfurter. Boudin ball tip ribeye pork turkey bresaola."
    },
    {
        id: 3,
        saying: "T-bone chuck hamburger pork belly, beef ribs ball tip swine tail pastrami meatloaf salami flank."
    },
   ],
   fishTankCleaningTips: [
    {
         id: 1,  
        tip: "Perform regular water changes to maintain water quality."
    },
    {
         id: 2,
        tip: "Use a gravel vacuum to remove debris and waste from the substrate."
   },
   {    
        id: 3,
        tip: "Clean the filter media according to the manufacturer's recommendations."
   },  
    {    id: 4,  
        tip: "Avoid overfeeding your fish to prevent excess waste buildup."
    },
    {
        id: 5,
        tip: "Monitor water parameters using test kits and adjust as needed."
    },
  ],
  locationList: [
    {
      id: 1,
      image: "https://www.sdentertainer.com/wp-content/uploads/sebastian-pena-lambarri-1218070-unsplash.jpg",
      locationName: "San Diego"
    },
    {
      id: 2,
      image: "https://www.balifundiving.com/wp-content/uploads/2020/09/start-scuba-diving.jpg",
      locationName: "Bali"
    },
    {
    id: 3,
    image: "https://media.tacdn.com/media/attractions-splice-spp-674x446/0b/81/da/af.jpg",
    locationName: "Maui"
    }
  ]
}

export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}

export const getTips = () => {
  return database.fishTankCleaningTips.map(fishTankCleaningTips => ({...fishTankCleaningTips}))
}

export const getLocations = () => {
  return database.locationList.map(locationList => ({...locationList}))
}