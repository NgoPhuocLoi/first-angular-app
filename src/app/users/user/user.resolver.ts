import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import UserService from '../user.service';
import User from '../user.model';

export const userResolver: ResolveFn<User> = (route, state) => {
  const userService = inject(UserService);
  return userService.getUserById(+route.params['id']);
};
