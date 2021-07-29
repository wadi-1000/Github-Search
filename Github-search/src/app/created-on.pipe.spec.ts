import { CreatedOnPipe } from './created-on.pipe';

describe('CreatedOnPipe', () => {
  it('create an instance', () => {
    const pipe = new CreatedOnPipe();
    expect(pipe).toBeTruthy();
  });
});
