import ClassRoom from './0-classroom';

export default function initialzeRooms() {
    let classA = new ClassRoom(19);
    let classB = new ClassRoom(20);
    let classC = new ClassRoom(34);
    const resultList = [classA, classB, classC];
    return (resultList);
}