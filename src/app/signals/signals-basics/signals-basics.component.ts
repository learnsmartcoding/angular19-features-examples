import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signals-basics',
  imports: [CommonModule, FormsModule],
  templateUrl: './signals-basics.component.html',
  styleUrl: './signals-basics.component.css',
})
export class SignalsBasicsComponent {
  codeSnippet = `
  const counter = signal(0);

  effect(() => {
    console.log("Counter updated to:", counter());
  });

  // Update counter to trigger effect
  counter.set(1); // This will log: "Counter updated to: 1"
`;

  errorHandlingSnippet = `
const user = signal(null); // Initially no user data
  
  const username = computed(() => {
    if (!user()) {
      return "Guest"; // Default value if no user is present
    }
    return user().name;
  });

  console.log(username()); // Output: Guest
`;

  manageMultipleSignalsSnippet = ` const itemCount = signal(0);
  const totalPrice = signal(0);
  
  const cartValue = computed(() => itemCount() * totalPrice());

  // Update signals
  itemCount.set(3);
  totalPrice.set(20);

  console.log(cartValue()); // Output: 60`;

  effectWithComputedSnippet = `
   const a = signal(2);
  const b = signal(3);
  
  const sum = computed(() => a() + b());

  effect(() => {
    console.log("Sum has changed:", sum());
  });

  a.set(5); // Logs: "Sum has changed: 8"
  b.set(4); // Logs: "Sum has changed: 9"`;
}
