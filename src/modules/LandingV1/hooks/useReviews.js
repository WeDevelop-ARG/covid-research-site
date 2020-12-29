import { shuffle } from 'lodash'

import AlbertoArias from '../assets/alberto_arias.jpeg'
import AlexanderBetit from '../assets/alexander_betit.jpeg'
import MatthewKarsten from '../assets/matthew_karsten.jpeg'
import DaveQuinn from '../assets/dave_quinn.jpeg'
import CalebStuart from '../assets/caleb_stuart.jpeg'
import FerminMorales from '../assets/fermin_morales.jpeg'
import MarkStephan from '../assets/mark_stephan.jpeg'
import LaythSanjaq from '../assets/layth_sanjaq.jpeg'
import EliasGroll from '../assets/elias_groll.jpeg'
import DanielMarcos from '../assets/daniel_marcos.jpeg'
import KamilSattar from '../assets/kamil_sattar.jpeg'
import CarinaBostonPinales from '../assets/carina_boston_pinales.jpeg'

const reviews = [
  {
    profileImageURL: CarinaBostonPinales,
    name: 'Carina Boston Pinales',
    quote: 'We had many people depending on us; we had to provide information to our community before anyone else. It was very challenging to tell people that the world is going to change.',
    position: 'Founder & Co-Owner',
    company: 'Splash Coworking LLC',
    address: 'San Antonio, Texas'
  },
  {
    profileImageURL: DanielMarcos,
    name: 'Daniel Marcos',
    quote: 'The companies that have done great are the companies that took their time, asked the tough questions, and redesigned their business.',
    position: 'Co-Founder & CEO',
    company: 'Growth Institute',
    address: 'Toronto, Canada'
  },
  {
    profileImageURL: AlexanderBetit,
    name: 'Alexander Betit',
    quote: 'We are at a unique spot, we are an accelerator for digital news, and this is the best time ever. It is hard to be a startup in pandemic times, but our market is growing, and the demand is here.',
    position: 'Revenue Manager',
    company: 'Nicklpass',
    address: 'New York City Metropolitan Area'
  },
  {
    profileImageURL: EliasGroll,
    name: 'Elias Groll',
    quote: 'The pandemic was the reason why we founded Codesphere',
    position: 'Ex-Googler & Co-Founder',
    company: 'Codesphere',
    address: 'Baden-Württemberg, Germany'
  },
  {
    profileImageURL: LaythSanjaq,
    name: 'Layth Sanjaq',
    quote: 'This pandemic has reaffirmed that internal capacity and rapport building are the foundation for sustainable success.',
    position: 'CMO',
    company: 'Orbex',
    address: 'Cyprus'
  },
  {
    profileImageURL: MarkStephan,
    name: 'Mark Stephan',
    quote: 'We had to come up with new business models',
    position: 'VP & Co-Founder',
    company: 'Product Hired',
    address: 'Austin, Texas'
  },
  {
    profileImageURL: KamilSattar,
    name: 'Kamil Sattar',
    quote: 'We\'ve learned that customer behavior is changed because of COVID and It is going to stay like that even when COVID is gone.',
    position: 'CEO E-Commerce',
    company: 'Mentoring LTD',
    address: 'Telford, United Kingdom'
  },
  {
    profileImageURL: CalebStuart,
    name: 'Caleb Stuart',
    quote: 'The company\'s main model, the two main applications directly relate to COVID-19, so the pandemic\'s definitely been a driving force for General Genomics.',
    position: 'SVP, General Counsel and Secretary',
    company: 'General Genomics Inc.',
    address: 'Midland-Odessa, United States'
  },
  {
    profileImageURL: DaveQuinn,
    name: '"Super" Dave Quinn',
    quote: 'We function in chaos really well; we are used to extreme situations that require our clients  to reduce budgets or do more with less, like with COVID-19 Pandemic.',
    position: 'CEcD, Managing Partner',
    company: 'Day One Experts',
    address: 'Frisco, Texas'
  },
  {
    profileImageURL: MatthewKarsten,
    name: 'Matthew Karsten',
    quote: 'In my industry, digitalization of audiovisual production and other content, everything that I thought was going to happen in the next 5 years, now happened in 2020, due to the pandemic.',
    position: 'Founder',
    company: 'Purple Squirrel Media',
    address: 'Niles, Michigan'
  },
  {
    profileImageURL: FerminMorales,
    name: 'Fermin Morales',
    quote: 'Since the pandemic began, in marketing and advertising, we made a change towards a more lean process, achieving the best result without spending many resources and without taking unnecessary risks.',
    position: 'Co-Founder & COO',
    company: 'Oyster',
    address: 'Dallas, Texas'
  },
  {
    profileImageURL: AlexanderBetit,
    name: 'Alexander Betit',
    quote: 'We are at a unique spot, we are an accelerator for digital news, and this is the best time ever. It is hard to be a startup in pandemic times, but our market is growing, and the demand is here.',
    position: 'Revenue Manager',
    company: 'Nicklpass',
    address: 'New York City Metropolitan Area'
  },
  {
    profileImageURL: AlbertoArias,
    name: 'Alberto Arias',
    quote: 'Technology must have a soul not only a goal, I saw all my work accelerate. Everything I planned for three or four years goals, happend in one year.',
    position: 'Director Global Head HX/CX Transformation',
    company: 'Dell',
    address: 'Austin, Texas'
  }
]

function useReviews () {
  return {
    reviews: shuffle(reviews)
  }
}

export default useReviews
