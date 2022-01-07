// ADAPTED FROM HACKERRANK ALGO CHALLENGES
/**
Sam's house has an apple tree and an orange tree that yield an abundance of fruit. Using the information given below, determine the number of apples and oranges that land on Sam's house.

In the diagram below:

The red region denotes the house, where  is the start point, and  is the endpoint. The apple tree is to the left of the house, and the orange tree is to its right.
Assume the trees are located on a single point, where the apple tree is at point , and the orange tree is at point .
When a fruit falls from its tree, it lands  units of distance from its tree of origin along the -axis. *A negative value of  means the fruit fell  units to the tree's left, and a positive value of  means it falls  units to the tree's right. * */

/*
 * Complete the 'countApplesAndOranges' function below.
 *
 * The function accepts following parameters:
 *  1. INTEGER s
 *  2. INTEGER t
 *  3. INTEGER a
 *  4. INTEGER b
 *  5. INTEGER_ARRAY apples
 *  6. INTEGER_ARRAY oranges
 */

function countApplesAndOranges(s, t, a, b, apples, oranges) {
    // Write your code here
    const apple_lengths = apples.map((apple) => (apple + a));
    const orange_lengths = oranges.map((orange) => (orange + b));
    const apple_result = apple_lengths.filter((item) => (item >= s && item <= t)).length;
    const orange_result = orange_lengths.filter((item) => (item >= s && item <= t)).length;
    console.log(apple_result);
    console.log(orange_result);
}

countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6])
