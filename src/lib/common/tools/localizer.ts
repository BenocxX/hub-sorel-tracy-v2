import type { Season } from '@prisma/client';

const localizedSeasonObject = {
  Fall: 'Automne',
  Winter: 'Hiver',
  Summer: 'Été',
};
export function localizeSeason(season: Season) {
  return localizedSeasonObject[season];
}
