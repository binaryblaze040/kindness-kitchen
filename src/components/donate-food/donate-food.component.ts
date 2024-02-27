import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-donate-food',
  standalone: true,
  imports: [ FormsModule ],
  templateUrl: './donate-food.component.html',
  styleUrl: './donate-food.component.scss'
})

export class DonateFoodComponent {
  foodName?: string;
  quantity?: number;
  expiryDate?: Date;
  contact?: string;

  constructor() {
    this.resetForm();
  }

  submitForm() {
    // Here you would typically send the form data to a server
    // For demonstration purposes, let's just log the data
    console.log("Food Name:", this.foodName);
    console.log("Quantity:", this.quantity);
    console.log("Expiry Date:", this.expiryDate);
    console.log("Contact Information:", this.contact);

    // After submitting, you may want to reset the form
    this.resetForm();
  }

  resetForm() {
    this.foodName = '';
    this.quantity = 0;
    this.expiryDate = new Date;
    this.contact = '';
  }
}
