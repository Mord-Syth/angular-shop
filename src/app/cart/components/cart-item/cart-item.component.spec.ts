import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CartItemComponent } from '..';
import { Category } from '../../../common/enums/category';
import { CartItemModel } from '../../models/cartItem.model';
import { ProductModel } from '../../../products/models/product.model';

describe('HeaderComponent', () => {
  let component: CartItemComponent,
    fixture: ComponentFixture<CartItemComponent>,
    nameEl: DebugElement,
    removeButton: DebugElement;

  const cartItem = {
    id: 0,
    product: {
      id: 1,
      name: 'Product Name',
      author: 'Product Author',
      price: 20,
      category: Category.Fantasy,
      isAvailable: true
    } as ProductModel,
    quantity: 2
  } as CartItemModel;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CartItemComponent]
    });

    fixture = TestBed.createComponent(CartItemComponent);
    component = fixture.componentInstance;
  });

  it('should display product name', () => {
    component.item = cartItem;

    fixture.detectChanges();
    nameEl = fixture.debugElement.query(By.css('h3'));
    expect(nameEl.nativeElement.textContent).toContain(component.item.product.name);
  });

  it('should raise remove event when remove button clicked', () => {

    let itemToRemove = null;
    component.item = cartItem;
    fixture.detectChanges();

    component.remove.subscribe((item) => (itemToRemove = item));

    removeButton = fixture.debugElement.query(By.css('.remove-button span'));
    removeButton.triggerEventHandler('click', null);
    expect(cartItem).toBe(itemToRemove);
  });
});
