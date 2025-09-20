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
};

export const GET = async ({ params }) => {
  const heroId = params.hero as keyof typeof heroes;

  if (!heroes[heroId]) {
    return json({ error: 'Hero not found' }, { status: 404 });
  }

  const hero = heroes[heroId];
  return json(hero);
};
