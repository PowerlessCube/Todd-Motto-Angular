import { FileSizePipe } from './file-size.pipe';

describe('FileSizePipe', () => {
  // Pipe Unit test - it's tested in isolation.
  describe('Isolate FileSize test', () => {
    const pipe = new FileSizePipe()

    it('should convert bytes to megabytes', () => {
      expect(pipe.transform(123456789)).toBe('117.74MB');
      expect(pipe.transform(987654321)).toBe('941.90MB');
    });
    
    it('should use the default extension when not supplied', () => {
      expect(pipe.transform(123456789)).toBe('117.74MB');
      expect(pipe.transform(987654321)).toBe('941.90MB');

    });
    // Checks that we can override our extension with something else.
    it('should override the extension when supplied', () => {
      expect(pipe.transform(123456789, 'myExt')).toBe('117.74myExt');
      expect(pipe.transform(987654321, 'anotherExt')).toBe('941.90anotherExt');
    });
  })

});