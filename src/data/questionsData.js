import houseIcon from '../icons/house.png';
import fenceIcon from '../icons/fence.png';
import apartmentIcon from '../icons/apartment.png';

import kidIcon from '../icons/kids.png';
import petsIcon from '../icons/pets.png'
import bothIcon from '../icons/both.png';
import neitherIcon from '../icons/neither.png';

const ages = {
    PUPPY: 'puppy',
    ADULT: 'adult',
    SENIOR: 'senior'
}

export const aboutYouQuestions = [
    {
        number: 1,
        text: 'What is your living situation?',
        key: 'livingSituation',
        options: [
            {text: 'House1', icon: houseIcon},
            {text: 'House2', icon: fenceIcon},
            {text: 'Apartment', icon: apartmentIcon},
        ],
    },
    {
        number: 2,
        text: 'Do you have other kids or pets?',
        key: 'kidsAndPets',
        options: [
            {text: 'kids', icon: kidIcon},
            {text: 'pets', icon: petsIcon},
            {text: 'both', icon: bothIcon},
            {text: 'neither', icon: neitherIcon},
        ]
    },
    {
        number: 3,
        text: 'How active is your lifestyle?',
        key: 'activityLevel',
        options: [
            'low',
            'medium',
            'high'
        ]
    }
];

export const aboutDogQuestions = [
    {
        number: 1,
        text: 'How old of a dog are you looking for?',
        key: 'dogAge',
        options: [
            ages.PUPPY,
            ages.ADULT,
            ages.SENIOR
        ]
    },
    {
        number: 2,
        text: 'What size?',
        key: 'dogSize',
        options: [
            'small',
            'medium',
            'large'
        ]
    },
    {
        number: 3,
        text: 'What level of time commitment are you interested in?',
        key: 'commitment',
        options: [
            'small',
            'medium',
            'large'
        ]
    }
];
