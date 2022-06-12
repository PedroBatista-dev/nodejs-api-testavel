declare global {
    //import em linha para sobreescrever tipos globais;
    var testRequest: import('supertest').SuperTest<import('supertest').Test>;
  }
  
  export {};