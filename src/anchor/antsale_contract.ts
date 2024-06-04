/**
 * Program IDL in camelCase format in order to be used in JS/TS.
 *
 * Note that this is only a type helper and is not the actual IDL. The original
 * IDL can be found at `target/idl/antsale_contract.json`.
 */
export type AntsaleContract = {
  "address": "GWtJnKUfMkQAGbJHDNHvPteizoD84SyXL3sFqUf9eghY",
  "metadata": {
    "name": "antsaleContract",
    "version": "0.1.0",
    "spec": "0.1.0",
    "description": "Created with Anchor"
  },
  "instructions": [
    {
      "name": "createFairLaunch",
      "discriminator": [
        124,
        57,
        210,
        172,
        172,
        17,
        70,
        157
      ],
      "accounts": [
        {
          "name": "creator",
          "writable": true,
          "signer": true
        },
        {
          "name": "mint"
        },
        {
          "name": "project",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  102,
                  97,
                  105,
                  114,
                  95,
                  108,
                  97,
                  117,
                  110,
                  99,
                  104
                ]
              },
              {
                "kind": "account",
                "path": "creator"
              },
              {
                "kind": "arg",
                "path": "projectId"
              }
            ]
          }
        },
        {
          "name": "fromAta",
          "writable": true
        },
        {
          "name": "vaultAta",
          "writable": true
        },
        {
          "name": "tokenProgram"
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "projectId",
          "type": "string"
        },
        {
          "name": "config",
          "type": {
            "defined": {
              "name": "fairLaunchConfig"
            }
          }
        }
      ]
    },
    {
      "name": "invest",
      "discriminator": [
        13,
        245,
        180,
        103,
        254,
        182,
        121,
        4
      ],
      "accounts": [
        {
          "name": "investor",
          "writable": true,
          "signer": true
        },
        {
          "name": "investConfig",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  105,
                  110,
                  118,
                  101,
                  115,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "investor"
              }
            ]
          }
        },
        {
          "name": "destination",
          "writable": true
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "fairLaunch",
      "discriminator": [
        66,
        0,
        62,
        83,
        227,
        66,
        175,
        18
      ]
    },
    {
      "name": "investConfig",
      "discriminator": [
        13,
        210,
        139,
        136,
        185,
        244,
        23,
        39
      ]
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "publicKeyMismatch",
      "msg": "The publicKey provide doesn't match with config publicKey"
    }
  ],
  "types": [
    {
      "name": "fairLaunch",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "id",
            "type": "string"
          },
          {
            "name": "tokenAddress",
            "type": "pubkey"
          },
          {
            "name": "currency",
            "type": {
              "option": "pubkey"
            }
          },
          {
            "name": "config",
            "type": {
              "defined": {
                "name": "fairLaunchConfig"
              }
            }
          }
        ]
      }
    },
    {
      "name": "fairLaunchConfig",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "feeOption",
            "type": "f32"
          },
          {
            "name": "listingOption",
            "type": {
              "defined": {
                "name": "listingOption"
              }
            }
          },
          {
            "name": "saleType",
            "type": {
              "defined": {
                "name": "saleType"
              }
            }
          },
          {
            "name": "totalSellingAmount",
            "type": "f32"
          },
          {
            "name": "softCap",
            "type": "f32"
          },
          {
            "name": "hardCap",
            "type": {
              "option": "f32"
            }
          },
          {
            "name": "router",
            "type": {
              "defined": {
                "name": "router"
              }
            }
          },
          {
            "name": "liquidityPercent",
            "type": "f32"
          },
          {
            "name": "startTime",
            "type": "i64"
          },
          {
            "name": "endTime",
            "type": "i64"
          },
          {
            "name": "liquidityType",
            "type": {
              "defined": {
                "name": "liquidityType"
              }
            }
          },
          {
            "name": "liquidityLockupTime",
            "type": "i32"
          }
        ]
      }
    },
    {
      "name": "investConfig",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "invested",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "liquidityType",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "autoLocking"
          },
          {
            "name": "autoBurning"
          }
        ]
      }
    },
    {
      "name": "listingOption",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "autoListing"
          },
          {
            "name": "manualListing"
          }
        ]
      }
    },
    {
      "name": "router",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "raydium"
          }
        ]
      }
    },
    {
      "name": "saleType",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "public"
          },
          {
            "name": "private"
          }
        ]
      }
    }
  ]
};
