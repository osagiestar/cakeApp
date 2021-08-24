import data from '../data.js';

const dataLength = data.length;
test("total number of cake images to equal 6", () => {
  expect(dataLength).toEqual(6);
});


const allCakeIds = data.map(item => item.id); 
test("first cake has a property id as numbers", () => {
    expect(allCakeIds).toEqual([...allCakeIds])
})

const firstCake = data[0].id;
test("first cake has a property id value of 1", () => {
    expect(firstCake).toBe(1)
})


test("all cakes have the property image", () => {
    const allCakesHasAnImage = data.map(item => item.image); 
    expect(allCakesHasAnImage).toEqual([...allCakesHasAnImage])
})