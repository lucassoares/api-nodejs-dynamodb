const dynamoose = require('dynamoose');
const uuid = require('uuid');

dynamoose.AWS.config.update({
  region: 'us-east-1',
});

dynamoose.local();

const dogSchema = new dynamoose.Schema({
  id: {
    type: String,
    hashKey: true,
    default: uuid.v1(),
  },
  name: {
    type: String,
  },
  nickname:{
    type: String,
    required: true,
  }
},
{
  timestamps: true,
});

module.exports = dynamoose.model('Dog', dogSchema);