const {createECDH} = require('crypto');
const {privateToPublic} = require('ethereumjs-util');

const generateKeyPair = () => {
  const ecdh = createECDH('secp256k1');
  ecdh.generateKeys();

  const privKey = prefix(ecdh.getPrivateKey('hex', 'compressed'));
  const pubKey = privateToPublic(privKey);

  return {privKey, pubKey}
}

const prefix = key => `0x${key}`;

const {privKey, pubKey} = generateKeyPair();
