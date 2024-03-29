## 10.07

Created initial project structure.
Added Product, ProductList Cart components, Product and Cart services, Product model. All of the are used in AppComponent.

## 20.07

Updated project tot use Angular 8.
Refactored Cart to show count and sum for added items. Added some minimal styling via component styling, added hover styling.

##23.07

Added services with various registrations. Added About component with newly developed services. 
Added a directive which changes border on click.

##26.07

Added currency pipe for showing the price in product-item. 
Refactored getting products to use Promise and async pipe in product-list. 
Added OrderBy pipe. Used it in cart-list.
Fixed lint errors. 

##06.09

Created Products, Cart. Orders, Admin modules and configured router to work with them.
Orders part is available for logged in users only. Leaving new order page leads to an empty cart. Appropriate confirmation is shown.
Two users are supported (Admin and User). Admin can manage all orders and products. User can see only his orders.
All orders are stored in localstorage. 

Added styling via bootstrap.

##13.09

Added backend on json-server. Updated Products and Cart to work with it.
Added timing interseptor to work with products requests.
Added AppSettingsService to load settings from db or local storage.

##17.09

Added states for products and router. Products uses @ngrx/entity.

##17.09

Added a reactive form to check out order with required fields and validation for them.

##19.09

Added integration tests for CartItemComponent.
Added isolated unit test for AuthenticationService.
Added isolated unit test for OrderByPipe.
Added shallow test for AppComponent.
Create test coverage report.
