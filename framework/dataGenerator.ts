import { faker } from '@faker-js/faker';

export function businessName(): string {
  return removeChars(faker.company.name());
}

export function fullName(): string {
  return removeChars(faker.person.fullName());
}

export function email(): string {
  return faker.internet.email();
}

export function phone(): string {
  return faker.phone.number('(###) ###-####');
}

export function invalidEmail(): string {
  const createInvalidEmails = [
    () => faker.internet.userName() + '@.',
    () => '@' + faker.internet.domainName(),
    () => faker.internet.userName() + '@' + faker.internet.domainName() + '..',
    () => faker.internet.userName() + '@example,com',
    () => faker.internet.userName() + 'example.com'
  ];

  const randomIndex = Math.floor(Math.random() * createInvalidEmails.length);
  return createInvalidEmails[randomIndex]();
}

export function generateData() {
  return {
    BUSINESS_NAME: businessName(),
    FULL_NAME: fullName(),
    EMAIL: email(),
    INVALID_EMAIL: invalidEmail(),
    PHONE: phone()
  };
}


function removeChars(str: string): string {
  return str.replace(/[^a-zA-Z\s]/g, '').replace(/\s{2,}/g, ' ').trim()
}