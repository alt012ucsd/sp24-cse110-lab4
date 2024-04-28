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
12.
  A. student.name
  B. student['Grad Year']
  C. student.greeting()
  D. student['Favorite Teacher'].name
  E. student.courseLoard[0]
13. 
  A. 32 - This is string concatentation because one of the values is a string.
  B. 1 - This is arithmetic subtraction, causing 3 to be casted as a number when subtracted by 2.
  C. 3 - Arithmetic addition, but null is casted as a 0 causing it to just output 3.
  D. 3null - This is string concatenation, combining the strings of 3 and null.
  E. 4 - Airthmetic addition, but true is casted as 1 creating 4.
  F. 0 - Arithmetic addition, but both values are casted as 0s making 0 + 0 = 0.
  G. 3undefined - String concatenation, combining the string 3 and undefined.
  H. Nan - Produces an error because 3 can be converted to a number, but undefined cannot.
14. 
  A. true - The string 2 is converted to a number, and 2 > 1.
  B. false - 2 is compared to 1, since the 2 in the string '12' comes after, 2 < 1 which is false.
  C. true - It converts the string 2 into a number, and 2 == 2.
  D. false - The three equals is a strict comparison without type changing, and one is a string and one is a number.
  E. false - The boolean is casted as a number, 1 in this case which returns false since 1 == 2 is false.
  F. true - Boolean(2) returns true and when compared to the boolean true it returns true.
15. The difference between == and === is the former will type cast or change to match the comparison. The latter will do a strict comparison without type conversion.
