import houseIcon from '../icons/house.png';
import fenceIcon from '../icons/fence.png';
import apartmentIcon from '../icons/apartment.png';

import kidIcon from '../icons/kids.png';
import petsIcon from '../icons/pets.png'
import bothIcon from '../icons/both.png';
import neitherIcon from '../icons/neither.png';

import couchIcon from '../icons/couch.png';
import walkIcon from '../icons/walk.png';
import runIcon from '../icons/run.png';

import pacifierIcon from '../icons/pacifier.png';
import collarIcon from '../icons/collar.png';
import seniorIcon from '../icons/senior.png';

import dogIcon from '../icons/dog.png';

import sleepingDogIcon from '../icons/sleepingDog.png';
import dogParkIcon from '../icons/dogPark.png';
import trainingIcon from '../icons/training.png';

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
            {text: 'low', icon: couchIcon},
            {text: 'moderate', icon: walkIcon},
            {text: 'high', icon: runIcon},
        ]
    }
];

export const aboutDogQuestions = [
    {
        number: 1,
        text: 'How old of a dog are you looking for?',
        key: 'dogAge',
        options: [
            {text: 'puppy', icon: pacifierIcon},
            {text: 'adult', icon: collarIcon},
            {text: 'senior', icon: seniorIcon},
        ]
    },
    {
        number: 2,
        text: 'What size?',
        key: 'dogSize',
        options: [
            {text: 'small', icon: dogIcon},
            {text: 'medium', icon: dogIcon},
            {text: 'large', icon: dogIcon},
        ]
    },
    {
        number: 3,
        text: 'What level of time commitment are you interested in?',
        key: 'commitment',
        options: [
            {text: 'minmial', icon: sleepingDogIcon},
            {text: 'exercise', icon: dogParkIcon},
            {text: 'active training', icon: trainingIcon},
        ]
    }
];
