1. Line 12 will print 3, as it counts how many times the loop executes. Since there are three items in the array, the loop iterates three times.
2. Line 13 will print 150, which is the discounted price of the last element. This is because the loop is incorrectly overwriting the final price for each item except the last one.
3. Line 14 will print 150 because again, it is only producing the final price of the last element in the array.
4. This function will return the array [50, 100, 150] which is an array of the discounted values.
5. This code causes an error, because let is only declared in the block scope. When calling i outside of the function, it produces an error because it isn't defined.
6. This code produces an error like the previous one, because discoutnedPrice was declared with let. This means it can't be used outside of the block so when it's called outside an error is produced.
7. 150 is returned at Line 14, as a combination between the final value not getting updated and getting the discounted price of the last element.
8. This function will return the array [50, 100, 150] which is an array of the discounted values.
9. The code causes an error, the same issue as before when i is only defined within a block. Calling it outside of the block returns an error message because its undefined.
10. 3 is returned by the code, as it returns the length of the given array.
11. This function will return the array [50, 100, 150] which is an array of the discounted values.
