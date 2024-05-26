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
      "name": "createProject",
      "discriminator": [
        148,
        219,
        181,
        42,
        221,
        114,
        145,
        190
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
            "seeds": []
          }
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "createProjectArgs",
          "type": {
            "defined": {
              "name": "createProjectArgs"
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
    },
    {
      "name": "project",
      "discriminator": [
        205,
        168,
        189,
        202,
        181,
        247,
        142,
        19
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
      "name": "createProjectArgs",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "projectType",
            "type": {
              "defined": {
                "name": "projectType"
              }
            }
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
            "name": "feeOption",
            "type": "i32"
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
            "type": "i32"
          },
          {
            "name": "softCap",
            "type": "i32"
          },
          {
            "name": "hardCap",
            "type": "i32"
          },
          {
            "name": "minBuy",
            "type": "i32"
          },
          {
            "name": "maxBuy",
            "type": "i32"
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
            "type": "i32"
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
          },
          {
            "name": "presaleRate",
            "type": "i32"
          },
          {
            "name": "listingRate",
            "type": "i32"
          },
          {
            "name": "refundType",
            "type": {
              "defined": {
                "name": "refundType"
              }
            }
          },
          {
            "name": "totalSale",
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
      "name": "project",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "projectType",
            "type": {
              "defined": {
                "name": "projectType"
              }
            }
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
            "name": "feeOption",
            "type": "i32"
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
            "type": "i32"
          },
          {
            "name": "softCap",
            "type": "i32"
          },
          {
            "name": "hardCap",
            "type": "i32"
          },
          {
            "name": "minBuy",
            "type": "i32"
          },
          {
            "name": "maxBuy",
            "type": "i32"
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
            "type": "i32"
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
          },
          {
            "name": "presaleRate",
            "type": "i32"
          },
          {
            "name": "listingRate",
            "type": "i32"
          },
          {
            "name": "refundType",
            "type": {
              "defined": {
                "name": "refundType"
              }
            }
          },
          {
            "name": "totalSale",
            "type": "i32"
          }
        ]
      }
    },
    {
      "name": "projectType",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "presale"
          },
          {
            "name": "fairLaunch"
          }
        ]
      }
    },
    {
      "name": "refundType",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "refund"
          },
          {
            "name": "burn"
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
            "name": "rayidum"
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
