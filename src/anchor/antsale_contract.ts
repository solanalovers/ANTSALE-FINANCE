/**
 * Program IDL in camelCase format in order to be used in JS/TS.
 *
 * Note that this is only a type helper and is not the actual IDL. The original
 * IDL can be found at `target/idl/antsale_contract.json`.
 */
export type AntsaleContract = {
  address: 'GWtJnKUfMkQAGbJHDNHvPteizoD84SyXL3sFqUf9eghY';
  metadata: {
    name: 'antsaleContract';
    version: '0.1.0';
    spec: '0.1.0';
    description: 'Created with Anchor';
  };
  instructions: [
    {
      name: 'invest';
      discriminator: [13, 245, 180, 103, 254, 182, 121, 4];
      accounts: [
        {
          name: 'investor';
          writable: true;
          signer: true;
        },
        {
          name: 'investConfig';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [105, 110, 118, 101, 115, 116];
              },
              {
                kind: 'account';
                path: 'investor';
              }
            ];
          };
        },
        {
          name: 'destination';
          writable: true;
        },
        {
          name: 'systemProgram';
          address: '11111111111111111111111111111111';
        }
      ];
      args: [
        {
          name: 'amount';
          type: 'u64';
        }
      ];
    }
  ];
  accounts: [
    {
      name: 'investConfig';
      discriminator: [13, 210, 139, 136, 185, 244, 23, 39];
    }
  ];
  errors: [
    {
      code: 6000;
      name: 'publicKeyMismatch';
      msg: "The publicKey provide doesn't match with config publicKey";
    }
  ];
  types: [
    {
      name: 'investConfig';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'invested';
            type: 'u64';
          }
        ];
      };
    }
  ];
};
