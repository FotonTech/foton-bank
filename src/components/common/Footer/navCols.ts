export const product: NavCol[] = [
  { name: 'Overview', to: '/' },
  { name: 'Features', to: '/' },
  { name: 'Tutorials', to: '/' },
  { name: 'Pricing', to: '/' },
  { name: 'Releases', to: '/' },
];

export const company: NavCol[] = [
  { name: 'About', to: '/' },
  { name: 'Press', to: '/' },
  { name: 'Careers', to: '/' },
  { name: 'Contact', to: '/' },
  { name: 'Partners', to: '/' },
];

export const support: NavCol[] = [
  { name: 'Help Center', to: '/' },
  { name: 'Terms of service', to: '/' },
  { name: 'Legal', to: '/' },
  { name: 'Privacy Policy', to: '/' },
  { name: 'Status', to: '/' },
];

export const followUs: NavCol[] = [
  { name: 'Facebook', to: '/' },
  { name: 'Twitter', to: '/' },
  { name: 'Dribbble', to: '/' },
  { name: 'Instagram', to: '/' },
  { name: 'Linkedin', to: '/' },
];

export interface NavCol {
  name: string;
  to: string;
}
