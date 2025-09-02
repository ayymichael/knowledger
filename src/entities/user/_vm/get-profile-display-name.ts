import { Profile } from '../_domain/types';

export function getProfileDisplayName(profile: Profile) {
  return profile.name ? profile.name : profile.email;
}
