/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  await knex('cafes').insert([
    {
      id: 1,
      name: 'Maranui Cafe',
      longitude: -41.33040778976442,
      latitude: -41.33040778976442,
      image: 'maranui_cafe.jpg',
      google_id: 'example_google_id_1',
      directions_url: 'https://goo.gl/maps/example1',
      street_address: 'Lvl1, 7A Lyall Parade',
      suburb: 'Lyall Bay',
      city: 'Wellington 6022',
    },
    {
      id: 2,
      name: 'Cafe L’affare',
      longitude: 174.7803610466268,
      latitude: -41.29614517606381,
      image: 'cafe_laffare.jpg',
      google_id: 'example_google_id_2',
      directions_url: 'https://goo.gl/maps/example2',
      street_address: '27 College Street',
      suburb: 'Te Aro',
      city: 'Wellington 6011',
    },
    {
      id: 3,
      name: 'Midnight Espresso',
      longitude: 174.77487407957378,
      latitude: -41.2945734468454,
      image: 'midnight_espresso.jpg',
      google_id: 'example_google_id_3',
      directions_url: 'https://goo.gl/maps/example3',
      street_address: '178 Cuba Street',
      suburb: 'Te Aro',
      city: 'Wellington 6011',
    },
    {
      id: 4,
      name: 'The Flight Coffee Hangar',
      longitude: 174.7739459215183,
      latitude: -41.291024935589455,
      image: 'flight_coffee_hangar.jpg',
      google_id: 'example_google_id_4',
      directions_url: 'https://goo.gl/maps/example4',
      street_address: '15 Wigan Street',
      suburb: 'Te Aro',
      city: 'Wellington',
    },
    {
      id: 5,
      name: 'Smith the Grocer Cafe',
      longitude: 174.7763239931831,
      latitude: -41.285705091648104,
      image: 'mischief_mayhem.jpg',
      google_id: 'example_google_id_5',
      directions_url: 'https://goo.gl/maps/example5',
      street_address: 'The Old Bank Arcade 233-237 Lambton Quay',
      suburb: 'Wellington Central',
      city: 'Wellington 6011',
    },
    {
      id: 6,
      name: 'Shelly Bay Baker on Leeds Street',
      longitude: -41.292910827817245,
      latitude: -174.7771125390182,
      image: 'leeds_street_bakery.jpg',
      google_id: 'example_google_id_6',
      directions_url: 'https://goo.gl/maps/example6',
      street_address: 'unit 6G/14 Leeds Street',
      suburb: 'Te Aro',
      city: 'Wellington 6011',
    },
    {
      id: 7,
      name: 'Aro Cafe',
      longitude: 174.76695536318292,
      latitude: -41.29526467304263,
      image: 'hanging_ditch.jpg',
      google_id: 'example_google_id_7',
      directions_url: 'https://goo.gl/maps/example7',
      street_address: '90 Aro Street',
      suburb: 'Aro Valley',
      city: 'Wellington 6021',
    },
    {
      id: 8,
      name: 'Café Polo',
      longitude: 174.82264575763878,
      latitude: -41.3127717943982,
      image: 'cafe_polo.jpg',
      google_id: 'example_google_id_8',
      directions_url: 'https://goo.gl/maps/example8',
      street_address: '21 Dixon Street',
      suburb: 'Te Aro',
      city: 'Wellington 6011',
    },
    {
      id: 9,
      name: 'Preservatorium Cafe',
      longitude: 174.77400078520068,
      latitude: -41.2980617579716,
      image: 'Preservatorium_Cafe.jpg',
      google_id: 'example_google_id_9',
      directions_url: 'https://goo.gl/maps/example9',
      street_address: 'GROUND/39 Webb Street',
      suburb: 'Mount Cook',
      city: 'Wellington 6011',
    },
    {
      id: 10,
      name: 'West Two Espresso',
      longitude: 174.77785761665498,
      latitude: -41.29486770604499,
      image: 'West_Two_Espresso_cafe.jpg',
      google_id: 'example_google_id_10',
      directions_url: 'https://goo.gl/maps/example10',
      street_address: '136/11 Jessie Street',
      suburb: 'Te Aro',
      city: 'Wellington 6011',
    },
  ])
}
