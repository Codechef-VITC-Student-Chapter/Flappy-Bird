// Array of animal and bird names

const animalsAndBirds = [
    'Lion',
    'Elephant',
    'Tiger',
    'Giraffe',
    'Zebra',
    'Bear',
    'Kangaroo',
    'Panda',
    'Wolf',
    'Deer',
    'Rabbit',
    'Fox',
    'Hippopotamus',
    'Rhinoceros',
    'Monkey',
    'Dolphin',
    'Whale',
    'Shark',
    'Crocodile',
    'Turtle',
    'Eagle',
    'Parrot',
    'Sparrow',
    'Peacock',
    'Owl',
    'Penguin',
    'Flamingo',
    'Pigeon',
    'Swan',
    'Seagull',
    'Woodpecker',
    'Hummingbird',
    'Kingfisher',
    'Robin',
    'Canary',
    'Hawk',
    'Ostrich',
    'Pelican',
    'Toucan',
    'Vulture',
  ];
  
  const adjectives = [
    'Brave',
    'Majestic',
    'Ferocious',
    'Tall',
    'Striped',
    'Strong',
    'Agile',
    'Cuddly',
    'Fierce',
    'Graceful',
    'Quick',
    'Sly',
    'Massive',
    'Horned',
    'Curious',
    'Intelligent',
    'Gentle',
    'Powerful',
    'Stealthy',
    'Shelled',
    'Regal',
    'Colorful',
    'Chirpy',
    'Elegant',
    'Nocturnal',
    'Aquatic',
    'Pink',
    'Urban',
    'Serene',
    'Coastal',
    'Persistent',
    'Tiny',
    'Vibrant',
    'Cheerful',
    'Sunny',
    'Sharp-eyed',
    'Flightless',
    'Wide-beaked',
    'Exotic',
    'Scavenging',
  ];
  // Function to generate a random name


const getRandomName = () => {
      // Randomly select an adjective from the adjectives array

    const randomAdjective =
      adjectives[Math.floor(Math.random() * adjectives.length)];
          // Randomly select an animal or bird from the animalsAndBirds array

    const randomAnimalOrBird =
      animalsAndBirds[Math.floor(Math.random() * animalsAndBirds.length)];
          // Combine the selected adjective and animal/bird name to form a random name

    const randomName = randomAdjective + randomAnimalOrBird;
        // Save the generated random name to local storage under the key 'username'

    localStorage.setItem('username', randomName);
        // Return the generated random name

    return randomName;
};

export default getRandomName;