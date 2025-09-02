import getProfileLetters from './get-profile-letters';

describe('get profile letters', () => {
  test('should split by .', () => {
    const res = getProfileLetters({
      email: 'mikhail.panferov@example.com',
    });

    expect(res).toBe('MP');
  });

  test('should split by -', () => {
    const res = getProfileLetters({
      email: 'mikhail.panferov@example.com',
      name: 'Mikhail-Panferov',
    });

    expect(res).toBe('MP');
  });

  test('should split by space', () => {
    const res = getProfileLetters({
      email: 'mikhail.panferov@example.com',
      name: 'Mikhail Panferov',
    });

    expect(res).toBe('MP');
  });

  test('should return 2 letters if there is no separator', () => {
    const res = getProfileLetters({
      email: 'mikhail.panferov@example.com',
      name: 'MikhailPanferov',
    });

    expect(res).toBe('MP');
  });

  test('should return 2 letters if there is no separator in email', () => {
    const res = getProfileLetters({
      email: 'admin@example.com',
    });

    expect(res).toBe('AD');
  });

  test('should return 2 letters if there is empty name', () => {
    const res = getProfileLetters({
      email: 'admin@example.com',
      name: '',
    });

    expect(res).toBe('AD');
  });

  test('should work with short names', () => {
    const res = getProfileLetters({
      email: 'admin@gmail.com',
      name: 'M',
    });

    expect(res).toEqual('M');
  });
});
