// Данни за секциите по страници
import homeSection1 from '../assets/images/contentSectionsImg/home-section-1.jpg';
import homeSection2 from '../assets/images/contentSectionsImg/home-section-2.jpg';
import homeSection3 from '../assets/images/contentSectionsImg/home-section-3.jpg';
import homeSection4 from '../assets/images/contentSectionsImg/home-section-4.jpg';
import homeSection5 from '../assets/images/contentSectionsImg/home-section-5.jpg';
import SupportNetworkSection1 from '../assets/images/contentSectionsImg/SupportNetwork-section-1.jpg';
import SupportNetworkSection2 from '../assets/images/contentSectionsImg/SupportNetwork-section-2.jpg';
import SupportNetworkSection3 from '../assets/images/contentSectionsImg/SupportNetwork-section-3.jpg';
import SupportNetworkSection4 from '../assets/images/contentSectionsImg/SupportNetwork-section-4.jpg';
import SupportNetworkSection5 from '../assets/images/contentSectionsImg/SupportNetwork-section-5.jpg';
import SupportNetworkSection6 from '../assets/images/contentSectionsImg/SupportNetwork-section-6.jpg';
import SupportNetworkSection7 from '../assets/images/contentSectionsImg/SupportNetwork-section-7.jpg';
import { LINKS } from '../constants/links';
import voiceFirstSection1 from '../assets/images/contentSectionsImg/voiceFirst-section-1.jpg';
import voiceFirstSection2 from '../assets/images/contentSectionsImg/voiceFirst-section-2.jpg';
import voiceFirstSection3 from '../assets/images/contentSectionsImg/voiceFirst-section-3.jpg';
import voiceFirstSection4 from '../assets/images/contentSectionsImg/voiceFirst-section-4.jpg';
import voiceFirstSection5 from '../assets/images/contentSectionsImg/voiceFirst-section-5.jpg';
import voiceFirstSection6 from '../assets/images/contentSectionsImg/voiceFirst-section-6.jpg';
import organizeNetworkSection1 from '../assets/images/contentSectionsImg/organizeNetwork-section-1.jpg';
import organizeNetworkSection2 from '../assets/images/contentSectionsImg/organizeNetwork-section-2.jpg';
import organizeNetworkSection3 from '../assets/images/contentSectionsImg/organizeNetwork-section-3.jpg';
import organizeNetworkSection4 from '../assets/images/contentSectionsImg/organizeNetwork-section-4.jpg';
import organizeNetworkSection5 from '../assets/images/contentSectionsImg/organizeNetwork-section-5.jpg';
import organizeNetworkSection6 from '../assets/images/contentSectionsImg/organizeNetwork-section-6.jpg';
import freeViberCallSection1_1 from '../assets/images/contentSectionsImg/freeViberCall-section-1.1.jpg';
import freeViberCallSection1_2 from '../assets/images/contentSectionsImg/freeViberCall-section-1.2.jpg';
import freeViberCallSection1_3 from '../assets/images/contentSectionsImg/freeViberCall-section-1.3.jpg';
import freeViberCallSection2_1 from '../assets/images/contentSectionsImg/freeViberCall-section-2.1.jpg';
import freeViberCallSection2_2 from '../assets/images/contentSectionsImg/freeViberCall-section-2.2.jpg';
import freeViberCallSection2_3 from '../assets/images/contentSectionsImg/freeViberCall-section-2.3.jpg';
import useCasesSection1 from '../assets/images/contentSectionsImg/useCases-section-1.jpg';
import useCasesSection2 from '../assets/images/contentSectionsImg/useCases-section-2.jpg';
import useCasesSection3 from '../assets/images/contentSectionsImg/useCases-section-3.jpg';
import useCasesSection4 from '../assets/images/contentSectionsImg/useCases-section-4.jpg';
import useCasesSection5 from '../assets/images/contentSectionsImg/useCases-section-5.jpg';
import useCasesSection6 from '../assets/images/contentSectionsImg/useCases-section-6.jpg';

export const sectionsData = {
  home: [
    {
      align: 'left',
      image: homeSection1,
      imageAlt: 'Two people at a crossroads illustration',
      title: 'Life moves fast',
      subtitle: 'Along the way, we lose touch with friends, mentors, and colleagues who once played a meaningful role in our lives.',
      bullets: [
        'A new job. A move to a new city. New stage of life.',
        'A friendship fades after a year of silence.',
        'Reaching out again feels… awkward.'
      ],
      afterBullets: "But here's the truth: <b>those relationships still hold value.</b><br/>And with the right nudge, they can come alive again — stronger than ever.",
    },
    {
      align: 'right',
      image: homeSection2,
      imageAlt: 'Relinkd helps you reactivate dormant relationships',
      overline: 'Relinkd helps you:',
      title: 'Reactivate Dormant Relationships',
      subtitle: 'Reconnect with people you already know and trust — and turn passive contacts into active supporters.',
      bullets: [
        'Share what kind of support you can give and need.',
        'Reconnect with intention and purpose.',
        'Build a network that works for you — not just a contact list.'
      ],
      link: { text: 'Learn More: Support Network Activation', href: LINKS.SUPPORT_NETWORK_ACTIVATION },
    },
    {
      align: 'left',
      image: homeSection3,
      imageAlt: 'Voice-first journaling and contact management',
      title: 'Manage Relationships — with Just Your Voice',
      subtitle: 'Forget typing. Just speak. Capture notes, memories, and reminders on the go — completely hands-free.',
      bullets: [
        'Voice-first journaling for your connections.',
        'Build a network that works for you — not just a contact list.'
      ],
      link: { text: 'Learn More: Voice-First Relationship Management', href: LINKS.VOICE_FIRST_RELATIONSHIP_MANAGEMENT },
    },
    {
      align: 'right',
      image: homeSection4,
      imageAlt: 'Organize your network in one place',
      title: 'Organize Your Network — All in One Place',
      subtitle: 'Bring your LinkedIn and phone contacts into one clean, searchable space.',
      bullets: [
        'Import contacts from LinkedIn, Google, and your phone.',
        'Tag, group, and rate relationship strength.',
        'Build real structure around your network.'
      ],
      link: { text: 'Learn More: LinkedIn & Contact Organizer', href: LINKS.LINKEDIN_CONTACTS_ORGANIZER },
    },
    {
      align: 'left',
      image: homeSection5,
      imageAlt: 'Activated support network tree illustration',
      title: 'An Activated Support Network',
      subtitle: 'End Result:',
      plain: 'Not just names. Not just connections.',
      afterBullets: 'But <b>real people you can count on — and who can count on you.</b>',
    },
  ],
  supportNetworkActivation: [
    {
      align: 'left',
      image: SupportNetworkSection1,
      imageAlt: 'Support network illustration 1',
      title: 'The Need',
      subtitle: 'You know the power of a strong, trusted support network — especially during life’s big moments: career shifts, personal challenges, or bold new ideas.',
      afterBullets: 'But...'
    },
    {
      align: 'right',
      image: SupportNetworkSection2,
      imageAlt: 'Support network illustration 2',
      title: 'The Challenges',
      bullets: [
        'You don’t know who in your network can help with a specific problem.',
        'You forget who has the right experience — or even the willingness — to support you.',
        'After years of silence, reactivating old contacts feels awkward.'
      ]
    },
    {
      align: 'left',
      image: SupportNetworkSection3,
      imageAlt: 'Support network illustration 3',
      title: 'Our Solution',
      subtitle: 'Relinkd helps you identify, activate, and nurture your personal support network — without the friction or forgetfulness.'
    },
    {
      align: 'right',
      image: SupportNetworkSection4,
      imageAlt: 'Support network illustration 4',
      overline: 'How It Works:',
      title: 'Join Relinkd & Import Your Network',
      bullets: [
        'Sign up with your email, phone number, or LinkedIn.',
        'Import contacts from LinkedIn or your phone.',
        'Share what kind of support you’re looking for.'
      ]
    },
    {
      align: 'left',
      image: SupportNetworkSection5,
      imageAlt: 'Support network illustration 5',
      title: 'Get Smart Contact Suggestions',
      bullets: [
        'Relinkd recommends 4–5 relevant people already in your network.',
        'See how they’ve offered to support others (e.g., “mentoring,” “job leads,” “emotional support”).',
        'Invite them with one tap — they’ll receive a notification.',
        'Once accepted, they join your <b>Reactivated Support Network.</b>'
      ]
    },
    {
      align: 'right',
      image: SupportNetworkSection6,
      imageAlt: 'Support network illustration 6',
      title: 'Share How You Can Support Them',
      bullets: [
        'Choose how you can help them back — offer skills, time, introductions.',
        'Set your relationship strength (0–3 hearts).',
        'Be notified when they reciprocate.'
      ]
    },
    {
      align: 'left',
      image: SupportNetworkSection7,
      imageAlt: 'Support network illustration 7',
      title: 'Keep It Alive — Effortlessly',
      subtitle: 'Use Relinkd’s voice-first tools to maintain meaningful, light-touch contact:',
      bullets: [
        'Add voice notes.',
        'Track support offered and received.',
        'Search by tag, topic, or relationship strength.'
      ],
      link: { text: 'Learn More: Voice-First Relationship Management', href: LINKS.VOICE_FIRST_RELATIONSHIP_MANAGEMENT }
    }
  ],
  voiceFirstRelationshipManagement: [
    {
      align: 'left',
      image: voiceFirstSection1,
      imageAlt: 'Woman at sticky note board',
      title: 'The Need',
      subtitle: 'You have a wide support network. But no lightweight tools to manage it. You meet great people at events. But the follow-up often falls through.'
    },
    {
      align: 'right',
      image: voiceFirstSection2,
      imageAlt: 'Juggling man illustration',
      title: 'The Challenges',
      bullets: [
        'Most tools feel like heavy CRMs — time-consuming, impersonal.',
        'You want to remember what was discussed — but can’t take detailed notes mid-conversation.',
        'Life takes over after the event, and you forget to reconnect.'
      ],
      afterBullets: '<b>You believe relationship-building should feel easy, natural, and even fun.</b> Relinkd is built for that.'
    },
    {
      align: 'left',
      image: voiceFirstSection3,
      imageAlt: 'Voice-first relationship tool illustration',
      title: 'Our Solution',
      subtitle: 'Relinkd is a <b>voice-first relationship</b> tool that helps you remember who you met, what you talked about, and when to follow up — all without lifting a finger.'
    },
    {
      align: 'right',
      image: voiceFirstSection4,
      imageAlt: 'Voice notes at event illustration',
      overline: 'How It Works:',
      title: 'At the Event – Relinkd Voice Notes',
      bullets: [
        'Meet someone → exchange contacts (LinkedIn or Phone).',
        'Open Relinkd → speak a quick voice note.',
        'For old contacts, log a follow-up reminder.',
        'Invite them to join your support network — create shared accountability.',
        'Set a follow-up on the spot (while the moment is fresh): “Met at Tech fest 2025 – product lead, interested in green AI, said to follow up next week.”'
      ]
    },
    {
      align: 'left',
      image: voiceFirstSection5,
      imageAlt: 'Activate voice mode illustration',
      title: 'After the Event – Activate Voice Mode',
      bullets: [
        'Enable Voice Mode.',
        'Dictate hands-free to your AI assistant.',
        'Relinkd organizes the note, adds tags, links it to the right person, and sets a reminder. You talk. Relinkd remembers, structures, and keeps you on track.'
      ]
    },
    {
      align: 'right',
      image: voiceFirstSection6,
      imageAlt: 'Smart reminders and nudges illustration',
      title: 'A week later – Smart Reminders & Nudges',
      bullets: [
        'Weekly nudges: “You met 7 new people this month. Want to follow up?”',
        'Your voice notes help you remember exactly who they are and what to say.',
        'If they accepted your invite, they’ll be reminded too.',
        'Relinkd suggests a follow-up note for your needs and theirs.'
      ]
    }
  ],
  linkedinContactsOrganizer: [
    {
      align: 'left',
      image: organizeNetworkSection1,
      imageAlt: 'Man surrounded by stacks of paper and LinkedIn/phone icons',
      title: 'The Need',
      subtitle: 'You have 1,000+ LinkedIn connections or Phone Contacts — and counting. You want to make better use of them, but managing that network is a mess.'
    },
    {
      align: 'right',
      image: organizeNetworkSection2,
      imageAlt: 'Yarn ball and network icons illustration',
      title: 'Your Challenges',
      bullets: [
        'LinkedIn and Your Phone Contact app doesn’t let you <b>organize or segment</b> your network meaningfully.',
        '“My Network” is noisy and flat — no way to filter by trust, job role, or relevance.',
        'You’re connected to people you no longer talk to — but don’t want to delete publicly.'
      ]
    },
    {
      align: 'left',
      image: organizeNetworkSection3,
      imageAlt: 'Relationship map and contacts list illustration',
      title: 'Our Solution',
      subtitle: 'Relinkd turns your overloaded LinkedIn and your Phone Contacts List into a <b>structured, private relationship map</b> — where you can tag, filter, and prioritize people based on:',
      bullets: [
        'How well you know them',
        'How they can support you'
      ]
    },
    {
      align: 'right',
      image: organizeNetworkSection4,
      imageAlt: 'Import contacts UI illustration',
      overline: 'How It Works:',
      title: 'Import Your LinkedIn Network or Phone Contacts',
      bullets: [
        'Connect your LinkedIn or Google Contacts — we don’t store login credentials.',
        'Relinkd automatically imports your contacts (fully GDPR-compliant).',
        'Optionally: import message history for smarter analysis via AI.'
      ]
    },
    {
      align: 'left',
      image: organizeNetworkSection5,
      imageAlt: 'Tag and rate relationships UI illustration',
      title: 'Tag & Rate Relationships (Manually or with AI)',
      bullets: [
        'Add tags like “Climate Tech,” “Investors,” “Trusted Mentor” — or let AI suggest them.',
        'Use one click to auto-tag based on title, industry, location, or mutual contacts.',
        'Rate each person with hearts (0–3):',
        '2–3 hearts = part of your Support Network',
        '0–1 = Archive or deprioritize (no unfriending needed)'
      ]
    },
    {
      align: 'right',
      image: organizeNetworkSection6,
      imageAlt: 'Search and segment UI illustration',
      title: 'Search & Segment Like Never Before',
      bullets: [
        'Filter by company, country, role, or relationship strength.',
        'Search by tag, name, or topic.',
        'Instantly surface high-value connections.'
      ]
    }
  ],
  // Можеш да добавиш още страници по същия начин
  freeViberCallFirst: [
    {
      align: 'left',
      image: freeViberCallSection1_1,
      imageAlt: 'Woman with pencil illustration',
      title: 'Your Need',
      bullets: [
        'You want an up-to-date business card you can easily share.',
        'You want it to be fast, simple, and environmentally friendly.'
      ]
    },
    {
      align: 'right',
      image: freeViberCallSection1_2,
      imageAlt: 'Man with flying business cards illustration',
      title: 'The Problem',
      bullets: [
        'You don’t want to spend money on printed cards every time something changes in your life.',
        'Printed cards can\'t capture all the details of what you do.',
        'You want a seamless way to exchange and manage contact info — beyond just exchanging a name and number.'
      ]
    },
    {
      align: 'left',
      image: freeViberCallSection1_3,
      imageAlt: 'Man and woman exchanging digital business cards illustration',
      title: 'Our Solution',
      subtitle: '<b>Relinkd offers a new way to create and share your business card — right inside Viber or on the web.</b> No app download. No friction. Just easy, smart contact exchange.'
    }
  ],
  freeViberCallSecond: [
    {
      align: 'right',
      image: freeViberCallSection2_1,
      imageAlt: 'Viber chat creating digital business card illustration',
      overline: 'How It Works:',
      title: 'Create Your Digital Business Card',
      bullets: [
        `Join via <a href="${LINKS.TRY_ON_VIBER}" target="_blank" rel="noopener noreferrer" class="text-relinkd-blueMain no-underline hover:underline">Viber</a> or directly on the <a href="${LINKS.GET_STARTED}" target="_blank" rel="noopener noreferrer" class="text-relinkd-blueMain no-underline hover:underline">web</a>.`,
        'Add your name, title, phone, email, and other details.',
        'Optionally, include how you can support others — and what kind of support you need.'
      ]
    },
    {
      align: 'left',
      image: freeViberCallSection2_2,
      imageAlt: 'QR code exchange illustration',
      title: 'Exchange via QR Code',
      bullets: [
        'Share your card via Viber or let someone scan your QR code — even if they don’t have Viber.',
        'The contact is <b>automatically saved</b> to their phone.'
      ]
    },
    {
      align: 'right',
      image: freeViberCallSection2_3,
      imageAlt: 'Enrich new contacts illustration',
      title: 'Retrieve and Enrich New Contacts',
      bullets: [
        'View their contact info and support preferences.',
        'Learn how you can help them (and vice versa).',
        'Add them to your Relinkd network with notes, tags, and follow-up reminders.',
        'You instantly bring new contacts into your <b>personal CRM</b>, with auto-updated info.'
      ]
    }
  ],
  useCasesSections: [
    {
      align: 'left',
      image: useCasesSection1,
      imageAlt: 'Relinkd use case 1',
      title: 'Reconnect With An Old Friend',
      overline: 'Your Situation:',
      bullets: [
        'You’re attending a local community event or panel discussion.',
        'During a break, you run into someone familiar — an old school friend or a colleague from years ago.',
        'The moment is warm, full of shared memories and excitement about future possibilities.'
      ],
      afterBullets: 'But like most spontaneous encounters, it ends without a follow-up. Neither of you follows through.',
      button: { text: 'Get Started for Free', href: LINKS.GET_STARTED }
    },
    {
      align: 'right',
      image: useCasesSection2,
      imageAlt: 'Relinkd use case 2',
      title: 'The Real Problem',
      bullets: [
        'A lot can change in 7 years — new roles, new goals, different needs.',
        'We’re often hesitant to share what we need — or don’t know how.',
        'Life moves fast, and good intentions fade after the event ends.'
      ]
    },
    {
      align: 'left',
      image: useCasesSection3,
      imageAlt: 'Relinkd use case 3',
      overline: 'How Relinkd Helps You Reconnect:',
      title: 'Add Them to Relinkd',
      bullets: [
        'Open the app and add your contact to your support network.',
        'Attach a quick note like:',
        '“Met at this event. Worked together at this company. Wants to explore this together.”'
      ]
    },
    {
      align: 'right',
      image: useCasesSection4,
      imageAlt: 'Relinkd use case 4',
      title: 'Discover Mutual Value',
      subtitle: 'Share what you need — and what you can offer.',
      afterBullets: 'See what matters to your friend now and how you can support each other going forward.'
    },
    {
      align: 'left',
      image: useCasesSection5,
      imageAlt: 'Relinkd use case 5',
      title: 'Set a Reconnect Reminder',
      subtitle: 'Create a gentle reminder to follow up in 10 days — so the spark doesn’t fade into the post-event blur.'
    },
    {
      align: 'right',
      image: useCasesSection6,
      imageAlt: 'Relinkd use case 6',
      title: 'Tag and Group',
      bullets: [
        'Add tags like:',
        '“Climate Tech” · “Product Leaders” · “Warm Contact”.',
        'This makes it easy to find them later — when you’re building an advisory circle or looking for collaborators.'
      ]
    }
  ],
}; 