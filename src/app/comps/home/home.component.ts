export class HomeComponent {
  appTitle: string = 'Welcome to Angular 20';
  userImageUrl: string = 'src/comps/profile/catto.png';
  isHighlighted: boolean = true;
  currentDate: Date = new Date();

  // Profile data
  userName: string = 'Yael Gale';
  userEmail: string = 'yaelgale@gmailcom';
  userRole: string = 'Developer';
  userBio: string = 'Passionate Angular developer with 5+ years of experience.';
} 
