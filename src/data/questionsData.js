import houseIcon from '../icons/house.svg';

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
            {text: 'House2', icon: houseIcon},
            {text: 'Apartment', icon: houseIcon},
        ],
    },
    {
        number: 2,
        text: 'Do you have other kids or pets?',
        key: 'kidsAndPets',
        options: [
            'kids',
            'pets',
            'both',
            'neither'
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
