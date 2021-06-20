const publicRoutes = {
  'POST /user': 'UserController.register',
  // 'POST /register': 'UserController.register', // alias for POST /user
  // 'POST /login': 'UserController.login',
  // 'POST /validate': 'UserController.validate',
  'GET /users': 'UserController.getAll',
  // 'PATCH /users': 'UserController.editUser',
  // 'GET /runseeds': 'UserController.runseeds',
  

  // 'POST /role': 'RoleController.create',
  // 'GET /role': 'RoleController.getAll',

  'POST /market': 'HospitalController.create',
  'GET /market': 'HospitalController.getAll',

  // 'POST /country': 'CountryController.create',
  // 'GET /country': 'CountryController.getAll',

  // 'POST /scope': 'ScopeController.create',
  // 'GET /scope': 'ScopeController.getAll',

  // 'POST /userCountry': 'UserCountryController.create',
  // 'GET /userCountry': 'UserCountryController.getAll',

};

module.exports = publicRoutes;
