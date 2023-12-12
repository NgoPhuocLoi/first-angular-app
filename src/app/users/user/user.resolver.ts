import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import UserService from '../user.service';

export const userResolver: ResolveFn<{ id: number; name: string }> = (
  route,
  state
) => {
  const userService = inject(UserService);
  return userService.getUserById(+route.params['id']);
};
