import { test, expect } from '@playwright/test';

test('Demo Reqres API test', async ({ request }) => {
  // Arrange
  const expectedEmail = 'janet.weaver@reqres.in';

  // Act
  const response = await request.get('https://reqres.in/api/users/2');
  const body = await response.json();

  // Assert
  expect(response.status()).toBe(200);
  expect(body.data.email).toBe(expectedEmail);
});