export default {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  transform: {
      "^.+\\.tsx?$": "ts-jest" 
  // process `*.tsx` files with `ts-jest`
  },
  moduleNameMapper: {
    '\\.(gif|ttf|eot|svg|png|css)$':
     '<rootDir>/tests/__mocks__/styleMock.ts',
   },
   setupFilesAfterEnv: [
    '<rootDir>/tests/__mocks__/styleMock.ts',
 ], }