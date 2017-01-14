# Code Review

## npm-check
```
bootstrap                     NOTUSED?  Still using bootstrap?
bootstrap-star-rating         NOTUSED?  Still using bootstrap-star-rating?
eslint                        NOTUSED?  Still using eslint?
eslint-plugin-react           NOTUSED?  Still using eslint-plugin-react?
pg                            NOTUSED?  Still using pg?
pg-native                     NOTUSED?  Still using pg-native?
react-bootstrap-star-rating   NOTUSED?  Still using react-bootstrap-star-rating?
```

## SQL

![erd](https://cloud.githubusercontent.com/assets/962281/21957603/66b802c6-da5f-11e6-86d9-0009077e14f2.png)


## Files

```
/db/models/category.js           ░
/db/models/index.js              ░░░░░
/db/models/product.js            ░░░
/db/models/reservation.js        ░░░░
/db/models/review.js             ░
/db/models/user.js               ░░░░░░░░░
/db/models/user.test.js          ░░░
/server/api.js                   ░░░
/server/auth.filters.js          ░░░
/server/auth.test.js             ░░░░░░░░░░░░
/server/categories.js            ░░
/server/products.js              ░░░░
/server/start.js                 ░░░░░░░░░
/server/userProfile.js           ░░░░░░░░░░░░░░
/server/userProfile.test.js      ░░░░
/server/users.js                 ░░░
/server/users.test.js            ░░░░░
/app/reducers/category.jsx       ░░░░░░░░
/app/reducers/index.jsx          ░░
/app/reducers/products.jsx       ░░░░░░░░░░░░░
/app/reducers/userProfile.js     ░░░░░░░░░░░░░░░
/app/components/Categories.jsx   ░░░░░░
/app/components/Login.jsx        ░░░░░░░░░░░░░░
/app/components/Login.test.jsx   ░░░░░░░░░
/app/components/Navbar.jsx       ░░░░
/app/components/PostProduct.jsx  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░
/app/components/ProductView.jsx  ░░░░░░░░░░
/app/components/ProductsView.jsx ░░░░░░░░░
/app/components/Reservation.js   ░░░░░░░░░░
/app/components/Review.jsx       ░░░░░░
/app/components/ReviewsByUser.js ░░░░░░░░
/app/components/Sidebar.jsx      ░░░
/app/components/Signup.jsx       ░░░░░░░░░░░░░░░░░░
/app/components/UserProfile.jsx  ░░░░░░░░░░░░░
/app/components/WhoAmI.jsx       ░░░
/app/components/WhoAmI.test.jsx  ░░░░░░░

```



### models

- [category.js](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/db/models/category.js)
  - Linter


  - Human Review

- [index.js](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/db/models/index.js)
  - Linter


  - Human Review

- [product.js](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/db/models/product.js)
  - Linter
    - [ ] [5](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/db/models/product.js#L5): **'Category' is assigned a value but never used.**

  - Human Review

- [reservation.js](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/db/models/reservation.js)
  - Linter
    - [ ] [9](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/db/models/reservation.js#L9): A function with a name starting with an uppercase letter should only be used as a constructor.
    - [ ] [14](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/db/models/reservation.js#L14): Missing space before =>.
    - [ ] [14](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/db/models/reservation.js#L14): Missing space after =>.
    - [ ] [16](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/db/models/reservation.js#L16): Missing space before value for key 'order'.

  - Human Review

- [review.js](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/db/models/review.js)
  - Linter


  - Human Review

- [user.js](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/db/models/user.js)
  - Linter
    - [ ] [36](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/db/models/user.js#L36): Unexpected console statement.

  - Human Review

- [user.test.js](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/db/models/user.test.js)
  - Linter


  - Human Review


### routes

- [api.js](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/server/api.js)
  - Linter
    - [ ] [3](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/server/api.js#L3): **'db' is assigned a value but never used.**
    - [ ] [4](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/server/api.js#L4): A function with a name starting with an uppercase letter should only be used as a constructor.
    - [ ] [16](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/server/api.js#L16): **'next' is defined but never used.**

  - Human Review

- [auth.filters.js](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/server/auth.filters.js)
  - Linter
    - [ ] [15](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/server/auth.filters.js#L15): **'next' is defined but never used.**

  - Human Review

- [auth.test.js](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/server/auth.test.js)
  - Linter


  - Human Review

- [categories.js](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/server/categories.js)
  - Linter
    - [ ] [5](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/server/categories.js#L5): A function with a name starting with an uppercase letter should only be used as a constructor.
    - [ ] [6](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/server/categories.js#L6): More than 2 blank lines not allowed.

  - Human Review

- [products.js](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/server/products.js)
  - Linter
    - [ ] [2](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/server/products.js#L2): A function with a name starting with an uppercase letter should only be used as a constructor.

  - Human Review

- [start.js](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/server/start.js)
  - Linter
    - [ ] [24](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/server/start.js#L24): Unexpected space between function name and paren.
    - [ ] [24](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/server/start.js#L24): Unexpected space between function name and paren.
    - [ ] [54](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/server/start.js#L54): Unexpected console statement.
    - [ ] [55](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/server/start.js#L55): Unexpected console statement.

  - Human Review

- [userProfile.js](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/server/userProfile.js)
  - Linter
    - [ ] [3](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/server/userProfile.js#L3): **'db' is assigned a value but never used.**
    - [ ] [4](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/server/userProfile.js#L4): **'Review' is assigned a value but never used.**
    - [ ] [6](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/server/userProfile.js#L6): A function with a name starting with an uppercase letter should only be used as a constructor.
    - [ ] [10](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/server/userProfile.js#L10): **'next' is defined but never used.**
    - [ ] [20](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/server/userProfile.js#L20): **'next' is defined but never used.**
    - [ ] [34](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/server/userProfile.js#L34): **'next' is defined but never used.**
    - [ ] [40](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/server/userProfile.js#L40): Missing space before =>.
    - [ ] [44](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/server/userProfile.js#L44): More than 2 blank lines not allowed.
    - [ ] [50](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/server/userProfile.js#L50): **'next' is defined but never used.**
    - [ ] [52](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/server/userProfile.js#L52): 'SellerReview' is not defined.
    - [ ] [56](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/server/userProfile.js#L56): Missing space before =>.
    - [ ] [66](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/server/userProfile.js#L66): **'next' is defined but never used.**
    - [ ] [69](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/server/userProfile.js#L69): 'RenterReview' is not defined.
    - [ ] [72](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/server/userProfile.js#L72): Missing space before =>.
    - [ ] [77](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/server/userProfile.js#L77): More than 2 blank lines not allowed.

  - Human Review

- [userProfile.test.js](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/server/userProfile.test.js)
  - Linter
    - [ ] [2](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/server/userProfile.test.js#L2): **'expect' is assigned a value but never used.**
    - [ ] [3](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/server/userProfile.test.js#L3): **'db' is assigned a value but never used.**
    - [ ] [4](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/server/userProfile.test.js#L4): **'User' is assigned a value but never used.**

  - Human Review

- [users.js](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/server/users.js)
  - Linter
    - [ ] [8](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/server/users.js#L8): A function with a name starting with an uppercase letter should only be used as a constructor.

  - Human Review

- [users.test.js](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/server/users.test.js)
  - Linter
    - [ ] [3](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/server/users.test.js#L3): **'db' is assigned a value but never used.**
    - [ ] [4](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/server/users.test.js#L4): **'User' is assigned a value but never used.**

  - Human Review


### reducers

- [category.jsx](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/reducers/category.jsx)
  - Linter
    - [ ] [7](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/reducers/category.jsx#L7): More than 2 blank lines not allowed.
    - [ ] [21](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/reducers/category.jsx#L21): Unexpected console statement.
    - [ ] [31](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/reducers/category.jsx#L31): Identifier name 'a' is too short (< 2).
    - [ ] [31](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/reducers/category.jsx#L31): Identifier name 'b' is too short (< 2).

  - Human Review

- [index.jsx](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/reducers/index.jsx)
  - Linter


  - Human Review

- [products.jsx](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/reducers/products.jsx)
  - Linter
    - [ ] [10](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/reducers/products.jsx#L10): Missing space after =>.
    - [ ] [21](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/reducers/products.jsx#L21): Missing space after =>.
    - [ ] [29](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/reducers/products.jsx#L29): Missing space after =>.
    - [ ] [29](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/reducers/products.jsx#L29): Missing space before =>.
    - [ ] [29](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/reducers/products.jsx#L29): Missing space after =>.
    - [ ] [38](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/reducers/products.jsx#L38): Unexpected console statement.
    - [ ] [44](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/reducers/products.jsx#L44): Missing space before =>.
    - [ ] [44](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/reducers/products.jsx#L44): Missing space after =>.
    - [ ] [44](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/reducers/products.jsx#L44): Missing space after =>.
    - [ ] [53](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/reducers/products.jsx#L53): Unexpected console statement.
    - [ ] [60](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/reducers/products.jsx#L60): **'dispatch' is defined but never used.**
    - [ ] [63](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/reducers/products.jsx#L63): Unexpected console statement.

  - Human Review

- [userProfile.js](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/reducers/userProfile.js)
  - Linter
    - [ ] [31](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/reducers/userProfile.js#L31): Expected space(s) after "switch".
    - [ ] [50](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/reducers/userProfile.js#L50): **Unnecessary semicolon.**
    - [ ] [55](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/reducers/userProfile.js#L55): Missing space before =>.
    - [ ] [56](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/reducers/userProfile.js#L56): Unexpected console statement.
    - [ ] [59](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/reducers/userProfile.js#L59): Unexpected console statement.
    - [ ] [64](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/reducers/userProfile.js#L64): Missing space before =>.
    - [ ] [65](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/reducers/userProfile.js#L65): Unexpected console statement.
    - [ ] [68](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/reducers/userProfile.js#L68): Unexpected console statement.
    - [ ] [73](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/reducers/userProfile.js#L73): Missing space before =>.
    - [ ] [74](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/reducers/userProfile.js#L74): Unexpected console statement.
    - [ ] [77](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/reducers/userProfile.js#L77): Unexpected console statement.
    - [ ] [82](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/reducers/userProfile.js#L82): Missing space before =>.
    - [ ] [83](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/reducers/userProfile.js#L83): Unexpected console statement.
    - [ ] [86](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/reducers/userProfile.js#L86): Unexpected console statement.
    - [ ] [91](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/reducers/userProfile.js#L91): Missing space before =>.
    - [ ] [92](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/reducers/userProfile.js#L92): Unexpected console statement.
    - [ ] [95](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/reducers/userProfile.js#L95): Unexpected console statement.

  - Human Review


### components

- [Categories.jsx](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/components/Categories.jsx)
  - Linter
    - [ ] [13](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/components/Categories.jsx#L13): Unexpected usage of singlequote.
    - [ ] [21](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/components/Categories.jsx#L21): 'categories' is missing in props validation
    - [ ] [21](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/components/Categories.jsx#L21): 'categories' is missing in props validation
    - [ ] [37](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/components/Categories.jsx#L37): Unexpected space between function name and paren.
    - [ ] [37](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/components/Categories.jsx#L37): Unexpected space between function name and paren.
    - [ ] [41](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/components/Categories.jsx#L41): Unexpected space between function name and paren.
    - [ ] [41](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/components/Categories.jsx#L41): Unexpected space between function name and paren.

  - Human Review

- [Login.jsx](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/components/Login.jsx)
  - Linter
    - [ ] [16](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/components/Login.jsx#L16): Identifier name 'e' is too short (< 2).
    - [ ] [17](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/components/Login.jsx#L17): Missing space before value for computed key 'e.target.name'.
    - [ ] [25](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/components/Login.jsx#L25): Property should be placed on a new line
    - [ ] [27](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/components/Login.jsx#L27): 'login' is missing in props validation
    - [ ] [36](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/components/Login.jsx#L36): Identifier name 'e' is too short (< 2).
    - [ ] [44](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/components/Login.jsx#L44): Identifier name 'e' is too short (< 2).
    - [ ] [48](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/components/Login.jsx#L48): Property should be placed on a new line
    - [ ] [50](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/components/Login.jsx#L50): Empty components are self-closing
    - [ ] [58](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/components/Login.jsx#L58): Identifier name 'e' is too short (< 2).
    - [ ] [60](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/components/Login.jsx#L60): **'user' is assigned a value but never used.**
    - [ ] [75](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/components/Login.jsx#L75): **'ownProps' is defined but never used.**
    - [ ] [78](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/components/Login.jsx#L78): More than 2 blank lines not allowed.
    - [ ] [81](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/components/Login.jsx#L81): **'ownProps' is defined but never used.**
    - [ ] [84](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/components/Login.jsx#L84): Unexpected console statement.
    - [ ] [91](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/components/Login.jsx#L91): Too many blank lines at the end of file. Max of 1 allowed.

  - Human Review

- [Login.test.jsx](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/components/Login.test.jsx)
  - Linter
    - [ ] [53](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/components/Login.test.jsx#L53): **Parsing error: Unexpected token )**

  - Human Review

- [Navbar.jsx](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/components/Navbar.jsx)
  - Linter
    - [ ] [1](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/components/Navbar.jsx#L1): **'Component' is defined but never used.**
    - [ ] [2](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/components/Navbar.jsx#L2): **'Login' is defined but never used.**
    - [ ] [7](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/components/Navbar.jsx#L7): Component definition is missing display name
    - [ ] [12](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/components/Navbar.jsx#L12): Empty components are self-closing
    - [ ] [16](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/components/Navbar.jsx#L16): 'user' is missing in props validation
    - [ ] [16](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/components/Navbar.jsx#L16): A space is required before closing bracket
    - [ ] [20](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/components/Navbar.jsx#L20): Empty components are self-closing

  - Human Review

- [PostProduct.jsx](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/components/PostProduct.jsx)
  - Linter
    - [ ] [6](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/components/PostProduct.jsx#L6): More than 2 blank lines not allowed.
    - [ ] [25](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/components/PostProduct.jsx#L25): Identifier name 'e' is too short (< 2).
    - [ ] [26](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/components/PostProduct.jsx#L26): Missing space before value for computed key 'e.target.name'.
    - [ ] [28](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/components/PostProduct.jsx#L28): More than 2 blank lines not allowed.
    - [ ] [32](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/components/PostProduct.jsx#L32): Unexpected console statement.
    - [ ] [32](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/components/PostProduct.jsx#L32): 'user' is missing in props validation
    - [ ] [36](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/components/PostProduct.jsx#L36): Property should be placed on a new line
    - [ ] [38](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/components/PostProduct.jsx#L38): 'post' is missing in props validation
    - [ ] [49](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/components/PostProduct.jsx#L49): 'user' is missing in props validation
    - [ ] [49](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/components/PostProduct.jsx#L49): 'user.id' is missing in props validation
    - [ ] [59](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/components/PostProduct.jsx#L59): Identifier name 'e' is too short (< 2).
    - [ ] [67](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/components/PostProduct.jsx#L67): Identifier name 'e' is too short (< 2).
    - [ ] [72](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/components/PostProduct.jsx#L72): 'categories' is missing in props validation
    - [ ] [72](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/components/PostProduct.jsx#L72): 'categories' is missing in props validation
    - [ ] [82](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/components/PostProduct.jsx#L82): Identifier name 'e' is too short (< 2).
    - [ ] [90](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/components/PostProduct.jsx#L90): Identifier name 'e' is too short (< 2).
    - [ ] [98](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/components/PostProduct.jsx#L98): Identifier name 'e' is too short (< 2).
    - [ ] [106](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/components/PostProduct.jsx#L106): Identifier name 'e' is too short (< 2).
    - [ ] [114](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/components/PostProduct.jsx#L114): Identifier name 'e' is too short (< 2).
    - [ ] [123](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/components/PostProduct.jsx#L123): Identifier name 'e' is too short (< 2).
    - [ ] [131](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/components/PostProduct.jsx#L131): Identifier name 'e' is too short (< 2).
    - [ ] [134](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/components/PostProduct.jsx#L134): Property should be placed on a new line
    - [ ] [136](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/components/PostProduct.jsx#L136): Empty components are self-closing
    - [ ] [144](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/components/PostProduct.jsx#L144): Identifier name 'e' is too short (< 2).
    - [ ] [146](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/components/PostProduct.jsx#L146): **'user' is assigned a value but never used.**
    - [ ] [161](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/components/PostProduct.jsx#L161): **'ownProps' is defined but never used.**
    - [ ] [167](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/components/PostProduct.jsx#L167): More than 2 blank lines not allowed.
    - [ ] [170](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/components/PostProduct.jsx#L170): **'ownProps' is defined but never used.**
    - [ ] [173](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/components/PostProduct.jsx#L173): Unexpected console statement.
    - [ ] [180](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/components/PostProduct.jsx#L180): Too many blank lines at the end of file. Max of 1 allowed.

  - Human Review

- [ProductView.jsx](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/components/ProductView.jsx)
  - Linter
    - [ ] [1](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/components/ProductView.jsx#L1): **'Component' is defined but never used.**
    - [ ] [2](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/components/ProductView.jsx#L2): **'store' is defined but never used.**
    - [ ] [3](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/components/ProductView.jsx#L3): **'Link' is defined but never used.**
    - [ ] [10](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/components/ProductView.jsx#L10): 'product' is missing in props validation
    - [ ] [11](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/components/ProductView.jsx#L11): Unexpected console statement.
    - [ ] [11](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/components/ProductView.jsx#L11): Strings must use singlequote.
    - [ ] [15](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/components/ProductView.jsx#L15): Unexpected usage of singlequote.
    - [ ] [18](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/components/ProductView.jsx#L18): A space is required before closing bracket
    - [ ] [19](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/components/ProductView.jsx#L19): Unexpected usage of singlequote.
    - [ ] [50](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/components/ProductView.jsx#L50): **'ownProps' is defined but never used.**
    - [ ] [51](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/components/ProductView.jsx#L51): Unexpected console statement.
    - [ ] [51](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/components/ProductView.jsx#L51): Strings must use singlequote.
    - [ ] [57](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/components/ProductView.jsx#L57): **'ownProps' is defined but never used.**
    - [ ] [57](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/components/ProductView.jsx#L57): Missing space after =>.
    - [ ] [58](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/components/ProductView.jsx#L58): Unexpected console statement.
    - [ ] [58](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/components/ProductView.jsx#L58): Strings must use singlequote.
    - [ ] [60](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/components/ProductView.jsx#L60): Missing space before =>.
    - [ ] [61](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/components/ProductView.jsx#L61): 'dispatch' is already declared in the upper scope.
    - [ ] [61](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/components/ProductView.jsx#L61): Missing space before =>.
    - [ ] [61](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/components/ProductView.jsx#L61): Missing space after =>.

  - Human Review

- [ProductsView.jsx](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/components/ProductsView.jsx)
  - Linter
    - [ ] [1](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/components/ProductsView.jsx#L1): **'Component' is defined but never used.**
    - [ ] [2](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/components/ProductsView.jsx#L2): **'store' is defined but never used.**
    - [ ] [7](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/components/ProductsView.jsx#L7): 'allProducts' is missing in props validation
    - [ ] [8](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/components/ProductsView.jsx#L8): 'params' is missing in props validation
    - [ ] [8](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/components/ProductsView.jsx#L8): 'params.categoryId' is missing in props validation
    - [ ] [13](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/components/ProductsView.jsx#L13): Missing space before =>.
    - [ ] [13](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/components/ProductsView.jsx#L13): Missing space after =>.
    - [ ] [16](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/components/ProductsView.jsx#L16): Unexpected usage of singlequote.
    - [ ] [17](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/components/ProductsView.jsx#L17): A space is required before closing bracket
    - [ ] [21](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/components/ProductsView.jsx#L21): Unexpected usage of singlequote.
    - [ ] [35](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/components/ProductsView.jsx#L35): Empty components are self-closing
    - [ ] [35](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/components/ProductsView.jsx#L35): Unexpected usage of singlequote.
    - [ ] [50](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/components/ProductsView.jsx#L50): **'ownProps' is defined but never used.**
    - [ ] [56](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/components/ProductsView.jsx#L56): **'ownProps' is defined but never used.**
    - [ ] [56](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/components/ProductsView.jsx#L56): Missing space after =>.
    - [ ] [58](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/components/ProductsView.jsx#L58): 'dispatch' is already declared in the upper scope.
    - [ ] [58](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/components/ProductsView.jsx#L58): Missing space before =>.
    - [ ] [58](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/components/ProductsView.jsx#L58): Missing space after =>.

  - Human Review

- [Reservation.js](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/components/Reservation.js)
  - Linter
    - [ ] [12](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/components/Reservation.js#L12): **'product' is assigned a value but never used.**
    - [ ] [12](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/components/Reservation.js#L12): 'selectedProduct' is missing in props validation
    - [ ] [13](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/components/Reservation.js#L13): **'user' is assigned a value but never used.**
    - [ ] [14](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/components/Reservation.js#L14): Expected space(s) after "if".
    - [ ] [14](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/components/Reservation.js#L14): 'auth' is missing in props validation
    - [ ] [15](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/components/Reservation.js#L15): 'auth' is missing in props validation
    - [ ] [17](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/components/Reservation.js#L17): Expected space(s) after "else".
    - [ ] [17](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/components/Reservation.js#L17): **Unnecessary semicolon.**
    - [ ] [21](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/components/Reservation.js#L21): Expected space(s) after "return".
    - [ ] [24](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/components/Reservation.js#L24): Identifier name 'e' is too short (< 2).
    - [ ] [24](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/components/Reservation.js#L24): 'props' is not defined.
    - [ ] [31](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/components/Reservation.js#L31): Property should be placed on a new line
    - [ ] [33](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/components/Reservation.js#L33): Empty components are self-closing
    - [ ] [49](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/components/Reservation.js#L49): **'ownProps' is defined but never used.**
    - [ ] [55](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/components/Reservation.js#L55): More than 2 blank lines not allowed.
    - [ ] [58](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/components/Reservation.js#L58): **'ownProps' is defined but never used.**

  - Human Review

- [Review.jsx](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/components/Review.jsx)
  - Linter
    - [ ] [1](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/components/Review.jsx#L1): **'Component' is defined but never used.**
    - [ ] [8](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/components/Review.jsx#L8): 'review' is missing in props validation
    - [ ] [9](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/components/Review.jsx#L9): More than 2 blank lines not allowed.
    - [ ] [12](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/components/Review.jsx#L12): Unexpected console statement.
    - [ ] [12](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/components/Review.jsx#L12): 'review' is missing in props validation
    - [ ] [14](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/components/Review.jsx#L14): Expected space(s) after "return".
    - [ ] [15](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/components/Review.jsx#L15): Unexpected usage of singlequote.
    - [ ] [26](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/components/Review.jsx#L26): 'color1' is missing in props validation

  - Human Review

- [ReviewsByUser.js](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/components/ReviewsByUser.js)
  - Linter
    - [ ] [3](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/components/ReviewsByUser.js#L3): **'axios' is defined but never used.**
    - [ ] [12](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/components/ReviewsByUser.js#L12): Expected 'this' to be used by class method 'ratingChanged'.
    - [ ] [13](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/components/ReviewsByUser.js#L13): Unexpected console statement.
    - [ ] [19](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/components/ReviewsByUser.js#L19): Empty components are self-closing
    - [ ] [20](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/components/ReviewsByUser.js#L20): Empty components are self-closing
    - [ ] [21](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/components/ReviewsByUser.js#L21): Empty components are self-closing
    - [ ] [22](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/components/ReviewsByUser.js#L22): 'review' is missing in props validation
    - [ ] [22](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/components/ReviewsByUser.js#L22): Unexpected usage of singlequote.
    - [ ] [22](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/components/ReviewsByUser.js#L22): A space is required before closing bracket
    - [ ] [31](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/components/ReviewsByUser.js#L31): **'ownProps' is defined but never used.**
    - [ ] [42](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/components/ReviewsByUser.js#L42): More than 2 blank lines not allowed.
    - [ ] [45](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/components/ReviewsByUser.js#L45): **'ownProps' is defined but never used.**

  - Human Review

- [Sidebar.jsx](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/components/Sidebar.jsx)
  - Linter
    - [ ] [2](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/components/Sidebar.jsx#L2): **'Link' is defined but never used.**
    - [ ] [6](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/components/Sidebar.jsx#L6): Component definition is missing display name
    - [ ] [7](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/components/Sidebar.jsx#L7): 'params' is missing in props validation
    - [ ] [12](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/components/Sidebar.jsx#L12): 'location' is missing in props validation
    - [ ] [12](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/components/Sidebar.jsx#L12): 'location.pathname' is missing in props validation
    - [ ] [12](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/components/Sidebar.jsx#L12): 'location.pathname.startsWith' is missing in props validation

  - Human Review

- [Signup.jsx](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/components/Signup.jsx)
  - Linter
    - [ ] [22](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/components/Signup.jsx#L22): Identifier name 'e' is too short (< 2).
    - [ ] [23](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/components/Signup.jsx#L23): Missing space before value for computed key 'e.target.name'.
    - [ ] [31](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/components/Signup.jsx#L31): Property should be placed on a new line
    - [ ] [31](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/components/Signup.jsx#L31): Identifier name 'e' is too short (< 2).
    - [ ] [41](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/components/Signup.jsx#L41): Identifier name 'e' is too short (< 2).
    - [ ] [49](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/components/Signup.jsx#L49): Identifier name 'e' is too short (< 2).
    - [ ] [57](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/components/Signup.jsx#L57): Identifier name 'e' is too short (< 2).
    - [ ] [65](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/components/Signup.jsx#L65): Identifier name 'e' is too short (< 2).
    - [ ] [69](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/components/Signup.jsx#L69): Property should be placed on a new line
    - [ ] [71](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/components/Signup.jsx#L71): Empty components are self-closing
    - [ ] [79](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/components/Signup.jsx#L79): Identifier name 'e' is too short (< 2).
    - [ ] [101](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/components/Signup.jsx#L101): **'ownProps' is defined but never used.**
    - [ ] [104](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/components/Signup.jsx#L104): More than 2 blank lines not allowed.
    - [ ] [107](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/components/Signup.jsx#L107): **'ownProps' is defined but never used.**
    - [ ] [114](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/components/Signup.jsx#L114): Too many blank lines at the end of file. Max of 1 allowed.

  - Human Review

- [UserProfile.jsx](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/components/UserProfile.jsx)
  - Linter
    - [ ] [5](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/components/UserProfile.jsx#L5): **'Link' is defined but never used.**
    - [ ] [6](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/components/UserProfile.jsx#L6): **'AccountInfoFormContainer' is defined but never used.**
    - [ ] [21](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/components/UserProfile.jsx#L21): 'routeParams.id' is missing in props validation
    - [ ] [21](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/components/UserProfile.jsx#L21): 'routeParams' is missing in props validation
    - [ ] [23](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/components/UserProfile.jsx#L23): 'getUserInfo' is missing in props validation
    - [ ] [24](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/components/UserProfile.jsx#L24): 'getRentedTransactions' is missing in props validation
    - [ ] [25](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/components/UserProfile.jsx#L25): 'getSoldTransactions' is missing in props validation
    - [ ] [26](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/components/UserProfile.jsx#L26): 'getAsRenterRatings' is missing in props validation
    - [ ] [27](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/components/UserProfile.jsx#L27): 'getAsSellerRatings' is missing in props validation
    - [ ] [30](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/components/UserProfile.jsx#L30): Expected 'this' to be used by class method 'aggregateRatings'.
    - [ ] [31](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/components/UserProfile.jsx#L31): Expected space(s) after "if".
    - [ ] [32](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/components/UserProfile.jsx#L32): Missing space before =>.
    - [ ] [40](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/components/UserProfile.jsx#L40): **'aggregateRatingAsRenter' is assigned a value but never used.**
    - [ ] [40](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/components/UserProfile.jsx#L40): 'rentingRatings' is missing in props validation
    - [ ] [41](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/components/UserProfile.jsx#L41): **'aggregateRatingAsSeller' is assigned a value but never used.**
    - [ ] [41](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/components/UserProfile.jsx#L41): 'sellingRatings' is missing in props validation
    - [ ] [42](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/components/UserProfile.jsx#L42): **'id' is assigned a value but never used.**
    - [ ] [42](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/components/UserProfile.jsx#L42): 'routeParams.id' is missing in props validation
    - [ ] [42](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/components/UserProfile.jsx#L42): 'routeParams' is missing in props validation
    - [ ] [48](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/components/UserProfile.jsx#L48): Empty components are self-closing
    - [ ] [56](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/components/UserProfile.jsx#L56): 'children' is missing in props validation
    - [ ] [56](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/components/UserProfile.jsx#L56): 'children' is missing in props validation
    - [ ] [64](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/components/UserProfile.jsx#L64): **'ownProps' is defined but never used.**
    - [ ] [75](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/components/UserProfile.jsx#L75): **'ownProps' is defined but never used.**

  - Human Review

- [WhoAmI.jsx](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/components/WhoAmI.jsx)
  - Linter
    - [ ] [4](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/components/WhoAmI.jsx#L4): 'user' is missing in props validation
    - [ ] [4](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/components/WhoAmI.jsx#L4): 'logout' is missing in props validation
    - [ ] [12](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/components/WhoAmI.jsx#L12): Empty components are self-closing
    - [ ] [21](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/components/WhoAmI.jsx#L21): Unexpected space between function name and paren.
    - [ ] [21](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/components/WhoAmI.jsx#L21): Unexpected space between function name and paren.
    - [ ] [24](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/components/WhoAmI.jsx#L24): Unexpected space between function name and paren.
    - [ ] [24](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/components/WhoAmI.jsx#L24): Unexpected space between function name and paren.

  - Human Review

- [WhoAmI.test.jsx](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/components/WhoAmI.test.jsx)
  - Linter
    - [ ] [17](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/components/WhoAmI.test.jsx#L17): Arrow function should not return assignment.
    - [ ] [18](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/components/WhoAmI.test.jsx#L18): A space is required before closing bracket
    - [ ] [31](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/components/WhoAmI.test.jsx#L31): **Expected an assignment or function call and instead saw an expression.**
    - [ ] [40](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/components/WhoAmI.test.jsx#L40): **'dispatch' is assigned a value but never used.**
    - [ ] [42](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/components/WhoAmI.test.jsx#L42): 'state' is already declared in the upper scope.
    - [ ] [44](https://github.com/RyanDriscoll/daily/tree/834c9198a443a6a1f862ff22317b20fdb4267433/app/components/WhoAmI.test.jsx#L44): A space is required before closing bracket

  - Human Review





## Route Tree
```  
router                                                                                                         
 ├── query                                         *                                                           
 ├── expressInit                                   *                                                           
 ├── volleyball                                    *                                                           
 ├── _cookieSession                                *                                                           
 ├── urlencodedParser                              *                                                           
 ├── jsonParser                                    *                                                           
 ├── initialize                                    *                                                           
 ├── authenticate                                  *                                                           
 ├── serveStatic                                   *                                                           
 ├── serveStatic                                   *                                                           
 ├── router                                        /^\/api\/?(?=\/|$)/                                         
 │   router                                                                                                    
 │    ├── bound dispatch                           /heartbeat                                                  GET
 │    │    └── <anonymous>                         /                                                           GET
 │    │   
 │    ├── router                                   /^\/auth\/?(?=\/|$)/                                        
 │    │   router                                                                                               
 │    │    ├── bound dispatch                      /whoami                                                     GET
 │    │    │    └── <anonymous>                    /                                                           GET
 │    │    │   
 │    │    ├── bound dispatch                      /:strategy/login                                            POST
 │    │    │    └── <anonymous>                    /                                                           POST
 │    │    │   
 │    │    └── bound dispatch                      /logout                                                     POST
 │    │         └── <anonymous>                    /                                                           POST
 │    │        
 │    │   
 │    ├── router                                   /^\/users\/?(?=\/|$)/                                       
 │    │   router                                                                                               
 │    │    ├── bound dispatch                      /                                                           GET
 │    │    │    ├── <anonymous>                    /                                                           GET
 │    │    │    └── <anonymous>                    /                                                           GET
 │    │    │   
 │    │    ├── bound dispatch                      /                                                           POST
 │    │    │    └── <anonymous>                    /                                                           POST
 │    │    │   
 │    │    └── bound dispatch                      /:id                                                        GET
 │    │         ├── mustBeLoggedIn                 /                                                           GET
 │    │         └── <anonymous>                    /                                                           GET
 │    │        
 │    │   
 │    ├── router                                   /^\/categories\/?(?=\/|$)/                                  
 │    │   router                                                                                               
 │    │    └── bound dispatch                      /                                                           GET
 │    │         └── <anonymous>                    /                                                           GET
 │    │        
 │    │   
 │    ├── router                                   /^\/products\/?(?=\/|$)/                                    
 │    │   router                                                                                               
 │    │    ├── bound dispatch                      /                                                           GET
 │    │    │    └── <anonymous>                    /                                                           GET
 │    │    │   
 │    │    ├── bound dispatch                      /                                                           POST
 │    │    │    └── <anonymous>                    /                                                           POST
 │    │    │   
 │    │    └── bound dispatch                      /:productId                                                 GET
 │    │         └── <anonymous>                    /                                                           GET
 │    │        
 │    │   
 │    ├── router                                   /^\/userProfile\/?(?=\/|$)/                                 
 │    │   router                                                                                               
 │    │    ├── bound dispatch                      /id/:userId                                                 GET
 │    │    │    └── <anonymous>                    /                                                           GET
 │    │    │   
 │    │    ├── bound dispatch                      /reservations/asRenter/:userId                              GET
 │    │    │    └── <anonymous>                    /                                                           GET
 │    │    │   
 │    │    ├── bound dispatch                      /reservations/asSeller/:userId                              GET
 │    │    │    └── <anonymous>                    /                                                           GET
 │    │    │   
 │    │    ├── bound dispatch                      /ratings/asRenter/:userId                                   GET
 │    │    │    └── <anonymous>                    /                                                           GET
 │    │    │   
 │    │    └── bound dispatch                      /ratings/asSeller/:userId                                   GET
 │    │         └── <anonymous>                    /                                                           GET
 │    │        
 │    │   
 │    ├── <anonymous>                              *                                                           
 │    └── <anonymous>                              *                                                           
 │   
 └── bound dispatch                                /*                                                          GET
      └── <anonymous>                              /                                                           GET
     

```
