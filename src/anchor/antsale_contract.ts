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
      "name": "claimFairLaunch",
      "discriminator": [
        157,
        184,
        177,
        25,
        21,
        175,
        252,
        182
      ],
      "accounts": [
        {
          "name": "investor",
          "writable": true,
          "signer": true
        },
        {
          "name": "vaultPda",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  118,
                  97,
                  117,
                  108,
                  116
                ]
              }
            ]
          }
        },
        {
          "name": "mint"
        },
        {
          "name": "project",
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
                "kind": "arg",
                "path": "projectId"
              }
            ]
          }
        },
        {
          "name": "projectCounter",
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
                  104,
                  95,
                  99,
                  111,
                  117,
                  110,
                  116,
                  101,
                  114
                ]
              },
              {
                "kind": "arg",
                "path": "projectId"
              }
            ]
          }
        },
        {
          "name": "investCounter",
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
                  116,
                  95,
                  99,
                  111,
                  117,
                  110,
                  116,
                  101,
                  114
                ]
              },
              {
                "kind": "arg",
                "path": "projectId"
              },
              {
                "kind": "account",
                "path": "investor"
              }
            ]
          }
        },
        {
          "name": "claimRecord",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  99,
                  108,
                  97,
                  105,
                  109,
                  101,
                  100
                ]
              },
              {
                "kind": "arg",
                "path": "projectId"
              },
              {
                "kind": "account",
                "path": "investor"
              }
            ]
          }
        },
        {
          "name": "vaultPdaAta",
          "writable": true
        },
        {
          "name": "toAta",
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
        }
      ]
    },
    {
      "name": "claimPresale",
      "discriminator": [
        82,
        240,
        122,
        5,
        109,
        66,
        86,
        190
      ],
      "accounts": [
        {
          "name": "investor",
          "writable": true,
          "signer": true
        },
        {
          "name": "vaultPda"
        },
        {
          "name": "mint"
        },
        {
          "name": "project",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  114,
                  101,
                  115,
                  97,
                  108,
                  101
                ]
              },
              {
                "kind": "arg",
                "path": "projectId"
              }
            ]
          }
        },
        {
          "name": "investCounter",
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
                  116,
                  95,
                  99,
                  111,
                  117,
                  110,
                  116,
                  101,
                  114
                ]
              },
              {
                "kind": "arg",
                "path": "projectId"
              },
              {
                "kind": "account",
                "path": "investor"
              }
            ]
          }
        },
        {
          "name": "claimRecord",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  99,
                  108,
                  97,
                  105,
                  109,
                  101,
                  100
                ]
              },
              {
                "kind": "arg",
                "path": "projectId"
              },
              {
                "kind": "account",
                "path": "investor"
              }
            ]
          }
        },
        {
          "name": "vaultPdaAta",
          "writable": true
        },
        {
          "name": "toAta",
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
        }
      ]
    },
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
                "kind": "arg",
                "path": "projectId"
              }
            ]
          }
        },
        {
          "name": "projectCounter",
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
                  104,
                  95,
                  99,
                  111,
                  117,
                  110,
                  116,
                  101,
                  114
                ]
              },
              {
                "kind": "arg",
                "path": "projectId"
              }
            ]
          }
        },
        {
          "name": "vaultPdaAta",
          "writable": true
        },
        {
          "name": "fromAta",
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
      "name": "createPresale",
      "discriminator": [
        176,
        144,
        197,
        158,
        61,
        119,
        75,
        135
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
                  112,
                  114,
                  101,
                  115,
                  97,
                  108,
                  101
                ]
              },
              {
                "kind": "arg",
                "path": "projectId"
              }
            ]
          }
        },
        {
          "name": "projectCounter",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  114,
                  101,
                  115,
                  97,
                  108,
                  101,
                  95,
                  99,
                  111,
                  117,
                  110,
                  116,
                  101,
                  114
                ]
              },
              {
                "kind": "arg",
                "path": "projectId"
              }
            ]
          }
        },
        {
          "name": "vaultPdaAta",
          "writable": true
        },
        {
          "name": "fromAta",
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
              "name": "presaleConfig"
            }
          }
        }
      ]
    },
    {
      "name": "finalize",
      "discriminator": [
        171,
        61,
        218,
        56,
        127,
        115,
        12,
        217
      ],
      "accounts": [
        {
          "name": "bot",
          "writable": true,
          "signer": true
        },
        {
          "name": "vaultPda",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  118,
                  97,
                  117,
                  108,
                  116
                ]
              }
            ]
          }
        },
        {
          "name": "mint"
        },
        {
          "name": "project",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  114,
                  101,
                  115,
                  97,
                  108,
                  101
                ]
              },
              {
                "kind": "arg",
                "path": "projectId"
              }
            ]
          }
        },
        {
          "name": "projectCounter",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  114,
                  101,
                  115,
                  97,
                  108,
                  101,
                  95,
                  99,
                  111,
                  117,
                  110,
                  116,
                  101,
                  114
                ]
              },
              {
                "kind": "arg",
                "path": "projectId"
              }
            ]
          }
        },
        {
          "name": "creator"
        },
        {
          "name": "finalizeRecord",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  114,
                  101,
                  115,
                  97,
                  108,
                  101,
                  95,
                  99,
                  111,
                  117,
                  110,
                  116,
                  101,
                  114
                ]
              },
              {
                "kind": "arg",
                "path": "projectId"
              },
              {
                "kind": "const",
                "value": [
                  102,
                  105,
                  110,
                  97,
                  108,
                  105,
                  122,
                  101
                ]
              }
            ]
          }
        },
        {
          "name": "vaultPdaAta",
          "writable": true
        },
        {
          "name": "toAta",
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
    },
    {
      "name": "investFairLaunch",
      "discriminator": [
        54,
        173,
        36,
        229,
        88,
        225,
        229,
        236
      ],
      "accounts": [
        {
          "name": "investor",
          "writable": true,
          "signer": true
        },
        {
          "name": "project",
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
                "kind": "arg",
                "path": "projectId"
              }
            ]
          }
        },
        {
          "name": "projectCounter",
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
                  104,
                  95,
                  99,
                  111,
                  117,
                  110,
                  116,
                  101,
                  114
                ]
              },
              {
                "kind": "arg",
                "path": "projectId"
              }
            ]
          }
        },
        {
          "name": "investCounter",
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
                  116,
                  95,
                  99,
                  111,
                  117,
                  110,
                  116,
                  101,
                  114
                ]
              },
              {
                "kind": "arg",
                "path": "projectId"
              },
              {
                "kind": "account",
                "path": "investor"
              }
            ]
          }
        },
        {
          "name": "vaultPda",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  118,
                  97,
                  117,
                  108,
                  116
                ]
              }
            ]
          }
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
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "investPresale",
      "discriminator": [
        102,
        191,
        56,
        37,
        13,
        218,
        37,
        0
      ],
      "accounts": [
        {
          "name": "investor",
          "writable": true,
          "signer": true
        },
        {
          "name": "project",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  114,
                  101,
                  115,
                  97,
                  108,
                  101
                ]
              },
              {
                "kind": "arg",
                "path": "projectId"
              }
            ]
          }
        },
        {
          "name": "projectCounter",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  114,
                  101,
                  115,
                  97,
                  108,
                  101,
                  95,
                  99,
                  111,
                  117,
                  110,
                  116,
                  101,
                  114
                ]
              },
              {
                "kind": "arg",
                "path": "projectId"
              }
            ]
          }
        },
        {
          "name": "investCounter",
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
                  116,
                  95,
                  99,
                  111,
                  117,
                  110,
                  116,
                  101,
                  114
                ]
              },
              {
                "kind": "arg",
                "path": "projectId"
              },
              {
                "kind": "account",
                "path": "investor"
              }
            ]
          }
        },
        {
          "name": "vaultPda",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  118,
                  97,
                  117,
                  108,
                  116
                ]
              }
            ]
          }
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
      "name": "fairLaunchCounter",
      "discriminator": [
        93,
        78,
        23,
        98,
        32,
        238,
        121,
        252
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
    },
    {
      "name": "investorCounter",
      "discriminator": [
        251,
        167,
        25,
        236,
        170,
        228,
        32,
        52
      ]
    },
    {
      "name": "presale",
      "discriminator": [
        38,
        215,
        222,
        14,
        115,
        220,
        52,
        168
      ]
    },
    {
      "name": "presaleCounter",
      "discriminator": [
        55,
        28,
        58,
        62,
        225,
        130,
        222,
        197
      ]
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "publicKeyMismatch",
      "msg": "The publicKey provide doesn't match with config publicKey"
    },
    {
      "code": 6001,
      "name": "invalidTimestamp",
      "msg": "Time for this project is invalid"
    },
    {
      "code": 6002,
      "name": "invalidProjectConfig",
      "msg": "This project have invalid config"
    },
    {
      "code": 6003,
      "name": "invalidInvestmentTime",
      "msg": "Too early or too late to invest"
    },
    {
      "code": 6004,
      "name": "exceededQuantity",
      "msg": "Exceeded quantity purchased"
    },
    {
      "code": 6005,
      "name": "notClaimTime"
    },
    {
      "code": 6006,
      "name": "notFinalizeTime"
    },
    {
      "code": 6007,
      "name": "cannotFinalize"
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
          },
          {
            "name": "creator",
            "type": "pubkey"
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
            "name": "maxBuy",
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
            "type": "u32"
          }
        ]
      }
    },
    {
      "name": "fairLaunchCounter",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "totalAmount",
            "type": "u64"
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
      "name": "investorCounter",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "projectId",
            "type": "string"
          },
          {
            "name": "wallet",
            "type": "pubkey"
          },
          {
            "name": "totalInvestedAmount",
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
      "name": "presale",
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
                "name": "presaleConfig"
              }
            }
          },
          {
            "name": "creator",
            "type": "pubkey"
          }
        ]
      }
    },
    {
      "name": "presaleConfig",
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
            "name": "presaleRate",
            "type": "u32"
          },
          {
            "name": "listingRate",
            "type": {
              "option": "u32"
            }
          },
          {
            "name": "softCap",
            "type": "f32"
          },
          {
            "name": "hardCap",
            "type": "f32"
          },
          {
            "name": "minBuy",
            "type": "f32"
          },
          {
            "name": "maxBuy",
            "type": "f32"
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
          },
          {
            "name": "refundType",
            "type": {
              "defined": {
                "name": "refundType"
              }
            }
          }
        ]
      }
    },
    {
      "name": "presaleCounter",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "remaining",
            "type": "u64"
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
