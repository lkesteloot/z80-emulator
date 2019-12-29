# z80-emulator

This is a TypeScript-based Z80 emulator. It passes the 1356 tests of the
[z80-test](https://github.com/lkesteloot/z80-test) project. The code
that executes the opcodes (`Decode.ts`) is generated by the
`GenerateOpcodes.ts` program and the various data files in the `opcodes`
directory:

    % npm install
    % npm run generate

To run the regression suite:

    % npm run test

To use the Z80 in your own project, implement the `Hal` interface.
See the [TRS-80 Model III emulator](https://github.com/lkesteloot/trs80-emulator)
project for an example.

# License

MIT

