import { Component } from '@angular/core';

@Component({
  selector: 'complete-icon',
  template: `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="w-6 h-6 bg-green-400 hover:bg-green-500 text-white transition-all duration-150 ease-in-out cursor-pointer hover:scale-105 rounded-full p-1 absolute bottom-1 right-1"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M4.5 12.75l6 6 9-13.5"
      />
    </svg>
  `,
})
export class CompleteIcon {}
