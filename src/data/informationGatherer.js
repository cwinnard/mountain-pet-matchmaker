import _ from 'lodash';

export default function getDogInfo(petfinderRes) {
    if (!petfinderRes || !petfinderRes.animals) {
        return [];
    }
    const dogInfo = petfinderRes.animals.map((animal) => {
        return _.pick(animal, ['id', 'name', 'description', 'age', 'gender', 'size', 'photos', 'breeds'])
    })
    return dogInfo;
}
