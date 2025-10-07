import { json } from '@sveltejs/kit';

const heroes = {
  'adam-warlock': {
    name: 'Adam Warlock',
    class: 'strategist',
    bio: 'The genetically-engineered Adam Warlock wields mighty Quantum Magic, allowing him to connect and heal souls with a gentle touch. When the time comes for his allies to unite, Warlock emerges as the unwavering epicenter of cosmic justice!',
  },
  angela: {
    name: 'Angela',
    class: 'vanguard',
    bio: 'As the Hand of Heven, the warrior called Angela embodies unwavering courage and determination. Able to manipulate Ichors into various weapons and unfurl her wings to soar across the battlefield, she is ready to deliver divine judgment upon her foes!',
  },
  'black-panther': {
    name: 'Black Panther',
    class: 'duelist',
    bio: "T'Challa, King of Wakanda, wields the perfect blend of the cutting-edge Vibranium technology and ancestral power drawn from the Panther God, Bast. The Black Panther bides his time until elegantly infiltrating enemy lines and commencing his hunt.",
  },
  'black-widow': {
    name: 'Black Widow',
    class: 'duelist',
    bio: "Natasha Romanova is the world's most elite spy in any era. Her mastery of the sniper rifle eliminates targets from afar, while her shock batons neutralize close-range threats. Black Widow is locked, loaded, and ready to deliver a fatal bite!",
  },
  blade: {
    name: 'Blade',
    class: 'duelist',
    bio: "Half-human and half-vampire, Eric Brooks walks betweenworlds, craving the very life force of his enemies. As nightfalls, Blade's hunt begins as he wields the Sword of Draculato become the nightmare of any foe who dares to bare theirfangs.",
  },
  'captain-america': {
    name: 'Captain America',
    class: 'vanguard',
    bio: 'Enhanced by the Super-Soldier Serum, Steven "Steve" Rogers uses his Vibranium shield and extensive combat training to confront any threat to justice. When Captain America rallies his troops, a wave of courage sweeps across the battlefield!',
  },
  'cloak-and-dagger': {
    name: 'Cloak and Dagger',
    class: 'strategist',
    bio: 'Tyrone Johnson and Tandy Bowen are nearly inseparable, like two sides of the same coin. Intertwined by forces of shadow and light, Cloak & Dagger fight as a united front, dealing havoc and healing allies across the arena.',
  },
  'dr-strange': {
    name: 'Dr. Strange',
    class: 'vanguard',
    bio: 'As the Sorcerer Supreme, Doctor Stephen Strange gracefully wields ancient spells to turn the tide of even the most impossible battle. However, magic always comes at a cost, and each use of his arcane abilities gradually awakens the darkness within him.',
  },
  'emma-frost': {
    name: 'Emma Frost',
    class: 'vanguard',
    bio: 'For Emma Frost, war is the purest form of art. With her formidable telepathic abilities, she intricately weaves a deadly mental web that ensnares her foes, while her indestructible diamond form lets her lead her teammates fearlessly into the fray. Forever elegant and composed, Emma reigns as the one true queen of the battlefield!',
  },
  groot: {
    name: 'Groot',
    class: 'vanguard',
    bio: "A flora colossus from Planet X, the alien known as Groot exhibits enhanced vitality and the ability to manipulate all forms of vegetation. As sturdy as a towering tree, Groot forges his own way, serving as the team's silent but reliable pathfinder.",
  },
  hawkeye: {
    name: 'Hawkeye',
    class: 'duelist',
    bio: "Despite his lack of superpowers, Hawkeye's unparalleled skills as a marksman have earned him a spot alongside earth's mightiest heroes. With a cool head and steady hand, Clint Barton never misses a target… so enemies best stay out of his sights!",
  },
  hella: {
    name: 'Hella',
    class: 'duelist',
    bio: 'As the Goddess of Death, Hela wields supreme control over the fallen souls residing in Hel. With a haunting whisper and a murder of crows, the queen of the underworld gracefully reaps the souls of her enemies without an ounce of mercy.',
  },
  hulk: {
    name: 'Hulk',
    class: 'vanguard',
    bio: 'Brilliant scientist Dr. Bruce Banner has finally found a way to coexist with his monstrous alter ego, the Hulk. By accumulating gamma energy over multiple transformations, he can become a wise and strong Hero Hulk or a fierce and destructive Monster Hulk – a true force of fury on the battlefield!',
  },
  'human-torch': {
    name: 'Human Torch',
    class: 'duelist',
    bio: "The Fantastic Four's resident heartthrob, Johnny Storm, adds an intense flare to every battle he fights. Shrouded in roaring flames, the Human Torch always manages to look cool while turning up the heat!",
  },
};

export const GET = async ({ params }) => {
  const heroId = params.hero as keyof typeof heroes;

  if (!heroes[heroId]) {
    return json({ error: 'Hero not found' }, { status: 404 });
  }

  const hero = heroes[heroId];
  return json(hero);
};
