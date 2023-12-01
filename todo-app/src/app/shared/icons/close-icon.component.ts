import { Component } from '@angular/core';

@Component({
  selector: 'close-icon',
  template: `<svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke-width="1.5"
    stroke="currentColor"
    class="w-6 h-6 bg-red-400 hover:bg-red-500 text-white transition-all duration-150 ease-in-out cursor-pointer hover:scale-105 rounded-full p-1 absolute top-1 right-1"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M6 18L18 6M6 6l12 12"
    />
  </svg> `,
})
export class CloseIcon {}
