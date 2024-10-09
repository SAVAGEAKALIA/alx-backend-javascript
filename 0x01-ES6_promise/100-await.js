import { createUser, uploadPhoto } from './utils';

export default async function asyncUploadUser() {
  try {
    const [user, photo] = await Promise.all([createUser(), uploadPhoto()]);
    const result = { user, photo };
    return result;
  } catch (err) {
    return { user: null, photo: null };
  }
}
