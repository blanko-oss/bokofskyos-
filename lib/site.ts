export const site = {
  name: 'BOKOFSKY OS',
  tagline: 'Take control. Keep your edge.',
  version: 'Not released',
  releaseStatus: 'Unavailable',
  githubUrl: process.env.NEXT_PUBLIC_GITHUB_URL || '',
  releaseUrl: process.env.NEXT_PUBLIC_RELEASE_URL || '',
  sourceUrl: process.env.NEXT_PUBLIC_SOURCE_URL || '',
  contactEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL || '',
};

export const features = [
  { number: '01', icon: 'activity', title: 'Live Performance Monitor', text: 'Keep an eye on system activity through a focused, at-a-glance monitoring view.' },
  { number: '02', icon: 'power', title: 'Startup Manager', text: 'Review startup entries and make deliberate choices about what launches with Windows.' },
  { number: '03', icon: 'gamepad', title: 'Game Launcher', text: 'Bring your gaming shortcuts together in one dedicated launch space.' },
  { number: '04', icon: 'broom', title: 'Temporary File Cleanup', text: 'Review supported temporary-file targets before cleanup. Important personal files stay out of the crosshairs.' },
  { number: '05', icon: 'shield-check', title: 'Restore Point Support', text: 'A recovery-minded workflow designed to help you prepare before supported system changes.' },
  { number: '06', icon: 'sparkles', title: 'Cinematic Interface', text: 'A red-lit, animated interface with motion that can be enjoyed without sacrificing usability.' },
];

export const faqs = [
  { q: 'Which Windows versions are supported?', a: 'The current target is Windows 11 Pro 24H2, x64. Confirmed compatibility for other Windows editions and versions will be listed after testing.' },
  { q: 'Is the installer available now?', a: 'Not yet. The download remains disabled until a real release package and its verified URL are configured.' },
  { q: 'What if Windows Defender shows a warning?', a: 'Do not disable Defender to install the app. Only obtain builds from the official release location, verify the published SHA-256 when available, and investigate unexpected warnings before proceeding.' },
  { q: 'Can I change the application password?', a: 'The planned application password is changeable locally. The website does not handle, request, or store that password. The exact storage implementation should be verified against the shipped source before release.' },
  { q: 'Does BOKOFSKY OS disable Windows protections?', a: 'The product requirements explicitly preserve Windows Update, Microsoft Defender, drivers, recovery functionality, and Windows visual effects. Review each action in the actual application before applying it.' },
  { q: 'Does the app collect personal data?', a: 'The intended experience is local-first. A definitive data-collection statement must be confirmed against the final source and any bundled dependencies before publication.' },
];
