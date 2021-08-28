import data from '../data.js';

const dataLength = data.length;
test("total number of cake images to equal 6", () => {
  expect(dataLength).toEqual(6);
});

const allCakeIds = data.map(item => item.id); 
test("first cake has a property id as numbers", () => {
    expect(allCakeIds).toEqual([...allCakeIds])
})

const firstCakeId = data[0].id;
test("first cake has a property id value of 1", () => {
    expect(firstCakeId).toBe(1)
})

// testing all cakes
describe("all cake tests", () => {
    test("all cakes have the property image", () => {
        const allCakesHasAnImage = data.map(item => item.image); 
        expect(allCakesHasAnImage).toEqual([...allCakesHasAnImage])
    })
    
test("property of cakes", () => {
    for(let i = 0; i < data.length; i++) {
    expect(data[i]).toHaveProperty("id", "image", "name", "price")
}
})
})



