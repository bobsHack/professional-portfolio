export default {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy'
  },
  testMatch: [
    '**/__tests__/**/*.[jt]s?(x)',
    '**/?(*.)+(spec|test).[jt]s?(x)'
  ],
  testPathIgnorePatterns: [
    '/node_modules/',
    '/e2e/',
    '/dist/',
    '/.playwright/'
  ],
  collectCoverageFrom: [
    'src/**/*.{js,jsx}',
    '!src/**/*.stories.{js,jsx}',
    '!src/**/index.{js,jsx}',
    '!src/main.jsx',
    '!src/**/*.d.ts'
  ],
  coverageThreshold: {
    global: {
      branches: 0,  // Disabled for now - will be increased as tests are added
      functions: 0,
      lines: 0,
      statements: 0
    }
  },
  coverageReporters: ['text', 'lcov', 'html'],
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest'
  },
  moduleFileExtensions: ['js', 'jsx', 'json'],
  testTimeout: 10000
};
