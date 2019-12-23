import {Z80} from "../src/Z80";
import {toHex} from "z80-test/dist";

export function decode(z80: Z80): void {
    const inst = z80.fetch();
    z80.regs.r = (z80.regs.r + 1) & 0xFF;

    switch (inst) {
        
        // The content of this switch is auto-generated by GenerateOpcodes.ts.

        case 0x00: { // 0x00 NOP
            break;
        }

        case 0x01: { // 0x01 LD BC,nnnn
            break;
        }

        case 0x02: { // 0x02 LD (BC),A
            break;
        }

        case 0x03: { // 0x03 INC BC
            break;
        }

        case 0x04: { // 0x04 INC B
            break;
        }

        case 0x05: { // 0x05 DEC B
            break;
        }

        case 0x06: { // 0x06 LD B,nn
            break;
        }

        case 0x07: { // 0x07 RLCA
            break;
        }

        case 0x08: { // 0x08 EX AF,AF'
            break;
        }

        case 0x09: { // 0x09 ADD HL,BC
            break;
        }

        case 0x0A: { // 0x0a LD A,(BC)
            break;
        }

        case 0x0B: { // 0x0b DEC BC
            break;
        }

        case 0x0C: { // 0x0c INC C
            break;
        }

        case 0x0D: { // 0x0d DEC C
            break;
        }

        case 0x0E: { // 0x0e LD C,nn
            break;
        }

        case 0x0F: { // 0x0f RRCA
            break;
        }

        case 0x10: { // 0x10 DJNZ offset
            break;
        }

        case 0x11: { // 0x11 LD DE,nnnn
            break;
        }

        case 0x12: { // 0x12 LD (DE),A
            break;
        }

        case 0x13: { // 0x13 INC DE
            break;
        }

        case 0x14: { // 0x14 INC D
            break;
        }

        case 0x15: { // 0x15 DEC D
            break;
        }

        case 0x16: { // 0x16 LD D,nn
            break;
        }

        case 0x17: { // 0x17 RLA
            break;
        }

        case 0x18: { // 0x18 JR offset
            break;
        }

        case 0x19: { // 0x19 ADD HL,DE
            break;
        }

        case 0x1A: { // 0x1a LD A,(DE)
            break;
        }

        case 0x1B: { // 0x1b DEC DE
            break;
        }

        case 0x1C: { // 0x1c INC E
            break;
        }

        case 0x1D: { // 0x1d DEC E
            break;
        }

        case 0x1E: { // 0x1e LD E,nn
            break;
        }

        case 0x1F: { // 0x1f RRA
            break;
        }

        case 0x20: { // 0x20 JR NZ,offset
            break;
        }

        case 0x21: { // 0x21 LD HL,nnnn
            break;
        }

        case 0x22: { // 0x22 LD (nnnn),HL
            break;
        }

        case 0x23: { // 0x23 INC HL
            break;
        }

        case 0x24: { // 0x24 INC H
            break;
        }

        case 0x25: { // 0x25 DEC H
            break;
        }

        case 0x26: { // 0x26 LD H,nn
            break;
        }

        case 0x27: { // 0x27 DAA
            break;
        }

        case 0x28: { // 0x28 JR Z,offset
            break;
        }

        case 0x29: { // 0x29 ADD HL,HL
            break;
        }

        case 0x2A: { // 0x2a LD HL,(nnnn)
            break;
        }

        case 0x2B: { // 0x2b DEC HL
            break;
        }

        case 0x2C: { // 0x2c INC L
            break;
        }

        case 0x2D: { // 0x2d DEC L
            break;
        }

        case 0x2E: { // 0x2e LD L,nn
            break;
        }

        case 0x2F: { // 0x2f CPL
            break;
        }

        case 0x30: { // 0x30 JR NC,offset
            break;
        }

        case 0x31: { // 0x31 LD SP,nnnn
            break;
        }

        case 0x32: { // 0x32 LD (nnnn),A
            break;
        }

        case 0x33: { // 0x33 INC SP
            break;
        }

        case 0x34: { // 0x34 INC (HL)
            break;
        }

        case 0x35: { // 0x35 DEC (HL)
            break;
        }

        case 0x36: { // 0x36 LD (HL),nn
            break;
        }

        case 0x37: { // 0x37 SCF
            break;
        }

        case 0x38: { // 0x38 JR C,offset
            break;
        }

        case 0x39: { // 0x39 ADD HL,SP
            break;
        }

        case 0x3A: { // 0x3a LD A,(nnnn)
            break;
        }

        case 0x3B: { // 0x3b DEC SP
            break;
        }

        case 0x3C: { // 0x3c INC A
            break;
        }

        case 0x3D: { // 0x3d DEC A
            break;
        }

        case 0x3E: { // 0x3e LD A,nn
            break;
        }

        case 0x3F: { // 0x3f CCF
            break;
        }

        case 0x40: { // 0x40 LD B,B
            break;
        }

        case 0x41: { // 0x41 LD B,C
            z80.regs.b = z80.regs.c;
            break;
        }

        case 0x42: { // 0x42 LD B,D
            z80.regs.b = z80.regs.d;
            break;
        }

        case 0x43: { // 0x43 LD B,E
            z80.regs.b = z80.regs.e;
            break;
        }

        case 0x44: { // 0x44 LD B,H
            z80.regs.b = z80.regs.h;
            break;
        }

        case 0x45: { // 0x45 LD B,L
            z80.regs.b = z80.regs.l;
            break;
        }

        case 0x46: { // 0x46 LD B,(HL)
            break;
        }

        case 0x47: { // 0x47 LD B,A
            z80.regs.b = z80.regs.a;
            break;
        }

        case 0x48: { // 0x48 LD C,B
            z80.regs.c = z80.regs.b;
            break;
        }

        case 0x49: { // 0x49 LD C,C
            break;
        }

        case 0x4A: { // 0x4a LD C,D
            z80.regs.c = z80.regs.d;
            break;
        }

        case 0x4B: { // 0x4b LD C,E
            z80.regs.c = z80.regs.e;
            break;
        }

        case 0x4C: { // 0x4c LD C,H
            z80.regs.c = z80.regs.h;
            break;
        }

        case 0x4D: { // 0x4d LD C,L
            z80.regs.c = z80.regs.l;
            break;
        }

        case 0x4E: { // 0x4e LD C,(HL)
            break;
        }

        case 0x4F: { // 0x4f LD C,A
            z80.regs.c = z80.regs.a;
            break;
        }

        case 0x50: { // 0x50 LD D,B
            z80.regs.d = z80.regs.b;
            break;
        }

        case 0x51: { // 0x51 LD D,C
            z80.regs.d = z80.regs.c;
            break;
        }

        case 0x52: { // 0x52 LD D,D
            break;
        }

        case 0x53: { // 0x53 LD D,E
            z80.regs.d = z80.regs.e;
            break;
        }

        case 0x54: { // 0x54 LD D,H
            z80.regs.d = z80.regs.h;
            break;
        }

        case 0x55: { // 0x55 LD D,L
            z80.regs.d = z80.regs.l;
            break;
        }

        case 0x56: { // 0x56 LD D,(HL)
            break;
        }

        case 0x57: { // 0x57 LD D,A
            z80.regs.d = z80.regs.a;
            break;
        }

        case 0x58: { // 0x58 LD E,B
            z80.regs.e = z80.regs.b;
            break;
        }

        case 0x59: { // 0x59 LD E,C
            z80.regs.e = z80.regs.c;
            break;
        }

        case 0x5A: { // 0x5a LD E,D
            z80.regs.e = z80.regs.d;
            break;
        }

        case 0x5B: { // 0x5b LD E,E
            break;
        }

        case 0x5C: { // 0x5c LD E,H
            z80.regs.e = z80.regs.h;
            break;
        }

        case 0x5D: { // 0x5d LD E,L
            z80.regs.e = z80.regs.l;
            break;
        }

        case 0x5E: { // 0x5e LD E,(HL)
            break;
        }

        case 0x5F: { // 0x5f LD E,A
            z80.regs.e = z80.regs.a;
            break;
        }

        case 0x60: { // 0x60 LD H,B
            z80.regs.h = z80.regs.b;
            break;
        }

        case 0x61: { // 0x61 LD H,C
            z80.regs.h = z80.regs.c;
            break;
        }

        case 0x62: { // 0x62 LD H,D
            z80.regs.h = z80.regs.d;
            break;
        }

        case 0x63: { // 0x63 LD H,E
            z80.regs.h = z80.regs.e;
            break;
        }

        case 0x64: { // 0x64 LD H,H
            break;
        }

        case 0x65: { // 0x65 LD H,L
            z80.regs.h = z80.regs.l;
            break;
        }

        case 0x66: { // 0x66 LD H,(HL)
            break;
        }

        case 0x67: { // 0x67 LD H,A
            z80.regs.h = z80.regs.a;
            break;
        }

        case 0x68: { // 0x68 LD L,B
            z80.regs.l = z80.regs.b;
            break;
        }

        case 0x69: { // 0x69 LD L,C
            z80.regs.l = z80.regs.c;
            break;
        }

        case 0x6A: { // 0x6a LD L,D
            z80.regs.l = z80.regs.d;
            break;
        }

        case 0x6B: { // 0x6b LD L,E
            z80.regs.l = z80.regs.e;
            break;
        }

        case 0x6C: { // 0x6c LD L,H
            z80.regs.l = z80.regs.h;
            break;
        }

        case 0x6D: { // 0x6d LD L,L
            break;
        }

        case 0x6E: { // 0x6e LD L,(HL)
            break;
        }

        case 0x6F: { // 0x6f LD L,A
            z80.regs.l = z80.regs.a;
            break;
        }

        case 0x70: { // 0x70 LD (HL),B
            break;
        }

        case 0x71: { // 0x71 LD (HL),C
            break;
        }

        case 0x72: { // 0x72 LD (HL),D
            break;
        }

        case 0x73: { // 0x73 LD (HL),E
            break;
        }

        case 0x74: { // 0x74 LD (HL),H
            break;
        }

        case 0x75: { // 0x75 LD (HL),L
            break;
        }

        case 0x76: { // 0x76 HALT
            break;
        }

        case 0x77: { // 0x77 LD (HL),A
            break;
        }

        case 0x78: { // 0x78 LD A,B
            z80.regs.a = z80.regs.b;
            break;
        }

        case 0x79: { // 0x79 LD A,C
            z80.regs.a = z80.regs.c;
            break;
        }

        case 0x7A: { // 0x7a LD A,D
            z80.regs.a = z80.regs.d;
            break;
        }

        case 0x7B: { // 0x7b LD A,E
            z80.regs.a = z80.regs.e;
            break;
        }

        case 0x7C: { // 0x7c LD A,H
            z80.regs.a = z80.regs.h;
            break;
        }

        case 0x7D: { // 0x7d LD A,L
            z80.regs.a = z80.regs.l;
            break;
        }

        case 0x7E: { // 0x7e LD A,(HL)
            break;
        }

        case 0x7F: { // 0x7f LD A,A
            break;
        }

        case 0x80: { // 0x80 ADD A,B
            break;
        }

        case 0x81: { // 0x81 ADD A,C
            break;
        }

        case 0x82: { // 0x82 ADD A,D
            break;
        }

        case 0x83: { // 0x83 ADD A,E
            break;
        }

        case 0x84: { // 0x84 ADD A,H
            break;
        }

        case 0x85: { // 0x85 ADD A,L
            break;
        }

        case 0x86: { // 0x86 ADD A,(HL)
            break;
        }

        case 0x87: { // 0x87 ADD A,A
            break;
        }

        case 0x88: { // 0x88 ADC A,B
            break;
        }

        case 0x89: { // 0x89 ADC A,C
            break;
        }

        case 0x8A: { // 0x8a ADC A,D
            break;
        }

        case 0x8B: { // 0x8b ADC A,E
            break;
        }

        case 0x8C: { // 0x8c ADC A,H
            break;
        }

        case 0x8D: { // 0x8d ADC A,L
            break;
        }

        case 0x8E: { // 0x8e ADC A,(HL)
            break;
        }

        case 0x8F: { // 0x8f ADC A,A
            break;
        }

        case 0x90: { // 0x90 SUB A,B
            break;
        }

        case 0x91: { // 0x91 SUB A,C
            break;
        }

        case 0x92: { // 0x92 SUB A,D
            break;
        }

        case 0x93: { // 0x93 SUB A,E
            break;
        }

        case 0x94: { // 0x94 SUB A,H
            break;
        }

        case 0x95: { // 0x95 SUB A,L
            break;
        }

        case 0x96: { // 0x96 SUB A,(HL)
            break;
        }

        case 0x97: { // 0x97 SUB A,A
            break;
        }

        case 0x98: { // 0x98 SBC A,B
            break;
        }

        case 0x99: { // 0x99 SBC A,C
            break;
        }

        case 0x9A: { // 0x9a SBC A,D
            break;
        }

        case 0x9B: { // 0x9b SBC A,E
            break;
        }

        case 0x9C: { // 0x9c SBC A,H
            break;
        }

        case 0x9D: { // 0x9d SBC A,L
            break;
        }

        case 0x9E: { // 0x9e SBC A,(HL)
            break;
        }

        case 0x9F: { // 0x9f SBC A,A
            break;
        }

        case 0xA0: { // 0xa0 AND A,B
            break;
        }

        case 0xA1: { // 0xa1 AND A,C
            break;
        }

        case 0xA2: { // 0xa2 AND A,D
            break;
        }

        case 0xA3: { // 0xa3 AND A,E
            break;
        }

        case 0xA4: { // 0xa4 AND A,H
            break;
        }

        case 0xA5: { // 0xa5 AND A,L
            break;
        }

        case 0xA6: { // 0xa6 AND A,(HL)
            break;
        }

        case 0xA7: { // 0xa7 AND A,A
            break;
        }

        case 0xA8: { // 0xa8 XOR A,B
            break;
        }

        case 0xA9: { // 0xa9 XOR A,C
            break;
        }

        case 0xAA: { // 0xaa XOR A,D
            break;
        }

        case 0xAB: { // 0xab XOR A,E
            break;
        }

        case 0xAC: { // 0xac XOR A,H
            break;
        }

        case 0xAD: { // 0xad XOR A,L
            break;
        }

        case 0xAE: { // 0xae XOR A,(HL)
            break;
        }

        case 0xAF: { // 0xaf XOR A,A
            break;
        }

        case 0xB0: { // 0xb0 OR A,B
            break;
        }

        case 0xB1: { // 0xb1 OR A,C
            break;
        }

        case 0xB2: { // 0xb2 OR A,D
            break;
        }

        case 0xB3: { // 0xb3 OR A,E
            break;
        }

        case 0xB4: { // 0xb4 OR A,H
            break;
        }

        case 0xB5: { // 0xb5 OR A,L
            break;
        }

        case 0xB6: { // 0xb6 OR A,(HL)
            break;
        }

        case 0xB7: { // 0xb7 OR A,A
            break;
        }

        case 0xB8: { // 0xb8 CP B
            break;
        }

        case 0xB9: { // 0xb9 CP C
            break;
        }

        case 0xBA: { // 0xba CP D
            break;
        }

        case 0xBB: { // 0xbb CP E
            break;
        }

        case 0xBC: { // 0xbc CP H
            break;
        }

        case 0xBD: { // 0xbd CP L
            break;
        }

        case 0xBE: { // 0xbe CP (HL)
            break;
        }

        case 0xBF: { // 0xbf CP A
            break;
        }

        case 0xC0: { // 0xc0 RET NZ
            break;
        }

        case 0xC1: { // 0xc1 POP BC
            break;
        }

        case 0xC2: { // 0xc2 JP NZ,nnnn
            break;
        }

        case 0xC3: { // 0xc3 JP nnnn
            break;
        }

        case 0xC4: { // 0xc4 CALL NZ,nnnn
            break;
        }

        case 0xC5: { // 0xc5 PUSH BC
            break;
        }

        case 0xC6: { // 0xc6 ADD A,nn
            break;
        }

        case 0xC7: { // 0xc7 RST 00
            z80.tStateCount += 1;
            z80.pushWord(z80.regs.pc);
            z80.regs.pc = 0x0000;
            z80.regs.memptr = z80.regs.pc;
            break;
        }

        case 0xC8: { // 0xc8 RET Z
            break;
        }

        case 0xC9: { // 0xc9 RET
            break;
        }

        case 0xCA: { // 0xca JP Z,nnnn
            break;
        }

        case 0xCB: { // 0xcb shift CB
            break;
        }

        case 0xCC: { // 0xcc CALL Z,nnnn
            break;
        }

        case 0xCD: { // 0xcd CALL nnnn
            break;
        }

        case 0xCE: { // 0xce ADC A,nn
            break;
        }

        case 0xCF: { // 0xcf RST 8
            z80.tStateCount += 1;
            z80.pushWord(z80.regs.pc);
            z80.regs.pc = 0x0008;
            z80.regs.memptr = z80.regs.pc;
            break;
        }

        case 0xD0: { // 0xd0 RET NC
            break;
        }

        case 0xD1: { // 0xd1 POP DE
            break;
        }

        case 0xD2: { // 0xd2 JP NC,nnnn
            break;
        }

        case 0xD3: { // 0xd3 OUT (nn),A
            break;
        }

        case 0xD4: { // 0xd4 CALL NC,nnnn
            break;
        }

        case 0xD5: { // 0xd5 PUSH DE
            break;
        }

        case 0xD6: { // 0xd6 SUB nn
            break;
        }

        case 0xD7: { // 0xd7 RST 10
            z80.tStateCount += 1;
            z80.pushWord(z80.regs.pc);
            z80.regs.pc = 0x0010;
            z80.regs.memptr = z80.regs.pc;
            break;
        }

        case 0xD8: { // 0xd8 RET C
            break;
        }

        case 0xD9: { // 0xd9 EXX
            break;
        }

        case 0xDA: { // 0xda JP C,nnnn
            break;
        }

        case 0xDB: { // 0xdb IN A,(nn)
            break;
        }

        case 0xDC: { // 0xdc CALL C,nnnn
            break;
        }

        case 0xDD: { // 0xdd shift DD
            break;
        }

        case 0xDE: { // 0xde SBC A,nn
            break;
        }

        case 0xDF: { // 0xdf RST 18
            z80.tStateCount += 1;
            z80.pushWord(z80.regs.pc);
            z80.regs.pc = 0x0018;
            z80.regs.memptr = z80.regs.pc;
            break;
        }

        case 0xE0: { // 0xe0 RET PO
            break;
        }

        case 0xE1: { // 0xe1 POP HL
            break;
        }

        case 0xE2: { // 0xe2 JP PO,nnnn
            break;
        }

        case 0xE3: { // 0xe3 EX (SP),HL
            break;
        }

        case 0xE4: { // 0xe4 CALL PO,nnnn
            break;
        }

        case 0xE5: { // 0xe5 PUSH HL
            break;
        }

        case 0xE6: { // 0xe6 AND nn
            break;
        }

        case 0xE7: { // 0xe7 RST 20
            z80.tStateCount += 1;
            z80.pushWord(z80.regs.pc);
            z80.regs.pc = 0x0020;
            z80.regs.memptr = z80.regs.pc;
            break;
        }

        case 0xE8: { // 0xe8 RET PE
            break;
        }

        case 0xE9: { // 0xe9 JP HL
            break;
        }

        case 0xEA: { // 0xea JP PE,nnnn
            break;
        }

        case 0xEB: { // 0xeb EX DE,HL
            break;
        }

        case 0xEC: { // 0xec CALL PE,nnnn
            break;
        }

        case 0xED: { // 0xed shift ED
            break;
        }

        case 0xEE: { // 0xee XOR A,nn
            break;
        }

        case 0xEF: { // 0xef RST 28
            z80.tStateCount += 1;
            z80.pushWord(z80.regs.pc);
            z80.regs.pc = 0x0028;
            z80.regs.memptr = z80.regs.pc;
            break;
        }

        case 0xF0: { // 0xf0 RET P
            break;
        }

        case 0xF1: { // 0xf1 POP AF
            break;
        }

        case 0xF2: { // 0xf2 JP P,nnnn
            break;
        }

        case 0xF3: { // 0xf3 DI
            break;
        }

        case 0xF4: { // 0xf4 CALL P,nnnn
            break;
        }

        case 0xF5: { // 0xf5 PUSH AF
            break;
        }

        case 0xF6: { // 0xf6 OR nn
            break;
        }

        case 0xF7: { // 0xf7 RST 30
            z80.tStateCount += 1;
            z80.pushWord(z80.regs.pc);
            z80.regs.pc = 0x0030;
            z80.regs.memptr = z80.regs.pc;
            break;
        }

        case 0xF8: { // 0xf8 RET M
            break;
        }

        case 0xF9: { // 0xf9 LD SP,HL
            break;
        }

        case 0xFA: { // 0xfa JP M,nnnn
            break;
        }

        case 0xFB: { // 0xfb EI
            break;
        }

        case 0xFC: { // 0xfc CALL M,nnnn
            break;
        }

        case 0xFD: { // 0xfd shift FD
            break;
        }

        case 0xFE: { // 0xfe CP nn
            break;
        }

        case 0xFF: { // 0xff RST 38
            z80.tStateCount += 1;
            z80.pushWord(z80.regs.pc);
            z80.regs.pc = 0x0038;
            z80.regs.memptr = z80.regs.pc;
            break;
        }


        default:
            console.log("Unhandled opcode " + toHex(inst, 2));
            break;

    }
}