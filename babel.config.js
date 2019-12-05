const presets = [
    [
      "@babel/preset-env",
      {
        targets: {
          "browsers": ["last 10 versions"]
        },
        useBuiltIns: "usage",
      },
    ],
  ];