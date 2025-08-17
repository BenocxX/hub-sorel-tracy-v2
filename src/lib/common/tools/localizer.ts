import type { Role, SchoolSession, Season } from '@prisma/client';

const localizedSeasonObject = {
  Fall: 'Automne',
  Winter: 'Hiver',
  Summer: 'Été',
};
export function localizeSeason(season: Season) {
  return localizedSeasonObject[season];
}

export function displaySession(session: SchoolSession) {
  return `${localizeSeason(session.season)[0]}${session.year}`;
}

export function localizeRole(role: Role) {
  switch (role) {
    case 'Student':
      return 'Étudiant';
    case 'Teacher':
      return 'Enseignant';
    case 'Admin':
      return 'Administrateur';
  }
}
