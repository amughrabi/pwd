# pwd
Simple password strength checker.

Example:
```javascript
// minimum password length is 8 characters.
pwd.check('ahmad123456789') == pwd.Rank.STRONG
```
Or you can modify the length of password as the following:
```javascript
pwd.check('ahmad123456789', {minLength : 16}) == pwd.Rank.STRONG
```
