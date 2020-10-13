const { expect } = require('chai')
var redis = require("redis");
let client

describe('Redis', () => {
  
  before(() => {
    client = require('../src/dbClient')
  })
  
  it('should connect to Redis', () => {
    expect(client.connected).to.eql(true)
  })
})
