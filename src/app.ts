function orderError(error: string) {
  throw new Error(error);
}

orderError('Something went wrong');
