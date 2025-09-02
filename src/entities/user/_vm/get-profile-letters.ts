import { Profile } from '../_domain/types';

export default function getProfileLetters(profile: Profile) {
  return !profile.name || !profile.name.length
    ? profile.email.split('.').length > 2
      ? profile.email.split('.')[0][0].toUpperCase() + profile.email.split('.')[1][0].toUpperCase()
      : profile.email.split('.')[0].slice(0, 2).toUpperCase()
    : profile.name
        .split(/(?=[A-Z])|[- _]/)
        .map((str) => str.at(0))
        .join('');
}
